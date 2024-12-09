window.onload = function() {
    let jogadorCamisa = decodeURIComponent(window.location.search.replace(/^.*?camisa=(.*)$/, '$1'));

    fetch("https://jouve8087.github.io/fluminense/dados.json")
        .then(response => response.json())
        .then(data => {
            var jogador = data.find(jogador => jogador.camisa == jogadorCamisa);
            if (jogador) {
                console.log("Jogador encontrado:", jogador);
                document.getElementById('jogador-nome').textContent = jogador.nome;
                document.getElementById('jogador-foto').src = jogador.php;
                document.getElementById('jogador-camisa').textContent = "Camisa: " + jogador.camisa;
                document.getElementById('jogador-valor').textContent = "Valor: " + jogador.valor;
                document.getElementById('jogador-idade').textContent = "Idade: " + jogador.idade;
                document.getElementById('jogador-nacionalidade').textContent = "Nacionalidade: " + jogador.nacionalidade;
                document.getElementById('bandeira').src = jogador.phn;
                document.getElementById('jogador-altura').textContent = "Altura: " + jogador.altura;
                document.getElementById('jogador-pe').textContent = "Pe: " + jogador.pe;
                document.getElementById('jogador-posicao').textContent = "Posição: " + jogador.posicao;

                
                for (let i = 1; i <= 20; i++) {
                    if (jogador[`time${i}`]) {
                        document.getElementById(`time${i}`).textContent = jogador[`time${i}`];
                        document.getElementById(`valor${i}`).textContent = jogador[`valor${i}`];
                        document.getElementById(`data${i}`).textContent = jogador[`data${i}`];
                        document.getElementById(`ftime${i}`).src = jogador[`pht${i}`]
                    }
                    else {
                        document.getElementById(`ftime${i}`).src = jogador.stop
                    }
                }
            } else {
                console.error("Jogador não encontrado!");
            }
        })
    console.log("Camisa extraída da URL:", jogadorCamisa);
};
