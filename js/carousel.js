document.addEventListener("DOMContentLoaded", function (event) {
    const botaoVolta = document.getElementById("botaoRetorna");
    const botaoAvanca = document.getElementById("botaoAvanca");
    const botaoVolta2 = document.getElementById("botaoRetorna2");
    const botaoAvanca2 = document.getElementById("botaoAvanca2");
    const botaoVolta3 = document.getElementById("botaoRetorna3");
    const botaoAvanca3 = document.getElementById("botaoAvanca3");
    const botaoVolta4 = document.getElementById("botaoRetorna4");
    const botaoAvanca4 = document.getElementById("botaoAvanca4");
    const divImagem = document.getElementById("carrosel1");
    const divImagem2 = document.getElementById("carrosel2");
    const divImagem3 = document.getElementById("carrosel3");
    const divImagem4 = document.getElementById("carrosel4");
    const primeiraBola = document.getElementById("bolinha1");
    const segundaBola = document.getElementById("bolinha2");
    const terceiraBola = document.getElementById("bolinha3");
    const quartaBola = document.getElementById("bolinha4");
    const quintaBola = document.getElementById("bolinha5");
    const arrayBolas = [primeiraBola, segundaBola, terceiraBola, quartaBola, quintaBola];
    let percAvanco = 0;
    let percAvanco2 = 0;
    let percAvanco3 = 0;
    let percAvanco4 = 0;
    let contador = 0;
    let percStatus = 0;
    let percStatus2 = 0;
    let percStatus3 = 0;
    let percStatus4 = 0;
    const animTempo = 2000;
    let anima = false;
    const bola1 = 0;
    const bola2 = -20;
    const bola3 = -40;
    const bola4 = -60;
    const bola5 = -80;
    let posicaoAtual = [0];
    let posicaoAtual2 = [0];
    let posicaoAtual3 = [0];
    let posicaoAtual4 = [0];



let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
        isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    
    prevScrollLeft = divImagem.scrollLeft;
};

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    divImagem.scrollLeft = prevScrollLeft - positionDiff;

};

const dragStop = () =>{
    isDragStart = false;
};

divImagem.addEventListener("touchstart", dragStart);
divImagem.addEventListener("touchmove", dragging, { passive: false });
divImagem.addEventListener("touchend", dragStop);




    botaoVolta.hidden = true;
    botaoVolta2.hidden = true;
    botaoVolta3.hidden = true;
    botaoVolta4.hidden = true;

    if (anima == true) {
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
    }

    arrayBolas[contador].classList.add('bolaVerdeEscura');

    function voltaInfo() {
        if (contador >= 0) {
            contador--
        }
        arrayBolas[contador + 1].classList.remove('bolaVerdeEscura');
        arrayBolas[contador].classList.add('bolaVerdeEscura');


        if (anima == true) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
            quintaBola.disabled = true;
            quartaBola.disabled = true;
            terceiraBola.disabled = true;
            segundaBola.disabled = true;
            primeiraBola.disabled = true;
        }

        botaoVolta.disabled = true;

        if (posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = true;
        }

        if (posicaoAtual.at(-1) < -60) {
            botaoAvanca.hidden = false;
        }


        if (percAvanco < percStatus) {
            percAvanco = posicaoAtual.at(-1) + 20;
            percStatus = posicaoAtual.at(-1);

        }

        if (percAvanco >= percStatus) {
            percAvanco = posicaoAtual.at(-1) + 20;

        }

        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );
        percStatus = percAvanco;

        posicaoAtual.push(percAvanco);



        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }
        if (posicaoAtual.at(-1) == 0) {
            botaoVolta.hidden = true;
        }
        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);


    }

    function avancaInfo() {
        contador++;
        arrayBolas[contador - 1].classList.remove('bolaVerdeEscura');
        arrayBolas[contador].classList.add('bolaVerdeEscura');


        anima = false;
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
        quintaBola.disabled = true;
        quartaBola.disabled = true;
        terceiraBola.disabled = true;
        segundaBola.disabled = true;
        primeiraBola.disabled = true;


        if (posicaoAtual.at(-1) == 0 || posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = false;

        }
        if (posicaoAtual.at(-1) <= -60) {
            botaoAvanca.hidden = true;
        }

        if (percAvanco == percStatus) {
            percAvanco = percAvanco - 20;

        }

        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        percStatus = percAvanco;
        percAvanco = percAvanco - 20;
        posicaoAtual.push(percStatus);

        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }
        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);
    }

    //Carrosel 2


    function voltaInfo2() {

        if (anima == true) {
            botaoVolta2.disabled = true;
            botaoAvanca2.disabled = true;
        }

        botaoVolta2.disabled = true;

        if (posicaoAtual2.at(-1) == -20) {
            botaoVolta2.hidden = true;
        }

        if (posicaoAtual2.at(-1) < 0) {
            botaoAvanca2.hidden = false;
        }

        if (percAvanco2 < percStatus2) {
            percAvanco2 = posicaoAtual2.at(-1) + 20;
            percStatus2 = posicaoAtual2.at(-1);

        }

        if (percAvanco2 >= percStatus2) {
            percAvanco2 = posicaoAtual2.at(-1) + 20;

        }

        divImagem2.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus2}%)` },
                { transform: `translateX(${percAvanco2}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );
        percStatus2 = percAvanco2;

        posicaoAtual2.push(percAvanco2);



        if (anima == false) {
            botaoVolta2.disabled = true;
            botaoAvanca2.disabled = true;
        }
        if (posicaoAtual.at(-1) == 0) {
            botaoVolta2.hidden = true;
        }
        setTimeout(() => {
            botaoVolta2.disabled = false;
            botaoAvanca2.disabled = false;
            anima = true;
        }, animTempo);


    }

    function avancaInfo2() {

        anima = false;
        botaoVolta2.disabled = true;
        botaoAvanca2.disabled = true;

        if (posicaoAtual2.at(-1) == 0 || posicaoAtual2.at(-1) == -20) {
            console.log("inicio");
            botaoVolta2.hidden = false;

        }
        if (posicaoAtual2.at(-1) <= 0) {
            botaoAvanca2.hidden = true;
        }

        if (percAvanco2 == percStatus2) {
            percAvanco2 = percAvanco2 - 20;

        }

        divImagem2.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus2}%)` },
                { transform: `translateX(${percAvanco2}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        percStatus2 = percAvanco2;
        percAvanco2 = percAvanco2 - 20;
        posicaoAtual2.push(percStatus2);

        if (anima == false) {
            botaoVolta2.disabled = true;
            botaoAvanca2.disabled = true;
        }
        setTimeout(() => {
            botaoVolta2.disabled = false;
            botaoAvanca2.disabled = false;
            anima = true;
        }, animTempo);
    }



    /////




//Carrosel 3


    function voltaInfo3() {

        if (anima == true) {
            botaoVolta3.disabled = true;
            botaoAvanca3.disabled = true;
        }


        if (posicaoAtual3.at(-1) >= -30) {
            botaoVolta3.hidden = true;
        }

        if (posicaoAtual3.at(-1) < 0) {
            botaoAvanca3.hidden = false;
        }

        if (percAvanco3 < percStatus3) {
            percAvanco3 = posicaoAtual3.at(-1) + 30;
            percStatus3 = posicaoAtual3.at(-1);

        }

        if (percAvanco3 >= percStatus3) {
            percAvanco3 = posicaoAtual3.at(-1) + 30;

        }

        divImagem3.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus3}%)` },
                { transform: `translateX(${percAvanco3}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );
        percStatus3 = percAvanco3;

        posicaoAtual3.push(percAvanco3);



        if (anima == false) {
            botaoVolta3.disabled = true;
            botaoAvanca3.disabled = true;
        }
        setTimeout(() => {
            botaoVolta3.disabled = false;
            botaoAvanca3.disabled = false;
            anima = true;
        }, animTempo);

    }

    function avancaInfo3() {

        anima = false;
        botaoVolta3.disabled = true;
        botaoAvanca3.disabled = true;

        if (posicaoAtual3.at(-1) >= 0) {
            console.log("inicio");
            botaoVolta3.hidden = false;

        }
        if (posicaoAtual3.at(-1) <= -30) {
            botaoAvanca3.hidden = true;
        }

        if (percAvanco3 == percStatus3) {
            percAvanco3 = percAvanco3 - 30;

        }

        divImagem3.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus3}%)` },
                { transform: `translateX(${percAvanco3}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        percStatus3 = percAvanco3;
        percAvanco3 = percAvanco3 - 30;
        posicaoAtual3.push(percStatus3);

        if (anima == false) {
            botaoVolta3.disabled = true;
            botaoAvanca3.disabled = true;
        }
        setTimeout(() => {
            botaoVolta3.disabled = false;
            botaoAvanca3.disabled = false;
            anima = true;
        }, animTempo);
    }



    /////




     //Carrosel 4


    function voltaInfo4() {

        if (anima == true) {
            botaoVolta4.disabled = true;
            botaoAvanca4.disabled = true;
        }

        botaoVolta4.disabled = true;

        if (posicaoAtual4.at(-1) == -20) {
            botaoVolta4.hidden = true;
        }

        if (posicaoAtual4.at(-1) < 0) {
            botaoAvanca4.hidden = false;
        }

        if (percAvanco4 < percStatus4) {
            percAvanco4 = posicaoAtual4.at(-1) + 20;
            percStatus4 = posicaoAtual4.at(-1);

        }

        if (percAvanco4 >= percStatus4) {
            percAvanco4 = posicaoAtual4.at(-1) + 20;

        }

        divImagem4.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus4}%)` },
                { transform: `translateX(${percAvanco4}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );
        percStatus4 = percAvanco4;

        posicaoAtual4.push(percAvanco4);



        if (anima == false) {
            botaoVolta4.disabled = true;
            botaoAvanca4.disabled = true;
        }
        if (posicaoAtual4.at(-1) == 0) {
            botaoVolta4.hidden = true;
        }
        setTimeout(() => {
            botaoVolta4.disabled = false;
            botaoAvanca4.disabled = false;
            anima = true;
        }, animTempo);


    }

    function avancaInfo4() {

        anima = false;
        botaoVolta4.disabled = true;
        botaoAvanca4.disabled = true;

        if (posicaoAtual4.at(-1) == 0 || posicaoAtual4.at(-1) == -20) {
            console.log("inicio");
            botaoVolta4.hidden = false;

        }
        if (posicaoAtual4.at(-1) <= 0) {
            botaoAvanca4.hidden = true;
        }

        if (percAvanco4 == percStatus2) {
            percAvanco4 = percAvanco4 - 20;

        }

        divImagem4.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${percStatus4}%)` },
                { transform: `translateX(${percAvanco4}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        percStatus4 = percAvanco4;
        percAvanco4 = percAvanco4 - 20;
        posicaoAtual4.push(percStatus4);

        if (anima == false) {
            botaoVolta4.disabled = true;
            botaoAvanca4.disabled = true;
        }
        setTimeout(() => {
            botaoVolta4.disabled = false;
            botaoAvanca4.disabled = false;
            anima = true;
        }, animTempo);
    }



    /////



    function bolaUm() {


        for (let i = 0; arrayBolas.length > 0; i++) {
            if (arrayBolas[i] == undefined) {
                break;
            };
            arrayBolas[i].classList.remove('bolaVerdeEscura');

        }

        arrayBolas[0].classList.add('bolaVerdeEscura');
        contador = 0;
        anima = false;
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
        quintaBola.disabled = true;
        quartaBola.disabled = true;
        terceiraBola.disabled = true;
        segundaBola.disabled = true;
        primeiraBola.disabled = true;



        if (posicaoAtual.at(-1) <= -60) {
            botaoAvanca.hidden = false;
        }
        percAvanco = bola1;
        percStatus = bola1;
        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${posicaoAtual.at(-1)}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        posicaoAtual.push(bola1);

        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }

        if (posicaoAtual.at(-1) == 0 || posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = true;

        }

        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);
    };

    function bolaDois() {

        for (let i = 0; arrayBolas.length > 0; i++) {
            if (arrayBolas[i] == undefined) {
                break;
            };
            arrayBolas[i].classList.remove('bolaVerdeEscura');

        }

        arrayBolas[1].classList.add('bolaVerdeEscura');
        contador = 1;
        anima = false;
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
        quintaBola.disabled = true;
        quartaBola.disabled = true;
        terceiraBola.disabled = true;
        segundaBola.disabled = true;
        primeiraBola.disabled = true;

        if (posicaoAtual.at(-1) == 0 || posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = false;

        }

        if (posicaoAtual.at(-1) <= -60) {
            botaoAvanca.hidden = false;
        }
        percAvanco = bola2;
        percStatus = bola2;
        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${posicaoAtual.at(-1)}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        posicaoAtual.push(bola2);

        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }
        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);
    };

    function bolaTres() {

        for (let i = 0; arrayBolas.length > 0; i++) {
            if (arrayBolas[i] == undefined) {
                break;
            };
            arrayBolas[i].classList.remove('bolaVerdeEscura');

        }

        arrayBolas[2].classList.add('bolaVerdeEscura');
        contador = 2;
        anima = false;
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
        quintaBola.disabled = true;
        quartaBola.disabled = true;
        terceiraBola.disabled = true;
        segundaBola.disabled = true;
        primeiraBola.disabled = true;

        if (posicaoAtual.at(-1) == 0 || posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = false;

        }

        if (posicaoAtual.at(-1) <= -60) {
            botaoAvanca.hidden = false;
        }
        percAvanco = bola3;
        percStatus = bola3;
        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${posicaoAtual.at(-1)}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        posicaoAtual.push(bola3);

        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }
        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);
    };

    function bolaQuatro() {

        for (let i = 0; arrayBolas.length > 0; i++) {
            if (arrayBolas[i] == undefined) {
                break;
            };
            arrayBolas[i].classList.remove('bolaVerdeEscura');

        }

        arrayBolas[3].classList.add('bolaVerdeEscura');
        contador = 3;
        anima = false;
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
        quintaBola.disabled = true;
        quartaBola.disabled = true;
        terceiraBola.disabled = true;
        segundaBola.disabled = true;
        primeiraBola.disabled = true;

        if (posicaoAtual.at(-1) == 0 || posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = false;

        }

        if (posicaoAtual.at(-1) <= -60) {
            botaoAvanca.hidden = false;
        }
        percAvanco = bola4;
        percStatus = bola4;
        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${posicaoAtual.at(-1)}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        posicaoAtual.push(bola4);

        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }
        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);
    };

    function bolaCinco() {

        for (let i = 0; arrayBolas.length > 0; i++) {
            if (arrayBolas[i] == undefined) {
                break;
            };
            arrayBolas[i].classList.remove('bolaVerdeEscura');

        }

        arrayBolas[4].classList.add('bolaVerdeEscura');
        contador = 4;
        anima = false;
        botaoVolta.disabled = true;
        botaoAvanca.disabled = true;
        quintaBola.disabled = true;
        quartaBola.disabled = true;
        terceiraBola.disabled = true;
        segundaBola.disabled = true;
        primeiraBola.disabled = true;

        if (posicaoAtual.at(-1) == 0 || posicaoAtual.at(-1) == -20) {
            botaoVolta.hidden = false;

        }

        if (posicaoAtual.at(-1) > -60) {
            botaoAvanca.hidden = true;
        }


        percAvanco = bola5;
        percStatus = bola5;
        divImagem.animate(
            // Keyframes (an array of objects)
            [
                { transform: `translateX(${posicaoAtual.at(-1)}%)` },
                { transform: `translateX(${percAvanco}%)` }
            ],
            // Animation options (duration, easing, iterations, etc.)
            {
                duration: animTempo,
                easing: 'ease-in-out',
                direction: 'alternate',
                fill: 'forwards' // Retains the final state after the animation ends
            }
        );

        posicaoAtual.push(bola5);

        if (anima == false) {
            botaoVolta.disabled = true;
            botaoAvanca.disabled = true;
        }
        setTimeout(() => {
            botaoVolta.disabled = false;
            botaoAvanca.disabled = false;
            quintaBola.disabled = false;
            quartaBola.disabled = false;
            terceiraBola.disabled = false;
            segundaBola.disabled = false;
            primeiraBola.disabled = false;
            anima = true;
        }, animTempo);
    };



    primeiraBola.addEventListener("click", bolaUm);
    segundaBola.addEventListener("click", bolaDois);
    terceiraBola.addEventListener("click", bolaTres);
    quartaBola.addEventListener("click", bolaQuatro);
    quintaBola.addEventListener("click", bolaCinco);
    botaoVolta.addEventListener("click", voltaInfo);
    botaoAvanca.addEventListener("click", avancaInfo);
    botaoVolta2.addEventListener("click", voltaInfo2);
    botaoAvanca2.addEventListener("click", avancaInfo2);
    botaoVolta3.addEventListener("click", voltaInfo3);
    botaoAvanca3.addEventListener("click", avancaInfo3);
    botaoVolta4.addEventListener("click", voltaInfo4);
    botaoAvanca4.addEventListener("click", avancaInfo4);
});