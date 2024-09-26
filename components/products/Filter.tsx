"use client";
import React, { useState } from "react";
import { Product } from "@prisma/client"; // Assuming you have Prisma setup
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

interface ProductsGridProps {
  products: Product[] | undefined;
}

const Filter: React.FC<ProductsGridProps> = ({ products }) => {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const filteredProducts = (products || []).filter((product) => {
    if (activeTab === "ALL") return true;
    return product.company === activeTab;
  });

  const tabs = ["ALL", "MALE", "FEMALE"];

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-md ${
              activeTab === tab
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            } transition-all`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          const { name, price, image, id } = product;
          const dollarsAmount = formatCurrency(price);

          return (
            <article key={id} className="group relative">
              <Link href={`/products/${id}`}>
                <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                  <CardContent className="p-4">
                    <div className="relative h-64 md:h-48 rounded overflow-hidden">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        priority
                        className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h2 className="text-lg capitalize">{name}</h2>
                      <p className="text-muted-foreground mt-2">
                        {dollarsAmount}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <div className="absolute top-7 right-7 z-5">
                <FavoriteToggleButton productId={id} />
              </div>
            </article>
          );
        })}
      </div> */}
    </div>
  );
};

export default Filter;
