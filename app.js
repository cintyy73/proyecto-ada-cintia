const tarjetas = document.getElementById('tarjetas');

const url = "https://www.breakingbadapi.com/api/characters"

fetch(url)
.then((resp) => resp.json())
.then((data) => printData(data))
.catch((error) => console.log(error))

const printData = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const occupation = arr[i].occupation
        const img = !!arr[i].img ?arr[i].img : "./notfound.jpg"
        const nickname = arr[i].nickname
        const status = arr[i].status
        const temporada = arr[i].appearance
       
        str = str +
        `
            <div class="row">          
                <div class="card">
                    <div class="card-image">
                        <img class="img-card" src="${img} alt="${name}" width="300px heigth="300px">
                        <span class="card-title">${nickname}</span>
                    </div>
                    <div class="card-content">
                        <p>Name: ${name} </p>
                        <p>Ocupation: ${occupation}</p>
                        <p>Status: ${status} </p>
                        <p>Seasson: ${temporada}</p>
                    </div>
                </div>  
            </div>
        `
    }
    tarjetas.innerHTML = str;
}
