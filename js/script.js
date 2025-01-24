// prova
console.log("funziona");

// variabile output
const container = document.getElementById('container');

// facciamo la chiamata ajax ad api
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        console.log(response);

        const arrayList = response.data;
        console.log(arrayList);

        
        // estrapoliamo gli oggetti  dell'array con un ciclo
        for(i =0; i < arrayList.length; i++){
            console.log(arrayList[i]);
        }

});