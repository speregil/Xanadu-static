const AVATAR_TEXT = document.getElementById('avatar-text');
const AVATAR_IMG = document.getElementById('avatar-img');
const BASE_PATH = "../assets/avatar/";

const AVATAR_IMAGES = [
    "chico-ninguno.png",
    "chico-vidente.png",
    "chico-juglar.png",
    "chico-arqueologo.png",
    "chico-reportero.png",
    "chico-critico.png"
];

const AVATAR_TEXTS = [
    "No tienes un rol aún, selecciona al Vidente o al Juglar.",
    "Ahora eres un VIDENTE. Tienes la capacidad para ver, adivinar o prever el futuro. Puedes crear historias sobre el futuro de personas y de ciudades y te encanta compartirlas.",
    "Ahora eres un JUGLAR. Tienes una gran capacidad para imaginar mundos posibles, contar historias, escribir secuelas y precuelas, desarrollar personajes para el relato. Escribes muy bien y te gusta compartir tus narraciones con otros.",
    "Ahora eres un ARQUEÓLOGO. Tienes capacidad para analizar, interpretar y solucionar problemas. Tu pensamiento es divergente e innovador. Puedes recuperar contenido digitales de formatos hoy en desuso.",
    "Ahora eres un REPORTERO.\nTienes una gran capacidad para observar los acontecimientos diarios y para percibir novedades que puedan convertirse en noticia. Te gusta ir en búsqueda de verdades incómodas para personas con poder.\nTienes muchas facilidades para escribir crónicas y reportajes.",
    "Ahora eres CRITICO LITERARIO.\nEres muy buen lector de textos y otros tipos de contenido. Tienes la capacidad para reconocer patrones estilísticos de las obras que lees. Posees conocimiento de la tradición literaria y  capacidad para entender mensajes simbólicos, metáforas y segundas realidades a partir de la superficie textual."
];

min = Math.ceil(0);
max = Math.floor(5);
current_index = Math.floor(Math.random() * (max - min + 1)) + min;

update_avatar(current_index);

function update_avatar(index){
    current_text = AVATAR_TEXTS[index];
    current_img = BASE_PATH +AVATAR_IMAGES[index];
    AVATAR_TEXT.textContent = current_text;
    AVATAR_IMG.src = current_img;
}