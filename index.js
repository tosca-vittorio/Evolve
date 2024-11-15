function Loaded()
{
    // Funzione che gestisce lo scroll
function SheepScroll() 
{
    // Selezione LOGO per modifica
    const boxLogo = document.querySelector('.header-icon');
    const logo = document.querySelector('.header-icon img');
    // Posizione corrente dello scroll
    let currentScrollPosition = window.scrollY;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Determina la direzione dello scroll confrontando la posizione corrente con quella precedente
    if (currentScrollPosition > previousScrollPosition) 
    {
        console.log('Lutente ha scrollato verso -');
        header.style.display = 'none';

    } 
    else if (currentScrollPosition < previousScrollPosition) 
    {
        console.log('Lutente ha scrollato verso +');
        header.style.display = '';
        header.style.position = 'fixed';
        header.style.zIndex = '9999';
        header.style.width = '100%';
        header.style.height = 'auto';

        boxLogo.style.width = '5%';
        boxLogo.style.height = 'auto';

        logo.style.width = '100%';
        logo.style.height = '100%';
        //console.log('La Header appare...');
    }
    
    if(scrollTop === 0)
    {
        console.log('Lutente ha scrollato verso 0');
        header.style.position = '';
        header.style.zIndex = '';
        header.style.width = '';
        header.style.height = '';
        logo.style.width = '';
        logo.style.height = '';
        logo.style.position = '';

        boxLogo.style.width = '';
    }
    // Aggiorna la posizione precedente con quella corrente per il prossimo confronto
    previousScrollPosition = currentScrollPosition;
}

    // Aggiungi l'event listener che chiama SheepScroll quando avviene lo scroll
    window.addEventListener('scroll', SheepScroll);

    // Riferimento all'elemento header con classe .main-header
    const header = document.querySelector(".main-header");
    console.log(header);

    // Seleziono l'elemento video mediante il suo ID
const videoElement = document.getElementById('hero-video-background');
const url_videos = [
    './HERO/hero1.mp4', 
    './HERO/hero2.mp4', 
    './HERO/hero3.mp4'  // Percorsi relativi ai video nella cartella HERO
];

// Indice per tracciare il video corrente
let currentVideoIndex = 0;

// Funzione per caricare e riprodurre il prossimo video
function loadNextVideo() {
    console.log(`Tentativo di caricare il video all'indice: ${currentVideoIndex}`);
    if (currentVideoIndex < url_videos.length) {
        videoElement.src = url_videos[currentVideoIndex];  // Imposto il nuovo src
        videoElement.load();  // Carico esplicitamente il video
        videoElement.play()
            .then(() => {
                console.log(`Riproduzione del video ${url_videos[currentVideoIndex]} avviata con successo`);
            })
            .catch((error) => {
                console.error(`Errore nella riproduzione del video ${url_videos[currentVideoIndex]}:`, error);
            });
    } else {
        console.log("Fine dell'array dei video, si ricomincia dall'inizio.");
        currentVideoIndex = 0;
        loadNextVideo();
    }
}

// Evento per passare al prossimo video quando il corrente termina
videoElement.addEventListener('ended', () => {
    console.log(`Video ${url_videos[currentVideoIndex]} terminato. Carico il prossimo video.`);
    currentVideoIndex++;  // Passo al prossimo video
    loadNextVideo();
});

// Aggiungo un ascoltatore per errori per visualizzare eventuali problemi con i file video
videoElement.addEventListener('error', (e) => {
    console.error(`Errore nel caricamento del video ${url_videos[currentVideoIndex]}:`, e);
});

// Avvio la sequenza di video
console.log("Inizio della sequenza dei video");
loadNextVideo();
}


function Loader(event)
{
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout( ()=> loader.style.display = 'none', 500);
}


/* IMPLEMENTIAMO IL COMPORTAMENTO DURANTE LA FASE DI CARICAMENTO DEGLI ELEMENTI DEL DOM */
document.addEventListener("DOMContentLoaded", Loaded);

/* IMPLEMENTIAMO IL COMPORTAMENTO DELLA FASE DI CARICAMENTO */
window.addEventListener('load', Loader);


let previousScrollPosition = window.scrollY;





