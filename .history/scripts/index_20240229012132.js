
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
        this.id = 0;
    }
    createActivity(title,description,imgUrl){

        this.id++
        const activity =new Activity(this.id,title,description,imgUrl);
        this.activities.push(activity);
        
    }

    getallActivity(){
        return this.activities;
    }
    
    deleteActivity(id){

        this.activities= this.activities.filter((Activity)=>Activity.id!==id)
    }

}


function crearelemento(Activity){

const{id,title,description,imgUrl} = Activity;


const titulo = document.createElement("h3");
const descripcion = document.createElement("p");
const imagen= document.createElement("img");

titulo.innerHTML=title;
descripcion.innerHTML=description;
imagen.src=imgUrl;



titulo.classList.add("title");
descripcion.classList.add("description");
imagen.classList.add("imgUrl");

const elementodiv= document.createElement("div");
document.body.appendChild(elementodiv);

elementodiv.appendChild(titulo);
elementodiv.appendChild(descripcion);
elementodiv.appendChild(imagen);

return elementodiv;

    }
    

function convertiractv(repository){

const contenedor= document.getElementById("elementodiv");

const actividades = repository.getallActivity();

contenedor.innerHTML= " ";

const elementoshtml=actividades.map(activity =>

    crearelemento(activity)

);
elementoshtml.forEach(function(element) {
    
    contenedor.appendChild(element);
  });
  
}
    
function handler(){


        const tituloInput = document.getElementById('title');
        const descripcionInput = document.getElementById('description');
        const imgUrlInput = document.getElementById('imgUrl');

        const titulo = tituloInput.value;
        const descripcion = descripcionInput.value;
        const imagen = imgUrlInput.value;

    if(titulo === '' ||descripcion === '' || imagen === '' ){

        alert('Por favor completa todos los campos.');
        return;

    }
    
    const nuevaActividad = new Activity(1,titulo, descripcion, imagen);
    
    
    const repository = new Repository();

    repository.createActivity(nuevaActividad);
    
    convertiractv(repository);

    


    } 

    const boton = document.getElementById('button');
    boton.addEventListener("click",handler);

    