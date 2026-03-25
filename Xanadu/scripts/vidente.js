const RETOS = ["Desarrolla una o varias infografías que muestre(n) cómo serían los aspectos más importantes de la cultura del año 2055: vestidos, transporte, gustos musicales, comida, entretenimiento, tecnología, vivienda, educación.",
                "Prepara un podcast con noticias que podrían suceder en un día cualquiera del año 2055.",
                "Haz un breve ensayo hipertextual mostrando cómo sería la evolución de internet y medios de comunicación en los siguientes 35 años (2020 a 2055)",
                "Desarrolla un video o cómic que muestre la historia de un chico que lucha para que todos en su escuela y en su barrio puedan tener acceso a las nuevas tecnologías, en un ambiente (año 2055) que parece atentar contra el internet abierto y democrático.",
                "Prepara un podcast o un sitio web con un cuento narrado por varias voces (audios) sobre lo que puede llegar a ser la educación el año 2055.",
                "Desarrolla en vídeo un documental simulado con testimonios (entrevistas) a cinco  ancianos que opinan sobre cómo los ha afectado el cambio del mundo en estos últimos 35 años.",
                "Haz un mapa del mundo con lo que imaginas que puede ser la distribución geopolítica de países en el año 2055."
            ]
const RETO_TEXT = document.getElementById('reto');

function get_reto() {
    let index = Math.floor(Math.random() * RETOS.length);
    RETO_TEXT.textContent = RETOS[index];
}