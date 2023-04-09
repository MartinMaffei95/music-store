"use client";
import SliderCard from "@/components/SliderCard/SliderCard";
import React from "react";
import { ContentSlider } from "react-infinite-slider";
import OurBrands from "./components/OurBrands/OurBrands";

const About = () => {
  return (
    <div>
      <div className="w-screen flex">
        <div className="my-4">
          <ContentSlider>
            <SliderCard
              alt="img"
              src="/images/store-1.jpg"
            />
            <SliderCard
              alt="img"
              src="/images/store-2.jpg"
            />
            <SliderCard
              alt="img"
              src="/images/store-3.jpg"
            />
            <SliderCard
              alt="img"
              src="/images/store-4.jpg"
            />
          </ContentSlider>
        </div>
      </div>
      <div className="w-screen flex">
        <div className="my-4">
          <ContentSlider>
            <OurBrands />
          </ContentSlider>
        </div>
      </div>
    </div>
  );
};

export default About;
