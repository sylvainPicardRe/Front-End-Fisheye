
 // Création d'une instance de URLSearchParams à partir de l'URL actuelle du document
 let params = new URL(document.location).searchParams;

 // Extraction du paramètre 'id' de l'URL et conversion en entier
 let photographerId = parseInt(params.get("id"));

async function getPhotographer() {   

    // Envoi d'une requête pour récupérer le fichier JSON contenant les données des photographes
    const reponse = await fetch(`./data/photographers.json`);

    // Conversion de la réponse en objet JSON
    const result = await reponse.json();

    // Recherche des données du photographe correspondant à l'ID extrait précédemment
    const photographerDatas = result.photographers.find(p => p.id === photographerId);
    return ({
        photographerDatas
    });
}

async function displayData(photographerDatas){
    const photographerHeader = document.querySelector(".photograph-header");
    const photographerModel = photographerTemplate(photographerDatas);

    const userProfileDOM = photographerModel.getUserProfileDOM();
    const userImageDOM = photographerModel.getUserImageDOM();

    photographerHeader.appendChild(userProfileDOM);
    photographerHeader.appendChild(userImageDOM);

}

async function init() {
    const { photographerDatas } = await getPhotographer();
    displayData(photographerDatas);
}

init();

