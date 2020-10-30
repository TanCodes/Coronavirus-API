///// fetching the api globally /////

fetch("https://api.covid19api.com/summary")
.then((apidata) => {
return apidata.json();
})

.then((data) => {
const realdata = data.Global;
document.getElementById('total_new_cases_today').innerHTML = realdata.NewConfirmed; 
document.getElementById('total_case').innerHTML = realdata.TotalConfirmed; 
document.getElementById('total_deaths').innerHTML = realdata.TotalDeaths; 
document.getElementById('total_recovered').innerHTML = realdata.TotalRecovered;
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
