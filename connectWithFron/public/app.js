const result = document.getElementById('result');
const weatherGetting = async ()=>{
    const cityNameInput = document.getElementById('cityNameInput').value;
     try{
        const axiosPost = await  axios.post(`/weather/${cityNameInput}`,{
          });
          console.log(axiosPost.data);
          result.innerHTML = `Weather is : ${axiosPost.data.temp}`
     }
     catch(error){
        console.log(error.message);
        result.innerHTML = `Error getting here`
     }
}


const weatherBtn = document.getElementById('weatherBtn');
weatherBtn.addEventListener('click', weatherGetting)