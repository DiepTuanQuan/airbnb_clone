import React from "react";

import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/ListingCard";
import Heading from "@/components/Heading";

import { getCurrentUser } from "@/services/user";
import { getFavoriteListings } from "@/services/favorite";

const FavoritesPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <EmptyState title="KHÔNG CÓ QUYỀN TRUY CẬP" subtitle="Hãy đăng nhập" />;
  }

  const favorites = await getFavoriteListings();

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="Không tìm thấy"
        subtitle="thử thêm 1 cái vào mục yêu thích"
      />
    );
  }

  return (
    <section className="main-container">
      <Heading title="Favorites" subtitle="List mục yêu thích" />
      <div className=" mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {favorites.map((listing) => {
          return <ListingCard key={listing.id} data={listing} hasFavorited/>;
        })}
      </div>
    </section>
  );
};

export default FavoritesPage;
