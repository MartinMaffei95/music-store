import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};
const SliderCard = ({ src, alt, height = 600, width = 600 }: Props) => {
  return (
    <div className="flex ">
      <Image
        className="object-fill bg-neutral-100"
        alt={alt}
        src={src}
        width={width}
        height={height}
      />
    </div>
  );
};

export default SliderCard;
