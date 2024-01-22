document.getElementById('post').addEventListener('click', async() => {
      const nameInput = document.getElementById('nameInput').value;
      const commentInput = document.getElementById('commentInput').value;
      const result2 = document.querySelector('.result2');
    try{ 
      const axiosPost = await  axios.post(`/comment/${nameInput}`,{
        comment: commentInput
      });
      console.log(axiosPost.data);
      result2.innerHTML = `User comment: ${axiosPost.data}`
    }
    catch(error){
        console.log("error--->", error);
        result2.innerHTML = `Error getting here`
    }
})