

// VARIABILE OUTPUT

const container = document.getElementById('container');

// VARIABILI PER L'OVERLAY

const overlay = document.getElementById("overlay");

const close = document.getElementById("close");

const openimg = document.getElementById("openimg");

// CHIAMATA AJAX AD API

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        console.log(response)

        // PRENDO I DATI CHE MI INTERASSANO
        const arrayList = response.data;
        console.log(arrayList)

        
        // ESTRAPOLO I DATI CON UN CICLO

        for(i =0; i < arrayList.length; i++){

            // INSERISCO IN PAGINA 
            
            container.innerHTML +=  `
            <div class="memories">
                <div class="imgcont">
                   <img src="./img/pin.svg" alt="" class="pin">
                   <img src="${arrayList[i].url}" alt="" class="photo">
                </div>
                <p class="age">${arrayList[i].date}</p>
                <p class="mintitle">${arrayList[i].title}</p>
            </div>

         `;
        };


    // JS OVERLAY

    // SELEZIONE LE MEMORIES

    const memorie = document.getElementsByClassName("memories");

    // INDICE PER IL CICLO

    let currentIndex = 0;

    // CICLO FOTO

    for ( let i= 0; i < memorie.length; i++){

        //VARIABILE PER TENERE TRACCIA DELLA MEMORIES 

        let currentmemorie = memorie[i];
        console.log(currentmemorie);

        // EVENTO CLICK

        currentmemorie.addEventListener('click' , ()  => {

            // AL CLICK TOLGO LA CLASSE 

            overlay.classList.remove("none")

            // TROVO L'INDICE DELLA FOTO SU CUI HO PIGGIATO

            currentIndex = i;
            console.log(currentIndex);

           // CAMBIO URL DELL'IIMAGINE

            openimg.src = `${arrayList[currentIndex].url}`
            console.log(openimg);
        })
    }




});




        // EVENTO CLICK PER CHIUDERE

        close.addEventListener('click', ()=>{
        // AGGIUNGO LA CLASSE

        overlay.classList.add("none")

        // CAMBIOL'URL DELL'IMMAGINE

        openimg.src = "";
        })