const resultados = {
    australia: [
        ['George Russell', '1:23:06.801'],
        ['Kimi Antonelli', '+2.974s'],
        ['Charles Leclerc', '	+15.519s']
    ],
    china: [
        ['Kimi Antonelli', '1:33:15.607'],
        ['George Russell', '+5.515s'],
        ['Lewis Hamilton', '+25.267s']
    ],
    japao: [
        ['Kimi Antonelli', '1:28:03.403'],
        ['Oscar Piastri', '+13.722s'],
        ['Charles Leclerc', '+15.270s']
    ],
    miami: [
        ['Kimi Antonelli', '1:33:19.273'],
        ['Lando Norris', '+3.264s'],
        ['Oscar Piastri', '+27.092s']
    ],
    canda: [
        ['Kimi Antonelli', '1:28:15.758'],
        ['Lewis Hamilton', '+10.768s'],
        ['Max Verstappen', '+11.276s']
    ],
    monaco: [
        ['Kimi Antonelli', '2:23:31.243'],
        ['Lewis Hamilton', '+6.271s'],
        ['Isack Hadjar', '+23.394s']
    ],
    barcelona: [
        ['Lewis Hamilton', '1:32:28.105'],
        ['George Russell', '+19.561s'],
        ['Lando Norris', '+23.719s']
    ],
    austria: [
        ['George Russell', '1:26:37.979'],
        ['Max Verstappen', '+1.611s'],
        ['Kimi Antonelli', '+1.986']
    ],
    grabretanha: [
        ['Charles Leclerc', '1:27:11.335'],
        ['George Russell', '+0.427s'],
        ['Lewis Hamilton', '+0.772s']
    ],
    belgica: [
        ['Kimi Antonelli', '1:24:42.479'],
        ['Charles Leclerc', '+1.952s'],
        ['Max Verstappen', '+11.586s']
    ],
    hungria: [
        ['Lando Norris', '1:39:56.180'],
        ['Max Verstappen', '+15.080s'],
        ['Kimi Antonelli', '+18.728s']
    ],
    holanda: [
        ['Lando Norris', '2:04:44.859'],
        ['Kimi Antonelli', '+11.536s'],
        ['George Russell', '+15.906s']
    ],
    italia: [
        ['Kimi Antonelli', '1:51:15.281'],
        ['George Russell', '+3.857s'],
        ['Max Verstappen', '+14.718s']
    ],
    madrid: [
        ['Kimi Antonelli', '1:34:23.754'],
        ['George Russell', '+4.351s'],
        ['Lando Norris', '+5.089s']
    ],
    azerbaijao: [
        ['George Russell', '1:38:02.143'],
        ['Max Verstappen', '+0.196s'],
        ['Isack Hadjar', '+10.704s']
    ],
    bahrain: [
        ['Max Verstappen', '1:47:14.808'],
        ['Kimi Antonelli', '+2.307s'],
        ['Lewis Hamilton', '+4.919s']
    ],
    singapura: [
        ['Max Verstappen', '1:42:00.785'],
        ['Charles Leclerc', '+7.335s'],
        ['Kimi Antonelli', '+24.573s']
    ],
    usa: [
        ['Kimi Antonelli', '1:35:16.650'],
        ['Charles Leclerc', '+13.078s'],
        ['Max Verstappen', '+17.485s']
    ],
    mexico: [
        ['Max Verstappen', '2:20:28.772'],
        ['Lewis Hamilton', '+0.799s'],
        ['Kimi Antonelli', '+4.006s']
    ],
    brasil: [
        ['Lando Norris', '1:35:23.504'],
        ['Max Verstappen', '+14.602s'],
        ['Isack Hadjar', '+24.485s']
    ],
    
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

