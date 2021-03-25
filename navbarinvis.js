function navbar_tel (event) {
	var element = document.getElementById('accueil');
	element.classList.toggle("invisible");
}


function affichage_navbar (event) {
	var element = document.getElementById('lienprod');
	element.classList.toggle("invisible");
}

function navbar_invis (event) {
    var element = document.getElementById('dissapear');
    element.classList.removeClass(".invisible");
}
