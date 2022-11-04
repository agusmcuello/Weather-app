export const apiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8aa13f9df7msha990f322b5e288ep1da97ajsn79ddb424f9bf',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const apiUrl= "https://wft-geo-db.p.rapidapi.com/v1/geo"
export const apiWheatherUrl= "https://api.openweathermap.org/data/2.5"
export const apiKey="8d2165fcf17af8c6ae74e7f7fe55b0fe"

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', apiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));