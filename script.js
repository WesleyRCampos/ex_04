
// Definição da classe Alimento
class Alimento {
    constructor(nome, cor, peso, tipo) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
    }

    // Método para exibir as informações do alimento
    exibirInformacoes() {
        return `<p>Nome: ${this.nome}</p>
                <p>Cor: ${this.cor}</p>
                <p>Peso: ${this.peso}g</p>
                <p>Tipo: ${this.tipo}</p>`;
    }
}

// Criando instâncias de alimentos (fruta e verdura)
const banana = new Alimento('Banana', 'Amarela', 120, 'Fruta');
const alface = new Alimento('Alface', 'Verde', 80, 'Verdura');

// Obtendo o contêiner de alimentos do HTML
const alimentosContainer = document.getElementById('alimentos-container');

// Exibindo as informações dos alimentos na página HTML
alimentosContainer.innerHTML = `
    <h2>Fruta</h2>
    ${banana.exibirInformacoes()}
    <h2>Verdura</h2>
    ${alface.exibirInformacoes()}
`;
