
/* 

Utilizzando i dati forniti, creare un array di oggetti per rappresentare 
i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/




// Creare l’array di oggetti con le informazioni fornite.
const ourTeam = [

    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        image : "/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        image : "/img/angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "/img/walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Scoial Media Manager",
        image : "/img/angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        image : "/img/scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        image : "/img/barbara-ramos-graphic-designer.jpg"
    }


]


//Stampare su console, per ogni membro del team, le informazioni di nome, 
//ruolo e la stringa della foto
for (let key in ourTeam){
    console.log(ourTeam[key])
}


//Stampare le stesse informazioni su DOM sottoforma di stringhe
const cardContainerEl = document.getElementById("card-container")




for(let key in ourTeam){

// Organizzare i singoli membri in card/schede    
    let card = document.createElement("div")
    card.classList.add("card")
    cardContainerEl.append(card)

// Trasformare la stringa foto in una immagine effettiva
    let cardImage = document.createElement("img")
    cardImage.src = ourTeam[key].image
    

    let cardName = document.createElement("div")
    cardName.classList.add("name")
    cardName.innerText = ourTeam[key].name
    

    let cardRole = document.createElement("div")
    cardRole.classList.add("role")
    cardRole.innerText = ourTeam[key].role

    card.append(cardImage, cardName, cardRole)
    
}







