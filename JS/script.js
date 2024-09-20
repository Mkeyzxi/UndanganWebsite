const duaSambutan = document.getElementById('duaSambutan'); // Elemen yang ingin dimanipulasi
const sambutan = document.getElementById('sambutan'); // Elemen lain (jika diperlukan)
const navigasi = document.getElementsByTagName('li');
let isClicked = false; // Menandai apakah elemen diklik
let audio = document.getElementById('myAudio');
const pauseToggle = document.querySelectorAll("ion-icon")[0];

document.addEventListener('DOMContentLoaded', ()=>{

	undangan();
	clickSambutan();
	
	
})


window.addEventListener('scroll', ()=>{
	ketikaScrol();
})

const clickSambutan = document.getElementById('sambutanClick').addEventListener('click', (event) => {
	event.preventDefault();
	sambutan.classList.add('hidden');
	duaSambutan.classList.add('block');
	duaSambutan.classList.remove('hidden')
	AOS.refresh();
    toggleAudio();
    

});

const ketikaScrol = function () {
    let { pageYOffset } = window;

    if (pageYOffset >= 0 && pageYOffset <= 500) {
        updateNavigation(0);
    } else if (pageYOffset >= 500 && pageYOffset <= 1000) {
        updateNavigation(1);
    } else if (pageYOffset >= 1000 && pageYOffset <= 1700) {
        updateNavigation(2);
    } else {
        updateNavigation(3);
    }
};

const updateNavigation = (activeIndex) => {
    for (let i = 0; i < navigasi.length; i++) {
        if (i === activeIndex) {
            navigasi[i].classList.add("text-[var(--white)]");
            navigasi[i].children[0].classList.add("bg-[var(--orange)]");
        } else {
            navigasi[i].classList.remove("text-[var(--white)]");
            navigasi[i].children[0].classList.remove("bg-[var(--orange)]");
        }
    }
};

const undangan = function (){
	const urlParams = new URLSearchParams(window.location.search);
	const namaUndangan = urlParams.get('namaUndangan');
	let tamuUndangan = document.getElementById('tamuUndangan');

	tamuUndangan.innerHTML = namaUndangan;
}


function toggleAudio() {
    if (audio.paused) {
        audio.play();
        pauseToggle.removeAttribute('name','play-circle-outline' );
        pauseToggle.setAttribute('name', 'pause-circle-outline');

        
    } else {
        audio.pause();
        pauseToggle.removeAttribute('name', 'pause-circle-outline');
        pauseToggle.setAttribute('name', 'play-circle-outline');
    }
}