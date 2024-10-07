"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/utils/Products";
import { productsTranslated } from "@/utils/ProductsTranslated";
import { usePathname } from "next/navigation";
import initTranslations from "@/app/i18n";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

interface Translations {
  t: (key: string) => string; // Adjust this as needed based on your translation structure
}

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const pathname = usePathname();
  const activeProducts = pathname.includes("ar-AE")
    ? productsTranslated
    : products;
  const filteredProducts = activeProducts.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const categories = [
    "All",
    ...Array.from(new Set(activeProducts.map((product) => product.category))),
  ];

  const [direction, setDirection] = useState<string>("text-left");
  const [t, setTranslations] = useState<Translations | null>(null);

  const locale = useParams<{ locale: string }>();
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translations = await initTranslations(locale.locale, ["Service"]);
        setTranslations(translations);

        if (locale.locale === "en") {
          setDirection("text-left");
        } else if (locale.locale == "ar-AE") {
          setDirection("text-right");
        }
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    if (locale) {
      fetchTranslations();
    }
  }, [locale]);

  if (!t) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {t.t && (
        <div className="container mx-auto md:px-12 px-4 py-8 mt-24 mb-24">
          <h1 className="md:text-4xl text-2xl text-center font-bold mb-8">
            {t.t("header")}
          </h1>

          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs w-full border-black border-[0.05rem] rounded-full"
            />
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="max-w-xs w-full border-black">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-y-20 ">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h2 className={`text-lg ${direction} font-semibold`}>{product.name}</h2>
                  <p className={`text-sm text-gray-600 ${direction}`}>{product.category}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-end items-center">
                 
                  <a
                    href="/contact"
                    className={`text-white text-sm bg-gray-900 py-2 px-4 rounded-3xl cursor-pointer `}
                  >
                    {t.t("book")}
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found.</p>
          )}
        </div>
      )}
    </Fragment>
  );
}
