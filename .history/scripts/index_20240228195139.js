
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

const titulo = document.createElement('h3');
const descripcion = document.createElement('p');
const imagen= document.createElement('img');

titulo.innerHTML=title;
descripcion.innerHTML=description;
imagen.src=imgUrl;

titulo.classList.add("#title");
descripcion.classList.add("#description");
imagen.classList.add('#imgURL');

const elementodiv= document.createElement('div');
document.body.appendChild(elementodiv);

elementodiv.appendChild(titulo);
elementodiv.appendChild(descripcion);
elementodiv.appendChild(imagen);

return elementodiv;}