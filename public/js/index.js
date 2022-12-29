const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const toEmail=document.getElementById('toEmail');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "9fe06437-9e83-42d2-b388-3a9494507834", //add your token here
        To : "sniperpig0@gmail.com", 
        From : "sniperpig0@gmail.com",
        Subject : "Thanks for signing up to this culture",
        Body : "HEY this test email sender works :) and thx for siging up for the newslater, jk unless..."
    }).then(
      message => alert("YO")
    );
}); 