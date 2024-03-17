class Heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let ataque;

        switch (this.type) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Levi', 15, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 500, 'mago');
const heroi3 = new Heroi('Avatar', 20, 'monge');
const heroi4 = new Heroi('Naruto', 30, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();