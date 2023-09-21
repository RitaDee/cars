"use client";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import { fuels, yearsOfProduction } from '@/components/constants';
import { fetchCars } from '@/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search States
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter States
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2020);

  // Pagination State
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
      manufacturer: manufacturer || "",
      year: year || 2020,
      model: model || "",
      fuel: fuel || "",
      limit: limit || 10,
    });
     setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [manufacturer, model, limit,fuel, year])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Auto Inventory</h1>
          <p>Discover the cars that could interest you</p>
        </div>
        <div className="home__filters">
          <SearchBar 
          setManufacturer={setManufacturer}
          setModel={setModel}
           />

          <div className="home__filter-container">
            <CustomFilter 
            title="fuel" 
            options={fuels}
            setFilter={setFuel}
             />
            <CustomFilter 
            title="year" 
            options={yearsOfProduction}
            setFilter={setYear}
             />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => 
              <CarCard car={car} />)}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                src="/loader.svg"
                alt="loader"
                width={50}
                height={50}
                className="object-contain"
                 />
              </div>
            )}

            <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
             />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
