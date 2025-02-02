// var btns = document.getElementsByName('radio-btn');

// document.getElementById('radio1').checked = true;
// document.getElementById('manual-btn0').style.backgroundColor = "#000";

// interval = setInterval (function() {
//     nextImage();
// }, 4000);

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         for (var i = 0; i < btns.length; i++) {
//             if (btns[i].checked) {
//                 label_input_clicado = 'manual-btn' + i;
//                 document.getElementById(label_input_clicado).style.backgroundColor = "black";
//             }
//             else {
//                 label_input_clicado = 'manual-btn' + i;
//                 document.getElementById(label_input_clicado).style.backgroundColor = "transparent";
//             }
//         }
        
//         clearInterval(interval);
//         interval = setInterval (function() {
//             nextImage();
//         }, 4000);
//     })
// }

// function nextImage() {
//     for (var p = 0; p < btns.length; p++) {
//         if (btns[p].checked) {
//             label_input_atual = 'manual-btn' + p;
//             document.getElementById(label_input_atual).style.backgroundColor = 'transparent';
//             slideAtual = p + 1;

//             if (slideAtual == 4) {
//                 slideAtual = 0;
//             }

//             btns[slideAtual].checked = true;
//             label_input_seguinte = 'manual-btn' + slideAtual;
//             document.getElementById(label_input_seguinte).style.backgroundColor = "black";

//             break
//         }
//     }
// }