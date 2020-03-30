export class Book{
    constructor(){
        this.pages = 2000;
        this.author = 'Menna';
    }

    info(){
       console.log(this.author , this.pages);
    }
}