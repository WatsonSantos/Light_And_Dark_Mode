
const changeThemeBtn = document.querySelector("#change-theme")


//Toggle dark mode
function toggleDarkMode(){
     //Se o tema estiver light ele põe dark e vice versa
    document.body.classList.toggle("dark");

}

// Load light or dark mode

function LoadTheme(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){

        toggleDarkMode()
    }
}

LoadTheme()

//Pegando o evento vchange do checkbox
changeThemeBtn.addEventListener("change", function(){

    toggleDarkMode()

//Save or remove dark mode

localStorage.removeItem("dark");

if(document.body.classList.contains("dark")){

    localStorage.setItem("dark", 1);
}
});
