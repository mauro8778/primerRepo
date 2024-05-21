
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
const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const imgUrl= document.getElementById("imgUrl").value;

const titulo = document.createElement("h3");
const parrafo = document.createElement("p");
const imagen = document.createElement("img");

titulo.textContent = nombre;
parrafo.textContent = descripcion;
imagen.src = urlImagen;

})