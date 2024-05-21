
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


function crearelemento(Activity){
    
const{title,description,imgUrl} = Activity;


const elementodiv= document.createElement('div');
document.body.appendChild(elementodiv);


const titulo = document.createElement('h3');
const descripcion = document.createElement('p');
const imagen= document.createElement('img');

titulo.innerHTML=title;
descripcion.innerHTML=description;
imagen.src=imgUrl;

titulo.classList.add(".title");
descripcion.classList.add(".description");
imagen.classList.add('.imgURL');



elementodiv.appendChild(titulo);
elementodiv.appendChild(descripcion);
elementodiv.appendChild(imagen);

return elementodiv;}

function convertiractv(Repository){

const contenedor= document.getElementById('elementodiv');

contenedor.innerHTML='';

const actividades=Repository.getallActivity();

const elementoshtml=actividades.map(activity=>{

const elemento=document.createElement('div');
const titulohtml=document.createElement('h3');
const descripcionhtml=document.createElement('p');
const imagenhtml=document.createElement('img');


elemento.appendChild(titulohtml);
elemento.appendChild(descripcionhtml);
elemento.appendChild(imagenhtml);


return convertiractv;

})
    elementoshtml.forEach(element => {
        contenedor.appendChild(elemento);
        
    });}
    
    function handler(){

        const tituloInput = document.getElementById('title');
        const descripcionInput = document.getElementById('description');
        const imgUrlInput = document.getElementById('imgUrl');

        const titulo = tituloInput.value;
        const descripcion = descripcionInput.value;
        const imgUrl = imgUrlInput.value;

    if(!titulo||!descripcion||!titulo){

        alert('Por favor completa todos los campos.');
        return;

    }
    const nuevaActividad = new Activity(title, description, imgUrl);
    Repository.createActivity(nuevaActividad);

    convertiractv(Repository);




    } 

const boton = document.getElementById('button');
boton.addEventListener('click',handler);