import React, { Suspense } from "react";

import EmptyState from "@/components/EmptyState";
import Heading from "@/components/Heading";
import ListingCard from "@/components/ListingCard";
import LoadMore from "@/components/LoadMore";

import { getCurrentUser } from "@/services/user";
import { getReservations } from "@/services/reservation";
import { getFavorites } from "@/services/favorite";

const TripsPage = async () => {
  const user = await getCurrentUser();
  const favorites = await getFavorites();

  if (!user) {
    return <EmptyState title="KHÔNG CÓ QUYỀN TRUY CẬP" subtitle="Hãy đăng nhập" />;
  }

  const { listings, nextCursor } = await getReservations({ userId: user.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="Trống"
        subtitle="hiện tại đang cập nhật"
      />
    );
  }

  return (
    <section className="main-container">
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going."
        backBtn
      />
      <div className=" mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {listings.map((listing) => {
          const { reservation, ...data } = listing;
          const hasFavorited = favorites.includes(listing.id);
          return (
            <ListingCard
              key={listing.id}
              data={data}
              reservation={reservation}
              hasFavorited={hasFavorited}
            />
          );
        })}
        {nextCursor ? (
          <Suspense fallback={<></>}>
            <LoadMore
              nextCursor={nextCursor}
              fnArgs={{ userId: user.id }}
              queryFn={getReservations}
              queryKey={["trips", user.id]}
              favorites={favorites}
            />
          </Suspense>
        ) : null}
      </div>
    </section>
  );
};

export default TripsPage;
