const PERFILES = ["Eugenio Holtzman es uno de los protagonistas de este relato. Es un hombre maduro, experto en la búsqueda y recuperación de antiguos materiales digitales. Trabaja para la fundación Xanadú desde su comienzo, más de treinta años atrás. Dirige un sofisticado laboratorio con todos los instrumentos necesarios para llevar a cabo su tarea.",
                    "Jessica Petry es otra de las protagonistas de este relato. Es una mujer de temperamento fuerte que trabaja desde hace varios años para la fundación Xanadú y ha sido la asistente del doctor Holtzman.",
                    "Lucas es otro de los protagonistas del relato. Es un chico de unos veinte años que ha sido llamado por El doctor Holtzman para desarrollar un tarea de arqueología digital como líder de un grupo de chicos que van a ayudarle. Por su temperamento y sus vínculos, vivirá aventuras increíbles.",
                    "El grupo de niños que fueron convocados por Lucas para colaborar en las actividades  del doctor Holtzman, sufren en el relato del cómic, varias aventuras y peligros pero no sabemos cómo se afectan sus vidas después de los acontecimientos narrados. te invito a imaginar cómo es la vida de estos chicos (los niños de Xanadú), unos años después de los acontecimientos.",
                    "La corporación Xanadú nace como una empresa que quiere ayudar en los problemas causados por el apagón global de Internet del año 2019. En la época del Cómic ya es una empresa fuerte con muchos frentes de trabajo. Aquí te invito a imaginar cómo habría sido el apagón de Internet del año 19 y sus consecuencias."
                ]

const RETOS_A = ["Desarrolla una o varias infografías que muestre(n) cómo sería el aspecto y la actividad del arqueólogo así como el aspecto de su laboratorio. Dale un nuevo nombre a tu personaje.",
                "Prepara un podcast con una entrevista al personaje que has creado como alternativa al protagonista del relato y que deje ver su temperamento y características.",
                "Haz una breve semblanza hipertextual del personaje que has creado y que contenga: características físicas, biografía, ambiente familiar, tareas que realiza en el laboratorio.",
                "Prepara un podcast o un documental simulado con testimonios de personas cercanas que hablen sobre el personaje que has creado.",
                "Prepara un podcast con un breve programa radial dedicado al personaje que has creado y que sirva para entender su tarea y sus hallazgos más importantes.",
                "Desarrolla un video o cómic que muestre un día en la vida del personaje que has creado como alternativa al protagonista."
                ]

const RETOS_B = ["Desarrolla una o varias infografías que muestre(n) cómo es la vida y las actividades de estos niños de Xanadú después de unos años de ocurridos los acontecimientos del comic.",
                "Prepara un podcast con una entrevista a uno de los niños de Xanadú para escuchar en viva voz su relato de la vida después ocurridos los acontecimientos del comic.",
                "Haz una breve semblanza hipertextual de alguno de los niños protagonistas del Cómic años después ocurridos los acontecimientos de Xanadú.",
                "Desarrolla un video o cómic que muestre un día en la vida de los niños de Xanadú años después ocurridos los acontecimientos narrados en el Cómic.",
                "Prepara un podcast o un documental simulado con testimonios de personas cercanas a los niños de Xanadú que cuenten la vida de los niños de Xanadú años después ocurridos los acontecimientos narrados en el Cómic.",
                "Prepara un podcast con un breve programa radial dedicado a narrar la vida de los niños de Xanadú años después ocurridos los acontecimientos narrados en el Cómic."
                ]

const RETOS_C = ["Desarrolla una o varias infografías que muestre(n) diversos aspecto de lo que imaginas habría sido el apagón de internet del año 19",
                "Prepara un podcast con una entrevista a un científico que explica las razones del apagón de Internet del año 19",
                "Haz un breve recuento hipertextual de lo que imaginas son los hechos más importantes desarrollados a partir del apagón de Internet del año 19",
                "Desarrolla un video o cómic que muestre un día en la vida de la gente que vive sin Internet por causa del apagón del año 19",
                "Prepara un podcast o un documental simulado con testimonios de personas que hablen sobre las consecuencias que ellos sufren por el apagón de Internet del año 19.",
                "Prepara un podcast con un breve programa radial dedicado a explorar lo que significa vivir sin internet por causa del apagón del año 19."
                ]

const RETO_TEXT = document.getElementById('reto');
const PERFIL_TEXT = document.getElementById('perfil');

function get_random() {
    return Math.floor(Math.random() * RETOS_A.length);
}

function on_RetosA(index){
    let profile = PERFILES[index];
    let reto = RETOS_A[get_random()];
    RETO_TEXT.textContent = reto;
    PERFIL_TEXT.textContent = profile;
}

function on_RetosB(){
    let profile = PERFILES[3];
    let reto = RETOS_B[get_random()];
    RETO_TEXT.textContent = reto;
    PERFIL_TEXT.textContent = profile;
}

function on_RetosC(){
    let profile = PERFILES[4];
    let reto = RETOS_C[get_random()];
    RETO_TEXT.textContent = reto;
    PERFIL_TEXT.textContent = profile;
}