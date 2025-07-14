// ---------------------------- CONFIGURACIÓN ----------------------------
const preguntasPorPagina = 10;
let paginaActual = 0;
let respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas")) || [];


// Aquí puedes añadir todas tus preguntas:
const preguntas = [
 {
  pregunta: "1. Es la disciplina que estudia el tratamiento automático de la información utilizando dispositivos electrónicos y sistemas computacionales.",
  opciones: [
    "a. Matemáticas",
    "b. Sistema",
    "c. Datos",
    "d. Informática"
  ],
  correcta: 3
},
  {
    pregunta: "2. Es un conjunto de datos significativos y pertinentes que describan sucesos o entidades",
    opciones: [
      "a. Byte",
      "b. Sistema",
      "c. Datos",
      "d. Computador"
    ],
    correcta: 2
  },
  {
    pregunta: "3. Es la estructura física del computador, es decir a su parte tangible:",
    opciones: [
      "a. Hardware.",
      "b. Software.",
      "c. Firmware.",
      "d. Modem."
    ],
    correcta: 0
  },
  {
    pregunta: "4. ¿Qué puede decir que es el: MS-DOS, WINDOWS 95, WINDOWS 98 son?",
    opciones: [
      "a. Hardware.",
      "b. Sistema Operativo.",
      "c. Firmware.",
      "d. Modem."
    ],
    correcta: 1
  },
  {
    pregunta: "5. Un Scanner es un dispositivo de:",
    opciones: [
      "a. Almacenamiento.",
      "b. Salida.",
      "c. Entrada",
      "d. Lectura"
    ],
    correcta: 2
  },
  {
    pregunta: "6. Cuál de los siguientes ejemplos representa un tipo de impresora:",
    opciones: [
      "a. Matricial.",
      "b. Lectora.",
      "c. Inyectable.",
      "d. Ninguna."
    ],
    correcta: 0
  },
  {
    pregunta: "7. La Memoria ROM es una memoria de :",
    opciones: [
      "a. Escritura.",
      "b. Lectura.",
      "c. Lectura/Escritura.",
      "d. Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "8. En informática la unidad más pequeña de información es :",
    opciones: [
      "a. Bit.",
      "b. Byte.",
      "c. Carácter.",
      "d. Ninguna de las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "9. ¿Cuál de las siguientes opciones se le considera como el cerebro del Computador?",
    opciones: [
      "a. CPU",
      "b. Led",
      "c. Transistor",
      "d. Microprocesador"
    ],
    correcta: 0
  },
  {
    pregunta: "10. ¿Qué es un computador?",
    opciones: [
      "a. Maquina eléctrica.",
      "b. Programa editor de texto.",
      "c. Maquina electromagnética.",
      "d. Maquina electrónica."
    ],
    correcta: 3
  },
  {
    pregunta: "11. Cuál de las siguientes opciones es considerada como una Memoria solo de lectura:",
    opciones: [
      "a. Disco duro",
      "b. Cd-Rom",
      "c. Procesador",
      "d. Memory flash"
    ],
    correcta: 1
  },
  {
    pregunta: "12. Cuál de las siguientes opciones es una unidad de salida de información.",
    opciones: [
      "a. Micrófono",
      "b. Web Cam",
      "c. Escáner",
      "d. Impresora"
    ],
    correcta: 3
  },
  {
    pregunta: "13. Cuál de los siguientes grupos de teclas están representadas por letras y símbolos.",
    opciones: [
      "a. Numéricas",
      "b. Alfanuméricas",
      "c. Función",
      "d. Especiales"
    ],
    correcta: 1
  },
  {
    pregunta: "14. Las teclas de función en el teclado son aquellas que van desde:",
    opciones: [
      "a. F1…F15",
      "b. F2…F5",
      "c. F1…F12",
      "d. F3, F4, F5 y F10"
    ],
    correcta: 2
  },
  {
    pregunta: "15. ¿Cuántos Transistores poseen los procesadores actuales? (Pentium 4)",
    opciones: [
      "a. 5 mil transistores",
      "b. 32 millones de transistores",
      "c. 6 transistores",
      "d. 5.5 millones de transistores"
    ],
    correcta: 1
  },
  {
    pregunta: "16. ¿Qué podemos encontrar en el escritorio de Windows?",
    opciones: [
      "a. Barra de herramientas",
      "b. Barra de tareas",
      "c. Barra de título",
      "d. Barra de menú"
    ],
    correcta: 1
  },
  {
    pregunta: "17. ¿Cuál de las siguientes características se debe considerar para adquirir un computador?",
    opciones: [
      "a. Color del case",
      "b. Tamaño del Monitor",
      "c. Tipo de teclado",
      "d. Velocidad del procesador"
    ],
    correcta: 3
  },
  {
    pregunta: "18. ¿Cuál de las siguientes opciones tiene como objetivo responder inquietudes acerca del sistema operativo Windows?",
    opciones: [
      "a. Mensajería de Windows",
      "b. Ayuda de Windows",
      "c. Búsqueda de Windows",
      "d. Panel de Control"
    ],
    correcta: 1
  },
  {
    pregunta: "19. ¿Qué opción me permite minimizar una ventana en Windows?",
    opciones: [
      "a. Doble pestaña",
      "b. Cuadro con X en rojo",
      "c. Cuadro con _",
      "d. Cuandro cin una pestaña"
    ],
    correcta: 2
  },
  {
    pregunta: "20. ¿Cuál es la opción que me permite cambiar el fondo del escritorio de Windows?",
    opciones: [
      "a. Apariencia de Pantalla",
      "b. Configuración de Pantalla",
      "c. Sistema",
      "d. Propiedades de Pantalla"
    ],
    correcta: 3
  },{
    pregunta: "21. ¿Donde encontramos las opciones de: todos los programas, mi música, mis videos, mis imágenes, archivos, juegos?",
    opciones: [
      "a. Mi PC",
      "b. Barra de Tareas",
      "c. Botón Inicio",
      "d. Iconos del Escritorio"
    ],
    correcta: 2
  },
  {
    pregunta: "22. Si queremos que un fondo de escritorio se repita en toda la pantalla hasta que se complete debemos aplicar:",
    opciones: [
      "a. Posición/Centrada",
      "b. Posición/Mosaico",
      "c. Posición/Expandida",
      "d. Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "23. En que opción de las propiedades de pantalla de puede cambiar los colores de ventanas y botones:",
    opciones: [
      "a. Escritorio",
      "b. Configuración",
      "c. Apariencia",
      "d. Temas"
    ],
    correcta: 2
  },
  {
    pregunta: "24. ¿Cuál de las siguientes opciones se encuentra en la lista de Protectores de Pantalla?",
    opciones: [
      "a. Marquesina",
      "b. Escritorio",
      "c. Clásico de Windows",
      "d. Estilo XP"
    ],
    correcta: 0
  },
  {
    pregunta: "25. De donde sujetamos una ventana de Windows para moverla:",
    opciones: [
      "a. Barra de menús",
      "b. Barra de estándar",
      "c. Barra de título",
      "d. Cualquiera de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "26. Para modificar el tamaño de una ventana de Windows, esta previamente tiene que estar en estado de:",
    opciones: [
      "a. Maximizada",
      "b. Restaurada",
      "c. Minimizada",
      "d. Cerrada"
    ],
    correcta: 1
  },
  {
    pregunta: "27. Cuál de las siguientes opciones no es parte del cuadro de dialogo Apagar Equipo:",
    opciones: [
      "a. Apagar",
      "b. Reiniciar",
      "c. Suspender",
      "d. Ejecutar"
    ],
    correcta: 3
  },
  {
    pregunta: "28. Cuál de las siguientes opciones de combinación de teclas permite ingresar al Explorador de Windows:",
    opciones: [
      "a. Windows + E",
      "b. Windows + X",
      "c. Windows + R",
      "d. Windows + P"
    ],
    correcta: 0
  },
  {
    pregunta: "29. Usando el botón de vistas de la barra de herramientas del explorador de Windows, donde aparecen los iconos uno debajo de otro con algunas propiedades como tamaño, tipo, fecha de modificación es porque se está usando la opción.",
    opciones: [
      "a. Iconos",
      "b. Mosaicos",
      "c. Detalles",
      "d. Lista"
    ],
    correcta: 2
  },
  {
    pregunta: "30. Uno de los métodos para acceder a cambiar la fecha y la hora del sistema es.",
    opciones: [
      "a. Inicio / Mi PC / Fecha y Hora",
      "b. Clic derecho escritorio / Propiedades / Fecha y Hora",
      "c. Inicio / Panel de Control / Fecha y Hora",
      "d. Inicio / Buscar / Fecha y hora"
    ],
    correcta: 2
  },
  {
    pregunta: "31. ¿Cuál de los siguientes Sistemas Operativos es un Plug and Play?",
    opciones: [
      "a. DOS",
      "b. Pascal",
      "c. Windows",
      "d. Ninguno de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "32. ¿Cuál de estas opciones recopila todos los archivos y carpetas eliminadas?",
    opciones: [
      "a. Explorador de Windows",
      "b. Mis documentos",
      "c. Papelera de reciclaje",
      "d. Mi PC"
    ],
    correcta: 2
  },
  {
    pregunta: "33. ¿Cuál de esta combinación de teclas nos sirve para seleccionar todo el texto?",
    opciones: [
      "a. Ctrl + X",
      "b. Ctrl + E",
      "c. Alt + C",
      "d. Ctrl + Y"
    ],
    correcta: 1
  },
  {
    pregunta: "34. ¿Cuál de los siguientes enunciados no forma parte del escritorio de Windows?",
    opciones: [
      "a. Iconos",
      "b. Barra de tareas",
      "c. Fondo de pantallas",
      "d. Barra de Dirección"
    ],
    correcta: 3
  },
  {
    pregunta: "35. ¿Cuál de los siguientes valores representa el kilobyte?",
    opciones: [
      "a. 1024 bytes",
      "b. 1024 Mb",
      "c. 1024 Gb",
      "d. 1024 bits"
    ],
    correcta: 3
  },
  {
    pregunta: "36. ¿Cuál de los siguientes enunciados conceptualiza lo que es un archivo?",
    opciones: [
      "a. Sitio para almacenar la información",
      "b. Documento que se abre con un programa",
      "c. Dispositivo de entrada",
      "d. Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "37. ¿Cuál de los siguientes ejemplos no es un dispositivo de entrada y salida de información?",
    opciones: [
      "a. CD Writer",
      "b. Diskette",
      "c. Flash memory",
      "d. CD Rom"
    ],
    correcta: 0
  },
  {
    pregunta: "38. Cuál de las siguientes medidas representa la capacidad de un Disco Duro.",
    opciones: [
      "a. De 300 a 500 Mb",
      "b. De 10 a 500 Gb",
      "c. De 1000 a 5000 Mb",
      "d. Desde 1 GB"
    ],
    correcta: 1
  },
  {
    pregunta: "39. Cuál de las siguientes medidas representa la capacidad de un CDROM",
    opciones: [
      "a. De 300 a 500 Mb",
      "b. 1,44 Mb",
      "c. Desde 1 GB",
      "d. De 700 a 800 Mb"
    ],
    correcta: 3
  },
  {
    pregunta: "40. Para cerrar una ventana debemos dar clic sobre:",
    opciones: [
      "a. Botón Restaurar.",
      "b. Word.",
      "c. Buscar.",
      "d. Botón cerrar."
    ],
    correcta: 3
  },
  {
    pregunta: "41. La opción de búsqueda nos permite.",
    opciones: [
      "a. Abrir archivos",
      "b. Encontrar archivos según características.",
      "c. Guardar archivos",
      "d. Salir"
    ],
    correcta: 1
  },
  {
    pregunta: "42. ¿Cuál de las siguientes opciones permite abrir programas ejecutables?",
    opciones: [
      "a. Buscar",
      "b. Configurar",
      "c. Ejecutar",
      "d. Panel de Control"
    ],
    correcta: 2
  },
  {
    pregunta: "43. Cuál de las siguientes componentes de una ventana contienen botones que agilitan las operaciones",
    opciones: [
      "a. Barra de estado",
      "b. Banda de Opciones",
      "c. Barra de Titulo",
      "d. Barra de Zoom"
    ],
    correcta: 1
  },
  {
    pregunta: "44. Cuál de los siguientes botones permite ir hacia la carpeta antecedente.",
    opciones: [
      "a. Circulo con flecha hacia derecha",
      "b. Carpeta con flecha verde hacia arriba",
      "c. Busqueda con lupa",
      "d. Carpetas"
    ],
    correcta: 1
  },
  {
    pregunta: "45. Las teclas Ctrl + C nos permite.",
    opciones: [
      "a. Mazimizar",
      "b. Ver iconos",
      "c. Apagar",
      "d. Copiar"
    ],
    correcta: 3
  },
  {
    pregunta: "46. ¿Cuál de las siguientes herramientas de Paint nos permite seleccionar un color?",
    opciones: [
      "a. Relleno",
      "b. Selector de color",
      "c. Borrador",
      "d. Sprite"
    ],
    correcta: 1
  },
  {
    pregunta: "47. En un programa de Office la barra de titulo nos muestra",
    opciones: [
      "a. Acceso directo",
      "b. Los menús",
      "c. El nombre de la carpeta",
      "d. La fecha y hora"
    ],
    correcta: 2
  },
  {
    pregunta: "48. ¿Cuál de las siguientes teclas nos permite Cambiar el Nombre a los archivos o carpetas?",
    opciones: [
      "a. F3",
      "b. F2",
      "c. F6",
      "d. F4"
    ],
    correcta: 1
  },
  {
    pregunta: "49. Una vez eliminados archivos y carpetas con que opción podemos recuperarlos:",
    opciones: [
      "a. Restaurar",
      "b. Recuperar",
      "c. Deshacer",
      "d. Rehacer"
    ],
    correcta: 0
  },
  {
    pregunta: "50. Para cambiar la configuración del computador desde donde se lo puede realizar.",
    opciones: [
      "a. Open office",
      "b. Mi PC",
      "c. Explorador",
      "d. Panel de Control"
    ],
    correcta: 3
  },
  {
    pregunta: "51. ¿Cuál de los siguientes enunciados es un accesorio de Windows?",
    opciones: [
      "a. Word",
      "b. Traductor",
      "c. Paint",
      "d. Escritorio"
    ],
    correcta: 2
  },
  {
    pregunta: "52. ¿Cuál es el accesorio que nos permite realizar operaciones matemáticas?",
    opciones: [
      "a. Word",
      "b. Panel de control",
      "c. Barra de titulo",
      "d. Calculadora"
    ],
    correcta: 3
  },
  {
    pregunta: "53. ¿Cuál de las siguientes opciones descritas abajo es la extensión para los archivos de Paint?",
    opciones: [
      "a. dic",
      "b. rtf",
      "c. bmp",
      "d. ima"
    ],
    correcta: 2
  },
  {
    pregunta: "54. ¿Cuál es la primera pantalla que se carga al momento de prender el computador?",
    opciones: [
      "a. Explorador",
      "b. Protector de Pantalla",
      "c. Escritorio",
      "d. CPU"
    ],
    correcta: 2
  },
  {
    pregunta: "55. ¿Cuál es el menú de Paint que permite activar o desactivar las barras?:",
    opciones: [
      "a. Ver",
      "b. Herramientas",
      "c. Archivo",
      "d. Edición"
    ],
    correcta: 0
  },
  {
    pregunta: "56. Si usted desearía crear una carpeta en el Explorador de Windows lo debería hacer desde el menú:",
    opciones: [
      "a. Herramientas",
      "b. Edición",
      "c. Archivo",
      "d. Ver"
    ],
    correcta: 2
  },
  {
    pregunta: "57. ¿Qué tecla nos permite capturar pantallas activas?",
    opciones: [
      "a. Insert",
      "b. Bloq Num",
      "c. Impr Pant",
      "d. Alt Gr"
    ],
    correcta: 2
  },
  {
    pregunta: "58. ¿Cuál de los siguientes enunciados no es parte del Sistema Operativo Windows XP?",
    opciones: [
      "a. Usuarios",
      "b. Escritorio",
      "c. Xara 3D",
      "d. Mi PC"
    ],
    correcta: 0
  },
  {
    pregunta: "59. ¿En cuál de las siguientes opciones se almacena todos los documentos de texto predeterminadamente?",
    opciones: [
      "a. Mi PC",
      "b. Mis Imágenes",
      "c. Escritorio",
      "d. Mis Documentos"
    ],
    correcta: 3
  },
  {
    pregunta: "60. ¿Qué programa de Windows le permite reproducir música?",
    opciones: [
      "a. Scandisk",
      "b. Paint",
      "c. Reproductor de Windows",
      "d. Movie Maker"
    ],
    correcta: 2
  },
  {
    pregunta: "61. ¿Cuál de estas combinaciones de teclas en Word 2007 nos permite deshacer una acción?",
    opciones: [
      "a. Ctrl + R",
      "b. Ctrl + G",
      "c. Ctrl + Z",
      "d. Ctrl + Y"
    ],
    correcta: 2
  },
  {
    pregunta: "62. Para ingresar a Word 2007 se siguen los siguientes pasos:",
    opciones: [
      "a. Inicio/Programas/Accesorios.",
      "b. Inicio/Programas/Microsoft Encarta.",
      "c. Inicio/Programas/Microsoft Office.",
      "d. Inicio/Mis Documentos."
    ],
    correcta: 2
  },
  {
    pregunta: "63. Para guardar un archivo en Word 2007 se siguen los siguientes pasos:",
    opciones: [
      "a. Botón Office/Guardar…",
      "b. Opción Edición/Guardar como…",
      "c. Opción Vista/Guardar…",
      "d. Opción Guardar/Guardar como…"
    ],
    correcta: 0
  },
  {
    pregunta: "64. Barra que no corresponde a Word 2007",
    opciones: [
      "a. Barra Dirección.",
      "b. Banda de Opciones.",
      "c. Barra de Estado.",
      "d. Barra de Titulo."
    ],
    correcta: 0
  },
  {
    pregunta: "65. El Opción Inicio nos permite dar sangría al texto a través de la sección:",
    opciones: [
      "a. Referencia",
      "b. Imagen",
      "c. Párrafo",
      "d. Fuente"
    ],
    correcta: 2
  },
  {
    pregunta: "66. ¿Qué tecla nos permite avanzar páginas en Word?",
    opciones: [
      "a. Re Pag.",
      "b. Inicio",
      "c. Av Pag",
      "d. Shift"
    ],
    correcta: 2
  },
  {
    pregunta: "67. ¿Qué teclas cortas nos permiten guardar un archivo?",
    opciones: [
      "a. Ctrl + A",
      "b. Ctrl + G",
      "c. Ctrl + N",
      "d. Ctrl + C"
    ],
    correcta: 1
  },
  {
    pregunta: "68. ¿Qué teclas cortas nos permiten imprimir un archivo?",
    opciones: [
      "a. Ctrl + P",
      "b. Ctrl + I",
      "c. Ctrl + M",
      "d. Ctrl + R"
    ],
    correcta: 0
  },
  {
    pregunta: "69. ¿Qué opción utilizamos para Insertar hojas en un documento de Word 2007?",
    opciones: [
      "a. Salto de Fila.",
      "b. Salto de Columna.",
      "c. Salto de Ajuste de Texto.",
      "d. Salto de Página."
    ],
    correcta: 3
  },
  {
    pregunta: "70. ¿Qué opción de teclas rápidas utilizamos para Reemplazar una palabra?",
    opciones: [
      "a. Ctrl + R",
      "b. Ctrl + L",
      "c. Alt + R",
      "d. Ctrl + B"
    ],
    correcta: 1
  },
  {
    pregunta: "71. ¿Qué opción utilizamos para Insertar una imagen en Word 2007?",
    opciones: [
      "a. Banda de opciones /Insertar/Imagen.",
      "b. Barra de estado/imagen.",
      "c. Barra menús/insertar/imagen",
      "d. Mis Documentos"
    ],
    correcta: 0
  },
  {
    pregunta: "72. ¿Qué opción nos permite poner símbolos al Inicio de cada línea en Word 2007?",
    opciones: [
      "a. Banda de Opciones/formato/numeración y viñetas/estilos",
      "b. Banda de Opciones /insertar/numeración y viñetas/símbolo",
      "c. Banda de Opciones /formato/numeración y viñetas/números",
      "d. Banda de Opciones /inicio/párrafo/viñetas"
    ],
    correcta: 3
  },
  {
    pregunta: "73. ¿Qué opción nos permite cambiar márgenes a la hoja en Word 2007?",
    opciones: [
      "a. Diseño de pagina/Vista Preliminar",
      "b. Diseño/Pagina",
      "c. Diseño de Pagina/Configurar Pagina",
      "d. Menú Herramientas/Control de Cambios"
    ],
    correcta: 2
  },
  {
    pregunta: "74. ¿Qué nos permite hacer el encabezado y Pie de página?",
    opciones: [
      "a. Insertar numero en una sola página.",
      "b. Insertar numeración y viñetas en la última página.",
      "c. Insertar numero en la hoja del centro.",
      "d. Insertar texto en la parte superior e inferior de todas las páginas"
    ],
    correcta: 3
  },
  {
    pregunta: "75. ¿Qué objeto está conformado por filas y columnas, y se lo puede insertar desde la opción Insertar de la Banda de Opciones en Word 2007?",
    opciones: [
      "a. Columnas",
      "b. Tabla",
      "c. Plantilla",
      "d. Cuadrados."
    ],
    correcta: 1
  },
  {
    pregunta: "76. La sección fuente en Word 2007 está en:",
    opciones: [
      "a. Opción Inicio.",
      "b. Opción Insertar.",
      "c. Opción Herramientas.",
      "d. Opción Vista."
    ],
    correcta: 0
  },
  {
    pregunta: "77. Para activar la Ayuda de Word 2007: debemos pulsar la tecla o teclas:",
    opciones: [
      "a. Alt.+ U",
      "b. Alt.+ A",
      "c. Alt.+ Y",
      "d. F1"
    ],
    correcta: 3
  },
  {
    pregunta: "78. Para colocar un texto en formato Cursiva desde teclado utilizamos :",
    opciones: [
      "a. Ctrl. - N",
      "b. Ctrl. - K",
      "c. Ctrl. - Y",
      "d. Ctrl. - Z"
    ],
    correcta: 1
  },
  {
    pregunta: "79. Para poner Negrita a un texto en Word 2007 se utiliza las teclas cortas:",
    opciones: [
      "a. Ctrl. - N",
      "b. Ctrl. - K",
      "c. Ctrl. - Y",
      "d. Ctrl. - Z"
    ],
    correcta: 0
  },
  {
    pregunta: "80. ¿Cuál es la opción rápida desde teclado para ir a Buscar textos en un documento de Word 2007?",
    opciones: [
      "a. Ctrl. - G",
      "b. Ctrl. - H",
      "c. Ctrl. - B",
      "d. Ctrl. - X"
    ],
    correcta: 2
  },
  {
    pregunta: "81. ¿Cuáles son los textos que se repiten en todo el documento, que se ubican en la parte superior y en pie?",
    opciones: [
      "a. Encabezado y Pie de página",
      "b. Titulo",
      "c. WordArt",
      "d. Números de Página"
    ],
    correcta: 0
  },
  {
    pregunta: "82. ¿Cuál de las siguientes opciones permite poner diferente espacio vertical entre las líneas en Word 2007?",
    opciones: [
      "a. Justificación",
      "b. Viñeta",
      "c. Interlineado",
      "d. Estilos"
    ],
    correcta: 2
  },
  {
    pregunta: "83. Para poder salir con teclas cortas de Word 2007 utilizo las teclas:",
    opciones: [
      "a. Alt + F5",
      "b. Ctrl + F5",
      "c. Shift + F5",
      "d. Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "84. Para colocar sangría dentro de un documento utilizo la tecla:",
    opciones: [
      "a. Enter",
      "b. Tab",
      "c. Barra Espaciadora",
      "d. Escape"
    ],
    correcta: 1
  },
  {
    pregunta: "85. Para acceder a los símbolos ubicados en la parte superior del teclado se utiliza la tecla:",
    opciones: [
      "a. Alt",
      "b. Ctrl",
      "c. Shift",
      "d. Ninguna de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "86. ¿Cuál es la opción que nos permite cambiar la orientación de la hoja en Word 2007?",
    opciones: [
      "a. Papel.",
      "b. Diseño.",
      "c. Diseño de pagina /Configurar pagina.",
      "d. Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "87. Nos permite crear títulos y rótulos vistosos para nuestros documentos.",
    opciones: [
      "a. Publisher",
      "b. Paint",
      "c. WordArt",
      "d. PowerPoint"
    ],
    correcta: 2
  },
  {
    pregunta: "88. Nos permite Insertar una imagen prediseñada en Word 2007:",
    opciones: [
      "a. Microsoft Office.",
      "b. Banda de opciones /insertar/imagen prediseñadas.",
      "c. Barra menús/insertar/imagen/imágenes prediseñadas",
      "d. Mis Documentos"
    ],
    correcta: 1
  },
  {
    pregunta: "89. El Zoom en Word 2007 permite:",
    opciones: [
      "a. Hace que en la pantalla se vea una sola página",
      "b. Muestra la pantalla de vista preliminar sin reglas.",
      "c. Permite fijar diferentes tamaños del documento.",
      "d. Ninguno."
    ],
    correcta: 2
  },
  {
    pregunta: "90. Es el editor de texto más potente del mercado que permite crear documentos para todo tipo de necesidades tanto personales como institucionales.",
    opciones: [
      "a. Excel",
      "b. Word 2007",
      "c. Publisher",
      "d. Word Pad"
    ],
    correcta: 1
  },
  {
    pregunta: "91. ¿Cuál de estos es Elemento de la pantalla de Word 2007?",
    opciones: [
      "a. Software",
      "b. Botón Inicio",
      "c. Barra de menús",
      "d. Todos los programas"
    ],
    correcta: 2
  },
  {
    pregunta: "92. Aquí se encuentra el nombre del documento, el nombre del programa, los iconos minimizar, maximizar y cerrar.",
    opciones: [
      "a. Formato",
      "b. Archivo",
      "c. Barra de menús",
      "d. Barra de título"
    ],
    correcta: 3
  },
  {
    pregunta: "93. ¿Cuál es la tecla que nos permite irnos al fin de la línea?",
    opciones: [
      "a. Ctrl + E",
      "b. Alt + A",
      "c. Ctrl + B",
      "d. Ctrl + A"
    ],
    correcta: 1
  },
  {
    pregunta: "94. ¿Cuál es la extensión de los archivos de Word 2007?",
    opciones: [
      "a. .rtf",
      "b. .xls",
      "c. .docx",
      "d. .wor"
    ],
    correcta: 2
  },
  {
    pregunta: "95. Teclas cortas para pegar un texto Seleccionado en Word 2007.",
    opciones: [
      "a. Ctrl + X",
      "b. Ctrl + C",
      "c. Alt + C",
      "d. Ctrl + V"
    ],
    correcta: 3
  },
  {
    pregunta: "96. Las teclas rápidas para justificar un texto son.",
    opciones: [
      "a. Ctrl + Q",
      "b. Ctrl + J",
      "c. Ctrl. + T",
      "d. Ctrl + D"
    ],
    correcta: 1
  },
  {
    pregunta: "97. Cuál de estos elementos se los puede colocar al principio de una línea para resaltar el contenido de un párrafo",
    opciones: [
      "a. Esquema Numerado",
      "b. Símbolo",
      "c. Números",
      "d. Viñetas"
    ],
    correcta: 3
  },
  {
    pregunta: "98. Insertar una forma en Word 2007",
    opciones: [
      "a. Banda de Opciones/Ilustraciones",
      "b. Banda de Opciones/Tablas",
      "c. Barra menús/insertar/Imágenes",
      "d. Barra de gráficos / SmartArt"
    ],
    correcta: 0
  },
  {
    pregunta: "99. Que icono se utiliza para Imprimir un documento desde la barra de herramientas de acceso rápido",
    opciones: [
      "a. Imprimir",
      "b. Volver",
      "c. Guardar",
      "d. Nuevo documento"
    ],
    correcta: -1
  },
  {
    pregunta: "100. La imagen muestra los botones de Minimizar, Maximizar/Restaurar y Cerrar de una ventana. Estos botones se encuentran en la Barra de Título de una aplicación.",
    opciones: [
      "a. Barra de Título",
      "b. Opción Vista.",
      "c. Banda de Opciones",
      "d. Barra Estándar"
    ],
    correcta: 0
  },
  {
    pregunta: "101. Las teclas rápidas para subrayar un texto son.",
    opciones: [
      "a. Ctrl + N",
      "b. Ctrl + S",
      "c. Ctrl. + T",
      "d. Ctrl + D"
    ],
    correcta: 1
  },
  {
    pregunta: "102. Qué sección nos permite cambiar el tipo de letra y el tamaño de la misma",
    opciones: [
      "a. Inicio/Fuente",
      "b. Inicio/Párrafo",
      "c. Inicio/Vista",
      "d. Barra Formato"
    ],
    correcta: 0
  },
  {
    pregunta: "103. Aparece a la derecha de la pantalla permite movilizarse en el documento",
    opciones: [
      "a. Barra de desplazamiento",
      "b. Barra de Estado",
      "c. Acceso Rápido",
      "d. Barra de Tareas"
    ],
    correcta: 0
  },
  {
    pregunta: "104. En que opción encontramos la opción para poner borde a la página:",
    opciones: [
      "a. Opción Inicio.",
      "b. Opción Insertar.",
      "c. Opción Diseño De Pagina.",
      "d. Opción Vista"
    ],
    correcta: 2
  },
  {
    pregunta: "105. ¿Cuáles son las teclas que nos permiten movilizarse por la hoja?",
    opciones: [
      "a. Teclas de flechas",
      "b. Barra de Desplazamiento",
      "c. Teclas Av pag y Re pag",
      "d. Inicio y Fin"
    ],
    correcta: 0
  },
  {
    pregunta: "106. En que opción encontramos el comando para cambiar de mayúsculas a minúsculas:",
    opciones: [
      "a. Opción Inicio.",
      "b. Opción Insertar.",
      "c. Opción Diseño de Pagina.",
      "d. Opción Vista"
    ],
    correcta: 0
  },
  {
    pregunta: "107. ¿Qué opción nos permite alinear la imagen según el texto?",
    opciones: [
      "a. Comprimir imagen",
      "b. Ajuste de texto",
      "c. Formato de imagen",
      "d. Restablecer imagen"
    ],
    correcta: 2
  },
  {
    pregunta: "108. Permite tener la primera letra de un párrafo más llamativa y grande que el resto en Word 2007",
    opciones: [
      "a. Letra Capital",
      "b. WordArt",
      "c. Estilos y Formatos",
      "d. Dirección del texto"
    ],
    correcta: 0
  },
  {
    pregunta: "109. Si utilizamos las teclas Ctrl + Scroll, estamos usando:",
    opciones: [
      "a. Girar",
      "b. Vista preliminar",
      "c. Zoom",
      "d. Vistas"
    ],
    correcta: 2
  },
  {
    pregunta: "110. ¿Cuál de los siguientes iconos se utiliza para copiar el formato (estilo de texto, tamaño, color, etc.) de un elemento y aplicarlo a otro?",
    opciones: [
      "a. Un icono de Guardar (por ejemplo, un disquete o una nube con una flecha hacia abajo)",
      "b. Un icono de Pincel de formato (el pincel que se muestra en la imagen)",
      "c. un icono de Cortar (por ejemplo, una tijera o un icono de documento con líneas punteadas y una flecha)",
      "d. un icono de Pegar (por ejemplo, un portapapeles con un documento o una flecha hacia abajo)"
    ],
    correcta: 1
  },
  {
    pregunta: "111. En que menú encontramos la opción ortografía y gramática",
    opciones: [
      "a. Opción Revisar.",
      "b. Opción Insertar.",
      "c. Opción Diseño De Pagina.",
      "d. Opción Vista"
    ],
    correcta: 0
  },
  {
    pregunta: "112. ¿Qué tipo de vista es aquella en la que se pueden visualizar los límites de la hoja en Word 2007?",
    opciones: [
      "a. Normal",
      "b. Esquema",
      "c. Web",
      "d. Impresión"
    ],
    correcta: 3
  },
  {
    pregunta: "113. ¿Cuál de los siguientes iconos en Microsoft Word 2007 (o versiones posteriores) se utiliza para cambiar el color de la fuente (el color del texto mismo)?",
    opciones: [
      "a. Un icono que representa un Resaltador de texto (como el primer o tercer icono de la imagen original: ab con un pincel amarillo o el pincel solo).",
      "b. Un icono que representa Color de fuente (una letra 'A' mayúscula con una barra de color debajo, como el segundo icono de la imagen original).",
      "c. Un icono que representa Negrita (una 'N' o 'B').",
      "d. Un icono que representa Color de sombreado (un cubo de pintura o un icono de fondo de tabla)."
    ],
    correcta: 1
  },
  {
    pregunta: "114. Que herramienta nos permite Crear un organigrama en Word 2007",
    opciones: [
      "a. Smart Art",
      "b. Autoformas",
      "c. Gráfico",
      "d. Diagrama"
    ],
    correcta: 0
  },
  {
    pregunta: "115. La herramienta columnas la encontramos en la opción…. De Word 2007:",
    opciones: [
      "a. Vista",
      "b. Diseño de Página",
      "c. Insertar",
      "d. Referencias"
    ],
    correcta: 1
  },
  {
    pregunta: "116. ¿Qué opción en Word 2007 me permite tener una vista previa de las hojas del documento en la parte izquierda?:",
    opciones: [
      "a. Panel de Tareas",
      "b. Regla",
      "c. Mapa del documento",
      "d. Vistas en miniatura"
    ],
    correcta: 2
  },
  {
    pregunta: "117. Qué actividad podemos hacer en una tabla hecha en Word 2007:",
    opciones: [
      "a. Bloquearla",
      "b. Protegerla",
      "c. Ordenarla",
      "d. Ninguna de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "118. La opción Guardar como en Word 2007 nos permite:",
    opciones: [
      "a. Actualizar un documento",
      "b. Abrir un documento",
      "c. Guardar como un nuevo documento",
      "d. Remplazar un documento"
    ],
    correcta: 2
  },
  {
    pregunta: "119. Que puedo insertar en una tabla de Word 2007:",
    opciones: [
      "a. Columnas hacia abajo",
      "b. Columnas hacia arriba",
      "c. Filas a la izquierda",
      "d. Columnas a la derecha"
    ],
    correcta: 3
  },
  {
    pregunta: "120. El programa Power Point 2007 trabaja con:",
    opciones: [
      "a. Diapositivas",
      "b. Documentos",
      "c. Libros",
      "d. Hojas"
    ],
    correcta: 0
  },
  {
    pregunta: "121. Que extensión tienen los documentos de Poder Point:",
    opciones: [
      "a. .doc",
      "b. .xls",
      "c. .rtf",
      "d. .pptx"
    ],
    correcta: 3
  },
  {
    pregunta: "122. Con que tecla puede visualizar la presentación en Poder Point 2007:",
    opciones: [
      "a. F3",
      "b. F4",
      "c. F5",
      "d. F2"
    ],
    correcta: 2
  },
  {
    pregunta: "123. En Power Point puede elegir a cada diapositiva diferentes:",
    opciones: [
      "a. Diseños",
      "b. Márgenes",
      "c. Orientación",
      "d. Tamaños"
    ],
    correcta: 0
  },
  {
    pregunta: "124. Para insertar una diapositiva en Poder Point 2007 utilizo:",
    opciones: [
      "a. Ctrl + Enter",
      "b. Ctrl + M",
      "c. Ctrl + D",
      "d. Ctrl + N"
    ],
    correcta: 1
  },
  {
    pregunta: "125. El efecto que se realiza al ingreso de una diapositiva Power Point 2007 se llama:",
    opciones: [
      "a. Animación",
      "b. Efecto",
      "c. Movimiento",
      "d. Transición"
    ],
    correcta: 3
  },
  {
    pregunta: "126. Con que tecla salgo de la presentación de Poder Point 2007:",
    opciones: [
      "a. Enter",
      "b. Alt",
      "c. Esc",
      "d. Ctrl"
    ],
    correcta: 2
  },
  {
    pregunta: "127. ¿Cuál de los siguientes objetos no se puede insertar en una presentación de Power Point 2007?:",
    opciones: [
      "a. Calculadora",
      "b. Imágenes",
      "c. Videos",
      "d. Películas"
    ],
    correcta: 0
  },
  {
    pregunta: "128. Un hipervínculo es:",
    opciones: [
      "a. Texto",
      "b. Formato",
      "c. Operación",
      "d. Vinculo"
    ],
    correcta: 3
  },
  {
    pregunta: "129. Fondo predeterminado que se utiliza para las diapositivas en Power Point 2007 se llama:",
    opciones: [
      "a. Estilos",
      "b. Diseños",
      "c. Fondos",
      "d. Gráficos"
    ],
    correcta: 2
  },
  {
    pregunta: "130. Para eliminar una diapositiva en Power Point 2007 utilizó:",
    opciones: [
      "a. Tecla Supr",
      "b. Tecla Retroceso",
      "c. Tecla Enter",
      "d. Tecla Shift"
    ],
    correcta: 0
  },
  {
    pregunta: "131. Para seleccionar varias diapositivas utilizo la tecla:",
    opciones: [
      "a. Alt + flechas",
      "b. Enter + flechas",
      "c. Shift + flechas",
      "d. Ctrl + flechas"
    ],
    correcta: 2
  },
  {
    pregunta: "132. ¿Qué opción me aparece para personalizar animación a mis objetos en Power Point 2007?",
    opciones: [
      "a. Utilizar efecto",
      "b. Agregar Efecto",
      "c. Efectos",
      "d. Crear Efecto"
    ],
    correcta: 2
  },
  {
    pregunta: "133. Si deseo poner un mismo fondo a todas las diapositivas en Power Point 2007 que opción debo elegir:",
    opciones: [
      "a. Aplicar a todo",
      "b. Aplicar",
      "c. Aceptar",
      "d. Cancelar"
    ],
    correcta: 0
  },
  {
    pregunta: "134. Para cortar diapositivas en Poder Point 2007 utilizo la tecla:",
    opciones: [
      "a. Ctrl + X",
      "b. Ctrl + Y",
      "c. Ctrl + Z",
      "d. Ctrl + C"
    ],
    correcta: 0
  },
  {
    pregunta: "135. Para editar el ingreso a las diapositivas de Poder Point 2007 y su entorno utilizamos:",
    opciones: [
      "a. Documentos",
      "b. Plantilla",
      "c. Diseño",
      "d. Patrón"
    ],
    correcta: 3
  },
  {
    pregunta: "136. Se puede escribir un texto de apoyo para la presentación en Poder Point 2007",
    opciones: [
      "a. Panel de tareas",
      "b. Área de Notas",
      "c. Área de Esquemas",
      "d. Área de Fichas"
    ],
    correcta: 2
  },
  {
    pregunta: "137. En qué tipo de vista en Poder Point 2007 podemos modificar las diapositivas:",
    opciones: [
      "a. Vista Normal",
      "b. Clasificador de diapositivas",
      "c. Vista en miniatura",
      "d. Vista presentación"
    ],
    correcta: 0
  },
  {
    pregunta: "138. Que objetos no se encuentran en la barra de dibujo de Poder Point 2007 :",
    opciones: [
      "a. Autoformas",
      "b. Imagen",
      "c. Video",
      "d. WordArt"
    ],
    correcta: 2
  },
  {
    pregunta: "139. Al insertar una animación en Poder Point 2007 por defecto aparecerá cuando:",
    opciones: [
      "a. Todos los efectos al mismo tiempo.",
      "b. Después del primer efecto.",
      "c. Automáticamente mientras aparece la diapositiva.",
      "d. Al hacer clic."
    ],
    correcta: 2
  },
  {
    pregunta: "140. Que opción nos permite ingresar el tiempo para que cambie de diapositiva:",
    opciones: [
      "a. Presentación con diapositivas /Efectos",
      "b. Presentación con diapositivas/ Configurar",
      "c. Presentación con diapositivas /Personaliza",
      "d. Presentación con diapositivas /Avanzada"
    ],
    correcta: 3
  },
  {
    pregunta: "141. En que opción encontramos el fondo de diapositiva en Poder Point 2007:",
    opciones: [
      "a. Diseño/Fondo",
      "b. Presentación/Fondo",
      "c. Archivo/Fondo",
      "d. Edición/Fondo"
    ],
    correcta: 0
  },
  {
    pregunta: "142. Un libro en Excel 2007:",
    opciones: [
      "a. Es un conjunto de una o Varias hojas",
      "b. Es igual al concepto de archivo",
      "c. Es una Hoja electrónica integrada con una página Word",
      "d. Es lo mismo que base de datos"
    ],
    correcta: 0
  },
  {
    pregunta: "143. Cuál de las siguientes expresiones son correctas en Excel 2007",
    opciones: [
      "a. = a2 + a3",
      "b. + a2 + a3 - a2 + a3",
      "c. las respuestas anteriores",
      "d. (Missing option)"
    ],
    correcta: 0
  },
  {
    pregunta: "144. De las siguientes acciones cuáles son posibles de realizar en Excel 2007",
    opciones: [
      "a. Proteger una celda",
      "b. Asegurar una celda",
      "c. Insertar una celda",
      "d. Proteger un carácter"
    ],
    correcta: 2
  },
  {
    pregunta: "145. ¿Cuál de las siguientes expresiones es una fórmula válida en Excel 2007?",
    opciones: [
      "a. = SUMA (A2:A20)",
      "b. = SUMA (2A:20()",
      "c. = SUMA (A1, A2, A3, A4, A5, A20)",
      "d. = SUMA (1A+2A+3A+. . . .+20())"
    ],
    correcta: 0
  },
  {
    pregunta: "146. El contenido de la celda A1 es el valor 350.La fórmula que calcula en B1 el 20% de A1, es:",
    opciones: [
      "a. =SUMA (B120%)",
      "b. =A120%",
      "c. =1 A20%350",
      "d. =B120%350"
    ],
    correcta: 3
  },
  {
    pregunta: "147. El contenido de la celda B1 es el valor 420. La fórmula Excel 2007 que obtiene 420 incrementado en su 50%, es decir 630 es :",
    opciones: [
      "a. = (B11, 5)",
      "b. = (B150%)",
      "c. = (B1420)",
      "d. = (B1630-420)"
    ],
    correcta: 3
  },
  {
    pregunta: "148. Es una aplicación de una hoja de cálculo en la que se entrecruzan un número determinado de fila y columnas.",
    opciones: [
      "a. Procesador de texto",
      "b. Sistema Operativo",
      "c. Hoja Electrónica",
      "d. Base de Datos"
    ],
    correcta: 2
  },
  {
    pregunta: "149. La expresión: =$A$7, representa en Excel 2007:",
    opciones: [
      "a. Una dirección Absoluta en A7",
      "b. Una dirección Relativa en A7",
      "c. El Valor de A7",
      "d. A7 contiene valor en Pesos"
    ],
    correcta: 0
  },
  {
    pregunta: "150. Indica la identificación de una celda compuesta por letras y números en una hoja en Excel 2007.",
    opciones: [
      "a. Referencia",
      "b. Rango",
      "c. Celda",
      "d. Formula"
    ],
    correcta: 3
  },
  {
    pregunta: "151. La siguiente figura Σ en Excel 2007 en una hoja electrónica nos indica",
    opciones: [
      "a. Seleccionar una Función",
      "b. Sumatoria",
      "c. Dato",
      "d. Formula"
    ],
    correcta: 1
  },
  {
    pregunta: "152. En una hoja electrónica en Excel 2007 la Barra que se utiliza para escribir o editar valores o fórmulas en celdas o gráficos. Muestra la fórmula o el valor constante almacenado en la celda activa.",
    opciones: [
      "a. Barra de herramientas",
      "b. Cuadro de nombres",
      "c. Barra de fórmulas",
      "d. Barra de dirección"
    ],
    correcta: 2
  },
  {
    pregunta: "153. En una hoja electrónica Excel 2007 las fórmulas predefinidas que ejecutan cálculos utilizando valores específicos, denominados argumentos, en un orden determinado o estructura. Pueden utilizarse para ejecutar operaciones simples o complejas. Esta definición hace referencia a:",
    opciones: [
      "a. Funciones",
      "b. Sumatoria",
      "c. Dato",
      "d. Formula"
    ],
    correcta: 2
  },
  {
    pregunta: "154. Son ecuaciones que efectúan cálculos con los valores de la hoja de cálculo. Comienza por un signo igual (=). Por ejemplo, lo siguiente multiplica 2 por 3 y, a continuación, suma 5 al resultado. =5+23. Esta definición y ejemplo hacen referencia a:",
    opciones: [
      "a. Función",
      "b. Fórmula",
      "c. Rango",
      "d. Formato"
    ],
    correcta: 0
  },
  {
    pregunta: "155. En Microsoft Excel 2007 podemos encontrar.",
    opciones: [
      "a. 1048576 Filas",
      "b. 256 Filas",
      "c. 256 Columnas",
      "d. 4587 Filas"
    ],
    correcta: 3
  },
  {
    pregunta: "156. Los botones maximizar, cerrar, restaurar, se encuentran en la banda de opciones en Excel 2007:",
    opciones: [
      "a. Barra de Título",
      "b. Banda de Opciones",
      "c. Barra de Estado",
      "d. Barra Estándar"
    ],
    correcta: 2
  },
  {
    pregunta: "157. En Excel 2007 opera con uno o más valores y devuelve un resultado",
    opciones: [
      "a. Función",
      "b. Operación",
      "c. Autosuma",
      "d. Promedio"
    ],
    correcta: 2
  },
  {
    pregunta: "158. Es la representación gráfica de los datos de una hoja de cálculo y facilita su interpretación en Excel 2007",
    opciones: [
      "a. Funciones",
      "b. Gráficos",
      "c. Ortografía y gramática",
      "d. Orden ascendente"
    ],
    correcta: 1
  },
  {
    pregunta: "159. ¿Cuál es la combinación de teclas para ir a la celda A1 en Excel 2007?",
    opciones: [
      "a. F1",
      "b. Alt. F5",
      "c. CTRL+INICIO",
      "d. Ctrl F4"
    ],
    correcta: 2
  },
  {
    pregunta: "160. Una celda en Excel 2007 por defecto viene con formato:",
    opciones: [
      "a. Moneda",
      "b. General",
      "c. Texto",
      "d. Contabilidad"
    ],
    correcta: 2
  },
  {
    pregunta: "161. De las siguientes fórmulas escritas en Excel 2007,¿cuál es correcta?",
    opciones: [
      "a. 10+25",
      "b. =A1:10",
      "c. =A1+D4",
      "d. Las tres anteriores son correctas"
    ],
    correcta: 2
  },
  {
    pregunta: "162. Un gráfico en Excel 2007 se crea…",
    opciones: [
      "a. Junto con los datos de la hoja de cálculo.",
      "b. En una hoja independiente.",
      "c. Cualquiera de las dos primeras opciones.",
      "d. Ninguna de las opciones anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "163. Para añadir fondo a una hoja en Excel 2007 se sigue los siguientes pasos.",
    opciones: [
      "a. Formato/ Celdas",
      "b. Formato / Autoformato",
      "c. Diseño de Pagina/ Fondo",
      "d. Ver / Hoja / Fondo"
    ],
    correcta: 2
  },
  {
    pregunta: "164. Para crear una formula en Excel 2007 hay que teclear el signo ….. y escribir la expresión.",
    opciones: [
      "a. ( )",
      "b. ;",
      "c. +",
      "d. -"
    ],
    correcta: 1
  },
  {
    pregunta: "165. De las siguientes fórmulas, en Excel 2007¿cuál NO es correcta?.",
    opciones: [
      "a. =SUMA (A1:F5)",
      "b. =SUMA(A: B5)",
      "c. =MAXIMO (A1:D5)",
      "d. =PROMEDIO (A1:B5; D1:E5)"
    ],
    correcta: 1
  },
  {
    pregunta: "166. En Poder Point 2007, el efecto de animación entre una diapositiva y otra, se llama:",
    opciones: [
      "a. Transición",
      "b. Animación",
      "c. Efecto",
      "d. Fondo"
    ],
    correcta: 0
  },
  {
    pregunta: "167. La extensión con la que se graba un archivo de Poder Point 2007 es:",
    opciones: [
      "a. .doc",
      "b. .xls",
      "c. .ppt",
      "d. .swf"
    ],
    correcta: 2
  },
  {
    pregunta: "168. Las teclas rápidas para insertar una nueva diapositiva Poder Point 2007 son:",
    opciones: [
      "a. Control + I",
      "b. Control + M",
      "c. Control + N",
      "d. Control + R"
    ],
    correcta: 1
  },
  {
    pregunta: "169. Para dar transición a las diapositivas Poder Point 2007 se debe ir a:",
    opciones: [
      "a. Barra de menú Formato/ estilo/ transición",
      "b. Barra de menú Herramientas/ Transición",
      "c. Barra de menú Presentación / Transición de diapositivas",
      "d. Barra de menú archivo/ transición"
    ],
    correcta: 1
  },
  {
    pregunta: "170. ¿Qué nos permite crear presentaciones de forma visual, atractiva, rápida y con gran calidad?",
    opciones: [
      "a. Poder Point 2007",
      "b. Calculadora",
      "c. Paint",
      "d. Windows"
    ],
    correcta: 0
  },
  {
    pregunta: "171. Son elementos que podemos incorporar en una diapositiva Poder Point 2007",
    opciones: [
      "a. Celdas",
      "b. Objetos",
      "c. Diapositivas",
      "d. Gráficos"
    ],
    correcta: 1
  },
  {
    pregunta: "172. Con Poder Point 2007, se construyen:",
    opciones: [
      "a. Documentos .PPTX",
      "b. Animaciones .PPTX",
      "c. Presentaciones .PPTX",
      "d. Transiciones .PPXT"
    ],
    correcta: 2
  },
  {
    pregunta: "173. Poder point 2007 permite realizar presentaciones multimedia porque trabaja con:",
    opciones: [
      "a. Texto, videos, sonidos, imágenes",
      "b. Hojas de calculo",
      "c. Celdas",
      "d. Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "174. Con que tecla se ejecuta la presentación en Poder Point 2007 desde la diapositiva actual",
    opciones: [
      "a. F5",
      "b. Shift +F5",
      "c. Alt + F5",
      "d. Shift + F3"
    ],
    correcta: 1
  },
  {
    pregunta: "175. Al presionar la siguiente imagen Campanaen Poder Point 2007 permite insertar",
    opciones: [
      "a. Sonido",
      "b. Imagen",
      "c. Clip multimedia",
      "d. Organigrama"
    ],
    correcta: 0
  },
  {
    pregunta: "176. La tecla F7 en Poder Point 2007 sirve para:",
    opciones: [
      "a. Ejecutar revisión ortográfica y gramatical",
      "b. Insertar una nueva diapositiva",
      "c. Insertar tabla",
      "d. Abrir la ventana formato de texto"
    ],
    correcta: 0
  },
  {
    pregunta: "177. Cuáles de las siguientes expresiones de búsqueda son validas en Internet (vamos a buscar las palabras, carro rojo)",
    opciones: [
      "a. Buscar carro rojo",
      "b. Buscar carro AND rojo",
      "c. Buscar carro OR rojo",
      "d. Buscar carro NOT rojo"
    ],
    correcta: 0
  },
  {
    pregunta: "178. En qué consiste el servicio www?",
    opciones: [
      "a. Servicio de Correo",
      "b. Servicio de Transferencia de Archivos",
      "c. Servicio de telefonía",
      "d. Servicio Información tipo revista"
    ],
    correcta: 1
  },
  {
    pregunta: "179. Cuál de los siguientes términos son servicios de Internet?",
    opciones: [
      "a. World Wide Web, E-mail, Ftp",
      "b. World Wide Web, google.com, Internet Relay Chat IR( ), Grupos de noticias",
      "c. google.com, hotmail.com, Fto",
      "d. www, World Wide Web, uan.edu.co"
    ],
    correcta: 0
  },
  {
    pregunta: "180. ansa@hotmail.com identifica a:",
    opciones: [
      "a. Una página de Internet",
      "b. El Dominio de la página",
      "c. Correo Electrónico",
      "d. El país de Origen"
    ],
    correcta: 2
  },
  {
    pregunta: "181. Los siguientes términos .com, .gov, .org corresponden a:",
    opciones: [
      "a. Comercial, privado, organización,",
      "b. Compañía, nombre, organización",
      "c. Comercial, gubernamental, organización",
      "d. Comercial, personal, organización no gubernamental."
    ],
    correcta: 2
  },
  {
    pregunta: "182. La nomenclatura que identifica a Ecuador en Internet es:",
    opciones: [
      "a. .es",
      "b. Ninguna de las anteriores",
      "c. .ec",
      "d. .ecu"
    ],
    correcta: 2
  },
  {
    pregunta: "183. El programa Winzip tiene como función.",
    opciones: [
      "a. Es un juego de estrategia",
      "b. Un programa matemático de archivos",
      "c. Un programa de música para reproducir archivos",
      "d. Un programa para comprimir y descomprimir archivos"
    ],
    correcta: 3
  },
  {
    pregunta: "184. Cuando un programa que está en Internet con licencia freeware se dice que es:",
    opciones: [
      "a. Un demo",
      "b. Es libre",
      "c. Se puede usar por un número de días",
      "d. Es incompleto"
    ],
    correcta: 1
  },
  {
    pregunta: "185. Para eliminar un virus del computador podemos:",
    opciones: [
      "a. Borrar todo el registro de Windows",
      "b. Instalar un antivirus",
      "c. Utilizar un cortafuegos",
      "d. Todas las anteriores son correctas"
    ],
    correcta: 1
  },
  {
    pregunta: "186. Para buscar información publicada en blogs:",
    opciones: [
      "a. Se puede utilizar cualquier buscador de internet",
      "b. Es recomendable utilizar un buscador especifico de blogs",
      "c. No existen buscadores específicos de blogs",
      "d. A y b son correctas"
    ],
    correcta: 0
  },
  {
    pregunta: "187. En you tube podemos ver, levantar y compartir:",
    opciones: [
      "a. Fotos",
      "b. Videos",
      "c. Archivos de texto",
      "d. Archivos de sonido"
    ],
    correcta: 1
  },
  {
    pregunta: "188. Qué tipo de protocolo es FTP:",
    opciones: [
      "a. Un protocolo de transferencia de fichero",
      "b. Un protocolo de envió de correo",
      "c. Un protocolo para conectar en red",
      "d. Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "189. Los virus pueden entrar a nuestro computador por:",
    opciones: [
      "a. Un navegador no actualizado",
      "b. Por el correo electrónico",
      "c. Por transferencia de archivo",
      "d. Por todas las anteriores."
    ],
    correcta: 3
  },
  {
    pregunta: "190. ¿Cuál es la definición de Excel?",
    opciones: [
      "a. Programa de tipo hoja de calculo",
      "b. Programa editor de texto",
      "c. Sistema Operativo para realizar operaciones básicas.",
      "d. Software libre."
    ],
    correcta: 0
  },
  {
    pregunta: "191. ¿Cómo se les nombra a Las columnas en Excel?",
    opciones: [
      "a. Números 1, 2,3,…",
      "b. Letras minúsculas del abecedario a, b, c.",
      "c. Combinaciones A1, A3.",
      "d. Letras mayúsculas."
    ],
    correcta: 3
  },
  {
    pregunta: "192. ¿Cuál de las siguientes opciones me permite ingresar información en una celda en Excel?",
    opciones: [
      "a. Situar el cursor sobre la celda a introducir los datos.",
      "b. Ir al menú Insertar y escoger la opción “Insertar Datos”",
      "c. Dar doble clic con el Mouse sobre la celda a ingresar la información.",
      "d. Ir a la Barra de formulas y desde ahí ingresar información."
    ],
    correcta: 0
  },
  {
    pregunta: "193. ¿Cómo se le define a una función en Excel?",
    opciones: [
      "a. Números y letra que operan con una o más valores los cuáles devuelven un resultado.",
      "b. Un rango de datos.",
      "c. Una fórmula que opera con uno o más valores los Cuáles devuelven un resultado.",
      "d. Un comentario que pueden asociarse en una o más celdas combinaciones."
    ],
    correcta: 2
  },
  {
    pregunta: "194. ¿Cuál de estas celdas existe en una hoja de cálculo:",
    opciones: [
      "a. ZA1",
      "b. 1W",
      "c. A10",
      "d. 65536"
    ],
    correcta: 2
  },
  {
    pregunta: "195. ¿Qué me permite ver la barra de formulas en Excel?.",
    opciones: [
      "a. Ver el contenido de la celda activa.",
      "b. Ver las operaciones más comunes sobre formatos.",
      "c. Ver los iconos que se ejecutan más comunes sobre los formatos",
      "d. Ver iconos que se ejecutan de forma inmediata."
    ],
    correcta: 0
  },
  {
    pregunta: "196. ¿Con que signo inician todas las formulas en Excel?",
    opciones: [
      "a. ( )",
      "b. = ( )",
      "c. =",
      "d. + ="
    ],
    correcta: 2
  },
  {
    pregunta: "197. ¿Cuál de los siguientes botones se debe utilizar en Microsoft Excel para abrir el Asistente para funciones y así insertar cualquier función disponible en la hoja de cálculo?",
    opciones: [
      "a. El botón que permite insertar una Tabla dinámica o Tabla.",
      "b. El botón de Autosuma que calcula sumas rápidas o despliega funciones básicas.",
      "c. El botón Insertar función o Asistente para funciones (representado con el ícono fx).",
      "d. El botón para Insertar gráfico."
    ],
    correcta: 2
  },
  {
    pregunta: "198. ¿Cuál de las siguientes opciones define un gráfico estadístico en Excel?",
    opciones: [
      "a. Imágenes procedentes de las librerías de Excel.",
      "b. Una representación grafica de los datos.",
      "c. Imágenes procedentes de archivos.",
      "d. Textos que pueden asociarse en una celda."
    ],
    correcta: 1
  },
  {
    pregunta: "199. ¿Cuál es la definición de una celda en Excel?",
    opciones: [
      "a. Intersección entre una fila y una columna.",
      "b. Intersección entre una hoja de cálculo.",
      "c. Una reunión de datos ordenados en una fila y columna.",
      "d. Es una Fila."
    ],
    correcta: 0
  },
  {
    pregunta: "200. ¿Es el editor de texto más potente del mercado que permite crear documentos para todo tipo de necesidades tanto personales como institucionales, estos pueden ser por ejemplo informes, oficios cartas, tablas, carátulas, reportes?",
    opciones: [
      "a. Publisher.",
      "b. Word.",
      "c. Excel.",
      "d. Word Pad."
    ],
    correcta: 1
  },
  {
    pregunta: "201. ¿Cuál de las siguientes opciones no pertenece a la interfaz de Word 2007?",
    opciones: [
      "a. Banda de Opciones.",
      "b. Barra de menús.",
      "c. Barra de Herramientas de Acceso Rápido.",
      "d. Banda de Estado."
    ],
    correcta: 2
  },
  {
    pregunta: "202. ¿Cuál es la combinación de teclas para reemplazar una palabra en un documento de Word 2007?",
    opciones: [
      "a. CONTROL + L.",
      "b. CONTROL +SHIF+ L.",
      "c. CONTROL + X.",
      "d. CONTROL + A."
    ],
    correcta: 0
  },
  {
    pregunta: "203. ¿Cuál de las siguientes teclas me permite visualizar la presentación en Poder Point?",
    opciones: [
      "a. Y2.",
      "b. F12.",
      "c. F4.",
      "d. F5."
    ],
    correcta: 3
  },
  {
    pregunta: "204. ¿Cuáles son los pasos para aplicar bordes a una página en Word 2007?",
    opciones: [
      "a. Diseño de página/Párrafo/Bordes de página.",
      "b. Insertar/Bordes de página.",
      "c. Diseño de página/Fondo de página/Bordes de página.",
      "d. Inicio/ Configurar página."
    ],
    correcta: 2
  },
  {
    pregunta: "205. ¿Cuál es la cantidad de columnas que tiene Excel 2007?",
    opciones: [
      "a. 16384 Columnas.",
      "b. 6389 Filas.",
      "c. 16385 Filas.",
      "d. 65535 Columnas."
    ],
    correcta: 0
  },
  {
    pregunta: "206. ¿Cuántas hojas como máximo puede tener un libro de Excel?",
    opciones: [
      "a. 254.",
      "b. 255.",
      "c. 120.",
      "d. 3."
    ],
    correcta: 0
  },
  {
    pregunta: "207. ¿Cuál de las siguientes opciones me permite colocar estilos en los títulos en Word 2007?",
    opciones: [
      "a. Insertar/Estilos.",
      "b. Inicio/Estilos.",
      "c. Diseño de Páginas/Estilos.",
      "d. 3Inicio/Párrafo/Estilos."
    ],
    correcta: 1
  },
  {
    pregunta: "208. ¿Cuál de las siguientes opciones me permite insertar una tabla de contenidos en Word 2007?",
    opciones: [
      "a. Referencias/Insertar Tabla.",
      "b. Referencias/Tabla de contenido.",
      "c. Insertar/Tabla de Contenidos.",
      "d. Diseño de página tabla de contenidos."
    ],
    correcta: 1
  },
  {
    pregunta: "209. ¿Cuáles son los pasos para insertar encabezado y pie de página en Word 2007?",
    opciones: [
      "a. Insertar/Formas/Encabezado y pie de página.",
      "b. Insertar/Encabezado y pie de página.",
      "c. Inicio/ Encabezado y pie de página.",
      "d. Vista/Encabezado y pie de página."
    ],
    correcta: 1
  },
  {
    pregunta: "210. ¿Cuál de las siguientes opciones me permite alinear el texto a la izquierda en Word 2007l?",
    opciones: [
      "a. CTRL+N.",
      "b. CTRL+I.",
      "c. CTRL+Q.",
      "d. CTRL+S."
    ],
    correcta: 2
  },
  {
    pregunta: "211. ¿Cuál de las siguientes opciones me permite alinear un texto a la derecha en Word 2007?",
    opciones: [
      "a. CTRL+E.",
      "b. CTRL+Y.",
      "c. CTRL+D.",
      "d. CTRL+S."
    ],
    correcta: 2
  },
  {
    pregunta: "212. ¿Cuál de las siguientes opciones me permite alinear un texto a la izquierda en Word 2007?",
    opciones: [
      "a. CTRL+N",
      "b. CTRL+I",
      "c. CTRL+Q",
      "d. CTRL+S"
    ],
    correcta: 2
  },
  {
    pregunta: "213. ¿Cuál de las siguientes opciones me permite centrar un texto en Word 2007?",
    opciones: [
      "a. CTRL+W.",
      "b. CTRL+T.",
      "c. ALT+T.",
      "d. SHIFT+T."
    ],
    correcta: 1
  },
  {
    pregunta: "214. ¿Cuál de las siguientes opciones me permite alinear un texto a la izquierda en Word 2007?",
    opciones: [
      "a. CTRL+N.",
      "b. CTRL+I.",
      "c. CTRL+Q.",
      "d. CTRL+S."
    ],
    correcta: 2
  },
  {
    pregunta: "215. ¿Cuál de las siguientes opciones me permite crear un documento nuevo en Word 2007?",
    opciones: [
      "a. CTRL+R.",
      "b. CTRL+J.",
      "c. CTRL+U.",
      "d. CTRL+L."
    ],
    correcta: 2
  },
  {
    pregunta: "216. ¿Cuáles son los pasos para colocar letra capital en un documento en Word 2007?",
    opciones: [
      "a. Insertar/Tablas/letra capital.",
      "b. Insertar/texto/letra capital.",
      "c. Insertar/páginas/letra capital.",
      "d. Diseño de página/texto/letra capital."
    ],
    correcta: 1
  },
  {
    pregunta: "217. ¿Cuáles son los pasos para colocar texto en columnas en Word 2007?",
    opciones: [
      "a. Diseño de página/Fondo de página/Columnas.",
      "b. Diseño de página/Configurar página/Columnas.",
      "c. Diseño de página/párrafo/Columnas.",
      "d. Insertar /Configurar página/Columnas."
    ],
    correcta: 1
  },
  {
    pregunta: "218. ¿En qué pestaña de la banda de opciones podemos colocar la portada a los documentos en Word 2007?",
    opciones: [
      "a. Insertar.",
      "b. Inicio.",
      "c. Diseño de página.",
      "d. Referencias."
    ],
    correcta: 0
  },
  {
    pregunta: "219. ¿En qué pestaña de la banda de opciones podemos colocar marca de agua en un documento en Word 2007?",
    opciones: [
      "a. Revisar.",
      "b. Diseño de página.",
      "c. Inicio.",
      "d. Vista."
    ],
    correcta: 1
  },
  {
    pregunta: "220. ¿Cuál de las siguientes opciones representa el almacenamiento de un Kilobyte?",
    opciones: [
      "a. 1024 bits.",
      "b. 1024 bytes.",
      "c. 512 bytes.",
      "d. 2048 bytes."
    ],
    correcta: 0
  },
  {
    pregunta: "221. ¿Cuáles son los pasos para colocar letra capital en un documento en Word 2007?",
    opciones: [
      "a. Insertar/Tablas/letra capital.",
      "b. Insertar/texto/letra capital.",
      "c. Insertar/páginas/letra capital.",
      "d. Diseño de página/texto/letra capital."
    ],
    correcta: 1
  },
  {
    pregunta: "222. ¿Cuáles son los pasos para ajustar texto en Excel 2007?",
    opciones: [
      "a. Insertar/alineación/ajustar texto.",
      "b. Inicio/alineación/ajustar texto.",
      "c. Datos/alineación/ajustar texto.",
      "d. Formulas/alineación/ajustar texto."
    ],
    correcta: 1
  },
  {
    pregunta: "223. ¿Cuál de las siguientes opciones en un tipo de dato en Excel 2007?",
    opciones: [
      "a. Integer.",
      "b. String.",
      "c. Moneda.",
      "d. Entero Corto."
    ],
    correcta: 2
  },
  {
    pregunta: "224. ¿En qué opción puedo encontrar orientación del texto en las celdas de Excel 2007?",
    opciones: [
      "a. Datos",
      "b. Insertar",
      "c. Inicio",
      "d. Vista"
    ],
    correcta: 2
  },
  {
    pregunta: "225. ¿Cuál de las siguientes opciones se describe un modelo de un gráfico estadístico en Excel 2007?",
    opciones: [
      "a. Cuadrado",
      "b. Circular",
      "c. Rombo",
      "d. Rectángulo"
    ],
    correcta: 1
  },
  {
    pregunta: "226. ¿Cuál de las siguientes opciones corresponde a la extensión de los archivos de Excel 2007?",
    opciones: [
      "a. XLSXS",
      "b. XLS",
      "c. XLSX",
      "d. DOCX"
    ],
    correcta: 2
  },
  {
    pregunta: "227. ¿Cuál de las siguientes opciones corresponde a la orientación que puede tener una hoja en Excel 2007?",
    opciones: [
      "a. Filas",
      "b. Columnas",
      "c. Margen",
      "d. Vertical"
    ],
    correcta: 3
  },
  {
    pregunta: "228. ¿Cuál de las siguientes opciones corresponde a una función lógica en Excel 2007?",
    opciones: [
      "a. Resta",
      "b. Producto",
      "c. Suma",
      "d. Y"
    ],
    correcta: 3
  },
  {
    pregunta: "229. ¿Cuál de las siguientes opciones no corresponde a una función de texto en Excel 2007?",
    opciones: [
      "a. Derecha",
      "b. Decimal",
      "c. Código",
      "d. Contar"
    ],
    correcta: 1
  },
  {
    pregunta: "230. ¿Cuáles son los pasos para cifrar un libro en Excel 2007?",
    opciones: [
      "a. Cifrar/cifrar documento",
      "b. Publicar/cifrar documento",
      "c. Guardar documento/ Cifrar documento",
      "d. Preparar/Cifrar documento"
    ],
    correcta: 3
  },
  {
    pregunta: "231. ¿Cuáles teclas me permiten modificar el contenido de una celda en Excel 2007?",
    opciones: [
      "a. F9",
      "b. F7",
      "c. F5",
      "d. F2"
    ],
    correcta: 3
  },
  {
    pregunta: "232. ¿Cuál de las siguientes opciones corresponde al formato de las celdas por defecto en Excel 2007?",
    opciones: [
      "a. Fecha Corta",
      "b. Contabilidad",
      "c. Número",
      "d. General"
    ],
    correcta: 3
  },
  {
    pregunta: "233. ¿Cuál de las siguientes opciones corresponde a una ficha de la banda opciones en Excel 2007?",
    opciones: [
      "a. Correspondencia",
      "b. Datos",
      "c. Referencia",
      "d. Tabla"
    ],
    correcta: 1
  },
  {
    pregunta: "234. ¿Cuáles son los pasos para insertar una imagen en Excel 2007?",
    opciones: [
      "a. Vista/imagen",
      "b. Revisar/imagen",
      "c. Inicio/imagen",
      "d. Insertar/imagen"
    ],
    correcta: 3
  },
  {
    pregunta: "235. ¿Cuál de las siguientes opciones es un parámetro de la función SI?",
    opciones: [
      "a. Número Uno",
      "b. Criterio",
      "c. Rango",
      "d. Prueba Lógica"
    ],
    correcta: 3
  },
  {
    pregunta: "236. ¿Cuáles son los pasos en XARA-3·D para exportar como Gif animado un título?",
    opciones: [
      "a. File / Export Animation",
      "b. Edit/Export Animation",
      "c. View/Export Animation",
      "d. Window/Export Animation"
    ],
    correcta: 0
  },
  {
    pregunta: "237. Aplicar formato condicional en Excel 2007 sirve para:",
    opciones: [
      "a. Validar el contenido de una celda",
      "b. Dar formato especial o no sobre esa celda",
      "c. Para mostrar un mensaje de error o aviso si llegara el caso",
      "d. Copiar formato"
    ],
    correcta: 1
  },
  {
    pregunta: "238. Para localizar celdas con formatos condicionales dentro de Microsoft Excel debemos presionar las teclas:",
    opciones: [
      "a. Alt+ F5",
      "b. Ctrl+ F5",
      "c. F5",
      "d. F3"
    ],
    correcta: 2
  },
  {
    pregunta: "239. Uno de los programas que nos permiten la creación de títulos animados es:",
    opciones: [
      "a. Microsoft Excel",
      "b. Microsoft Access",
      "c. Xara 3D",
      "d. Microsoft Poder Point"
    ],
    correcta: 2
  },
  {
    pregunta: "240. ¿Cuál de los siguientes enunciados contiene los títulos de los temas y subtemas que forman el documento en Word 2007?",
    opciones: [
      "a. Tabla de contenidos",
      "b. Macros",
      "c. Combinar Correspondencia",
      "d. Filtros"
    ],
    correcta: 0
  },
  {
    pregunta: "241. ¿Cuál de las siguientes opciones debo seguir para tener un archivo bmp en Xara?",
    opciones: [
      "a. Opción File/save as…..",
      "b. Opción File/ export animation",
      "c. Opción export",
      "d. Opción export/ create animation"
    ],
    correcta: 0
  },
  {
    pregunta: "242. ¿Cuál de los siguientes programas me permite realizar un listado de notas y obtener su respectivo promedio?",
    opciones: [
      "a. Word",
      "b. Excel",
      "c. Publisher",
      "d. Tablas"
    ],
    correcta: 1
  },
  {
    pregunta: "243. ¿Cuál de las siguientes opciones me permite incluir una función dentro de la prueba lógica?",
    opciones: [
      "a. SI",
      "b. Suma",
      "c. Y",
      "d. O"
    ],
    correcta: 2
  },
  {
    pregunta: "244. ¿Cuáles son los pasos para crear una Macro en Microsoft Excel 2007?",
    opciones: [
      "a. Pestaña/Datos/Macro",
      "b. Pestaña Revisar/Macro",
      "c. Pestaña Formato/Macro",
      "d. Pestaña Vista/ Macro"
    ],
    correcta: 3
  },
  {
    pregunta: "245. ¿Cuáles son los pasos a seguir para combinar correspondencia?",
    opciones: [
      "a. Pestaña Insertar/Iniciar Combinación de Correspondencia",
      "b. Pestaña Combinar/Iniciar Combinación de Correspondencia",
      "c. Pestaña Correspondencia/ Iniciar Combinación de Correspondencia",
      "d. Pestaña Complementos/ Iniciar Combinación de Correspondencia"
    ],
    correcta: 2
  },
  {
    pregunta: "246. Nos ahorra tiempo al crear un evento en Excel y se la puede ejecutar por teclado.",
    opciones: [
      "a. Tabla Dinámica",
      "b. Funciones",
      "c. Filtros",
      "d. Macros"
    ],
    correcta: 3
  },
  {
    pregunta: "247. ¿Cuál de las siguientes opciones forma parte de un Filtro en Excel?",
    opciones: [
      "a. Filtrar Categorías",
      "b. Filtrar números",
      "c. Filtrar Condiciones",
      "d. Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "248. ¿Cuáles son los pasos para aplicar tabla dinámica?",
    opciones: [
      "a. Datos/Tabla Dinámica",
      "b. Vista/Tabla Dinámica",
      "c. Inicio/Tabla Dinámica",
      "d. Insertar/Tabla Dinámica"
    ],
    correcta: 3
  },
  {
    pregunta: "249. ¿Cuáles son los pasos para aplicar validación a una celda en Excel 2007?",
    opciones: [
      "a. Datos/Validación",
      "b. Herramientas/Datos",
      "c. Formato /Datos",
      "d. Tablas"
    ],
    correcta: 0
  },
  {
    pregunta: "250. ¿Cuál de las siguientes opciones forma parte de la ventana validación?",
    opciones: [
      "a. Inicio",
      "b. Configuración",
      "c. Condición",
      "d. Prueba Lógica"
    ],
    correcta: 1
  },
  {
    pregunta: "251. ¿Cuál de las siguientes opciones corresponde a una barra de Excel 2007?",
    opciones: [
      "a. Barra de formulas",
      "b. Barra de herramientas",
      "c. Barra de vistas",
      "d. Barra de funciones"
    ],
    correcta: 0
  },
  {
    pregunta: "252. Qué función en Excel le permite tener una respuesta en el caso de que la condición sea VERDADERA y otra respuesta si la condición es FALSA.",
    opciones: [
      "a. SI Condicional",
      "b. Función Y",
      "c. Función O",
      "d. Filtro Avanzado"
    ],
    correcta: 0
  },
  {
    pregunta: "253. ¿Qué me permite crear el formato condicional?",
    opciones: [
      "a. Nueva Condición",
      "b. Nueva Función",
      "c. Nueva Regla",
      "d. Nueva Formula"
    ],
    correcta: 2
  },
  {
    pregunta: "254. Es una manera fácil y rápida de buscar un subconjunto de datos de un rango de celdas o de una columna de tabla y trabajar en él, en Office Excel 2007.",
    opciones: [
      "a. Macros",
      "b. Vínculos",
      "c. Autofiltros",
      "d. Enlaces"
    ],
    correcta: 2
  },
  {
    pregunta: "255. En las aplicaciones de Microsoft Office 2007, ¿cuál de los siguientes iconos representa el 'Botón de Office', que da acceso a las opciones de archivo como Guardar, Abrir o Imprimir?",
    opciones: [
      "a. El icono circular con los colores distintivos de Office (el que se muestra en la primera opción de la imagen).",
      "b. Un icono que representa un documento genérico.",
      "c. El logotipo de Microsoft Word (la letra 'W')",
      "d. Un botón con el texto Crear"
    ],
    correcta: 0
  },
  {
    pregunta: "256. Es una parte de un documento en Word 2007 con sus propias características de formato global.",
    opciones: [
      "a. Funciones",
      "b. Sección",
      "c. Ortografía y gramática",
      "d. Orden ascendente"
    ],
    correcta: 1
  },
  {
    pregunta: "257. ¿Cuál es la extensión con la que guardan los textos animados que se crea en 3D XARA?",
    opciones: [
      "a. .mdb",
      "b. .fws",
      "c. .x3d",
      "d. .gif"
    ],
    correcta: 3
  },
  {
    pregunta: "258. ¿Cuál de las siguientes opciones es un botón de la pestaña Correspondencia en Word 2007?",
    opciones: [
      "a. Inicio",
      "b. Insertar",
      "c. Línea de Saludo",
      "d. Referencia"
    ],
    correcta: 2
  },
  {
    pregunta: "259. ¿Cuál de las siguientes opciones conceptualiza Open Office Writer?",
    opciones: [
      "a. Programa de texto de Microsoft office",
      "b. Programa de hojas de cálculo",
      "c. Es un procesador de texto libre",
      "d. Procesador de presentaciones"
    ],
    correcta: 2
  },
  {
    pregunta: "260. ¿Cuál de las siguientes opciones corresponde a la extensión con la que se guardan los archivos de Open Office Writer?",
    opciones: [
      "a. .docx",
      "b. .doc",
      "c. .odt",
      "d. .xls"
    ],
    correcta: 2
  },
  {
    pregunta: "261. ¿Cuál de las siguientes opciones corresponde a la extensión con la que se guardan los archivos de Open Office Calc?",
    opciones: [
      "a. .ods",
      "b. .ppt",
      "c. .xlss",
      "d. Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "262. ¿Cuál de las siguientes opciones corresponde a la extensión con la que se guardan los archivos de Open Office Impress?",
    opciones: [
      "a. .bmp",
      "b. .jpg",
      "c. .odp",
      "d. .xara"
    ],
    correcta: 2
  },
  {
    pregunta: "263. ¿Cuál de las siguientes opciones me sirve para aplicar sangría a un texto?",
    opciones: [
      "a. Ctrl",
      "b. Shift",
      "c. Tab",
      "d. End"
    ],
    correcta: 2
  },
  {
    pregunta: "264. ¿Cuál de las siguientes aplicaciones corresponden a Microsoft Office 2007?",
    opciones: [
      "a. Mind manager",
      "b. 3D XARA",
      "c. Microsoft Excel",
      "d. Power Builder"
    ],
    correcta: 2
  },
  {
    pregunta: "265. ¿Qué es un computador?",
    opciones: [
      "a. Maquina eléctrica",
      "b. Programa editor de texto",
      "c. Maquina electromagnética",
      "d. Maquina electrónica"
    ],
    correcta: 3
  },
  {
    pregunta: "266. ¿Cuáles son las partes de un computador?",
    opciones: [
      "a. Hardware",
      "b. Sistema Operativo",
      "c. Memoria Ram",
      "d. Microprocesador"
    ],
    correcta: 0
  },
  {
    pregunta: "267. ¿Cómo se define a la parte física del computador?",
    opciones: [
      "a. Hardware",
      "b. Software",
      "c. Programas",
      "d. Memorias"
    ],
    correcta: 0
  },
  {
    pregunta: "268. ¿Qué es un Disco Duro?",
    opciones: [
      "a. Dispositivo de Almacenamiento",
      "b. Dispositivo de Entrada",
      "c. Disco removible",
      "d. Dispositivo de Salida"
    ],
    correcta: 0
  },
  {
    pregunta: "269. ¿Cómo se puede definir un Microprocesador?",
    opciones: [
      "a. Hardware",
      "b. El cerebro del computador",
      "c. Dispositivo USB",
      "d. Material Magnético"
    ],
    correcta: 1
  },
  {
    pregunta: "270. ¿Qué es una Memoria RAM?",
    opciones: [
      "a. Memoria de solo lectura",
      "b. El cerebro del computador",
      "c. Memoria de solo escritura",
      "d. Memoria de solo lectura/escritura"
    ],
    correcta: 3
  },
  {
    pregunta: "271. ¿Qué entiende por Sistema Binario?",
    opciones: [
      "a. Un sistema que trabaja con números y letras",
      "b. Un sistema de ceros y unos",
      "c. Memoria de solo escritura",
      "d. Un sistema de números enteros"
    ],
    correcta: 1
  },
  {
    pregunta: "272. ¿Qué contiene la Barra de Estado en Word 2007?",
    opciones: [
      "a. Información del documento acerca de número de páginas, idioma, etc.",
      "b. Comandos especiales de Word 2007",
      "c. Información del Usuario",
      "d. Información de lectura/escritura"
    ],
    correcta: 0
  },
  {
    pregunta: "273. ¿Cuál opción es la correcta para insertar el número de página?",
    opciones: [
      "a. Banda de Opciones/ Insertar/ Encabezado y pie de pagina",
      "b. Banda de Opciones/ Insertar/",
      "c. Banda de Opciones/ Vista",
      "d. Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "274. ¿Qué son los libros de trabajo?",
    opciones: [
      "a. Documentos de Word",
      "b. Documentos de Excel 2007",
      "c. Documentos de Poder Point",
      "d. Documentos de Open Office"
    ],
    correcta: 1
  },
  {
    pregunta: "275. ¿Las Teclas para imprimir un documento?",
    opciones: [
      "a. Ctrl+l",
      "b. Ctrl+K",
      "c. Ctrl+J",
      "d. Ctrl+P"
    ],
    correcta: 3
  },
  {
    pregunta: "276. ¿Para combinar Celdas en Excel 2007?",
    opciones: [
      "a. Banda de Opciones/Inicio",
      "b. Banda de Opciones/Vista",
      "c. Banda de Opciones/Insertar",
      "d. Banda de Opciones/Revisar"
    ],
    correcta: 0
  },
  {
    pregunta: "277. ¿Qué función realiza las teclas Ctrl + X?",
    opciones: [
      "a. Cortar",
      "b. Pegar",
      "c. Copiar",
      "d. Suprimir"
    ],
    correcta: 0
  },
  {
    pregunta: "278. ¿Cómo cierro cualquier programa utilizando combinación de teclas?",
    opciones: [
      "a. ALT + F4",
      "b. ALT + F1",
      "c. ALT + F2",
      "d. ALT + F3"
    ],
    correcta: 0
  },
  {
    pregunta: "279. ¿Qué es un archivo en Windows?",
    opciones: [
      "a. Conjunto de datos que almacenan información",
      "b. Datos aleatorios",
      "c. Información de algún tema en particular",
      "d. Textos reunidos"
    ],
    correcta: 0
  },
  {
    pregunta: "280. La tecla F2 en Excel 2007 nos sirve para :",
    opciones: [
      "a. Modificar el contenido de una celda",
      "b. Ir a",
      "c. Desplazarse en la hoja de calculo",
      "d. Copiar"
    ],
    correcta: 0
  },
  {
    pregunta: "281. En Word 2007 las teclas que nos permiten Ir a son:",
    opciones: [
      "a. Ctrl + I",
      "b. Ctrl + L",
      "c. Ctrl + p",
      "d. Ctrl + G"
    ],
    correcta: 3
  },
  {
    pregunta: "282. La opción para cambiar la fuente de un texto en Word 2007 se encuentra en :",
    opciones: [
      "a. Banda de Opciones/Inicio/ Fuente",
      "b. Banda de Opciones/Vista",
      "c. Banda de Opciones/Insertar",
      "d. Banda de Opciones/Revisar"
    ],
    correcta: 0
  },
  {
    pregunta: "283. Para seleccionar archivos consecutivos utilizo el cursor y la tecla:",
    opciones: [
      "a. ALTGR",
      "b. Windows",
      "c. Shift",
      "d. Ctrl"
    ],
    correcta: 2
  },
  {
    pregunta: "284. El teclado es un dispositivo:",
    opciones: [
      "a. Dispositivo de Entrada",
      "b. Dispositivo de Salida",
      "c. Almacenamiento",
      "d. Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "285. Para mover una carpeta utilizo las teclas:",
    opciones: [
      "a. Ctrl + C",
      "b. Ctrl + V",
      "c. Ninguna de las anteriores",
      "d. Tecla de Windows"
    ],
    correcta: 2
  },
  {
    pregunta: "286. Los parlantes son dispositivos de :",
    opciones: [
      "a. Dispositivo de Entrada",
      "b. Dispositivo de Salida",
      "c. Almacenamiento",
      "d. Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "287. Para apagar el sistema mediante teclas usted podrá presionar:",
    opciones: [
      "a. Alt + F4",
      "b. ALT +5",
      "c. ALT+F5",
      "d. Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "288. ¿Cómo se le nombra a una celda de Excel 2007?",
    opciones: [
      "a. Fila/columna",
      "b. Columna/Fila",
      "c. Columna/Columna",
      "d. Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "289. Es la memoria que se utiliza para acelerar el proceso, es de alta velocidad, permite que el procesador tenga más rápido acceso a los datos?",
    opciones: [
      "a. RAM",
      "b. ROM",
      "c. Cache",
      "d. CMOS"
    ],
    correcta: 2
  },
  {
    pregunta: "290. Se le denomina así a la cantidad de bits que puede manipular simultáneamente el CPU.",
    opciones: [
      "a. Tamaño de la palabra",
      "b. Bus de datos",
      "c. Byte",
      "d. MegaHertz"
    ],
    correcta: 0
  },
  {
    pregunta: "291. Nos sirve para disminuir el tamaño que ocupa físicamente un archivo.",
    opciones: [
      "a. Antivirus",
      "b. Compactador/descompactador",
      "c. Desfragmentador",
      "d. Protector de Pantalla"
    ],
    correcta: 1
  },
  {
    pregunta: "292. ¿Cuál de los siguientes es una división del software de aplicación?",
    opciones: [
      "a. De productividad",
      "b. De entretenimiento",
      "c. De negocios",
      "d. Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "293. ¿Cuál de los siguientes dispositivos es apropiado para transportar información?",
    opciones: [
      "a. Disco Duro",
      "b. Memoria Secundaria",
      "c. CD’s",
      "d. Memoria ROM"
    ],
    correcta: 2
  },
  {
    pregunta: "294. ¿Cuál de los siguientes es el Sistema Operativo que no maneja Interfaz Gráfica?",
    opciones: [
      "a. Windows 2000",
      "b. Mac OS",
      "c. Unix",
      "d. Windows XP"
    ],
    correcta: 2
  },
  {
    pregunta: "295. ¿Cuál de las siguientes es una función del Sistema Operativo?",
    opciones: [
      "a. Administrar los recursos de la computadora",
      "b. Organizar la información que se almacena en la computadora",
      "c. Ser una interfaz entre la computadora y el usuario",
      "d. Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "296. ¿Cuál de las siguientes es verdadera?",
    opciones: [
      "a. Una vez borrado un archivo no hay manera de recuperarlo.",
      "b. Al borrar un archivo se puede recuperar este solo si no se ha grabado algo encima de él.",
      "c. Al borrar un archivo este puede extraerse de un lugar que permite su rehúso.",
      "d. Un archivo nunca se borra de la computadora, siempre queda como respaldo."
    ],
    correcta: 1
  },
  {
    pregunta: "297. ¿Qué es un Sistema Operativo?",
    opciones: [
      "a. Programas que inicializan a la computadora",
      "b. Conjunto de instrucciones que ayuda al usuario en la realización de un tarea.",
      "c. Conjunto de programas que administran las tareas que son ejecutadas concurrentemente en la computadora",
      "d. Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "298. Si se está explorando una carpeta con archivos, ¿cuál de las siguientes opciones del Menú “Ver” nos permite ver la última fecha de cuando se modificaron los archivos?",
    opciones: [
      "a. Vistas en miniatura",
      "b. Iconos",
      "c. Mosaicos",
      "d. Detalles"
    ],
    correcta: 3
  },
  {
    pregunta: "299. Sirve para reorganizar la información en disco y que se puede acceder más rápidamente a la información.",
    opciones: [
      "a. Antivirus",
      "b. Compactador/descompactador",
      "c. Desfragmentador",
      "d. Protector de Pantalla"
    ],
    correcta: 2
  },
  {
    pregunta: "300. Son computadoras que tienen un gran poder de procesamiento, su velocidad puede llegar al rango de billones de instrucciones por segundo, se utilizan en centros de investigación, universidades, etc.",
    opciones: [
      "a. Microcomputadoras",
      "b. Minicomputadoras",
      "c. Computadoras Centrales",
      "d. Súper Computadoras"
    ],
    correcta: 3
  },
  {
    pregunta: "301. ¿Cuál de las siguientes es una manera de evitar virus en nuestras computadoras?",
    opciones: [
      "a. Es comprar y utilizar solamente software que venga “bien empacado” en la tienda o a través de la casa de software por correo",
      "b. Navegar y bajar de cualquier página de Internet el software que necesitemos.",
      "c. No actualizar la lista de virus",
      "d. Todas las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "302. ¿Es la extensión con la Cual se crea un archivo compreso en el sistema operativo Windows?",
    opciones: [
      "a. .rar",
      "b. .zip",
      "c. .ace",
      "d. .arc"
    ],
    correcta: 1
  },
  {
    pregunta: "303. Las siglas de FTP corresponden a:",
    opciones: [
      "a. Protocolo de Transferencia de Campos",
      "b. Protocolo de Transferencia de Archivos",
      "c. Protocolo de Trasbordo de Fuentes",
      "d. Protocolo de Traslado de Fólderes"
    ],
    correcta: 1
  },
  {
    pregunta: "304. Los programas usados para tener acceso a páginas Web y desplegarlas se llaman:",
    opciones: [
      "a. Sitios Web",
      "b. Ventanas Web",
      "c. Documentos Web",
      "d. Exploradores Web"
    ],
    correcta: 3
  },
  {
    pregunta: "305. Es un IP válido:",
    opciones: [
      "a. 12.345.77",
      "b. 12.34.5.77",
      "c. 1234.577",
      "d. 12.34.34.577"
    ],
    correcta: 1
  },
  {
    pregunta: "306. ¿Cuál es el método abreviado para seleccionar todo el texto de un documento?",
    opciones: [
      "a. Ctrl + E",
      "b. Ctrl + C",
      "c. Ctrl + V",
      "d. Ctrl + Z"
    ],
    correcta: 0
  },
  {
    pregunta: "307. ¿Cuál de los siguientes servicios de Internet se utiliza como una conexión remota a una computadora o servidor?",
    opciones: [
      "a. FTP",
      "b. Telnet",
      "c. Ping",
      "d. Netsend"
    ],
    correcta: 1
  },
  {
    pregunta: "308. ¿Cómo cambias el tamaño de un objeto en un paquete de presentaciones?",
    opciones: [
      "a. Al arrastrar un controlador de tamaño",
      "b. Al hacer clic en el botón cambiar tamaño",
      "c. Al arrastrar el controlador de ajuste",
      "d. No puedes cambiar el tamaño de un objeto del paquete de presentaciones."
    ],
    correcta: 0
  },
  {
    pregunta: "309. ¿Es el nombre de dominio destinado para aquellas instituciones no lucrativas que tienen una página en Internet?",
    opciones: [
      "a. .edu",
      "b. .org",
      "c. .mx",
      "d. .net"
    ],
    correcta: 1
  },
  {
    pregunta: "310. ¿Cuál vista usaría para ver mejor los márgenes de una página?",
    opciones: [
      "a. Normal",
      "b. Diseño de Impresión",
      "c. Esquema",
      "d. Diseño Web"
    ],
    correcta: 1
  },
  {
    pregunta: "311. Para colocar texto en el pisapapeles siempre es necesario primero:",
    opciones: [
      "a. Hacer clic en el botón Copiar",
      "b. Hacer clic en el botón Cortar",
      "c. Hacer clic en el botón Pegar",
      "d. Seleccionar el texto"
    ],
    correcta: 3
  },
  {
    pregunta: "312. Al Oprimir [Ctrl.][Intro] insertas un:",
    opciones: [
      "a. Salto de página suave",
      "b. Salto de página manual",
      "c. Salto de sección continuo",
      "d. Salto de columna"
    ],
    correcta: 1
  },
  {
    pregunta: "313. ¿Cuándo solo deseamos copiar el formato de algún texto debo hacer?",
    opciones: [
      "a. Seleccionar el texto, darle copiar y luego pegar.",
      "b. Seleccionar el texto, luego darle copiar formato y seleccionar al texto que deseo aplicárselo.",
      "c. Seleccionar el texto, darle corta y luego pegar.",
      "d. Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "314. Una red de telecomunicaciones internacional que consiste en documentos con hipervínculos recibe el nombre de:",
    opciones: [
      "a. NSFNET",
      "b. Netscape Navigator",
      "c. Internet Explorer",
      "d. World Wide Web"
    ],
    correcta: 3
  },
  {
    pregunta: "315. Los efectos de animación de PowerPoint te permiten controlar",
    opciones: [
      "a. El orden en que se animan el texto y objetos.",
      "b. La dirección desde la cual aparecen los objetos animados.",
      "c. Cuáles textos e imágenes se animan",
      "d. Todas las anteriores."
    ],
    correcta: 3
  },
  {
    pregunta: "316. ¿Qué usarías para colocar objetos en un sitio específico de una diapositiva?",
    opciones: [
      "a. Los campos",
      "b. Las reglas",
      "c. La cuadrícula",
      "d. Líneas dibujadas"
    ],
    correcta: 2
  },
  {
    pregunta: "317. El asistente de auto contenido que forma parte del paquete de presentación se puede utilizar para:",
    opciones: [
      "a. Cuando no se sabe muy bien cómo organizar las ideas de la presentación",
      "b. Arrastrar el controlador de ajuste.",
      "c. Cambiar el tamaño de un objeto.",
      "d. Todas las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "318. ¿Qué carácter es utilizado para indicar una referencia absoluta?",
    opciones: [
      "a. &",
      "b. $",
      "c. %",
      "d. @"
    ],
    correcta: 1
  },
  {
    pregunta: "319. ¿Qué tipo de referencia de celda cambia al copiarla?",
    opciones: [
      "a. Absoluta",
      "b. Relativa",
      "c. Circular",
      "d. Cerrada"
    ],
    correcta: 1
  },
  {
    pregunta: "320. Mencione un formato de archivo con el que no se puede guardar una presentación en Poder Point.",
    opciones: [
      "a. Página web",
      "b. Documento Word",
      "c. Imagen .jpg",
      "d. Imagen .gif"
    ],
    correcta: 1
  },
  {
    pregunta: "321. Para añadir una nueva fila en blanco en el extremo inferior de una tabla debes:",
    opciones: [
      "a. Colocar el punto de inserción en la última fila y hacer clic en el menú Tabla, en el comando Insertar y en Filas en la parte superior.",
      "b. Seleccionar la última fila y hacer clic en el menú Tabla y el comando Dividir celdas.",
      "c. Colocar el punto de inserción en la última celda de la última fila y presionar [Tab]",
      "d. Colocar el punto de inserción en la última fila y presionar [Mayus][flecha abajo]"
    ],
    correcta: 2
  },
  {
    pregunta: "322. Si en la columna A tenemos el precio de artículos y en la columna B queremos calcular el impuesto del 10%, la fórmula a copiar en cada celda de la columna B será",
    opciones: [
      "a. = A1 10%",
      "b. = $A$10.1",
      "c. = A1 0.1",
      "d. = $A$110%"
    ],
    correcta: 2
  },
  {
    pregunta: "323. La fórmula = SI( A1 < B1 , MIN (A1:A5), MIN(B1:B5)) corresponde a",
    opciones: [
      "a. Dejar el valor menor de los elementos B1 a B5, si lo que está en A1 no es mayor o igual a lo que está en B1.",
      "b. Dejar el valor menor de los elementos A1 a A5, si lo que está en A1 no es mayor o igual a lo que está en B1.",
      "c. Dejar el valor menor de los elementos B1 a B5, si lo que está en A1 es mayor a lo que está en B1.",
      "d. Dejar el valor menor de los elementos B1 a B5, si lo que está en A1 es mayor a lo que está en B1."
    ],
    correcta: 1
  },
  {
    pregunta: "324. La intersección de cada columna con cada renglón se le llama :",
    opciones: [
      "a. Rango",
      "b. Referencia Activa",
      "c. Coordenada",
      "d. Celda"
    ],
    correcta: 3
  },
  {
    pregunta: "325. ¿Cuál es el operador para construir una referencia absoluta?",
    opciones: [
      "a. =",
      "b. abs( )",
      "c. %",
      "d. $"
    ],
    correcta: 3
  },
  {
    pregunta: "326. ¿Cuál tipo de datos sería mejor para un campo en el que se almacenarán las fechas de nacimiento?",
    opciones: [
      "a. Texto",
      "b. Numérico",
      "c. Auto numérico",
      "d. Fecha/Hora"
    ],
    correcta: 3
  },
  {
    pregunta: "327. Cada una de las afirmaciones siguientes es verdadera para un filtro excepto",
    opciones: [
      "a. Crea una hoja de datos temporal de registros que satisfacen los criterios",
      "b. Es posible almacenar la hoja de datos resultante",
      "c. La hoja de datos resultante incluye todos los campos en la base de datos.",
      "d. Un filtro se guarda en forma automática en la base de datos como objeto."
    ],
    correcta: 3
  },
  {
    pregunta: "328. Un formulario nos sirve para",
    opciones: [
      "a. Actualizar información en la base de datos",
      "b. Borrar algún registro en la base de datos",
      "c. Buscar un registro en la base de datos",
      "d. Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "329. Es un objeto abstracto o concreto que existe y que es distinguible de los demás, acerca del Cuál nos interesa guardar información:",
    opciones: [
      "a. Atributo",
      "b. Entidad",
      "c. Campo",
      "d. Objeto"
    ],
    correcta: 1
  },
  {
    pregunta: "330. En una base de datos, que almacena información de los socios de un video club. ¿Cuál es el identificador con que se hace referencia a todos los datos de un socio en específico?",
    opciones: [
      "a. Query",
      "b. Campo",
      "c. Registro",
      "d. Relación"
    ],
    correcta: 2
  },
  {
    pregunta: "331. ¿Qué es un \"backup\"?",
    opciones: [
      "a. Es un sistema de antivirus",
      "b. Es un sistema de copia de seguridad",
      "c. Es un sistema de seguridad en Internet",
      "d. Es una unidad de información utilizada por las computadoras"
    ],
    correcta: 1
  },
  {
    pregunta: "332. ¿Qué es un byte?",
    opciones: [
      "a. Es una unidad de información utilizada por las computadoras",
      "b. Es una unidad de medida para calibrar la información en internet",
      "c. Es un sistema de seguridad en Internet",
      "d. Es un tipo de datos de almacenamiento"
    ],
    correcta: 0
  },
  {
    pregunta: "333. ¿Qué significa encriptar?",
    opciones: [
      "a. Significa guardar los archivos comprimidos para que ocupen menos espacio",
      "b. Significa proteger archivos expresando su contenido en un lenguaje cifrado",
      "c. Significa realizar copias de seguridad de archivos en tamaño reducido",
      "d. Significa borrar toda la información de forma segura."
    ],
    correcta: 1
  },
  {
    pregunta: "334. ¿Qué es el spam?",
    opciones: [
      "a. Es un virus informático",
      "b. Es el envío de correo no solicitado",
      "c. Es una marca de ordenador",
      "d. Es un sistema de seguridad en Internet"
    ],
    correcta: 1
  },
  {
    pregunta: "335. ¿Qué es un pixel?",
    opciones: [
      "a. Es una unidad de almacenamiento de datos",
      "b. Es el elemento gráfico mínimo con el que se componen las imágenes en la pantalla de un ordenador.",
      "c. Es una unidad de medida que sirve para contar las cantidad de colores de los que se compone una imagen en la pantalla de un ordenador",
      "d. Es un sistema de seguridad en Internet"
    ],
    correcta: 1
  },
  {
    pregunta: "336. ¿Qué es un servidor?",
    opciones: [
      "a. Es un ordenador utilizado básicamente para conectarse a internet",
      "b. Es un ordenador central de un sistema de red que provee servicios y programas a otros ordenadores conectados",
      "c. Es un ordenador de tecnología avanzada utilizado para software potencialmente complejo",
      "d. Es una persona que presta servicios informáticos"
    ],
    correcta: 1
  },
  {
    pregunta: "337. ¿Qué es el USB?",
    opciones: [
      "a. Es una interface de tipo plug & play entre un ordenador y ciertos dispositivos",
      "b. Es un emulador para juegos de consola",
      "c. Es un tipo de tarjeta aceleradora gráfica",
      "d. Es un virus informático"
    ],
    correcta: 0
  },
  {
    pregunta: "338. ¿Qué es un login?",
    opciones: [
      "a. Es una clave de acceso que permite identificar al usuario de un servicio",
      "b. Es un ordenador utilizado básicamente para conectarse a internet",
      "c. Es una clave específica de los móviles",
      "d. Es una clave específica para hacer operaciones bancarias"
    ],
    correcta: 0
  },
  {
    pregunta: "339. Para indicar una referencia absoluta es?",
    opciones: [
      "a. %",
      "b. &",
      "c. $",
      "d. @"
    ],
    correcta: 2
  },
  {
    pregunta: "340. Si en la columna A tenemos el precio de artículos y en la columna B queremos calcular el impuesto del 35%, la fórmula a copiar en cada celda de la columna B será",
    opciones: [
      "a. = A1 0.35",
      "b. = $A$135%",
      "c. = A1 35%",
      "d. = $A$13.5"
    ],
    correcta: 0
  },
  {
    pregunta: "341. La fórmula = SI( A1 < B1 , MIN (A1:A5), MIN(B1:B5)) corresponde a",
    opciones: [
      "a. Dejar el valor menor de los elementos B1 a B5, si lo que está en A1 es mayor a lo que está en B1.",
      "b. Dejar el valor menor de los elementos B1 a B5, si lo que está en A1 es mayor a lo que está en B1.",
      "c. Dejar el valor menor de los elementos B1 a B5, si lo que está en A1 no es mayor o igual a lo que está en B1.",
      "d. Dejar el valor menor de los elementos A1 a A5, si lo que está en A1 no es mayor o igual a lo que está en B1."
    ],
    correcta: 2
  },
  {
    pregunta: "342. La intersección de filas con columnas se conoce como :",
    opciones: [
      "a. Rango.",
      "b. Coordenada.",
      "c. Celda.",
      "d. Referencia Activa"
    ],
    correcta: 2
  },
  {
    pregunta: "343. El criterio valor lógico es parte de la función:",
    opciones: [
      "a. Si",
      "b. Promedio",
      "c. Max",
      "d. Y"
    ],
    correcta: 0
  },
  {
    pregunta: "344. La intersección de filas con columnas se conoce como :",
    opciones: [
      "a. Rango.",
      "b. Coordenada.",
      "c. Celda.",
      "d. Referencia Activa"
    ],
    correcta: 2
  },
  {
    pregunta: "345. El criterio valor lógico es parte de la función:",
    opciones: [
      "a. Si",
      "b. Promedio",
      "c. Max",
      "d. Y"
    ],
    correcta: 0
  },
  {
    pregunta: "346. Para almacenar las cedulas el tipo de dato de una celda deberá ser.",
    opciones: [
      "a. Texto",
      "b. Numérico",
      "c. Si/NO",
      "d. Fecha/Hora"
    ],
    correcta: 1
  },
  {
    pregunta: "347. Para determinar los datos que se pueden o no ingresar en una celda se debe aplicar:",
    opciones: [
      "a. Formato condicional",
      "b. Validación",
      "c. Formato esquemático",
      "d. Formato de fuente."
    ],
    correcta: 1
  },
  {
    pregunta: "348. En un documento de Word para visualizar los bordes de impresión es necesario estar en la vista:",
    opciones: [
      "a. Esquema.",
      "b. Diseño Web.",
      "c. Normal.",
      "d. Diseño de Impresión."
    ],
    correcta: 3
  },
  {
    pregunta: "349. Para colocar imágenes, formas, texto en el portapapeles es necesario primero:",
    opciones: [
      "a. Hacer clic en el botón Pegar",
      "b. Seleccionar el texto",
      "c. Hacer clic en el botón Copiar",
      "d. Hacer clic en el botón Cortar"
    ],
    correcta: 3
  },
  {
    pregunta: "350. ¿Cuál de las siguientes disciplinas estudia el tratamiento automático de la información utilizando dispositivos electrónicos y sistemas computacionales?",
    opciones: [
      "a. Matemáticas",
      "b. Informática",
      "c. Mecánica",
      "d. Física"
    ],
    correcta: 1
  },
  {
    pregunta: "351. ¿Cuál de los siguientes enunciados representa a un carácter?",
    opciones: [
      "a. Byte",
      "b. Sistema",
      "c. Datos",
      "d. Computador"
    ],
    correcta: 0
  },
  {
    pregunta: "352. ¿Cómo se denomina a la estructura física del computador, es decir a su parte tangible:",
    opciones: [
      "a. Software.",
      "b. Firmware.",
      "c. Hardware",
      "d. Firefox."
    ],
    correcta: 2
  },
  {
    pregunta: "353. El: MS-DOS, WINDOWS 95, WINDOWS 98, WINDOWS 7 es:",
    opciones: [
      "a. Software de aplicación.",
      "b. Sistemas Operativos.",
      "c. Firmware.",
      "d. Software de desarrollo."
    ],
    correcta: 1
  },
  {
    pregunta: "354. El joystick es un dispositivo de:",
    opciones: [
      "a. Almacenamiento.",
      "b. Salida.",
      "c. Entrada.",
      "d. Lectura."
    ],
    correcta: 2
  },
  {
    pregunta: "355. ¿Cuál de los siguientes ejemplos de impresora trabaja por selección de puntos:?",
    opciones: [
      "a. Lectora.",
      "b. Inyectable.",
      "c. Ninguna.",
      "d. Matricial."
    ],
    correcta: 3
  },
  {
    pregunta: "356. La Memoria RAM es :",
    opciones: [
      "a. Solo de escritura.",
      "b. Solo de lectura.",
      "c. Lectura/Escritura.",
      "d. Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "357. ¿Cuál es la unidad más pequeña de información?:",
    opciones: [
      "a. Byte.",
      "b. Carácter.",
      "c. Bit.",
      "d. Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "358. Se conoce como el cerebro del Computador a:",
    opciones: [
      "a. Microprocesador",
      "b. CPU",
      "c. Led",
      "d. Transistor"
    ],
    correcta: 0
  },
  {
    pregunta: "359. Un computador es",
    opciones: [
      "a. Programa editor de texto.",
      "b. Maquina electrónica.",
      "c. Maquina electromagnética.",
      "d. Maquina eléctrica."
    ],
    correcta: 1
  },
  {
    pregunta: "360. Se conoce como memoria de solo lectura a:",
    opciones: [
      "a. Disco duro",
      "b. ROM",
      "c. Procesador",
      "d. Memory flash"
    ],
    correcta: 1
  },
  {
    pregunta: "361. ¿Cuál de los siguientes dispositivos es una unidad de salida de información?",
    opciones: [
      "a. Micrófono",
      "b. Web Cam",
      "c. Escáner",
      "d. Impresora"
    ],
    correcta: 3
  },
  {
    pregunta: "362. ¿Cuál de las siguientes áreas del teclado están representadas por letras y símbolos?",
    opciones: [
      "a. Función",
      "b. Especiales",
      "c. Numéricas",
      "d. Alfanuméricas"
    ],
    correcta: 3
  },
  {
    pregunta: "363. Las teclas de función van desde:",
    opciones: [
      "a. F1…F15",
      "b. F2…F5",
      "c. F1…F12",
      "d. F3, F4, F5 y F10"
    ],
    correcta: 2
  }
]
  

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
  
}

function reiniciar() {
  localStorage.removeItem("respuestas");
  location.reload();
}

function regresarAExamenes() {
    // IMPORTANTE: Cambia 'index.html' por la URL real de tu página de selección de exámenes.
    window.location.href = '../../index.php'; // Redirige a la página de selección de exámenes  
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