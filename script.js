let menuVisible = false;

//function muestra/oculta menu
function showBackMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
    //responsive sólo se lo he añadido en el css al nav
}

function select(){
    // ocultar menu una vez que se ha seleccionado la opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

// función que aplica la funcionalidad de los skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("jquery");

        habilidades[6].classList.add("communication");
        habilidades[7].classList.add("teamwork");
        habilidades[8].classList.add("creative");
        habilidades[9].classList.add("dedication");


    }
}



//detector del scrolling para aplicar animación a la barra de los skills
window.onscroll = function(){
    efectoHabilidades();
}