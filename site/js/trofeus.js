const resultados = {
    australia: [
        ['George Russell', '1:23:06.801'],
        ['Kimi Antonelli', '+2.974s'],
        ['Charles Leclerc', '	+15.519s']
    ],
    china: [
        ['Piloto 1', 'Tempo do 1º lugar'],
        ['Piloto 2', 'Tempo do 2º lugar'],
        ['Piloto 3', 'Tempo do 3º lugar']
    ]
};

const cards = document.querySelector('.cards-trofeus');
const tabela = document.getElementById('resultado-gp');

cards.addEventListener('click', event => {
    const link = event.target.closest('a[data-gp]');
    if (!link) return;

    const top3 = resultados[link.dataset.gp];
    if (!top3) return;

    tabela.replaceChildren(...top3.map((piloto, i) => {
        const linha = document.createElement('tr');

        [`${i + 1}º`, ...piloto].forEach(texto => {
            const celula = document.createElement('td');
            celula.textContent = texto;
            linha.append(celula);
        });

        return linha;
    }));
});



  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

