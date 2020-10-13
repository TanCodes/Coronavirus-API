///// fetching the api globally /////

fetch("https://api.thevirustracker.com/free-api?global=stats")
.then((apidata) => {
return apidata.json();
})

.then((data) => {
const realdata = data.results[0];
document.getElementById('total_new_cases_today').innerHTML = realdata.total_new_cases_today; 
document.getElementById('total_case').innerHTML = realdata.total_cases; 
document.getElementById('total_deaths').innerHTML = realdata.total_deaths; 
document.getElementById('total_recovered').innerHTML = realdata.total_recovered;
console.log("total recovered",realdata.total_recovered) 
})

///// fetching the api of India /////

fetch("https://api.covid19api.com/summary")
.then((apidata1) =>{
    return apidata1.json()
})
.then((data1)=>{
const india_data = data1.Countries[76];
document.getElementById('NewConfirmed').innerHTML = india_data.NewConfirmed; 
document.getElementById('TotalConfirmed').innerHTML = india_data.TotalConfirmed; 
document.getElementById('TotalDeaths').innerHTML = india_data.TotalDeaths; 
document.getElementById('TotalRecovered').innerHTML = india_data.TotalRecovered;
console.log("total recovered",india_data.TotalRecovered) 
})

///// if any error will occur it will catch it /////
.catch((error) =>{
    console.log(`ERROR : ${error}`);
})

///// setting time out to auto refresh the page so data will update automatically /////
setTimeout(function(){
   window.location.reload(1);
}, 10000);

