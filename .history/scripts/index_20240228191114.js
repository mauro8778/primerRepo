
class Activity{
        
    constructor(id,title,description,imgUrl){

        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
class Repository{

    constructor(){

        this.activities=[];
        this.id=0;
    }
    createActivity(title,description,imgUrl){

        this.id++
        const activity=new Activity(this.id,title,description,imgUrl);
        this.activities.push(activity);
    }

    getallActivity(){
        return this.activities;
    }
    
    deleteActivity(id){

        this.activities= this.activities.filter((Activity)=>Activity.id!==id)
    }

}
function cards(Activity){

    const { title, description, imgUrl } = Activity;

    const tituloElemento = document.createElement('h3');
    const descripcionElemento = document.createElement('p');
    const imagenElemento = document.createElement('img');
    const tarjetaElemento = document.createElement('div');

    tituloElemento.innerHTML = title;
    descripcionElemento.innerHTML = description;
    imagenElemento.src = imgUrl;

    tituloElemento.classList.add('titulo-actividad');
    descripcionElemento.classList.add('descripcion-actividad');
    imagenElemento.classList.add('imagen-actividad');
    tarjetaElemento.classList.add('tarjeta-actividad');

    tarjetaElemento.appendChild(tituloElemento);
    tarjetaElemento.appendChild(descripcionElemento);
    tarjetaElemento.appendChild(imagenElemento);

    return tarjetaElemento;





}

function agregarActividadesAlContenedor(repository) {
    const contenedor = document.getElementById('contenedor-actividades');
    contenedor.innerHTML = '';
    const actividades = repository.getAllActivities();
    const elementosHTML = actividades.map(actividad => {
        return crearTarjeta(actividad);
    });

   
    elementosHTML.forEach(elemento => {
        contenedor.appendChild(elemento);
    });
}
function agregarActividadHandler() {
   
    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');
    const imgUrlInput = document.getElementById('img-url-input');

   
    const title = titleInput.value;
    const description = descriptionInput.value;
    const imgUrl = imgUrlInput.value;

    if (!title || !description || !imgUrl) {
        alert('Por favor completa todos los campos.');
        return; 
    }

     repository.createActivity(title, description, imgUrl);

   
    agregarActividadesAlContenedor(repository);

}

const agregarActividadBtn = document.getElementById('button');

agregarActividadBtn.addEventListener('click', agregarActividadHandler);
