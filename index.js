const buttons = document.querySelectorAll("button");

for (let i=0; i< buttons.length; i++){

    buttons[i].addEventListener('click', () => {

        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        
        let result= "";

        if (joueur === robot){
            result= "Egalité";

        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuille") || (joueur === "Feuille" && robot === "Pierre"))
        {
            result = "Gagné";

        } else {
            result = "Perdu";
        }
    document.querySelector("#result").innerHTML = ` 
        Joueur : ${joueur} </br>
        Robot: ${robot} </br>
        Résultat: ${result}
        `;
    });
}