class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }
    createActivity(title, description, imgUrl) {
        this.id++;
        const activity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(activity);
    }

    getAllActivities() {
        return this.activities;
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((activity) => activity.id !== id);
    }
}

const repository = new Repository(); // Crear una instancia de Repository

function crearelemento(activity) {
    const { title, description, imgUrl } = activity;

    const elementodiv = document.createElement('div');
    // No agregues el elemento al body aquí, lo agregarás al contenedor 'cards'

    const titulo = document.createElement('h3');
    const descripcion = document.createElement('p');
    const imagen = document.createElement('img');

    titulo.innerHTML = title;
    descripcion.innerHTML = description;
    imagen.src = imgUrl;

    titulo.classList.add("title");
    descripcion.classList.add("description");
    imagen.classList.add('imgURL');

    elementodiv.appendChild(titulo);
    elementodiv.appendChild(descripcion);
    elementodiv.appendChild(imagen);

    // Selecciona el contenedor 'cards'
    const contenedorCards = document.getElementById('cards');
    // Agrega el nuevo div de la actividad al contenedor 'cards'
    contenedorCards.appendChild(elementodiv);

    return elementodiv;
}


function convertiractv() {
    const contenedor = document.getElementById('cards'); // Corregido el ID del contenedor

    contenedor.innerHTML = '';

    const actividades = repository.getAllActivities(); // Corregido el método

    const elementoshtml = actividades.map(activity => crearelemento(activity)); // Corregido el uso de map

    elementoshtml.forEach(element => {
        contenedor.appendChild(element);
    });
}

// Asumiendo que el resto del código es el mismo que te proporcioné anteriormente

function handler(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const tituloInput = document.getElementById('title');
    const descripcionInput = document.getElementById('description');
    const imgUrlInput = document.getElementById('imgUrl');

    const titulo = tituloInput.value;
    const descripcion = descripcionInput.value;
    const imagen = imgUrlInput.value;

    if (titulo === '' || descripcion === '' || imagen === '') {
        alert('Por favor completa todos los campos.');
        return;
    }

    repository.createActivity(titulo, descripcion, imagen);

    convertiractv(); 
}

// Agregar el event listener al formulario
document.querySelector('form').addEventListener('submit', handler);