export async function fetchCars() {
  const headers = {
		'X-RapidAPI-Key': '0529cc2e2dmshbc096509c9e9b4cp19b15fjsncc841b818bb3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
});

  const result = await response.json();

  return result;
}

