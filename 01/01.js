class Vertice {
    #y;
    #x;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    getX(){
        return this.#x
    }

    getY(){
        return this.#y
    }

    move(novoX, novoY){
        this.#x = novoX
        this.#y = novoY
    }
}

const vertice1 = new Vertice(3, 4)
const vertice2 = new Vertice(2, 3)

vertice1.move(50, 3)

console.log(`log 
X: ${vertice1.getX()}
Y: ${vertice2.getY()}
`)