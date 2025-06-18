// ---------------------------- CONFIGURACIÓN ----------------------------
const preguntasPorPagina = 10;
let paginaActual = 0;
let respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas")) || [];


// Aquí puedes añadir todas tus preguntas:
const preguntas = [
  {
    pregunta: "1.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },  
  {
    pregunta: "2.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
{
    pregunta: "3.-",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "4.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "5.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "6.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "7.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "8.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "9.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "10.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "11.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "12.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "13.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "14.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "15.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "16.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "17.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "18.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "19.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "20.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "21.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "22.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "23.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "24.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "25.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "26.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "27.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "28.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "29.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "30.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "31.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "32.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "33.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "34.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "35.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "36.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "37.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "38.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "39.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "40.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "41.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "42.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "43.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "44.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "45.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "46.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "47.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "48.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "49.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "50.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "51.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "52.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "53.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "54.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "55.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "56.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "57.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "58.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "59.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "60.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "61.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "62.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "63.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "64.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "65.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "66.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "67.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "68.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "69.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "70.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "71.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "72.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "73.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "74.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "75.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "76.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "77.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "78.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
    {
    pregunta: "79.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "80.-   ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "81.",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  },
  {
    pregunta: "82.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d.  "],
    correcta: 2 
  },
{
    pregunta: "83.- ",
    opciones: [ "a. ", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 2 
  }
];



// ---------------------------- TEMPORIZADOR ----------------------------
let tiempoRestante = 600;
const timerElemento = document.getElementById("timer");
const timerIntervalo = setInterval(() => {
  const min = Math.floor(tiempoRestante / 60);
  const seg = tiempoRestante % 60;
  timerElemento.textContent = `${min}:${seg.toString().padStart(2, '0')}`;
  if (tiempoRestante <= 0) {
    clearInterval(timerIntervalo);
    mostrarResultados(true);
  }
  tiempoRestante--;
}, 1000);

// ---------------------------- FUNCIONES ----------------------------

function renderPagina() {
  const contenedor = document.getElementById("preguntasContainer");
  const inicio = paginaActual * preguntasPorPagina;
  const fin = Math.min(inicio + preguntasPorPagina, preguntas.length);
  let html = `<h4>Página ${paginaActual + 1} de ${Math.ceil(preguntas.length / preguntasPorPagina)}</h4>`;

  for (let i = inicio; i < fin; i++) {
    const p = preguntas[i];
    html += `<div class="mb-3 border-bottom pb-2">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="mb-0"><strong>${i + 1}.</strong> ${p.pregunta}</p>
        <button class="btn btn-sm btn-outline-danger" onclick="borrarRespuesta(${i})">Borrar</button>
      </div>`;
    p.opciones.forEach((opcion, j) => {
      const checked = respuestasGuardadas[i] == j ? 'checked' : '';
      html += `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="opcion${i}" id="opcion${i}_${j}" value="${j}" ${checked} onchange="guardarRespuesta(${i}, ${j})">
          <label class="form-check-label" for="opcion${i}_${j}">
            ${opcion}
          </label>
        </div>`;
    });
    html += `</div>`;
  }

  contenedor.innerHTML = html;
  document.getElementById("paginaAnteriorBtn").disabled = paginaActual === 0;
  document.getElementById("paginaSiguienteBtn").disabled = fin >= preguntas.length;
  updateQuestionNavigation(); // Update navigation on page render
}

function guardarRespuesta(indicePregunta, opcionSeleccionada) {
  respuestasGuardadas[indicePregunta] = opcionSeleccionada;
  localStorage.setItem("respuestas", JSON.stringify(respuestasGuardadas));
  updateQuestionNavigation(); // Update navigation when an answer is saved
}

function borrarRespuesta(indicePregunta) {
  // Elimina la respuesta de las respuestas guardadas
  delete respuestasGuardadas[indicePregunta];
  localStorage.setItem("respuestas", JSON.stringify(respuestasGuardadas));

  // Desmarca el radio button de la pregunta actual
  const radioButtons = document.querySelectorAll(`input[name="opcion${indicePregunta}"]`);
  radioButtons.forEach(radio => radio.checked = false);

  updateQuestionNavigation(); // Actualiza la navegación
}


function mostrarResultados(tiempoAgotado = false) {
  clearInterval(timerIntervalo);
  const mainContentCol = document.querySelector(".col-md-9");
  const sideNavCol = document.querySelector(".col-md-3");

  let correctas = 0;
  preguntas.forEach((p, i) => {
    if (respuestasGuardadas[i] == p.correcta) correctas++;
  });

  let resultadosHtml = `
    <h3>${tiempoAgotado ? 'Tiempo agotado - ' : ''}Resultados</h3>
    <p>Respondiste correctamente <strong>${correctas}</strong> de <strong>${preguntas.length}</strong> preguntas.</p>
    <div class="d-flex gap-2 mb-4">
        <button class="btn btn-warning" onclick="reiniciar()">Reiniciar Examen</button>
        <button class="btn btn-info" onclick="regresarAExamenes()">Regresar a los demás exámenes</button>
    </div>
    <hr>
    <h4>Revisión de Preguntas</h4>
  `;

  preguntas.forEach((p, i) => {
    const userAnswer = respuestasGuardadas[i];
    const isCorrect = userAnswer == p.correcta;

    resultadosHtml += `
      <div class="result-question">
        <p><strong>${i + 1}.</strong> ${p.pregunta}</p>`;

    p.opciones.forEach((opcion, j) => {
      let optionClass = '';

      if (j === p.correcta) {
        optionClass += ' correct-answer'; // Mark the correct answer
      }

      if (j === userAnswer) {
        // This is the user's selected answer
        optionClass += ' your-answer';
        if (isCorrect) {
          optionClass += ' correct';
        } else {
          optionClass += ' incorrect';
        }
      }

      resultadosHtml += `
        <div class="result-option ${optionClass}">
          ${opcion}
          ${j === p.correcta ? ' (Correcta)' : ''}
          ${j === userAnswer && !isCorrect && j !== p.correcta ? ' (Tu respuesta - Incorrecta)' : ''}
          ${j === userAnswer && isCorrect ? ' (Tu respuesta - Correcta)' : ''}
        </div>`;
    });

    if (userAnswer === undefined || userAnswer === null) {
        resultadosHtml += `<p class="mt-2 text-muted"><em>No respondiste esta pregunta.</em></p>`;
    } else if (!isCorrect) {
        resultadosHtml += `<p class="mt-2 text-danger">Tu respuesta: ${p.opciones[userAnswer]} (Incorrecta)</p>`;
        resultadosHtml += `<p class="text-success">Respuesta correcta: ${p.opciones[p.correcta]}</p>`;
    } else {
        resultadosHtml += `<p class="mt-2 text-success">Tu respuesta: ${p.opciones[userAnswer]} (Correcta)</p>`;
    }

    resultadosHtml += `</div>`;
  });


  mainContentCol.innerHTML = resultadosHtml;

  // Hide side navigation and timer elements after showing results
  if (sideNavCol) sideNavCol.style.display = "none";
  if (timerElemento) timerElemento.style.display = "none";
}

function reiniciar() {
  localStorage.removeItem("respuestas");
  location.reload();
}

function regresarAExamenes() {
    // IMPORTANTE: Cambia 'index.html' por la URL real de tu página de selección de exámenes.
    window.location.href = '../../Index.php'; // Redirige a la página de selección de exámenes  
}


function updateQuestionNavigation() {
  const navContainer = document.getElementById("questionNavigation");
  navContainer.innerHTML = ''; // Clear previous navigation items

  preguntas.forEach((_, i) => {
    const navItem = document.createElement("div");
    navItem.classList.add("question-nav-item");
    navItem.textContent = i + 1;

    // Check if the question has been answered
    if (respuestasGuardadas[i] !== undefined && respuestasGuardadas[i] !== null) {
      navItem.classList.add("answered");
    } else {
      // No need to add 'unanswered' class explicitly, default styling is for unanswered
    }

    navItem.addEventListener("click", () => goToQuestion(i + 1));
    navContainer.appendChild(navItem);
  });
}

function goToQuestion(questionNumber) {
  const questionIndex = questionNumber - 1; // Convert to 0-based index
  if (questionIndex >= 0 && questionIndex < preguntas.length) {
    const targetPage = Math.floor(questionIndex / preguntasPorPagina);
    if (paginaActual !== targetPage) {
      paginaActual = targetPage;
      renderPagina();
    }
    // Give a small delay to allow the new page content to render before attempting to scroll
    setTimeout(() => {
        // Target the first radio button of the specific question to scroll to it
        const questionElement = document.getElementById(`opcion${questionIndex}_0`);
        if (questionElement) {
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
  } else {
    alert("Número de pregunta inválido.");
  }
}

// ---------------------------- EVENTOS ----------------------------

document.getElementById("paginaAnteriorBtn").addEventListener("click", () => {
  if (paginaActual > 0) {
    paginaActual--;
    renderPagina();
  }
});

document.getElementById("paginaSiguienteBtn").addEventListener("click", () => {
  const maxPagina = Math.ceil(preguntas.length / preguntasPorPagina) - 1;
  if (paginaActual < maxPagina) {
    paginaActual++;
    renderPagina();
  }
});

document.getElementById("terminarBtn").addEventListener("click", () => {
  mostrarResultados();
});


// ---------------------------- INICIO ----------------------------
renderPagina();
updateQuestionNavigation(); // Initial render of navigation