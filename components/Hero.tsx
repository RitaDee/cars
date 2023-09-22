"use client";
import Image from "next/image";
import CustomButon from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-gray-800">
          Discover Your Perfect Ride – Find, Book, and Cruise in Style!
        </h1>

        <p className="hero__subtitle">
          Revolutionize Your Car Rental: Seamless Booking Made Simple
        </p>

        <CustomButon
          title="Explore Cars"
          containerStyles="bg-green-800
            text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
