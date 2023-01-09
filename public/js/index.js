const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const toEmail=document.getElementById('toEmail');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    
   

    Email.send({
        SecureToken : "9fe06437-9e83-42d2-b388-3a9494507834", //add your token here
        To :   `${toEmail.value}`, 
        From : "sniperpig0@gmail.com",
        Subject : "Thanks for signing up to this culture",
        Body : "HEY this test email sender works :) and thx for siging up for the newslater, jk unless..."
    }).then(
      message => alert("Sent!")
    );
}); 

router.post('/search', async (req, res) => {
  const nft = req.body.nft;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
  };
  
  fetch('https://movie-database-alternative.p.rapidapi.com/?s=Spiderman&r=json&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

})