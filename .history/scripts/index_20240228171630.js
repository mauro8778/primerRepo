
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

document.getElementById("button").addEventListener("click", function() {
    var nombre = document.getElementById("title").value;
    var descripcion = document.getElementById("description").value;
    var urlImagen = document.getElementById("imgUrl").value;

    var nuevaEtiqueta = document.createElement("div");
    var titulo = document.createElement("h3");
    var parrafo = document.createElement("p");
    var imagen = document.createElement("img");
    
    titulo.textContent = nombre;
    parrafo.textContent = descripcion;
    imagen.src = urlImagen;
    imagen.alt = nombre;

    nuevaEtiqueta.appendChild(titulo);
    nuevaEtiqueta.appendChild(parrafo);
    nuevaEtiqueta.appendChild(imagen);
    document.getElementById("cards").appendChild(nuevaEtiqueta);


})