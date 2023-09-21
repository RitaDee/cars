import { CarProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const headers = {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  const response  = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`, {
    headers: headers,
});

  const result = await response.json();
  

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 
  
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

 
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 