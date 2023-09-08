"use client";
import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model} 
        </h2>
      </div>
      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-sm font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray" >
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" alt="steering wheel" fill />
            <p className="text-sm">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard