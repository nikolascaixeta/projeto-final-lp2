document.addEventListener('DOMContentLoaded', () => {

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


}); //pego do Bulma css

const ordenador = document.getElementById("ordenador");

const container = document.getElementById("lista-pilotos");

const cards = Array.from(
    container.getElementsByClassName("flip-box")
);

ordenador.addEventListener("change", () => {

    const criterio = ordenador.value;

    if (criterio === "nome") {

        cards.sort((a, b) => {
            return a.dataset.nome.localeCompare(
                b.dataset.nome
            );
        });

    }

   else if (criterio === "posicao") {
    cards.sort((a, b) =>
        Number(a.dataset.posicao) - Number(b.dataset.posicao)
    );
}

    else if (criterio === "numero") {

        cards.sort((a, b) => {
            return Number(a.dataset.numero) -
                   Number(b.dataset.numero);
        });

    }

    container.append(...cards);

});