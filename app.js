//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
        input.focus();
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O motorista da rodada é: ${amigoSorteado}</li>`;
    amigos = [];
    atualizarLista();
}