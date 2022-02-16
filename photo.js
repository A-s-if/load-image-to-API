fetch('https://jsonplaceholder.typicode.com/photos')
.then(response=>response.json())
.then(data=>showAlbum(data))
const showAlbum =(album)=>{
    const container=document.getElementById('photo');
    album.map(item=>{
        const headline=document.createElement('h3');
         headline.innerText=item.title;
         container.appendChild(headline)
         const image=document.createElement('img');
         image.setAttribute('src',item.url)
         //image.src=item.url;
         container.appendChild(image)

    })
}

