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

    distancia(vertice2){
        const distanciaX = this.#x - vertice2.getX();
        const distanciaY = this.#y - vertice2.getY();
        return Math.sqrt(distanciaX ** 2 + distanciaY ** 2)
    }
    
    move(novoX, novoY){
        this.#x = novoX
        this.#y = novoY
    }
}

const vertice1 = new Vertice(43, 50)
const vertice2 = new Vertice(65, 70)

// vertice1.move(50, 50)

console.log(`log 
X: ${vertice1.getX()}
Y: ${vertice2.getY()}
`)

console.log(`distancia entre vetores
${vertice1.distancia(vertice2)}
${vertice2.distancia(vertice1)}

`)