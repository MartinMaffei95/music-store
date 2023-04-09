import React from "react";
import { Brands } from "./Brands.enum";
import SliderCard from "@/components/SliderCard/SliderCard";

const OurBrands = () => {
  return (
    <>
      {Brands.map((brand) => (
        <SliderCard
          alt={brand?.name}
          src={brand?.src}
        />
      ))}
    </>
  );
};

export default OurBrands;
