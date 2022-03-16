const url="http://localhost:5500/api"

const newUser={
    name: "Rodrigo",
    avatar: "https://avatars.githubusercontent.com/u/72353058?s=96&v=4",
    city: "Salto"
}

const userToUpdate={
    name: "Rodrigo Alves Ferrarezzi",
    avatar: "https://avatars.githubusercontent.com/u/72353058?s=96&v=4",
    city: "Itu"
}

function getUser(){
    axios.get(url)
    .then(response=>{
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error=>console.log(error))
}

//getUser()

function addNewUser(){
    axios.post(url, newUser)
    .then(response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=>console.log(error))
}

//addNewUser()

function updateUser(){
    axios.put(`${url}/1`, userToUpdate)
    .then(response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=>console.log(error))
}

//updateUser()

function deleteUser(){
    axios.delete(`${url}/10`)
    .then(response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=>console.log(error))
}

//deleteUser()

function getOneUser(){
    axios.get(`${url}/8`)
    .then(response=>{
        const data = response.data
        renderResults.textContent = JSON.stringify(data) 
    })
    .catch(error=>console.log(error))
}

getOneUser()