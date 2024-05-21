class Activity{

    constructor(id,title,description,imgUrl){

        this id = id;
        this title=title;
        this description=description;
        this imgUrl=imgUrl;
    }
}
class Repository(){

    constructor(){

        this.activities=[];
        this.id=0;
    }
    createActivity(title,description,imgUrl){

        this.id++;
        const activity=new Activity(this.id,title,description,imgUrl);
        this.activities.push(activity);
    }

    getallActivity(){
        return this.activities;
    }
    
    deleteActivity()

}