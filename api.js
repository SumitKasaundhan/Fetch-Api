const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn")

const getFacts =async  ()=>{
   console.log("getting the data..")
   let response = await fetch(URL);   // THIS is also promise so apply await 
   console.log(response)
   let data = await response.json();// it is return second promise  and apply 
   factpara.innerText = data[4].text;
    
   
} 
btn.addEventListener("click",getFacts)

