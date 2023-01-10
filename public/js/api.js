document.querySelector('#search').addEventListener('click',getNFT)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

function getNFT(e){
	const name=document.querySelector('#name').value;

fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${name}&r=json&page=1`, options)
	.then(response => response.json())
	.then(response =>
		
		 document.querySelector("#results").innerHTML=`
		<img src="${response.Search[0].Poster}"/>`
		
		
	
	)
	.catch(err => console.error(err));
}

console.log("HELLO")