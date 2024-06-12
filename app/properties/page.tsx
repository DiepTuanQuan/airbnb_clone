import React, { Suspense } from "react";

import EmptyState from "@/components/EmptyState";
import Heading from "@/components/Heading";
import ListingCard from "@/components/ListingCard";
import LoadMore from "@/components/LoadMore";

import { getCurrentUser } from "@/services/user";
import { getProperties } from "@/services/properties";
import { getFavorites } from "@/services/favorite";

const PropertiesPage = async () => {
  const user = await getCurrentUser();
  const favorites = await getFavorites();

  if (!user) {
    return <EmptyState title="KHÔNG CÓ QUYỀN TRUY CẬP" subtitle="Hãy đăng nhập" />;
    
  }

  const { listings, nextCursor } = await getProperties({ userId: user.id });

  if (!listings || listings.length === 0) {
    return (
      <EmptyState
        title="Không tìm thấy"
        subtitle=""
      />
    );
  }

  return (
    <section className="main-container">
      <Heading title="Properties" subtitle="List of your properties" backBtn/>
      <div className=" mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {listings.map((listing) => {
          const hasFavorited = favorites.includes(listing.id);
          return (
            <ListingCard
              key={listing.id}
              data={listing}
              hasFavorited={hasFavorited}
            />
          );
        })}
        {nextCursor ? (
          <Suspense fallback={<></>}>
            <LoadMore
              nextCursor={nextCursor}
              fnArgs={{ userId: user.id }}
              queryFn={getProperties}
              queryKey={["properties", user.id]}
              favorites={favorites}
            />
          </Suspense>
        ) : null}
      </div>
    </section>
  );
};

export default PropertiesPage;
