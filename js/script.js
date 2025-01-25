// PROVA

console.log("funziona");

// VARIABILE OUTPUT

const container = document.getElementById('container');

// CHIAMATA AJAX AD API

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        console.log(response);

        const arrayList = response.data;
        console.log(arrayList);

        
        // ESTRAPOLO I DATI CON UN CICLO

        for(i =0; i < arrayList.length; i++){

            // INSERISCO IN PAGINA 
            
            container.innerHTML +=  `
            <div class="memories">
                <div class="imgcont">
                   <img src="./img/pin.svg" alt="" class="pin">
                   <img src="${arrayList[i].url}" alt="" class="foto">
                </div>
                <p class="age">${arrayList[i].date}</p>
                <p class="mintitle">${arrayList[i].title}</p>
            </div>

         `;
        };

});

