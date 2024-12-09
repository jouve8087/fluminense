const caixainfo = document.querySelector("[data-caixa]");
const conteinerinfo = document.querySelector("[data-conteiner]");

fetch("https://jouve8087.github.io/fluminense/dados.json")
  .then((res) => res.json())
  .then((dados) => {
    dados.forEach((jogador) => {
      const box = caixainfo.content.cloneNode(true).children[0];
      const nome = box.querySelector("[data-nome]");
      const camisa = box.querySelector("[data-camisa]");
      const php = box.querySelector("[data-php]")
      box.dataset.jogadorCamisa = jogador.camisa;
      nome.textContent = jogador.nome;
      php.src=jogador.php
      camisa.textContent = jogador.camisa;
      conteinerinfo.append(box);
    });
    addTemplateClickEvents();
  });

function addTemplateClickEvents() {
  const templates = document.querySelectorAll('.box');

  templates.forEach((template) => {
    template.addEventListener('click', () => {
      const jogadorCamisa = template.dataset.jogadorCamisa; 
      window.location.href = 'jogador.html?camisa=' + jogadorCamisa;
    });
  });
}
