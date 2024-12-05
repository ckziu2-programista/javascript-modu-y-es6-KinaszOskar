export class rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    area(){
        return this.height * this.width;
    }

    perimeter(){
        return (this.height * 2) + (this.width * 2);
    }

}
