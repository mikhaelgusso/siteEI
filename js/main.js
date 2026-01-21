document.addEventListener("DOMContentLoaded", function (event) {
  const botaoAvancaPag = document.getElementById("botaoAvancaPag");
  const botaoRetornaPag = document.getElementById("botaoRetornaPag");
  const capa = document.getElementById("capa");
  const pag1 = document.getElementById("pagina1");
  const pag2 = document.getElementById("pagina2");
  const pag3 = document.getElementById("pagina3");
  const pag4 = document.getElementById("pagina4");
  const arrPag = [capa, pag1, pag2, pag3, pag4];
  let contador = 0;
  const modal1 = document.getElementById("modal1");
  const modal2 = document.getElementById("modal2");
  const modal3 = document.getElementById("modal3");
  const modal4 = document.getElementById("modal4");
  const modal5 = document.getElementById("modal5");
  const modal6 = document.getElementById("modal6");

  const buttonModal1 = document.getElementById("buttonModal1");
  const buttonModal2 = document.getElementById("buttonModal2");
  const buttonModal3 = document.getElementById("buttonModal3");
  const buttonModal4 = document.getElementById("buttonModal4");
  const buttonModal5 = document.getElementById("buttonModal5");
  const buttonModal6 = document.getElementById("buttonModal6");

  const arrMod = [];
  const arrFecho = [];
  const fecho = document.getElementsByClassName("close");
  const fechar = Array.from(fecho);

  let e;
  let aberto = false;



  buttonModal1.onclick = function () {
    modal1.style.display = "block";
    arrMod.push(modal1);
  }

  buttonModal2.onclick = function () {
    modal2.style.display = "block";
    arrMod.push(modal2);
  }

  buttonModal3.onclick = function () {
    modal3.style.display = "block";
    arrMod.push(modal3);
  }

  buttonModal4.onclick = function () {
    modal4.style.display = "block";
    arrMod.push(modal4);
  }

  buttonModal5.onclick = function () {
    modal5.style.display = "block";
    arrMod.push(modal5);
  }

  buttonModal6.onclick = function () {
    modal6.style.display = "block";
    arrMod.push(modal6);
  }

  // When the user clicks on <span> (x), close the modal


  for (let i = 0; fechar.length >= 0; i++) {
    if (fechar[i] == undefined) {
      break;
    }
    fechar[i].onclick = function () {
      arrMod.at(-1).style.display = "none";
    }
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == arrMod.at(-1)) {
      arrMod.at(-1).style.display = "none";
    }

  }


  function avancaPagina() {
    if (contador == 0) {
      arrPag[contador].classList.add('capa');
    };
    if (contador > 0 && contador <= arrPag.length - 1) {
      arrPag[contador].classList.add('pag' + contador);

    };
    if (contador <= arrPag.length - 1) {
      contador++;
    }


  }

  function voltaPagina() {
    if (contador != 0 && contador <= arrPag.length) {
      contador--;
    }
    if (contador > 0 && contador <= arrPag.length) {
      arrPag[contador].classList.remove('pag' + contador);
    };
    if (contador >= 0) {
      arrPag[contador].classList.remove('capa');

    };



  }

  botaoRetornaPag.addEventListener("click", voltaPagina);
  botaoAvancaPag.addEventListener("click", avancaPagina);



  const coll = document.querySelectorAll(".colapsavel");

  coll.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
      } else {
        // Measure real height. If it's 0, we force a layout refresh
        let height = content.scrollHeight;

        if (height === 0) {
          content.style.maxHeight = "none";
          height = content.scrollHeight;
          content.style.maxHeight = "0px"; // Reset for animation

          // Small delay to allow the 0px reset to trigger the transition
          requestAnimationFrame(() => {
            content.style.maxHeight = height + "px";
          });
        } else {
          content.style.maxHeight = height + "px";
        }
      }
    });
  });



  const scrollStopperBox = document.querySelector('.scroll-stopper-box');

  scrollStopperBox.addEventListener('mouseenter', () => {
    document.body.classList.add('no-scroll');
  });

  scrollStopperBox.addEventListener('mouseleave', () => {
    document.body.classList.remove('no-scroll');
  });



});


let aberto = false;
function botaoDetalhes(e) {
  if (aberto == false) {
    aberto = true;
    const mostraTexto = e.querySelector("#text");
    mostraTexto.classList.remove("hidden");
  } else {
    aberto = false;
    const mostraTexto = e.querySelector("#text");
    mostraTexto.classList.add("hidden");

  }



}

