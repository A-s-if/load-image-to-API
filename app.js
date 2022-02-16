fetch('https://jsonplaceholder.typicode.com/users')
.then (response=>response.json())
 .then(data=> information (data))



 const information=(userData)=>{
     const container=document.getElementById('userContainer');
     userData.forEach(user => {
         const userName=document.createElement('h4')
         userName.innerText=user.name
            container.appendChild(userName)

            const email=document.createElement('p');
            email.innerText=user.email
            container.appendChild(email)
     });
 }



 