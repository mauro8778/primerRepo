
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
document.getElementById("button").addEventListener("click", function(activity) {

const titulo = document.getElementById("title").value;
const descripcion = document.getElementById("description").value;
const imagen= document.getElementById("imgUrl").value;


this.titulo = document.createElement("h3");
this.descripcion = document.createElement("p");
this.imagen = document.createElement("img");

titulo.textContent = titulo;
descripcion.textContent = descripcion;
imagen.src = imagen;

nuevaEtiqueta.appendChild(titulo);
    nuevaEtiqueta.appendChild(desc);
    nuevaEtiqueta.appendChild(imagen);
    document.getElementById(cards).appendChild(nuevaEtiqueta);

});