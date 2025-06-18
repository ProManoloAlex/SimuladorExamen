// ---------------------------- CONFIGURACIÓN ----------------------------
const preguntasPorPagina = 10;
let paginaActual = 0;
let respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas")) || [];


// Aquí puedes añadir todas tus preguntas:
const preguntas = [
 {
    pregunta: "1. ¿Cuál de los siguientes lenguajes de programación se usa para crear programas como applets?",
    opciones: [
      "a) COBOL",
      "b) basico",
      "c) lenguaje c",
      "d) Java"
    ],
    correcta: 3
  },
  {
    pregunta: "2. La especificación_____-define una interfaz de programación de la aplicación para la comunicación entre el servidor y el programa de la aplicación.",
    opciones: [
      "a) Servlet de Java",
      "b) JDBC",
      "c) Applet de Java",
      "d) Java Swing"
    ],
    correcta: 0
  },
  {
    pregunta: "3. Estado verdadero o falso: los servlets se utilizan para generar respuestas dinámicas a las solicitudes HTTP.",
    opciones: [
      "a) Cierto",
      "b) falso",
      "c) Puede ser",
      "d) no puedo decir"
    ],
    correcta: 0
  },
  {
    pregunta: "4. ¿Cuál de estas funciones no forma parte del ciclo de vida del servlet?",
    opciones: [
      "a) Comprobando si existe una instancia de servlet o no",
      "b) Invocando el método de servicio del servlet.",
      "c) Apagar el servlet",
      "d) Pausar el servlet por un período de tiempo dado."
    ],
    correcta: 3
  },
{
    pregunta: "5. ¿Cuál de los siguientes servidores de aplicaciones no proporciona soporte integrado para los servlets?",
    opciones: [
      "a) servidor Tomcat",
      "b) Glassfish",
      "c) JBoss",
      "d) Ninguna de las mencionadas"
    ],
    correcta: 3
  },
  {
    pregunta: "6. ¿Cuál es la forma completa de JSP?",
    opciones: [
      "a) programa de servlet de Java",
      "b) páginas del servidor Java",
      "c) Java server pages",
      "d) programa de servidor Java"
    ],
    correcta: 2
  },
  {
    pregunta: "7. Mientras usa Javascript, el navegador analiza el código HTML en una estructura similar a un árbol definida por un estándar llamado:",
    opciones: [
      "a) DOS",
      "b) DOD",
      "c) DOM",
      "d) DON"
    ],
    correcta: 2
  },
  {
    pregunta: "8. El script Java se usa para crear páginas web dinámicas utilizando tecnologías que se llaman colectivamente:",
    opciones: [
      "a) ajax",
      "b) Thor",
      "c) Dynamo",
      "d) Aquiles"
    ],
    correcta: 0
  },
  {
    pregunta: "9. ¿Qué son los lenguajes de scripting?",
    opciones: [
      "a) Los lenguajes de programación que predeciden el contenido de la página web.",
      "b) Los lenguajes de programación más sencillos y con la misma protección.",
      "c) Los lenguajes de programación que intercambian simplicidad por protección.",
      "d) Ninguna de las mencionadas"
    ],
    correcta: 1
  },
  {
    pregunta: "10. ¿Qué son los lenguajes de script del lado del cliente?",
    opciones: [
      "a) Los idiomas diseñados para ser ejecutados en el navegador web del cliente.",
      "b) Los lenguajes diseñados para ser ejecutados en el servidor.",
      "c) Los idiomas diseñados para reducir la cantidad de costos de datos incurridos al final del cliente",
      "d) Los lenguajes diseñados para ser ejecutados en múltiples computadoras paralelas entre sí.",
      "d) Todo lo anterior."
    ],
    correcta: 0
  },
  {
    pregunta: "11. ¿Cuál de las siguientes afirmaciones es cierta acerca de los servicios web?",
    opciones: [
      "a) Los servicios web son aplicaciones web basadas en estándares abiertos (XML, SOAP, HTTP, etc.).",
      "b) Los servicios web interactúan con otras aplicaciones web con el fin de intercambiar datos",
      "c) Los servicios web pueden convertir sus aplicaciones existentes en aplicaciones web.",
      "d) Todo lo anterior." 
    ],
    correcta: 3
  },
  {
    pregunta: "12. ¿Cuál de las siguientes afirmaciones es correcta acerca de Synchronicity?",
    opciones: [
      "a) La sincronicidad se refiere a la vinculación del cliente a la ejecución del servicio.",
      "b) En las invocaciones síncronas, el cliente bloquea y espera a que el servicio complete su operación antes de continuar.",
      "c) Las operaciones asíncronas permiten a un cliente invocar un servicio y luego ejecutar otras funciones.",
      "d) Todo lo anterior."  
    ],
    correcta: 3
  },
  {
    pregunta: "13. ¿Cuál de las siguientes funciones de la arquitectura de servicios web proporciona un lugar central donde los desarrolladores pueden publicar nuevos servicios o encontrar los existentes?",
    opciones: [
      "a) Proveedor de servicios",
      "b) Solicitante de servicio",
      "c) Registro de servicio",
      "d) Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "14. ¿Cómo se envía la solicitud en XML-RPC?",
    opciones: [
      "a) Las solicitudes se codifican en XML y se envían a través de HTTP POST.",
      "b) Las solicitudes se codifican en XML y se envían a través de HTTP GET.",
      "c) Ambos de los anteriores.",
      "d) Ninguna de las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "15. ¿Cuál de los siguientes es correcto acerca de SOAP?",
    opciones: [
      "a) SOAP es un protocolo basado en XML para intercambiar información entre computadoras.",
      "b) SOAP es un protocolo de comunicación.",
      "c) SOAP es para la comunicación entre aplicaciones.",
      "d) Todo lo anterior."
    ],
    correcta: 3
  },
  {
    pregunta: "16. Un script es un:",
    opciones: [
      "a) Programa o secuencia de instrucciones que el procesador interpreta o ejecuta directamente",
      "b) Programa o secuencia de instrucción que es interpretado o llevado a cabo por otro programa",
      "c) Programa o secuencia de instrucción interpretada o realizada únicamente por el servidor web",
      "d) Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "17. En comparación con el programa compilado, se ejecutan los scripts.",
    opciones: [
      "a) más rápido",
      "b) Más lento",
      "c) La velocidad de ejecución es similar.",
      "d) Depender del script."
    ],
    correcta: 1
  },
  {
    pregunta: "18. ¿Cuál de los siguientes es un problema de seguridad con los servicios web?",
    opciones: [
      "a) Confidencialidad",
      "b) Autenticación",
      "c) Seguridad de la red",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "19. Las aplicaciones web se desarrollaron para interactuar______.",
    opciones: [
      "a) Diferentes plataformas",
      "b) Servidor",
      "c) Navegadores",
      "d) Ninguno de esos"
    ],
    correcta: 0
  },
  {
    pregunta: "20. ¿Cuál de la siguiente capa en Web Service Protocol Stack es responsable de describir la interfaz pública para un servicio web específico?",
    opciones: [
      "a) Servicio de transporte",
      "b) Mensajería XML",
      "c) Descripción del servicio",
      "d) Descubrimiento de servicios"
    ],
    correcta: 2
  },
   {
    pregunta: "21. Google+ es otra alternativa a ¿cuál de los siguientes sitios?",
    opciones: [
      "a) Amazonas",
      "b) Facebook",
      "c) Bing",
      "d) Yahoo"
    ],
    correcta: 1
  },
  {
    pregunta: "22. Los sitios web estáticos se diseñan generalmente utilizando:",
    opciones: [
      "a) Dreamviewer",
      "b) Visual C ++ Studio",
      "c) Netbeans",
      "d) Eclipse"
    ],
    correcta: 0
  },
  {
    pregunta: "23. Estudiante Una combinación utilizada de PHP, MySQL y HTML para su proyecto. ¿Cuál es el tipo de sitio web desarrollado por el Estudiante A?",
    opciones: [
      "a) Dinámico",
      "b) Flash",
      "c) Estático",
      "d) Ninguno de esos"
    ],
    correcta: 0
  },
  {
    pregunta: "24. Organice los siguientes sitios web en orden cronológico de desarrollo.\n1. Google\n2. Yahoo\n3. Google+\n4. Orkut",
    opciones: [
      "a) 2 4 3 1",
      "b) 2 1 4 3",
      "c) 2 1 3 4",
      "d) 2 4 3 1"
    ],
    correcta: 1
  },
  {
    pregunta: "25. Seleccione la entrada impar (Odd Entry)- Google+, Bing, Orkut, Youtube",
    opciones: [
      "a) Google+",
      "b) Youtube",
      "c) Bing",
      "d) Orkut"
    ],
    correcta: 2
  },
  {
    pregunta: "26. ¿Cuál de los siguientes se utiliza para ver mapas y lugares?",
    opciones: [
      "a) mapas de Google",
      "b) Google Places",
      "c) Google Show",
      "d) Países de google"
    ],
    correcta: 0
  },
  {
    pregunta: "27. ¿Cuál de los siguientes es el mejor sitio para Encyclopedia?",
    opciones: [
      "a) Yahoo respuestas",
      "b) Google",
      "c) Pedir Ask",
      "d) Wikipedia"
    ],
    correcta: 3
  },
  {
    pregunta: "28. ¿Cuál de los siguientes no es un ejemplo de sitio de comercio electrónico?",
    opciones: [
      "a) Tweeter",
      "b) Ebay",
      "c) FlipKart",
      "d) Amazonas"
    ],
    correcta: 0
  },
  {
    pregunta: "29. ¿Cuál de los siguientes sitios web no se usa para ver videos?",
    opciones: [
      "a) Pinterest",
      "b) Metacafe",
      "c) Youtube",
      "d) Dailymotion"
    ],
    correcta: 0
  },
  {
    pregunta: "30. El motor de búsqueda se usa para______- .",
    opciones: [
      "a) Buscar Videos",
      "b) Buscar documentos",
      "c) Sistema de software diseñado para buscar información en la World Wide Web.",
      "d) Todos estos"
    ],
    correcta: 3
  },
  {
    pregunta: "31. Se llama una pieza de icono o imagen en una página web asociada con otra página web:",
    opciones: [
      "a) url",
      "b) hiperenlace (hyperlink)",
      "c) enchufar (plugin)",
      "d) ninguno de los mencionados"
    ],
    correcta: 1
  },
  {
    pregunta: "32. Página web dinámica",
    opciones: [
      "a) Es igual cada vez que se muestra",
      "b) se genera bajo demanda por un programa o una solicitud desde el navegador.",
      "c) Tanto a) como b)",
      "d) ninguno de los mencionados"
    ],
    correcta: 1
  },
  {
    pregunta: "33. ¿Qué es un navegador web?",
    opciones: [
      "a) Un programa que puede mostrar una página web.",
      "b) un programa usado para ver documentos html",
      "c) Permite al usuario acceder a los recursos de internet.",
      "d) todos los mencionados"
    ],
    correcta: 3
  },
  {
    pregunta: "34. La interfaz de puerta de enlace común se utiliza para:",
    opciones: [
      "a) generar archivos ejecutables a partir de contenido web por servidor web",
      "b) generar páginas web",
      "c) transmitir videos",
      "d) ninguno de los mencionados"
    ],
    correcta: 0
  },
  {
    pregunta: "35. URL significa:",
    opciones: [
      "a) etiqueta de referencia única",
      "b) etiqueta de referencia uniforme",
      "c) Localizador Uniforme de Recursos",
      "d) localizador único de recursos"
    ],
    correcta: 2
  },
  {
    pregunta: "36. Una cookie web es un pequeño dato.",
    opciones: [
      "a) enviado desde un sitio web y almacenado en el navegador web del usuario mientras el",
      "b) enviado por el usuario y almacenado en el servidor mientras el usuario navega por un sitio web",
      "c) enviado desde el servidor raíz a todos los servidores",
      "d) ninguno de los mencionados"
    ],
    correcta: 0
  },
   {
    pregunta: "37. ¿Cuál de los siguientes no se utiliza para generar páginas web dinámicas?",
    opciones: [
      "a) PHP",
      "b) ASP.NET",
      "c) JSP",
      "d) ninguno de los mencionados"
    ],
    correcta: 3
  },
  {
    pregunta: "38. Una alternativa de javascript en la plataforma windows es:",
    opciones: [
      "a) VBScript",
      "b) ASP.NET",
      "c) JSP",
      "d) ninguno de los mencionados"
    ],
    correcta: 0
  },
  {
    pregunta: "39. ¿Qué es el modelo de objeto de documento (DOM)?",
    opciones: [
      "a) Convención para representar e interactuar con objetos en documentos html.",
      "b) Interfaz de programación de aplicaciones",
      "c) jerarquía de objetos en ASP.NET",
      "d) ninguno de los mencionados"
    ],
    correcta: 0
  },
  {
    pregunta: "40. AJAX significa:",
    opciones: [
      "a) javascript asíncrono y xml",
      "b) JSP avanzado y xml",
      "c) JSP asíncrono y xml",
      "d) javascript avanzado y xml"
    ],
    correcta: 0
  },
  {
    pregunta: "41. URL significa:",
    opciones: [
      "a) Cargador de recursos uniforme",
      "b) Localizador de investigación uniforme",
      "c) Cargador de investigación uniforme",
      "d) Localizador Uniforme de Recursos"
    ],
    correcta: 3
  },
  {
    pregunta: "42. ¿Cuál es un mensajero instantáneo que se utiliza para chatear?",
    opciones: [
      "a) Google Talk",
      "b) AltaVista",
      "c) MAC",
      "d) Microsoft Office"
    ],
    correcta: 0
  },
  {
    pregunta: "43. Los mensajes comerciales en la red se identifican como:",
    opciones: [
      "a) Anuncios de red",
      "b) Comerciales de internet",
      "c) Webmercials",
      "d) Anuncios virales"
    ],
    correcta: 2
  },
  {
    pregunta: "44. Manuel Castelle fue el primero en utilizar el término.",
    opciones: [
      "a) sociedad de internet",
      "b) sociedad electronica",
      "c) sociedad de redes",
      "d) sociedad telemática" 
    ],
    correcta: 2
  },
  {
    pregunta: "45. GIF significa:",
    opciones: [
      "a) Formato de información global",
      "b) Formato de información de gráficos",
      "c) Archivo de intercambio de gráficos",
      "d) formato de gráficos intercambeable"
    ],
    correcta: 3
  },
  {
    pregunta: "46. ¿Cuál de los siguientes no es un motor de búsqueda?",
    opciones: [
      "a) Google",
      "b) Chrome",
      "c) Yahoo",
      "d) Bing"
    ],
    correcta: 1
  },
  {
    pregunta: "47. Internet es un sistema de:",
    opciones: [
      "a) Paquetes de software",
      "b) página web",
      "c) Sitio web",
      "d) Redes interconectadas"
    ],
    correcta: 3
  },
  {
    pregunta: "48. ¿Cuál es la forma completa de URL?",
    opciones: [
      "a) Ubicación inversa uniforme",
      "b) Ubicación de resolución universal",
      "c) Localizador Uniforme de Recursos",
      "d) Localizador de recursos de United"
    ],
    correcta: 2
  },
   {
    pregunta: "49. Internet es un ejemplo de una red:",
    opciones: [
      "a) ring",
      "b) bus",
      "c) híbrido",
      "d) malla"
    ],
    correcta: 3
  },
  {
    pregunta: "50. La Internet fue originalmente un proyecto para esta agencia gubernamental.",
    opciones: [
      "a) Arpa",
      "b) NSF",
      "c) NSA",
      "d) Ninguno de esos"
    ],
    correcta: 3
  },
  {
    pregunta: "51. Una_______ comparte hardware, software y datos entre usuarios autorizados.",
    opciones: [
      "a) DNS",
      "b) IP",
      "c) CPU",
      "d) Red"
    ],
    correcta: 3
  },
  {
    pregunta: "52. ________es el intercambio de mensajes almacenados en la computadora por medio de telecomunicaciones.",
    opciones: [
      "a) E-mail",
      "b) Download",
      "c) Copy",
      "d) Save"
    ],
    correcta: 0
  },
  {
    pregunta: "53. ¿Cuál de los siguientes se refiere a programas peligrosos que se pueden \"capturar\" al abrir archivos adjuntos de correo electrónico y descargar software de Internet?",
    opciones: [
      "a) Hardware",
      "b) Utilidad (Utility)",
      "c) Virus",
      "d) Correo no deseado (Spam)"
    ],
    correcta: 2
  },
  {
    pregunta: "54. ¿Cuál es el servicio de conexión a Internet más lento?",
    opciones: [
      "a) Módem de cable",
      "b) Línea de tierra",
      "c) Servicio telefónico",
      "d) Línea de abonado digital"
    ],
    correcta: 0
  },
  {
    pregunta: "55. El internet es:",
    opciones: [
      "a) un sistema de comunicación interno",
      "b) una gran red de redes",
      "c) Un sistema de comunicación para el gobierno indio.",
      "d) todos estos"
    ],
    correcta: 1
  },
  {
    pregunta: "56. ¿Cuál de los siguientes se utiliza para escribir páginas web?",
    opciones: [
      "a) HTML",
      "b) HTTP",
      "c) FTP",
      "d) URL"
    ],
    correcta: 0
  },
{
    pregunta: "57. En www.compscibits.com, www significa:",
    opciones: [
      "a) Red mundial",
      "b) Wide World Web",
      "c) Enlace web mundial",
      "d) Web World Web"
    ],
    correcta: 0
  },
  {
    pregunta: "58. La colección de enlaces a través de Internet crea una red interconectada llamada:",
    opciones: [
      "a) Presentación de diapositivas",
      "b) Marcador",
      "c) Gráfico circular",
      "d) Trazador"
    ],
    correcta: 1
  },
  {
    pregunta: "59. El concepto de efectivo electrónico es ejecutar el pago por:",
    opciones: [
      "a) Cheque",
      "b) Tarjeta de débito",
      "c) Tarjeta de crédito",
      "d) Tarjeta de cajero automático"
    ],
    correcta: 3
  },
  {
    pregunta: "60. ¿Cuál fue la primera red que sembró las semillas de internet?",
    opciones: [
      "a) APARNET",
      "b) APRANET",
      "c) ARPANET",
      "d) APRANAT"
    ],
    correcta: 2
  },
  {
    pregunta: "61. La condición en la que los métodos y / o atributos definidos en una clase de objeto pueden ser reutilizados por otra clase de objeto se conoce como:",
    opciones: [
      "a) especialización",
      "b) generalización",
      "c) reutilización",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "62. El número mínimo y máximo de ocurrencias de una clase de objeto para una sola ocurrencia de la clase de objeto relacionada es:",
    opciones: [
      "a) relación",
      "b) cardinalidad",
      "c) multiplicidad",
      "d) herencia"
    ],
    correcta: 2
  },
  {
    pregunta: "63. ¿Qué tipo de relación de clase puede describirse como \"es un\"?",
    opciones: [
      "a) herencia",
      "b) asociación",
      "c) multiplicidad",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "64. Un concepto de diferentes objetos que responden al mismo mensaje de diferentes maneras se conoce como:",
    opciones: [
      "a) anular (override)",
      "b) polimorfismo",
      "c) encapsulación",
      "d) herencia"
    ],
    correcta: 1
  },
  {
    pregunta: "65. En el análisis orientado a objetos, desarrollamos el modelo de casos de uso de requisitos en el modelo de casos de uso de análisis realizando todos los pasos siguientes, excepto:",
    opciones: [
      "a) Identificar, definir y documentar nuevos casos de uso.",
      "b) Identificar, definir y documentar nuevos actores.",
      "c) Identificar, definir y documentar nuevos almacenes de datos.",
      "d) identificar cualquier posibilidad de reutilización"
    ],
    correcta: 2
  },
  {
    pregunta: "66. En un diagrama de secuencia del sistema, las líneas de vida se representan como:",
    opciones: [
      "a) las barras",
      "b) las líneas verticales discontinuas extendidas hacia abajo desde el actor y los símbolos del sistema",
      "c) clases de objeto",
      "d) Flechas horizontales de los actores al sistema."
    ],
    correcta: 1
  },
  {
    pregunta: "67. ¿Qué tipo de relación de clase puede leerse como \"El objeto A contiene el Objeto B y el Objeto B es parte del objeto A\"?",
    opciones: [
      "a) agregación",
      "b) generalización",
      "c) persistente",
      "d) transitoria"
    ],
    correcta: 0
  },
  {
    pregunta: "68. Los mensajes de un caso de uso se pueden representar gráficamente con un:",
    opciones: [
      "a) caso de uso lógico",
      "b) diagrama de actividad",
      "c) diagrama de composición",
      "d) Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "69. Un caso de uso que documenta la interacción entre el usuario del sistema y el sistema es un:",
    opciones: [
      "a) caso de uso de interacción",
      "b) caso de uso de generalización",
      "c) caso de uso del análisis del sistema",
      "d) caso de uso abstracto"
    ],
    correcta: 2
  },
  {
    pregunta: "70. Un conjunto de convenciones de modelado que se usa para especificar o describir un sistema de software en términos de objetos es:",
    opciones: [
      "a) diagrama de flujo de datos",
      "b) diagrama de objeto de atributo",
      "c) diagrama de relación de entidad",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "71. El tipo de diagramas que se utilizan para mostrar las interacciones entre series de mensajes se clasifican como:",
    opciones: [
      "a) diagramas de actividad",
      "b) diagramas de diagrama de estado",
      "c) diagramas de colaboración",
      "d) diagramas de la línea de vida del objeto"
    ],
    correcta: 2
  },
  {
    pregunta: "72. Los diagramas que se utilizan para distribuir archivos, bibliotecas y tablas en la topología del hardware se denominan:",
    opciones: [
      "a) diagramas de despliegue",
      "b) diagramas de casos de uso",
      "c) diagramas de secuencia",
      "d) diagramas de colaboración"
    ],
    correcta: 0
  },
  {
    pregunta: "73. En las fases del ciclo de vida macro o ciclo de vida del sistema de información, la fase que consiste en el estudio del costo beneficio y las áreas potenciales de aplicación se llama:",
    opciones: [
      "a) fase de análisis de despliegue",
      "b) fase de análisis de validación",
      "c) fase de análisis de viabilidad",
      "d) fase de análisis de implementación"
    ],
    correcta: 2
  },
  {
    pregunta: "74. Cuando dos esquemas diferentes utilizan un mismo nombre para describir esquemas, se llama a esto:",
    opciones: [
      "a) antónimo",
      "b) sinónimo",
      "c) homónimo",
      "d) ninguno de los anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "75. Los aspectos dinámicos relacionados con un sistema se muestran con la ayuda de:",
    opciones: [
      "a) diagramas de secuencia",
      "b) diagramas de interacción",
      "c) diagramas de despliegue",
      "d) diagramas de caso de uso"
    ],
    correcta: 1
  },
  {
    pregunta: "76. En los esquemas de diagramas de estado, el elemento que se muestra con la ayuda de un círculo de doble línea rellena con una flecha apuntando se clasifica como:",
    opciones: [
      "a) estado de dos grados",
      "b) estado inicial",
      "c) estado final",
      "d) estado de grado cero"
    ],
    correcta: 2
  },
  {
    pregunta: "77. El ciclo de vida del sistema de base de datos también se denomina.",
    opciones: [
      "a) micro ciclo de vida",
      "b) ciclo de vida macro",
      "c) mini ciclo de vida de los datos",
      "d) ciclo de vida de los metadatos"
    ],
    correcta: 0
  },
  {
    pregunta: "78. Los diagramas en lenguaje modificado unificado que incluye componentes ejecutables, interfaces y relaciones de dependencia se llaman:",
    opciones: [
      "a) diagramas de objetos",
      "b) diagramas de paquete",
      "c) diagramas de despliegue",
      "d) diagramas de componentes"
    ],
    correcta: 3
  },
  {
    pregunta: "79. En los diagramas de diagramas de estado, el elemento que se muestra con la ayuda de un círculo sólido con una flecha saliente se clasifica como:",
    opciones: [
      "a) estado de dos grados",
      "b) estado inicial",
      "c) estado final",
      "d) estado de grado cero"
    ],
    correcta: 1
  },
  {
    pregunta: "80. El concepto en el que dos esquemas diferentes usan los mismos nombres para especificar la misma idea se llama:",
    opciones: [
      "a) antónimo",
      "b) sinónimo",
      "c) homónimo",
      "d) tanto byc"
    ],
    correcta: 2
  },
  {
    pregunta: "81. ¿Cuál de los siguientes no es un factor en el fracaso de los proyectos de desarrollo de sistemas?",
    opciones: [
      "a) tamaño de la empresa",
      "b) falla de integración de sistemas",
      "c) participación inadecuada del usuario",
      "d) Continuación de un proyecto que debería haber sido cancelado."
    ],
    correcta: 0
  },
  {
    pregunta: "82. ¿Cuál de las siguientes no es una característica de los buenos datos de prueba?",
    opciones: [
      "a) debe ser comprensivo",
      "b) cada sentencia (statement) debe ser ejecutada",
      "c) Los usuarios no participan en esta etapa preliminar.",
      "d) Todas las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "83. La prueba positiva es:",
    opciones: [
      "a) ejecutar el sistema con datos de línea por el usuario real",
      "b) pruebas de cambios realizados en un programa nuevo o existente",
      "c) está comprobando la lógica de uno o más programas en el sistema candidato",
      "d) asegurarse de que los nuevos programas procesen de hecho ciertas transacciones de acuerdo con las especificaciones"
    ],
    correcta: 3
  },
  {
    pregunta: "84. El error, cometido al intercambiar dos dígitos en un numérico retenido, durante la entrada de datos, se llama:",
    opciones: [
      "a) Error de prueba beta",
      "b) Error de prueba alfa",
      "c) Error de transcripción",
      "d) Error de transposición"
    ],
    correcta: 3
  },
  {
    pregunta: "85. Los procedimientos de copia de seguridad y recuperación se implementan principalmente para:",
    opciones: [
      "a) proporcionar redundancia de datos",
      "b) Mostrar diferentes versiones de datos y programas.",
      "c) manejar la contingencia cuando un archivo se corrompe",
      "d) Todas las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "86. Las pruebas secuenciales o en serie son:",
    opciones: [
      "a) ejecutar el sistema con datos de línea por el usuario real",
      "b) pruebas de cambios realizados en un programa nuevo o existente",
      "c) está comprobando la lógica de uno o más programas en el sistema candidato",
      "d) asegurarse de que los nuevos programas procesen de hecho ciertas transacciones de acuerdo con las Especificaciones"
    ],
    correcta: 2
  },
  {
    pregunta: "87. La prueba unitaria es:",
    opciones: [
      "a) ejecutar el sistema con datos de línea por el usuario real",
      "b) pruebas de cambios realizados en un programa nuevo o existente",
      "c) está comprobando la lógica de uno o más programas en el sistema candidato",
      "d) asegurarse de que los nuevos programas procesen de hecho ciertas transacciones de acuerdo con las especificaciones"
    ],
    correcta: 1
  },
  {
    pregunta: "88. Para reconstruir un sistema, cuál de los siguientes elementos clave debe ser considerado:",
    opciones: [
      "a) salidas y entradas",
      "b) Control y procesadores.",
      "c) retroalimentación y medio ambiente",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "89. El problema de comunicación involucra la:",
    opciones: [
      "a) gerente y el analista",
      "b) operar y la computadora",
      "c) analista y el programador",
      "d) programador y la computadora"
    ],
    correcta: 0
  },
  {
    pregunta: "90. ¿Cuál de los siguientes 'NO es una característica de los buenos datos de prueba?",
    opciones: [
      "a) debe ser comprensivo",
      "b) cada sentencia debe ser ejecutada",
      "c) Los usuarios no participan en esta etapa preliminar.",
      "d) La salida esperada de la ejecución del módulo se debe determinar manualmente"
    ],
    correcta: 2
  },
{
    pregunta: "91. Las mejoras, las actualizaciones y las correcciones de errores se realizan durante el paso_________ en el SDLC.",
    opciones: [
      "a) Mantenimiento y evaluación",
      "b) Identificación del problema / oportunidad",
      "c) diseño",
      "d) Desarrollo y documentación."
    ],
    correcta: 0
  },
  {
    pregunta: "92. HIPO significa:",
    opciones: [
      "a) Salida de proceso de entrada de jerarquía",
      "b) Entrada de jerarquía más salida",
      "c) Jerarquía más entrada del proceso de entrada",
      "d) Proceso de salida de entrada de jerarquí"
    ],
    correcta: 0
  },
  {
    pregunta: "93. Las entidades externas pueden ser:",
    opciones: [
      "a) Fuente de datos de entrada solamente",
      "b) Fuente de datos de entrada o destino de los resultados.",
      "c) Destino de resultados solamente",
      "d) Repositorio de datos."
    ],
    correcta: 1
  },
  {
    pregunta: "94. ¿Cuál de los modelos se utiliza para los componentes del sistema?",
    opciones: [
      "a) Gráfica PERT",
      "b) Gráfica Gantt",
      "c) Gráfico de jerarquía organizacional",
      "d) DFD"
    ],
    correcta: 3
  },
  {
    pregunta: "95. Se conoce como el código utilizado para la validación.",
    opciones: [
      "a) Código de autocomprobación",
      "b) código de secuencia",
      "c) código alfanumérico",
      "d) código de clasificación de grupo"
    ],
    correcta: 0
  },
  {
    pregunta: "96. ¿Cuántos pasos hay en el ciclo de vida del desarrollo de sistemas (SDLC)?",
    opciones: [
      "a) 4",
      "b) 5",
      "c) 6",
      "d) 10"
    ],
    correcta: 0
  },
  {
    pregunta: "97. El primer paso en el ciclo de vida del desarrollo de sistemas (SDLC) es:",
    opciones: [
      "a) Análisis.",
      "b) Diseño.",
      "c) Identificación del problema / oportunidad.",
      "d) Desarrollo y documentación."
    ],
    correcta: 2
  },
  {
    pregunta: "98. El proceso organizado o conjunto de pasos que deben seguirse para desarrollar un sistema de información se conoce como:",
    opciones: [
      "a) ciclo analítico.",
      "b) ciclo de diseño.",
      "c) especificación del programa.",
      "d) Ciclo de vida del desarrollo del sistema."
    ],
    correcta: 3
  },
  {
    pregunta: "99. ¿El paso final en el ciclo de vida del desarrollo de Sytem (SDLC)?",
    opciones: [
      "a) análisis",
      "b) operacional",
      "c) desarrollo",
      "d) diseño"
    ],
    correcta: 1
  },
  {
    pregunta: "100. La decisión de hacer o comprar está asociada con el paso _________ en el SDLC.",
    opciones: [
      "a) Identificación del problema / oportunidad",
      "b) diseño",
      "c) Análisis",
      "d) Desarrollo y documentación."
    ],
    correcta: 1
  },
  {
    pregunta: "101. La prueba de aceptación es:",
    opciones: [
      "a) ejecutar el sistema con datos de línea por el usuario real",
      "b) realizar pruebas de cambios en un programa nuevo o existente",
      "c) es estar comprobando la lógica de uno o más programas en los sistemas candidatos",
      "d) asegurarse de que los nuevos programas procesen de hecho ciertas transacciones de acuerdo con las Especificaciones"
    ],
    correcta: 0
  },
  {
    pregunta: "102. La (s) regla (s) a seguir para construir las tablas de decisión es (son):",
    opciones: [
      "a) una decisión debe tener un nombre",
      "b) el lenguaje estandarizado debe ser usado consistentemente",
      "c) la lógica de la tabla es independiente de la secuencia en la que se escriben las reglas de las condiciones, pero la acción tiene lugar en el orden en que ocurren los eventos",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "103. La decisión de la gerencia de alquilar un sistema informático puede basarse en:",
    opciones: [
      "a) ventajas fiscales",
      "b) deseo de evitar un gran pago de una sola vez",
      "c) flexibilidad operacional en el cambio de hardware",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "104. El rastreo, de cualquier registro o proceso de entrada, realizado en un sistema, de vuelta a su fuente original, es un:",
    opciones: [
      "a) prueba de auditoría",
      "b) conversión",
      "c) procesamiento por lotes",
      "d) generación de informes"
    ],
    correcta: 0
  },
  {
    pregunta: "105. La alta dirección está más interesada en:",
    opciones: [
      "a) decisión táctica",
      "b) decisiones estratégicas",
      "c) Tanto (a) como (b)",
      "d) operaciones del día a día"
    ],
    correcta: 2
  },
  {
    pregunta: "106. ¿Cuál de las siguientes opciones representa las actividades, los métodos y los procedimientos del procesador en un diagrama de flujo de datos?",
    opciones: [
      "a) actigrama",
      "b) datagrama",
      "c) diagrama de flujo",
      "d) retroalimentación"
    ],
    correcta: 3
  },
  {
    pregunta: "107. Método de conversión en el que los usuarios, al estar acostumbrados a un sistema antiguo, continúan utilizando el sistema antiguo, junto con el nuevo sistema, es:",
    opciones: [
      "a) ejecución paralela",
      "b) Multitarea",
      "c) Multiprocesamiento",
      "d) Todas las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "108. ¿Cuál de las siguientes formas (s) el sistema de información y la capacidad están relacionados entre sí?",
    opciones: [
      "a) velocidad de procesamiento mejorada",
      "b) Recuperación más rápida de la información.",
      "c) mayor volumen de actividades",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "109. Los cambios realizados periódicamente en un sistema, después de su implementación, se conocen como sistema:",
    opciones: [
      "a) diseño",
      "b) análisis",
      "c) mantenimiento",
      "d) desarrollo"
    ],
    correcta: 2
  },
  {
    pregunta: "110. Una investigación del sistema puede resultar de:",
    opciones: [
      "a) una investigación de análisis",
      "b) solicitud formal de un gerente",
      "c) un sistema programado revisado",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
{
    pregunta: "111. En el diseño del compilador, 'reducir la fuerza' se refiere a:",
    opciones: [
      "a) reduciendo el rango de valores de las variables de entrada",
      "b) optimización de código usando instrucciones de máquina más baratas",
      "c) reduciendo la eficiencia del programa",
      "d) Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "112. Un programa P llama a dos subprogramas P1 y P2. P1 puede fallar 50% de veces y P2 40% de veces. Entonces p puede fallar:",
    opciones: [
      "a) 50%",
      "b) 60%",
      "c) 10%",
      "d) 70%"
    ],
    correcta: 3
  },
  {
    pregunta: "113. El proceso de asignar direcciones de carga a las distintas partes del programa y ajustar el código y los datos en el programa para reflejar las direcciones asignadas se llama:",
    opciones: [
      "a) Resolución de símbolos",
      "b) análisis",
      "c) Montaje",
      "d) reubicación"
    ],
    correcta: 3
  },
  {
    pregunta: "114. ¿Cuál de las siguientes derivaciones utiliza un analizador descendente al analizar una cadena de entrada? La entrada se escanea de izquierda a derecha",
    opciones: [
      "a) Derivación a la izquierda",
      "b) Derivación a la izquierda trazada en reversa",
      "c) Derivación del extremo derecho trazada hasta el revés",
      "d) Derivación más a la derecha"
    ],
    correcta: 0
  },
  {
    pregunta: "115. ¿Cuál de los siguientes conceptos significa agregar nuevos conceptos a un programa mientras se ejecuta?",
    opciones: [
      "a) Ocultación de datos",
      "b) carga dinámica",
      "c) captura (typing) dinámica",
      "d) Enlace dinámico"
    ],
    correcta: 1
  },
  {
    pregunta: "116. En un ensamblador de dos pasos, la tabla de símbolos es:",
    opciones: [
      "a) Generado en primera pasada",
      "b) Generado en segunda pasada.",
      "c) No generado en absoluto.",
      "d) Generado y usado solo en la segunda pasada."
    ],
    correcta: 2
  },
  {
    pregunta: "117. Empareja lo siguiente:\n(a) Tabla de referencia directa (i) Directiva de ensamblador\n(b) Tabla mnemónica (c) Tabla de registro de segmentos (ii) Utiliza una estructura de datos de matriz\n(d) EQU (iii) Contiene el código OP de la máquina\n(iv) Utiliza una estructura de datos de listas vinculadas\ncódigo:\n(a) (b) (c) (d)",
    opciones: [
      "a) (ii) (iii) (iv) (i)",
      "b) (iii) (iv) (ii) (i)",
      "c) (iv) (i) (iii) (ii)",
      "d) (iv) (iii) (ii) (i)"
    ],
    correcta: 3
  },
  {
    pregunta: "118. El traductor que realiza la expansión de llamadas macro se llama:",
    opciones: [
      "a) procesador de macros",
      "b) Micro preprocesador",
      "c) preprocesador de macros",
      "d) enlazador dinámico"
    ],
    correcta: 2
  },
  {
    pregunta: "119. ¿Cuál de los siguientes es falso?",
    opciones: [
      "a) El analizador LALR es analizador de abajo a arriba",
      "b) Un algoritmo de análisis que realiza un escaneo de izquierda a derecha y la desviación más a la derecha es RL (1)",
      "c) El analizador LR es analizador de abajo a arriba",
      "d) En LL (1), el 1 indica que hay un símbolo que mira hacia adelante."
    ],
    correcta: 1
  },
  {
    pregunta: "120. ¿Qué fase del compilador genera flujo de átomos?",
    opciones: [
      "a) Análisis de sintaxis",
      "b) Análisis léxico",
      "c) Generación de código",
      "d) Optimización de código"
    ],
    correcta: 0
  },
  {
    pregunta: "121. ¿Cuál de los siguientes es falso con respecto a la evaluación de los lenguajes de programación de computadoras?",
    opciones: [
      "a) Características orientadas a la aplicación",
      "b) Eficiencia y legibilidad",
      "c) desarrollo de software",
      "d) Coste de mantenimiento del hardware."
    ],
    correcta: 3
  },
  {
    pregunta: "122. ¿Cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) Los analizadores de arriba hacia abajo son analizadores LL, donde la primera L representa la exploración de izquierda a derecha y la segunda L representa la derivación más a la izquierda.",
      "b) (000)* es una expresión regular que solo coincide con cadenas que contienen un número impar de ceros, incluida la cadena vacía.",
      "c) Los analizadores de abajo hacia arriba se encuentran en la familia LR, donde L representa el escaneo de izquierda a derecha y R representa la derivación más a la derecha.",
      "d) La clase de lenguajes libres de contexto se cierra bajo reversa. Es decir, si L es un lenguaje libre de contexto, entonces el lenguaje LR = {WR: wϵL} está libre de contexto."
    ],
    correcta: 1
  },
  {
    pregunta: "123. Las llamadas al sistema generalmente se invocan usando:",
    opciones: [
      "a) Una instrucción privilegiada.",
      "b) Un salto indirecto.",
      "c) Una interrupción de software",
      "d) sondeo"
    ],
    correcta: 2
  },
  {
    pregunta: "124. El ____ transfiere la imagen ejecutable de un programa C ++ del disco duro a la memoria principal.",
    opciones: [
      "a) compilador",
      "b) enlazador",
      "c) depurador",
      "d) cargador"
    ],
    correcta: 3
  },
  {
    pregunta: "125. La familia de lenguajes sensibles al contexto es _______- bajo unión y________. bajo reversa.",
    opciones: [
      "a) cerrado, no cerrado",
      "b) no cerrado, no cerrado",
      "c) cerrado, cerrado",
      "d) no cerrado, cerrado"
    ],
    correcta: 2
  },
  {
    pregunta: "126. ¿Cuál es la afirmación correcta para el analizador predictivo no recursivo?\nS1: Primero (α) = {t | α => * t β para alguna cadena β} => * tβ\nS2: Seguir (X) = {a | S => * αXa β para algunas cadenas α y β}",
    opciones: [
      "a) Ambas afirmaciones S1 y S2 son incorrectas",
      "b) S1 es incorrecto y S2 es correcto",
      "c) S1 es correcto y S2 es incorrecto",
      "d) Ambas afirmaciones S1 y S2 son correctas"
    ],
    correcta: 3
  },
  {
    pregunta: "127. Desde el punto de vista del programador, ¿cuáles son las principales ventajas de usar un lenguaje de alto nivel en lugar de un código de máquina interno o un lenguaje ensamblador?",
    opciones: [
      "a) Portabilidad del programa",
      "b) desarrollo fácil",
      "c) Eficiencia",
      "d) Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "128. El esquema del cual el intérprete traduce el programa fuente se conoce como:",
    opciones: [
      "a) párrafo por párrafo",
      "b) Instrucción por instrucción.",
      "c) Línea por línea",
      "d) Ninguna de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "129. Programa portátil significa:",
    opciones: [
      "a) Programa con ruedas.",
      "b) Independiente de sus autores.",
      "c) Independiente de plataforma.",
      "d) Ninguna de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "130. ¿Cuál de los siguientes comandos ordena los nombres de archivos en varias columnas?",
    opciones: [
      "a) IS – X",
      "b) ES",
      "c) IS – 1",
      "d) IS – f – X"
    ],
    correcta: 1
  },
  {
    pregunta: "131. En un esquema de carga absoluta, ¿qué función del cargador es realizada por un cargador?",
    opciones: [
      "a) Reasignación",
      "b) Asignación",
      "c) Enlace",
      "d) Cargando"
    ],
    correcta: 3
  },
  {
    pregunta: "132. ¿Cuál de las siguientes expresiones está representada por el árbol de análisis? árbol de análisis",
    opciones: [
      "a) (A + B) * C",
      "b) A + * BC",
      "c) A + B * C",
      "d) A * C + B"
    ],
    correcta: 0
  },
  {
    pregunta: "133. Considere los siguientes operadores asociativos en orden decreciente de precedencia: - Resta (precedencia más alta) * Multiplicación $ Exponenciación (precedencia más baja) ¿Cuál es el resultado de la siguiente expresión? 3 - 2 * 4 $ | * 2 ** 3",
    opciones: [
      "a) - 61",
      "b) 64",
      "c) 512",
      "d) 4096"
    ],
    correcta: 3
  },
  {
    pregunta: "134. ¿Cuál de las siguientes es la fase más general de la gramática estructurada?",
    opciones: [
      "a) Regular",
      "b) sensible al contexto",
      "c) Libre de contexto",
      "d) Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "135. ¿Cuál de los siguientes se usa para agrupar caracteres en tokens (en una computadora)?",
    opciones: [
      "a) un analizador",
      "b) Optimizador de código",
      "c) generador de código",
      "d) Escáner"
    ],
    correcta: 3
  },
  {
    pregunta: "136. P: “El programa es una ejecución paso a paso de las instrucciones”. Dado P, ¿cuál de los siguientes es verdadero?",
    opciones: [
      "a) El programa es un subconjunto de un conjunto de instrucciones.",
      "b) El programa es una secuencia de un subconjunto de un conjunto de instrucciones.",
      "c) El programa es un conjunto parcialmente ordenado de un conjunto de instrucciones.",
      "d) Todas las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "137. En un rompecabezas MIU, cualquiera de las letras M, I o U podría aparecer como un símbolo de inicio. Las reglas de producción se dan a continuación:\nR1: U → IU\nR2: Mx → Mxx donde ːˑ es el operador de concatenación de cadenas. Teniendo en cuenta esto, ¿cuál de los siguientes se mantiene para\n(i) MIUIUIUIUUUUUUU\n(ii) (ii) MIUIUIUIUIUIUIUIUU",
    opciones: [
      "a) O bien (i) o (ii) pero no ambas son palabras válidas.",
      "b) Tanto (i) como (ii) son palabras válidas y toman un número idéntico de transformaciones para la producción.",
      "c) Tanto (i) como (ii) son palabras válidas pero implican un número diferente de transformaciones en la producción.",
      "d) Ninguno de estos"
    ],
    correcta: 2
  },
  {
    pregunta: "138. Las funciones recursivas se ejecutan en un:",
    opciones: [
      "a) Primero en primer orden",
      "b) Último en primera salida",
      "c) tendencia paralela"
    ],
    correcta: 1
  },
  {
    pregunta: "139. En un esquema de carga absoluta, ¿qué función del cargador se realiza mediante el ensamblador?",
    opciones: [
      "a) reasignación",
      "b) asignación",
      "c) vincular",
      "d) cargando"
    ],
    correcta: 0
  },
  {
    pregunta: "140. Al final del análisis:",
    opciones: [
      "a) Se identifican los tokens.",
      "b) Se identifican el conjunto de instrucciones. c) Se identifican los grupos sintácticos.",
      "d) Se identifican las instrucciones de la máquina."
    ],
    correcta: 0
  },
{
    pregunta: "141. La eliminación de código muerto en la optimización de código de máquina se refiere a:",
    opciones: [
      "a) Eliminación de todas las etiquetas.",
      "b) Eliminación de valores que nunca se utilizan.",
      "c) Eliminación de funciones que no estén implicadas.",
      "d) Eliminación de un módulo después de su uso."
    ],
    correcta: 1
  },
  {
    pregunta: "142. Un árbol de análisis es un árbol de análisis anotado si:",
    opciones: [
      "a) muestra valores de atributo en cada nodo.",
      "b) No hay atributos heredados.",
      "c) ha sintetizado nodos como nodos terminales.",
      "d) cada nodo no terminal es un atributo heredado."
    ],
    correcta: 0
  },
  {
    pregunta: "143. En un compilador de dos pasadas, durante la primera pasada:",
    opciones: [
      "a) los símbolos de dirección definidos por el usuario están correlacionados con su equivalente binario",
      "b) se comprueba la sintaxis de la declaración y se enumeran los errores, si los hay",
      "c) se genera el programa objeto",
      "d) Se esclarece la semántica del programa fuente."
    ],
    correcta: 0
  },
  {
    pregunta: "144. Una sola instrucción en un programa de lenguaje ensamblador contiene:",
    opciones: [
      "a) una micro operación",
      "b) una operación macro",
      "c) una instrucción a completar en un solo pulso",
      "d) una instrucción de código de máquina"
    ],
    correcta: 1
  },
  {
    pregunta: "145. El cargador absoluto exige que el programador necesite saber lo siguiente:",
    opciones: [
      "a) Dirección de inicio de la memoria principal disponible.",
      "b) tamaño total del programa",
      "c) dirección real de la ubicación de los datos",
      "d) Valores absolutos de los operandos utilizados."
    ],
    correcta: 0
  },
  {
    pregunta: "146. Los analizadores descendentes son analizadores predictivos porque:",
    opciones: [
      "a) Se pronostican las siguientes fichas",
      "b) la longitud del árbol de análisis se predice de antemano",
      "c) se predice el nodo más bajo en el árbol de análisis",
      "d) se predice el siguiente nivel inferior del árbol de análisis"
    ],
    correcta: 0
  },
  {
    pregunta: "147. En el contexto del diseño del compilador, \"reducción en la fuerza\" (reduction in strength) se refiere a:",
    opciones: [
      "a) Optimización de código obtenida por el uso de instrucciones de máquina más baratas.",
      "b) Reducción en la precisión de la salida.",
      "c) Reducción en el rango de valores de las variables de entrada.",
      "d) Reducción de la eficiencia del programa."
    ],
    correcta: 0
  },
  {
    pregunta: "148. ¿En cuántos estados puede estar un proceso?",
    opciones: [
      "a) 2",
      "b) 3",
      "c) 4",
      "d) 5"
    ],
    correcta: 3
  },
  {
    pregunta: "149. La técnica de análisis que evita el seguimiento de vuelta es:",
    opciones: [
      "a) análisis de arriba hacia abajo",
      "b) Análisis recursivo descendente",
      "c) Predictivo",
      "d) árbol de sintaxis"
    ],
    correcta: 2
  },
  {
    pregunta: "150. Solicitud (Request) es instancia de qué clase?",
    opciones: [
      "a) Solicitud (Request)",
      "b) HttpRequest",
      "c) HttpServletRequest",
      "d) ServletRequest"
    ],
    correcta: 2
  },
  {
    pregunta: "151. ¿Cuál de las siguientes afirmaciones es cierta sobre el alcance de la solicitud (Request)?",
    opciones: [
      "a) Los objetos creados con el alcance de la solicitud son accesibles solo desde la página en la que fueron creados.",
      "b) Los objetos creados con el alcance de la solicitud son accesibles solo desde las páginas que están en la misma sesión.",
      "c) Los objetos creados con el alcance de la solicitud son accesibles solo desde las páginas que procesan la misma solicitud.",
      "d) Los objetos creados con el alcance de la solicitud son accesibles solo desde las páginas que residen en la misma aplicación."
    ],
    correcta: 2
  },
  {
    pregunta: "152. ¿Cuál de las siguientes afirmaciones es cierta sobre el atributo de idioma?",
    opciones: [
      "a) El atributo de lenguaje indica el lenguaje de programación utilizado en las secuencias de comandos del servlet.",
      "b) El atributo de lenguaje indica el lenguaje de programación utilizado en las secuencias de comandos de la página html.",
      "c) El atributo de lenguaje indica el lenguaje de programación utilizado en las secuencias de comandos de la página JSP.",
      "d) Ninguna de las anteriores."
    ],
    correcta: 3
  },
  {
    pregunta: "153. ¿Dónde se definen los filtros?",
    opciones: [
      "a) Los filtros se definen en el archivo descriptor de despliegue web.xml.",
      "b) Los filtros están definidos en las páginas jsp.",
      "c) Ambos de los anteriores.",
      "d) Ninguna de las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "154. ¿Cuál de las siguientes afirmaciones sobre el atributo isThreadSafe es cierta?",
    opciones: [
      "a) La opción isThreadSafe marca una página como segura para subprocesos.",
      "b) Si establece la opción isThreadSafe en falso, el motor JSP se asegura de que solo un hilo a la vez esté ejecutando su JSP.",
      "c) Por defecto, todos los JSP se consideran seguros para subprocesos.",
      "d) Todo lo anterior."
    ],
    correcta: 3
  },
  {
    pregunta: "155. ¿Cuál de las siguientes opciones muestra el orden correcto de las fases en el ciclo de vida de JSP?",
    opciones: [
      "a) Compilación, Inicialización, Ejecución, Limpieza.",
      "b) Inicialización, Compilación, Limpieza, Ejecución.",
      "c) Inicialización, limpieza, compilación, ejecución.",
      "d) Limpieza, Compilación, Inicialización, Ejecución."
    ],
    correcta: 0
  },
  {
    pregunta: "156. ¿Cuál de las siguientes afirmaciones es cierta acerca de response.sendRedirect (url)?",
    opciones: [
      "a) El sendRedirect envía una respuesta de redireccionamiento temporal de HTTP al navegador.",
      "b) Los datos solicitados se pierden en caso de sendRedirect.",
      "c) Ambos de los anteriores.",
      "d) Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "157. ¿Para qué sirve la etiqueta c:set?",
    opciones: [
      "a) Puede guardar valores en la base de datos.",
      "b) Evalúa una expresión y usa los resultados para establecer un valor de un JavaBean.",
      "c) Se puede utilizar para iterar la lista de elementos.",
      "d). Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "158. Si un jsp es generar una página pdf, ¿qué atributo de la directiva de página debería usar?",
    opciones: [
      "a) contentType",
      "b) generatepdf",
      "c) typePDF",
      "d) contentPDF"
    ],
    correcta: 0
  },
  {
    pregunta: "159. ¿Cuál es la firma correcta del método jspDestroy () de la clase HttpJspPage?",
    opciones: [
      "a) void jspDestroy (solicitud HTTPRequest, respuesta HTTPResponse)",
      "b) void jspDestroy (solicitud HTTPRequest, respuesta HTTPResponse) lanza ServletException, IOException",
      "c) void jspDestroy ()",
      "d) void jspDestroy () lanza ServletException, IOException"
    ],
    correcta: 2
  },
  {
    pregunta: "160. El método utilizado en la escritura y el diseño de un programa se denomina como",
    opciones: [
      "a) método de abajo hacia arriba",
      "b) método de arriba hacia abajo",
      "c) método de división",
      "d) método de estados binarios"
    ],
    correcta: 1
  },
{
    pregunta: "161. Para escribir funciones de un programa, como ingresar cuatro números e imprimir su suma, el segundo nivel de refinamiento del programa incluye:",
    opciones: [
      "a) imprimir los valores",
      "b) imprimir las variables",
      "c) ingresa cuatro números",
      "d) calcular suma"
    ],
    correcta: 3
  },
  {
    pregunta: "162. El paso final en la producción de un programa es:",
    opciones: [
      "a) Implementación y documentación.",
      "b) almacenar los datos",
      "c) obteniendo la salida",
      "d) buscando la entrada"
    ],
    correcta: 0
  },
  {
    pregunta: "163. La declaración del programa en el lenguaje de programación 'PASCAL' generalmente termina con una:",
    opciones: [
      "a) dos puntos",
      "b) punto y coma",
      "c) coma",
      "d) apóstrofe"
    ],
    correcta: 1
  },
  {
    pregunta: "164. Lo primero al producir un programa es:",
    opciones: [
      "a) definir la necesidad",
      "b) diseñar un programa",
      "c) planificar un programa",
      "d) calcular el costo"
    ],
    correcta: 1
  },
  {
    pregunta: "165. Todas las variables utilizadas en cualquier programa deben ser declaradas primero en:",
    opciones: [
      "a) Declaración FIX",
      "b) Declaración VAR",
      "c) Declaración REF",
      "d) Declaración REP"
    ],
    correcta: 1
  },
  {
    pregunta: "166. Escribir un programa en un lenguaje adecuado se llama:",
    opciones: [
      "a) programación del programa",
      "b) instrucciones del programa",
      "c) depuración del programa",
      "d) prueba de programa"
    ],
    correcta: 0
  },
  {
    pregunta: "167. El tercer paso para producir un programa es:",
    opciones: [
      "a) prueba el programa",
      "b) depurar (debug) un programa",
      "c) calcular los costos",
      "d) tanto a como B"
    ],
    correcta: 3
  },
  {
    pregunta: "168. El proceso de dividir las partes del programa en una parte más detallada se clasifica como:",
    opciones: [
      "a) refinamiento por etapas",
      "b) refinamiento de arriba hacia abajo",
      "c) refinamiento binario",
      "d) refinamiento dividido"
    ],
    correcta: 0
  },
  {
    pregunta: "169. Las especificaciones de hardware y software son parte de:",
    opciones: [
      "a) requisitos informáticos",
      "b) requisitos de declaración",
      "c) diagrama de flujo del sistema",
      "d) declaración de decisión"
    ],
    correcta: 0
  },
  {
    pregunta: "170. Una técnica de investigación que involucra un gran número de observaciones tomadas a intervalos aleatorios se llama:",
    opciones: [
      "a) aleatorización",
      "b) estratificación",
      "c) muestreo de personas",
      "d) muestreo de trabajo"
    ],
    correcta: 3
  },
  {
    pregunta: "171. ¿Cuál de las siguientes NO es una guía para llevar a cabo con éxito una sesión de JRP?",
    opciones: [
      "a) mantenerse en horario",
      "b) permitir amplios descansos",
      "c) Fomentar la participación de usuarios y directivos.",
      "d) intercambiar ideas sobre alternativas técnicas a los problemas identificados en una sesión de JRP"
    ],
    correcta: 3
  },
  {
    pregunta: "172. ¿Cuál de los siguientes es un actor de un evento temporal?",
    opciones: [
      "a) servidor externo actor",
      "b) actor de negocios primario",
      "c) el propio sistema",
      "d) hora (time)"
    ],
    correcta: 3
  },
  {
    pregunta: "173. Un cliente del banco se detiene en el cajero automático de su banco para retirar dinero de su cuenta de cheques. En este caso, ¿quién es el actor principal del sistema?",
    opciones: [
      "a) el cajero del banco",
      "b) el Banco",
      "c) el cliente del banco",
      "d) la empresa de autorización de retiro de dinero"
    ],
    correcta: 2
  },
  {
    pregunta: "174. Un cliente del banco se detiene en el cajero automático de su banco para retirar dinero de su cuenta de cheques. En este caso, ¿quién es el principal actor de negocios?",
    opciones: [
      "a) el cajero del banco",
      "b) el Banco",
      "c) el cliente del banco",
      "d) la empresa de autorización de retiro de dinero"
    ],
    correcta: 2
  },
  {
    pregunta: "175. ¿Cuál de los siguientes sería el mejor nombre para un caso de uso?",
    opciones: [
      "a) retirar dinero",
      "b) retirada",
      "c) retirar dinero",
      "d) retiro de dinero"
    ],
    correcta: 0
  },
  {
    pregunta: "176. ¿Cuál de los siguientes NO es una buena fuente para identificar a los actores comerciales?",
    opciones: [
      "a) documentos de requisitos existentes",
      "b) manual de usuario para el sistema existente",
      "c) diagrama contextual",
      "d) relación diagrama de entidad"
    ],
    correcta: 3
  },
  {
    pregunta: "177. ¿Qué relación de caso de uso se utiliza para modelar la relación entre un caso de uso y un actor?",
    opciones: [
      "a) depende de",
      "b) herencia",
      "c) se extiende",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "178. Una restricción en el estado del sistema antes de que se pueda ejecutar el caso de uso se llama:",
    opciones: [
      "a) desencadenar",
      "b) condición previa",
      "c) post condición",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "179. Un caso de uso que captura las interacciones entre un usuario y el sistema sin tecnología y detalle de implementación es:",
    opciones: [
      "a) caso de uso de requisitos de negocio",
      "b) caso de uso de requisitos lógicos",
      "c) caso de uso de extensión",
      "d) caso de uso abstracto"
    ],
    correcta: 1
  },
  {
    pregunta: "180. ¿Cuál de las siguientes NO es una categoría de entidades?",
    opciones: [
      "a) concepto",
      "b) lugar",
      "c) objeto",
      "d) relación"
    ],
    correcta: 3
  },
{
    pregunta: "181. Un atributo que consiste en otros atributos se llama:",
    opciones: [
      "a) atributo extendido",
      "b) elemento",
      "c) atributo compuesto",
      "d) atributo simple"
    ],
    correcta: 2
  },
  {
    pregunta: "182. Se llama a cualquier clave candidata que no esté seleccionada para convertirse en la clave principal:",
    opciones: [
      "a) la clave de dominio",
      "b) la clave de entidad",
      "c) la clave concatenada",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "183. Una relación que existe entre las instancias de la misma entidad se llama:",
    opciones: [
      "a) reflexivo",
      "b) asociativo",
      "c) identificando",
      "d) recursiva"
    ],
    correcta: 3
  },
  {
    pregunta: "184. Una entidad cuyas instancias pueden heredar atributos comunes de su súper tipo de entidad se llama:",
    opciones: [
      "a) entidad de generalización",
      "b) entidad no específica",
      "c) entidad recursiva",
      "d). Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "185. Una técnica que organiza los datos en grupos para formar entidades no redundantes, estables, flexibles y adaptables es:",
    opciones: [
      "a) optimización",
      "b) normalización",
      "c) aleatorización",
      "d) análisis de requerimientos"
    ],
    correcta: 1
  },
  {
    pregunta: "186. Una entidad está en la segunda forma normal si:",
    opciones: [
      "a) los valores de las claves no primarias dependen de la clave primaria completa",
      "b) todos los valores de las claves primarias son independientes de los atributos de la clave no primaria",
      "c) usted agrega atributos no clave adicionales que dependen de otros atributos no clave",
      "d) los valores de los atributos clave no primarios no dependen de ningún otro atributo clave no primario"
    ],
    correcta: 0
  },
  {
    pregunta: "187. Cada facultad tiene una o más oficinas. Esto es un ejemplo de:",
    opciones: [
      "a) dominio",
      "b) cardinalidad",
      "c) relación",
      "d) atributo"
    ],
    correcta: 1
  },
  {
    pregunta: "188. En la relación entre curso y profesorado, la entidad del curso sería:",
    opciones: [
      "a) no específico",
      "b) súper tipo",
      "c) el niño",
      "d) el padre"
    ],
    correcta: 2
  },
  {
    pregunta: "189.- Un atributo cuyo valor puede calcularse de otros atributos se llama:",
    opciones: [
      "a) atributo dependiente",
      "b) atributo compuesto",
      "c) atributo simple",
      "d) atributo derivado"
    ],
    correcta: 3
  },
  {
    pregunta: "190.- Un programador probablemente prepararía un:",
    opciones: [
      "a) diagrama de flujo del programa específico",
      "b) diagrama de flujo del programa general",
      "c) diagrama de flujo del sistema específico",
      "d) diagrama de flujo del sistema general"
    ],
    correcta: 0
  },
  {
    pregunta: "191.- Organización de lista invertida.",
    opciones: [
      "a) utiliza un índice para cada tipo de clave",
      "b) tiene registros colocados al azar en todo el archivo",
      "c) significa almacenar registros en bloques contiguos de acuerdo con una clave",
      "d) almacena registros de forma secuencial pero utiliza un índice para localizar registros"
    ],
    correcta: 0
  },
  {
    pregunta: "192. Los procesos en el nivel más detallado de los diagramas de flujo de datos se denominan:",
    opciones: [
      "a) flujos de datos",
      "b) interfaces",
      "c) primitivas funcionales",
      "d) transformar descripciones"
    ],
    correcta: 2
  },
  {
    pregunta: "193. Los programadores se refieren al objetivo de resolver un problema como el_____.",
    opciones: [
      "a) Entrada",
      "b) Salida",
      "c) Propósito",
      "d) Tratamiento"
    ],
    correcta: 1
  },
  {
    pregunta: "194. Un archivo indexado ofrece la facilidad de un archivo aleatorio y el método de acceso de un:",
    opciones: [
      "a) archivo indexado",
      "b) archivo secuencial",
      "c) archivo de acceso directo",
      "d) archivo de acceso aleatorio"
    ],
    correcta: 1
  },
  {
    pregunta: "195. La mayoría de los algoritmos comienzan por:",
    opciones: [
      "a) Ingresando los elementos de salida en la computadora",
      "b) Ingresando los elementos de entrada en la computadora",
      "c) Visualización de los elementos de salida",
      "d) Visualización de los elementos de entrada"
    ],
    correcta: 1
  },
  {
    pregunta: "196. Los esquemas de Nassi – Schneiderman:",
    opciones: [
      "a) están siendo reemplazados por diagramas de flujo",
      "b) se componen de cajas dentro de cajas",
      "c) a menudo describen estructuras de control superpuestas",
      "d) Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "197. ¿Cuál de las siguientes herramientas no se usa para modelar el nuevo sistema?",
    opciones: [
      "a) diccionario de datos",
      "b) tablas de decisiones",
      "c) diagramas de flujo de datos",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "198. ¿Cuál de las siguientes afirmaciones es verdadera?",
    opciones: [
      "a) Las computadoras son esenciales para el análisis de sistemas.",
      "b) El flujo de información en una organización es siempre vertical.",
      "c) un diagrama de flujo del sistema no es parte de un paquete de documentación del programa",
      "d) una ejecución paralela implica dos terminales diferentes que acceden a una base de datos común"
    ],
    correcta: 2
  },
  {
    pregunta: "199. Los cuatro íconos utilizados en la construcción del Diagrama de Flujo de Datos son:",
    opciones: [
      "a) Flujo, Proceso, Fuente, Tienda",
      "b) Flujo, Fuente, Tienda, Proceso",
      "c) Fuente, Proceso, Destino, Tienda",
      "d) Flujo, Proceso, Origen / Destino, Tienda"
    ],
    correcta: 3
  },
  {
    pregunta: "200. Los beneficios que son difíciles o imposibles de cuantificar se conocen como:",
    opciones: [
      "a) no cuantificable",
      "b) excesivo",
      "c) intangible",
      "d) fijo"
    ],
    correcta: 2
  },
{
    pregunta: "201. ¿Qué tipo de factibilidad pregunta qué tan bien el sistema propuesto satisface los requisitos identificados del sistema?",
    opciones: [
      "a) viabilidad técnica",
      "b) calendario de viabilidad",
      "c) viabilidad estratégica",
      "d). Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "202. ¿Qué tipo de factibilidad mide la rentabilidad de un proyecto o solución?",
    opciones: [
      "a) calendario de viabilidad",
      "b) viabilidad operacional",
      "c) viabilidad económica",
      "d) viabilidad estratégica"
    ],
    correcta: 2
  },
  {
    pregunta: "203. ¿Cuál NO es un ejemplo de un beneficio tangible?",
    opciones: [
      "a) gastos reducidos",
      "b) mayor rendimiento",
      "c) aumento de ventas",
      "d) mejor toma de decisiones"
    ],
    correcta: 3
  },
  {
    pregunta: "204. ¿Cuál de los siguientes es un ejemplo de un beneficio intangible?",
    opciones: [
      "a) mejora de la moral de los empleados",
      "b) eliminación de pasos de trabajo",
      "c) mejora de la buena voluntad del cliente",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "205. ¿Cuál de las siguientes preguntas se considera cuando se busca la viabilidad técnica?",
    opciones: [
      "a) ¿Qué tan bien cumple una solución con los requisitos identificados del sistema?",
      "b) ¿Es práctica la tecnología o solución propuesta?",
      "c) ¿Contamos con la experiencia técnica necesaria?",
      "d) tanto (b) como (c)"
    ],
    correcta: 3
  },
  {
    pregunta: "206. ¿A qué categoría de costos pertenecen los pagos de licencia de software?",
    opciones: [
      "a) fijo",
      "b) variable",
      "c) operacional",
      "d) técnico"
    ],
    correcta: 0
  },
  {
    pregunta: "207. El valor actual de un dólar en cualquier momento en el futuro es:",
    opciones: [
      "a) valor de oportunidad",
      "b) valor presente",
      "c) valor futuro",
      "d) valor actual"
    ],
    correcta: 1
  },
  {
    pregunta: "208. ¿Cuál de los siguientes NO es un ejemplo de un beneficio intangible?",
    opciones: [
      "a) pérdidas crediticias reducidas",
      "b) eliminación de pasos de trabajo",
      "c) mejora de la buena voluntad del cliente",
      "d) Mejor servicio a la comunidad."
    ],
    correcta: 0
  },
  {
    pregunta: "209. En el comité de viabilidad, los representantes de los departamentos actúan como:",
    opciones: [
      "a) Enlace con sus departamentos.",
      "b) fuentes de información listas",
      "c) usuarios directos del nuevo sistema",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "210. Las especificaciones finales se han llegado a:",
    opciones: [
      "a) después del estudio de viabilidad",
      "b) durante el estudio de viabilidad",
      "c) justo antes de la fase de implementación",
      "d) cuando el sistema está siendo diseñado"
    ],
    correcta: 0
  },
  {
    pregunta: "211. Se especifican los criterios de aprobación del sistema.",
    opciones: [
      "a) Cuando se elaboren las especificaciones finales.",
      "b) durante el estudio de viabilidad",
      "c) durante la etapa de especificaciones de requisitos",
      "d) durante la etapa de estudio del sistema"
    ],
    correcta: 0
  },
  {
    pregunta: "212. Se requiere estudio de hardware para:",
    opciones: [
      "a) Averiguar el costo del sistema informático necesario.",
      "b) para determinar el tipo de sistema informático y las herramientas de software necesarias para cumplir con la especificación final del sistema",
      "c) Asegurarse de que el sistema no quede obsoleto.",
      "d) Encontrar la forma de implementar el sistema."
    ],
    correcta: 1
  },
  {
    pregunta: "213. Se realiza estudio de hardware.",
    opciones: [
      "a) después de que se especifique el sistema final",
      "b) en la etapa de especificación de requisitos",
      "c) Antes de que se especifiquen los requisitos.",
      "d) siempre que la gerencia decida que es necesario"
    ],
    correcta: 0
  },
  {
    pregunta: "214. La ________ determina si el proyecto debe seguir adelante",
    opciones: [
      "a) evaluación de viabilidad",
      "b) identificación de oportunidad",
      "c) evaluación del sistema",
      "d) especificación del programa"
    ],
    correcta: 0
  },
  {
    pregunta: "215. Se especifica el plan de prueba del sistema.",
    opciones: [
      "a) Cuando se elaboren las especificaciones finales.",
      "b) durante el estudio de viabilidad",
      "c) durante la etapa de especificaciones de requisitos",
      "d) En etapa de estudio del sistema."
    ],
    correcta: 0
  },
  {
    pregunta: "216_____incluye la revisión de los procedimientos existentes y el flujo de información.",
    opciones: [
      "a) Estudio de viabilidad",
      "b) Informe de viabilidad.",
      "c) Diseño del sistema",
      "d) análisis del sistema"
    ],
    correcta: 0
  },
  {
    pregunta: "217. El organigrama es un tipo de:",
    opciones: [
      "a) cuadro básico",
      "b) carta de salida a bolsa",
      "c) carta jerárquica",
      "d) gráfico de pasos"
    ],
    correcta: 2
  },
  {
    pregunta: "218. El ingrediente principal del informe que documenta el _____- es el análisis de costo-beneficio.",
    opciones: [
      "a) Análisis del sistema",
      "b) Estudio de viabilidad",
      "c) analista de sistemas",
      "d) Diseño del sistema"
    ],
    correcta: 1
  },
  {
    pregunta: "219. En la fase de adquisición, ¿cuál de los siguientes NO es un recurso utilizado para realizar investigaciones sobre alternativas técnicas?",
    opciones: [
      "a) calificaciones del vendedor",
      "b) normas internas",
      "c) periódicos comerciales y periódicos",
      "d) servicios de información"
    ],
    correcta: 0
  },
  {
    pregunta: "220. ¿Cuál de los siguientes es un ejemplo de enfoques basados en modelos?",
    opciones: [
      "a) Diseño estructurado, desarrollo rápido de aplicaciones, CASE.",
      "b) Ingeniería de la información, CASE, diseño de aplicación conjunta.",
      "c) diseño orientado a objetos, aplicación conjunta y desarrollo rápido de aplicaciones",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
{
    pregunta: "221. ¿Cuál de los siguientes se utiliza (es) en Rapid Application Development (RAD)?",
    opciones: [
      "a) técnicas estructuradas",
      "b) Técnicas de desarrollo de aplicaciones conjuntas.",
      "c) Técnicas de diseño orientadas a objetos.",
      "d) tanto (a) como (b)"
    ],
    correcta: 3
  },
  {
    pregunta: "222. ¿Cuál de los siguientes NO es una desventaja de la creación de prototipos?",
    opciones: [
      "a) los errores no se pueden detectar tan fácilmente cuando se desarrolla un prototipo",
      "b) Los prototipos son un modelo pasivo del sistema.",
      "c) los usuarios finales no entienden completamente sus requisitos hasta que los ven",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "223. ¿Cuál de las siguientes es la primera tarea realizada por los desarrolladores del sistema durante la fase de adquisición?",
    opciones: [
      "a) validar los reclamos de proveedores y actuaciones",
      "b) criterios técnicos de investigación y opciones.",
      "c) contrato de adjudicación y proveedor de informes",
      "d) solicitar propuestas o presupuestos."
    ],
    correcta: 1
  },
  {
    pregunta: "224. Un modelo de proceso utilizado para comunicar las características de implementación técnica de un sistema de información es un:",
    opciones: [
      "a) modelo ambiental",
      "b) modelo de datos físicos",
      "c) modelo de datos lógico",
      "d) diagrama de clase"
    ],
    correcta: 1
  },
  {
    pregunta: "225. ¿Cuál de las siguientes NO es una tarea de la fase de adquisición?",
    opciones: [
      "a) evaluar y clasificar las propuestas de los proveedores",
      "b) validar los reclamos de proveedores y actuaciones",
      "c) Desarrollar modelos de sistema para cada una de las propuestas del vendedor.",
      "d) criterios técnicos de investigación y opciones."
    ],
    correcta: 2
  },
  {
    pregunta: "226. El diseño estructurado busca factorizar un programa en la jerarquía descendente de módulos que tienen las siguientes propiedades:",
    opciones: [
      "a) altamente cohesivo y altamente acoplado",
      "b) débilmente estructurado y libremente cohesionado",
      "c) flojamente cohesivo y altamente acoplado",
      "d) Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "227. ¿Cuál de los siguientes es el primer paso para diseñar un sistema para el desarrollo interno?",
    opciones: [
      "a) diseñar la interfaz del sistema",
      "b) diseñar la arquitectura de la aplicación",
      "c) especificaciones de diseño del paquete",
      "d) diseñar la base de datos del sistema"
    ],
    correcta: 1
  },
  {
    pregunta: "228. Un documento que está preparado para solicitar propuestas competitivas y citas de varios proveedores y / o proyectos candidatos diferentes es un:",
    opciones: [
      "a) solicitud de propuesta del vendedor",
      "b) solicitud de especificación",
      "c) solicitud de cotización",
      "d). Ninguna de las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "229. Los gerentes en organizaciones no deben diseñar sus propios sistemas como:",
    opciones: [
      "a) Los sistemas tienen que interactuar con otros sistemas.",
      "b) No tienen las habilidades especiales necesarias para diseñar sistemas.",
      "c) no es su trabajo",
      "d) siempre están muy ocupados"
    ],
    correcta: 1
  },
  {
    pregunta: "230. El analista de sistemas debe utilizar herramientas de software en su trabajo como:",
    opciones: [
      "a) todos los analistas los usan",
      "b) Asisten en el diseño sistemático de sistemas.",
      "c) son baratos",
      "d) son fácilmente disponibles"
    ],
    correcta: 1
  },
  {
    pregunta: "231. Diferencia entre Decisión - Tablas y Árboles de Decisión es (son):",
    opciones: [
      "a) valor para el usuario final",
      "b) forma de representación",
      "c) uno muestra la lógica mientras que otro muestra el proceso",
      "d) Todas las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "232. La ayuda de diseño del sistema debe principalmente:",
    opciones: [
      "a) ayudar a analizar tanto los datos como las actividades",
      "b) Ayuda en la documentación.",
      "c) ayuda en la programación",
      "d) generar código"
    ],
    correcta: 0
  },
  {
    pregunta: "233. Los errores cometidos en la etapa de análisis del sistema se muestran en:",
    opciones: [
      "a) implementación",
      "b) diseño del sistema",
      "c) desarrollos del sistema",
      "d) Todas las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "234. HIPO significa:",
    opciones: [
      "a) es una técnica basada en formularios en la que se utilizan formularios estándar para documentar la información",
      "b) consiste en un gráfico de jerarquía y un conjunto asociado de gráficos de entrada / proceso / salida",
      "c) Captura la esencia de la descomposición de arriba hacia abajo.",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "235. La programación real del código de software se realiza durante el____ paso en el SDLC.",
    opciones: [
      "a) Mantenimiento y evaluación",
      "b) diseño",
      "c) Análisis",
      "d) Desarrollo y documentación."
    ],
    correcta: 3
  },
  {
    pregunta: "236. _________pasan la mayor parte del tiempo en las etapas iniciales del SDLC, conversando con los usuarios finales, recopilando información, documentando sistemas y proponiendo soluciones.",
    opciones: [
      "a) analistas de sistemas",
      "b) gerentes de proyecto",
      "c) Ingenieros de redes",
      "d) administradores de bases de datos"
    ],
    correcta: 0
  },
  {
    pregunta: "237. _______administra el desarrollo del sistema, asigna personal, administra el presupuesto y los informes, y se asegura de que se cumplan los plazos.",
    opciones: [
      "a) gerentes de proyecto",
      "b) ingenieros de redes",
      "c) diseñadores gráficos",
      "d) Analistas de sistemas."
    ],
    correcta: 0
  },
  {
    pregunta: "238. Los cuadros estructurados son producto de:",
    opciones: [
      "a) recopilación de requisitos",
      "b) análisis de requerimientos",
      "c) diseño",
      "d) codificación"
    ],
    correcta: 2
  },
  {
    pregunta: "239. Reconocimiento óptico de caracteres:",
    opciones: [
      "a) es menos frecuente que el reconocimiento óptico de marcas",
      "b) se utiliza en formularios para preguntas de base subjetiva en exámenes",
      "c) requiere que el usuario escriba cuidadosamente los datos de entrada en un formulario comercial",
      "d) (a), (b) y (c)"
    ],
    correcta: 0
  },
  {
    pregunta: "240. ¿Cuál de los siguientes NO es un problema de diseño de interfaz?",
    opciones: [
      "a) enfoques de resolución de problemas inconsistentes",
      "b) Uso excesivo de jerga informática y acrónimos.",
      "c) El uso de fondo negro en forma de pantalla.",
      "d) inconsistencia de diseño"
    ],
    correcta: 2
  },
{
    pregunta: "241. ¿Qué tipo de menú está diseñado principalmente para usuarios expertos porque no hay pistas visuales de su presencia?",
    opciones: [
      "a) icónico",
      "b) ventana emergente",
      "c) en cascada",
      "d) desplegable (pull-down)"
    ],
    correcta: 1
  },
  {
    pregunta: "242. ¿Cuál de las siguientes interfaces basadas en instrucciones le permite al cliente ingresar una pregunta sobre un producto determinado?",
    opciones: [
      "a) mnemotécnica",
      "b) textual",
      "c) lenguaje natural",
      "d) basado en el lenguaje"
    ],
    correcta: 2
  },
  {
    pregunta: "243. ¿Cuál de las siguientes es una directriz de ingeniería humana?",
    opciones: [
      "a) No se debe permitir a los usuarios continuar sin corregir un error.",
      "b) El usuario del sistema siempre debe saber qué hacer a continuación.",
      "c) Anticipe los errores que los usuarios pueden cometer.",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "244. ¿En cuál de los siguientes pasos de la interfaz de usuario utilizan los diseñadores un diagrama de transición de estado para mostrar la secuencia y las variaciones de las pantallas que pueden ocurrir cuando el usuario del sistema se sienta en el terminal?",
    opciones: [
      "a) prototipo del diálogo",
      "b) probar el diálogo",
      "c) prototipo de interfaz de usuario",
      "d) trazar el diálogo"
    ],
    correcta: 3
  },
  {
    pregunta: "245. ¿Cuál de los siguientes es importante en el diseño de la interfaz de usuario?",
    opciones: [
      "a) practicar el diseño iterativo",
      "b) Entiende a tus usuarios y sus tareas.",
      "c) utilizar herramientas automatizadas en el diseño de la interfaz de usuario",
      "d) Tanto (a) como (b)"
    ],
    correcta: 3
  },
  {
    pregunta: "246. Con respecto al tono de un diálogo, ¿cuál de los siguientes no debe utilizarse?",
    opciones: [
      "a) use abreviaturas para que los usuarios puedan leerlas más rápidamente",
      "b) usar términos simples",
      "c) usar verbos de acción apropiados",
      "d) Ser coherente en el uso de la terminología."
    ],
    correcta: 0
  },
  {
    pregunta: "247. ¿Cuál de las siguientes interfaces basadas en instrucciones se construye alrededor de un lenguaje de comando ampliamente aceptado que el usuario puede usar para invocar acciones?",
    opciones: [
      "a) una sintaxis mnemotécnica",
      "b) una sintaxis de comando-control",
      "c) una sintaxis basada en lenguaje",
      "d) una sintaxis de lenguaje natural"
    ],
    correcta: 2
  },
  {
    pregunta: "248. ¿Cuál de los siguientes es el primer paso en el proceso de diseño de la interfaz de usuario?",
    opciones: [
      "a) Prototipo del diálogo y la interfaz de usuario.",
      "b) trazar el diálogo",
      "c) probar el diálogo",
      "d) rediseñar el diálogo"
    ],
    correcta: 1
  },
  {
    pregunta: "249. Los códigos de clasificación de grupo son:\n(i) conciso\n(ii) significativo\n(iii) expandible\n(iv) exhaustivo",
    opciones: [
      "a) i y ii",
      "b) i, ii y iii",
      "c) ii, iii y iv",
      "d) i, ii y iv"
    ],
    correcta: 2
  },
  {
    pregunta: "250. Los códigos significativos son\n(i) conciso\n(ii) significativo\n(iii) expandible\n(iv) exhaustivo",
    opciones: [
      "a) i y ii",
      "b) i, ii y iii",
      "c) ii, iii y iv",
      "d) i, ii y iv"
    ],
    correcta: 2
  },
  {
    pregunta: "251. La secuencia de numeración de registros se utiliza para:\n(i) Identifique cada registro de manera única\n(ii) Seguimiento de un registro faltante en un lote de registros\n(iii) Cuenta el número de registros\n(iv) ordenar los registros",
    opciones: [
      "a) i, ii",
      "b) i, ii, iii",
      "c) i, ii, iii, iv",
      "d) i y iv"
    ],
    correcta: 2
  },
  {
    pregunta: "252. HIPO\n",
    opciones: [
      "a) captura la esencia de la descomposición de arriba hacia abajo",
      "b) consiste en un gráfico de jerarquía y un conjunto asociado de gráficos de entrada / proceso / salida",
      "c) es una técnica basada en formularios en la que se utilizan formularios estándar para documentar la información",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "253. Un diseño que consiste en una jerarquía de módulos; Cada módulo tiene una sola entrada y una única subrutina de salida, que se conoce como:",
    opciones: [
      "a) Tuple",
      "b) giro de vuelta",
      "c) diseño de arriba hacia abajo",
      "d) estructura de jerarquía"
    ],
    correcta: 2
  },
  {
    pregunta: "254. Los primeros elementos definidos para un nuevo sistema son sus:",
    opciones: [
      "a) entradas",
      "b) salidas",
      "c) almacenamiento"
    ],
    correcta: 1
  },
  {
    pregunta: "255. Se utiliza el benchmarking:",
    opciones: [
      "a) para la aceptación del sistema",
      "b) para la aplicación de proto-mecanografía",
      "c) Seleccionar sistemas informáticos.",
      "d) Mantener archivos en condición de datos."
    ],
    correcta: 2
  },
  {
    pregunta: "256.______-. es un grupo de componentes interesados que trabajan juntos hacia una meta común al aceptar entradas y producir salidas en un proceso de transformación organizado.",
    opciones: [
      "a) sistema",
      "b) red",
      "c) Equipo",
      "d) Unidad del sistema"
    ],
    correcta: 0
  },
  {
    pregunta: "257. Por entidad externa entendemos una:",
    opciones: [
      "a) Unidad fuera del sistema que se está diseñando y que puede ser controlada por un analista.",
      "b) Unidad fuera del sistema cuyo comportamiento es independiente del sistema que se está diseñando.",
      "c) Una unidad externa al sistema que se está diseñando.",
      "d) Una unidad que no es parte de un DFD."
    ],
    correcta: 2
  },
  {
    pregunta: "258. El almacén de datos en un DFD representa.",
    opciones: [
      "a) un archivo secuencial",
      "b) un almacenamiento de discos",
      "c) un repositorio de datos",
      "d) una memoria de acceso aleatorio"
    ],
    correcta: 2
  },
  {
    pregunta: "259._______- el sistema consta de programas, archivos de datos y documentación",
    opciones: [
      "a) Conceptual",
      "b) lógico",
      "c) Físico",
      "d) Ninguna de las anteriores"
    ],
    correcta: 2
  },
  {
    pregunta: "260. ¿Qué hace una VLAN?",
    opciones: [
      "A) Actúa como el puerto más rápido para todos los servidores.",
      "B) Proporciona múltiples dominios de colisión en un puerto de switch",
      "C) Rompe los dominios de difusión en una red de conmutación de capa 2",
      "D) Proporciona múltiples dominios de difusión dentro de un único dominio de colisión"
    ],
    correcta: 2
  },
  {
    pregunta: "261. ¿Con qué frecuencia se envían BPDU desde un dispositivo de capa 2?",
    opciones: [
      "A) nunca",
      "B) cada 2 segundos",
      "C) cada 10 minutos",
      "D) cada 30 segundos"
    ],
    correcta: 1
  },
  {
    pregunta: "262. ¿Qué clase de dirección IP proporciona un máximo de solo 254 direcciones de host por ID de red?",
    opciones: [
      "A) Clase A",
      "B) Clase B",
      "C) Clase C",
      "D) Clase D"
    ],
    correcta: 2
  },
  {
    pregunta: "263. ¿Qué protocolo se usa para enviar un mensaje desconocido de la red de destino a los hosts de origen?",
    opciones: [
      "A) TCP",
      "B) ARP",
      "C) ICMP",
      "D) BootP"
    ],
    correcta: 2
  },
  {
    pregunta: "264. ¿Cuál de los siguientes protocolos usa TCP y UDP?",
    opciones: [
      "A) FTP",
      "B) SMTP",
      "C) telnet",
      "D) DNS"
    ],
    correcta: 3
  },
  {
    pregunta: "265. Si usa Telnet o FTP, ¿cuál es la capa más alta que está usando para transmitir datos?",
    opciones: [
      "A) Solicitud (Application)",
      "B) presentación",
      "C) sesion",
      "D) transporte"
    ],
    correcta: 0
  },
  {
    pregunta: "266. ¿Cuál de los siguientes son los equivalentes decimales y hexadecimales del número binario 10011101?",
    opciones: [
      "A) 155, 0x9B",
      "B) 157, 0x9D",
      "C) 159, 0x9F",
      "D) 185, 0xB9"
    ],
    correcta: 1
  },
  {
    pregunta: "267. ¿Qué es una red de stub?",
    opciones: [
      "A) Una red con más de un punto de salida",
      "B) Una red con más de un punto de salida y entrada",
      "C) Una red con una sola entrada y sin punto de salida",
      "D) Una red que tiene un solo punto de entrada y salida"
    ],
    correcta: 3
  },
  {
    pregunta: "268. ¿Cuál de las siguientes es una dirección IP privada?",
    opciones: [
      "A) 12.0.0.1",
      "B) 168.172.19.39",
      "C) 172.15.14.36",
      "D) 192.168.24.43"
    ],
    correcta: 3
  },
  {
    pregunta: "269. ¿Cuántos dominios de difusión (broadcast domains) se crean cuando segmenta una red con un conmutador de 12 puertos?",
    opciones: [
      "A) 1",
      "B) 2",
      "C) 5",
      "D) 12"
    ],
    correcta: 0
  },
  {
    pregunta: "270. ¿Cuál es el número máximo de direcciones IP que se pueden asignar a los hosts en una subred local que usa la máscara de subred 255.255.255.224?",
    opciones: [
      "A) 14",
      "B) 15",
      "C) 16",
      "D) 30"
    ],
    correcta: 3
  },
  {
    pregunta: "271. ¿Cuál de las siguientes afirmaciones es cierta con respecto a RIPv2?",
    opciones: [
      "A) Tiene una distancia administrativa más baja que RIPv1.",
      "B) Convierte más rápido que RIPv1.",
      "C) Tiene los mismos temporizadores que RIPv1.",
      "D) Es más difícil de configurar que RIPv1"
    ],
    correcta: 2
  },
  {
    pregunta: "272. ¿Cuál es el número de subred de un host con una dirección IP de 172.16.66.0/21?",
    opciones: [
      "A) 172.16.36.0",
      "B) 172.16.48.0",
      "C) 172.16.64.0",
      "D) 172.16.0.0"
    ],
    correcta: 2
  },
  {
    pregunta: "273. Debe subnetear una red que tenga 5 subredes, cada una con al menos 16 hosts. ¿Qué máscara de subred con clase usarías?",
    opciones: [
      "A) 255.255.255.192",
      "B) 255.255.255.224",
      "C) 255.255.255.240",
      "D) 255.255.255.248"
    ],
    correcta: 1
  },
  {
    pregunta: "274. En una red VLSM, ¿qué máscara debería usar en los enlaces WAN punto a punto para reducir el desperdicio de direcciones IP?",
    opciones: [
      "A) /27",
      "B) /28",
      "C) /29",
      "D) /30"
    ],
    correcta: 3
  },
  {
    pregunta: "275. ¿Qué tipo de cable UTP RJ45 se usa entre los (switches) conmutadores?",
    opciones: [
      "A) Recta",
      "B) Cable de cruce",
      "C) Crossover con una CSU / DSU",
      "D) Crossover con un enrutador entre los dos interruptores"
    ],
    correcta: 1
  },
  {
    pregunta: "276. ¿Cuál de las siguientes afirmaciones es cierta con respecto a las VLAN?",
    opciones: [
      "A) Debe tener al menos dos VLAN definidas en cada red conmutada de Cisco",
      "B) Todas las VLAN se configuran en el conmutador más rápido y, de forma predeterminada, propagan esta información a todos los demás conmutadores",
      "C) No debe tener más de 10 switches en el mismo dominio VTP",
      "D) VTP se usa para enviar información de VLAN a los conmutadores en un dominio VTP configurado"
    ],
    correcta: 3
  },
  {
    pregunta: "277. Al configurar Frame Relay para sub interfaces punto a punto, ¿cuál de los siguientes no debe configurarse?",
    opciones: [
      "A) La encapsulación Frame Relay en la interfaz física",
      "B) El DLCI local en cada subinterfaz.",
      "C) Una dirección IP en la interfaz física",
      "D) El tipo de subinterfaz punto a punto"
    ],
    correcta: 2
  },
  {
    pregunta: "278. ¿Qué tecnología de conmutación (switching) reduce el tamaño de un dominio de difusión?",
    opciones: [
      "A) ISL",
      "B) 802.1Q",
      "C) VLANs",
      "D) STP"
    ],
    correcta: 2
  },
  {
    pregunta: "279. Cuando los datos están encapsulados, ¿cuál es el orden correcto?",
    opciones: [
      "A) Datos, marco, paquete, segmento, bit",
      "B) Segmento, datos, paquete, marco, bit",
      "C) Datos, segmento, paquete, marco, bit",
      "D) Datos, segmento, marco, paquete, bit"
    ],
    correcta: 2
  },
  {
    pregunta: "280. ¿Cuál de las siguientes afirmaciones es cierta con respecto al VTP?",
    opciones: [
      "A) Todos los switches son servidores VTP por defecto.",
      "B) Todos los interruptores son VTP transparentes por defecto",
      "C) VTP está activado de forma predeterminada con un nombre de dominio de Cisco en todos los switches Cisco",
      "D) Todos los switches son clientes VTP por defecto."
    ],
    correcta: 0
  },
  {
    pregunta: "281. Cuando un enrutador está conectado a un enlace WAN Frame Relay mediante una interfaz DTE en serie, ¿cómo se determina la velocidad del reloj?",
    opciones: [
      "A) Suministrado por la CSU / DSU",
      "B) Por el enrutador extremo",
      "C) Por orden del reloj.",
      "D) Por la sincronización de flujo de bits de la capa física"
    ],
    correcta: 0
  },
  {
    pregunta: "282. ¿Qué es la intoxicación por ruta?",
    opciones: [
      "A) Devuelve el protocolo recibido de un enrutador como una píldora venenosa, que detiene las actualizaciones regulares.",
      "B) Es la información recibida de un enrutador que no puede devolverse al enrutador original.",
      "C) Evita que los mensajes de actualización regulares restablezcan una ruta que acaba de aparecer.",
      "D) Describe cuándo un enrutador establece la métrica para un enlace caído a infinito"
    ],
    correcta: 3
  },
  {
    pregunta: "283. ¿Cuál es la dirección de subred para un host con la dirección IP 200.10.5.68/28?",
    opciones: [
      "A) 200.10.5.56",
      "B) 200.10.5.32",
      "C) 200.10.5.64",
      "D) 200.10.5.0"
    ],
    correcta: 2
  },
  {
    pregunta: "284. ¿La segmentación de un flujo de datos ocurre en qué capa del modelo OSI?",
    opciones: [
      "A) física",
      "B) Enlace de datos",
      "C) red",
      "D) transporte"
    ],
    correcta: 3
  },
  {
    pregunta: "285. ¿Qué protocolo reduce la sobrecarga administrativa en una red conmutada al permitir que la configuración de una nueva VLAN se distribuya a todos los switches en un dominio?",
    opciones: [
      "A) STP",
      "B) VTP",
      "C) DHCP",
      "D) ISL"
    ],
    correcta: 1
  },
  {
    pregunta: "286. ¿Cuál de los siguientes protocolos usa TCP y UDP?",
    opciones: [
      "A) FTP",
      "B) SMTP",
      "C) telnet",
      "D) DNS"
    ],
    correcta: 3
  },
  {
    pregunta: "287. ¿En cuál de las siguientes tecnologías se usa el término HFC?",
    opciones: [
      "A) DSL",
      "B) PPPoE",
      "C) Frame Relay",
      "D) T1 dedicado"
    ],
    correcta: 3
  },
  {
    pregunta: "288. Para probar la pila de IP en su host local, ¿a qué dirección IP haría ping?",
    opciones: [
      "A) 127.0.0.0",
      "B) 1.0.0.127",
      "C) 127.0.0.1",
      "D) 127.0.0.255"
    ],
    correcta: 2
  },
  {
    pregunta: "289. Si a un puerto Ethernet en un enrutador se le asignara una dirección IP de 172.16.112.1/25, ¿cuál sería la dirección de subred válida de este host?",
    opciones: [
      "A) 172.16.112.0",
      "B) 172.16.0.0",
      "C) 172.16.96.0",
      "D) 172.16.255.0"
    ],
    correcta: 0
  },
  {
    pregunta: "290. ¿Cuántos canales no superpuestos están disponibles con 802.11a?",
    opciones: [
      "A) 3",
      "B) 12",
      "C) 23",
      "D) 40"
    ],
    correcta: 1
  },
  {
    pregunta: "291. ¿Cuántos canales no superpuestos están disponibles con 802.11h?",
    opciones: [
      "A) 3",
      "B) 12",
      "C) 23",
      "D) 40"
    ],
    correcta: 2
  },
  {
    pregunta: "292. ¿Cuál es la distancia máxima con la velocidad de datos máxima para 802.11g?",
    opciones: [
      "A) Cerca de 65-75 pies",
      "B) Alrededor de 90-100 pies",
      "C) Cerca de 150 pies",
      "D) Más de 200 pies"
    ],
    correcta: 1
  },
  {
    pregunta: "293. Para conectar una computadora con un dispositivo en la misma habitación, es probable que use:",
    opciones: [
      "A) Un cable coaxial.",
      "B) Una línea dedicada",
      "C) Una estación terrestre",
      "D) Todo lo anterior"
    ],
    correcta: 0
  },
  {
    pregunta: "294. ¿Cuál es el rango de frecuencia del estándar IEEE 802.11b?",
    opciones: [
      "A) 2.4Gbps",
      "B) 5 Gbps",
      "C) 2.4 GHz",
      "D) 5 GHz"
    ],
    correcta: 2
  },
  {
    pregunta: "295. ¿Cuál es el rango de frecuencia del estándar IEEE 802.11a?",
    opciones: [
      "A) 2.4 Gbps",
      "B) 5 Gbps",
      "C) 2.4 GHz",
      "D) 5 GHz"
    ],
    correcta: 3
  },
  {
    pregunta: "296. El concepto de cambio de paquetes (packets switching) fue propuesto por primera vez:",
    opciones: [
      "A) A fines de los años 80 para el Ministerio de Defensa de los Estados Unidos.",
      "B) A principios de la década de 1960 para sistemas de comunicación militar, principalmente para manejar el habla",
      "C) A fines de la década de 1950 para el Ministerio de Defensa de los Estados Unidos.",
      "D) Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "297. Una configuración de red distribuida en la que todos los datos/información pasan a través de una computadora central es:",
    opciones: [
      "A) Bus network",
      "B) Star network",
      "C) Ring network",
      "D) Point-to-point network"
    ],
    correcta: 1
  },
  {
    pregunta: "298. ¿Cuántos hosts están conectados a cada una de las redes de área local en su sitio?",
    opciones: [
      "A) 128",
      "B) 254",
      "C) 256",
      "D) 64"
    ],
    correcta: 1
  },
  {
    pregunta: "299. Redes similares a Internet dentro de una empresa:",
    opciones: [
      "A) Intranets",
      "B) Switching alternating",
      "C) Inter organizational networks",
      "D) Extranets"
    ],
    correcta: 0
  },
  {
    pregunta: "300. ¿Cuál es la velocidad de datos máxima para el estándar 802.11a?",
    opciones: [
      "A) 6 Mbps",
      "B) 11 Mbps",
      "C) 22 Mbps",
      "D) 54 Mbps"
    ],
    correcta: 3
  },
  {
    pregunta: "301. ¿Cuál de los siguientes dispositivos se usa para conectar dos sistemas, especialmente si los sistemas usan protocolos diferentes?",
    opciones: [
      "A) concentrador",
      "B) puente",
      "C) Puerta de enlace",
      "D) Repetidor"
    ],
    correcta: 2
  },
  {
    pregunta: "302. ¿Qué dispositivo separa una sola red en dos segmentos pero permite que los dos segmentos aparezcan como uno a protocolos más altos?",
    opciones: [
      "A) interruptor",
      "B) puente",
      "C) Puerta de enlace",
      "D) Router"
    ],
    correcta: 1
  },
  {
    pregunta: "303. ¿Cuál de los siguientes no permite que múltiples usuarios o dispositivos compartan una línea de comunicaciones?",
    opciones: [
      "A) Doubleplexer",
      "B) Multiplexor",
      "C) Concentrador",
      "D) Controlador"
    ],
    correcta: 0
  },
  {
    pregunta: "304. ¿Cuál de los siguientes se utiliza para la modulación y demodulación?",
    opciones: [
      "A) módem",
      "B) Protocolos",
      "C) Puerta de enlace (Gateway)",
      "D) Multiplexor"
    ],
    correcta: 1
  },
  {
    pregunta: "305. Las velocidades de transmisión más lentas son las de:",
    opciones: [
      "A) Alambre de par trenzado",
      "B) Cable coaxial",
      "C) Cable de fibra óptica)",
      "D) Microondas"
    ],
    correcta: 1
  },
  {
    pregunta: "306. En CRC no hay error si el resto en el receptor es:",
    opciones: [
      "A) Igual al resto en el remitente.",
      "B) Cero",
      "C) Nonzero",
      "D) El cociente en el remitente."
    ],
    correcta: 1
  },
  {
    pregunta: "307. ¿Cuál es la distancia máxima con velocidad de datos máxima para 802.11b?",
    opciones: [
      "A) Cerca de 65-75 pies",
      "B) Alrededor de 90-100 pies",
      "C) Cerca de 150 pies",
      "D) Más de 200 pies"
    ],
    correcta: 2
  },
  {
    pregunta: "308. Los cuadros de una LAN se pueden transmitir a otra LAN a través del dispositivo",
    opciones: [
      "A) enrutador",
      "B) puente (Bridge)",
      "C) Repetidor",
      "D) Módem"
    ],
    correcta: 1
  },
  {
    pregunta: "309. ¿Cuántos canales no superpuestos están disponibles con 802.11b?",
    opciones: [
      "A) 3",
      "B) 12",
      "C) 23",
      "D) 40"
    ],
    correcta: 0
  },
  {
    pregunta: "310. Los terminadores se utilizan en topología:",
    opciones: [
      "A) bus",
      "B) estrella",
      "C) anillo",
      "D) Token Ring"
    ],
    correcta: 0
  },
  {
    pregunta: "311. El cable de red se encuentra en _____- capa",
    opciones: [
      "A) Aplicación",
      "B) red",
      "C) físico",
      "D) transporte"
    ],
    correcta: 2
  },
  {
    pregunta: "312. ARPANET significa:",
    opciones: [
      "A) American research project agency network",
      "B) Atlantic research project agency network",
      "C) Antartic research project agency network",
      "D) Advanced research project agency network"
    ],
    correcta: 3
  },
  {
    pregunta: "313. El proceso de convertir señales analógicas en señales digitales para que puedan ser procesadas por una computadora receptora se conoce como:",
    opciones: [
      "A) modulación",
      "B) Demodulación",
      "C) Sincronizando",
      "D) Digitalización"
    ],
    correcta: 3
  },
  {
    pregunta: "314. Estás trabajando con traducciones gráficas. Qué capa del modelo OSI es responsable del formato de código y la conversión y los estándares gráficos.",
    opciones: [
      "A) capa de red",
      "B) capa de sesión",
      "C) capa de transporte",
      "D) Capa de presentación"
    ],
    correcta: 3
  },
  {
    pregunta: "315. Una red con BW de 10 Mbps puede pasar solo un promedio de 12000 cuadros por minuto. Con cada cuadro llevando un promedio de 10000 bits. ¿Cuál es el rendimiento de esta red?",
    opciones: [
      "A) 5 Mbps",
      "B) 10 Mbps",
      "C) 2 Mbps",
      "D) 100 Mbps"
    ],
    correcta: 2
  },
  {
    pregunta: "316. ¿Qué procesos utiliza TCP, pero no UDP?",
    opciones: [
      "A) Windowing",
      "B) Agradecimientos",
      "C) Puerto de origen",
      "D) Puerto de destino"
    ],
    correcta: 1
  },
  {
    pregunta: "317. Para redes grandes, se usa___- topología",
    opciones: [
      "A) Bus",
      "B) Ring",
      "C) Star",
      "D) Mesh"
    ],
    correcta: 2
  },
  {
    pregunta: "318. SMTP es un protocolo utilizado en:",
    opciones: [
      "A) Application",
      "B) Network",
      "C) Physical",
      "D) Transport"
    ],
    correcta: 2
  },
  {
    pregunta: "319. ¿Cuál de las siguientes señales no es una señal estándar RS-232-C?",
    opciones: [
      "A) VDR",
      "B) RTS",
      "C) CTS",
      "D) DSR"
    ],
    correcta: 0
  },
  {
    pregunta: "320. ¿Cuál de los siguientes se considera un canal de comunicación de banda ancha?",
    opciones: [
      "A) Cable coaxial",
      "B) Cable de fibra óptica",
      "C) Circuitos de microondas.",
      "D) Todo lo anterior"
    ],
    correcta: 3
  },
{
    pregunta: "321. En la arquitectura de red OSI, el enrutamiento se realiza mediante",
    opciones: [
      "A) capa de red",
      "B) capa de enlace de datos",
      "C) capa de transporte",
      "D) capa de sesión"
    ],
    correcta: 0
  },
  {
    pregunta: "322. El número de bits por símbolo utilizado en el código de Baudot es:",
    opciones: [
      "A) 7",
      "B) 5",
      "C) 8",
      "D) 9"
    ],
    correcta: 1
  },
  {
    pregunta: "323. El servidor de impresión utiliza _______-, que es un búfer que contiene los datos antes de enviarlos a la impresora.",
    opciones: [
      "A) Queue",
      "B) Spool",
      "C) Node",
      "D) None of the above"
    ],
    correcta: 1
  },
  {
    pregunta: "324. ¿Cuál es el tiempo de propagación si la distancia entre los 2 puntos es 12000 km? Suponga que la velocidad de propagación es 2.4 × m / s",
    opciones: [
      "A) 0.05s",
      "B) 1 segundo",
      "C) 2 seg.",
      "D) 100 mseg"
    ],
    correcta: 0
  },
  {
    pregunta: "325. En la topología ______ , si se rompe el cable de red de una computadora, toda la red se cae",
    opciones: [
      "A) Ring",
      "B) Bus",
      "C) Star",
      "D) Token ring"
    ],
    correcta: 0
  },
  {
    pregunta: "326. ¿Cuál es el número mínimo de cables necesarios para enviar datos a través de una capa de enlace de comunicación en serie?",
    opciones: [
      "A) 1",
      "B) 2",
      "C) 4",
      "D) 6"
    ],
    correcta: 1
  },
  {
    pregunta: "327. Si una computadora en la red comparte recursos para que otros la usen, se llama:",
    opciones: [
      "A) servidor",
      "B) cliente",
      "C) mainframe",
      "D) Minicomputadora"
    ],
    correcta: 0
  },
  {
    pregunta: "328. ¿Cuál de los siguientes modos de comunicación admite tráfico de dos vías pero solo en una dirección a la vez?",
    opciones: [
      "A) simplex",
      "B) half duplex",
      "C) Full duplex",
      "D) Todo lo anterior"
    ],
    correcta: 1
  },
  {
    pregunta: "329. ¿Cuál de los siguientes se requiere para comunicarse entre dos computadoras?",
    opciones: [
      "A) Software de comunicaciones.",
      "B) protocolo",
      "C) Hardware de comunicación.",
      "D) Todo lo anterior"
    ],
    correcta: 3
  },
  {
    pregunta: "330. La mayor capacidad de transmisión de datos ocurre en dispositivos:",
    opciones: [
      "A) Voiceband",
      "B) Medium band",
      "C) Broadband",
      "D) Mega-band"
    ],
    correcta: 2
  },
  {
    pregunta: "331. Se llama a los sistemas desarrollados para traducir automáticamente las direcciones basadas en texto a direcciones IP numéricas.",
    opciones: [
      "A) DSL",
      "B) DNS",
      "C) SNL",
      "D) SDN"
    ],
    correcta: 1
  },
  {
    pregunta: "332. Las reglas para el intercambio de datos entre computadoras, se llaman.",
    opciones: [
      "A) interconexiones",
      "B) Paquetes síncronos.",
      "C) Protocolos",
      "D) sincronización de transmisión de datos"
    ],
    correcta: 2
  },
  {
    pregunta: "333. Una tarjeta de expansión del tamaño de una tarjeta de crédito que se inserta en las computadoras portátiles que conecta el módem a la toma telefónica de la pared es la:",
    opciones: [
      "A) modem interno",
      "B) Módem externo",
      "C) Módem PC Card",
      "D) módem inalámbrico"
    ],
    correcta: 2
  },
  {
    pregunta: "334. ____-es el proceso de desglosar la información enviada o transmitida a través de Internet en partes pequeñas llamadas paquetes",
    opciones: [
      "A) protocolo",
      "B) ancho de banda",
      "C) Reformateo",
      "D) identificación"
    ],
    correcta: 2
  },
  {
    pregunta: "335. Una pequeña configuración de red en su hogar se llama:",
    opciones: [
      "A) red de hub",
      "B) Red de centros",
      "C) red de estaciones",
      "D) Red de área local."
    ],
    correcta: 3
  },
  {
    pregunta: "336. La disposición de los ordenadores en una red se denomina:",
    opciones: [
      "A) NOS",
      "B) Topología",
      "C) Node layout",
      "D) protocolo"
    ],
    correcta: 1
  },
  {
    pregunta: "337 El protocolo estándar para internet es:",
    opciones: [
      "A) TCP",
      "B) protocolo IP",
      "C) dirección IP",
      "D) TCP/IP"
    ],
    correcta: 3
  },
  {
    pregunta: "338. El teléfono es un ejemplo de una (n) señal______.",
    opciones: [
      "A) analógico",
      "B) digital",
      "C) Modulado",
      "D) Demodulado"
    ],
    correcta: 0
  },
  {
    pregunta: "339. Las estrategias de red más comunes son:",
    opciones: [
      "A) estrella, anillo, bus, jerárquico",
      "B) terminal, punto a punto, servidor cliente",
      "C) topología, protocolo, arquitectura",
      "D) host, cliente, terminal"
    ],
    correcta: 0
  },
  {
    pregunta: "340. La mayoría de los dispositivos habilitados para la Web siguen un estándar conocido como",
    opciones: [
      "A) FireWire",
      "B) Bluetooth",
      "C) TCP/IP",
      "D) Wi-Fi"
    ],
    correcta: 3
  },
  {
    pregunta: "341. La mayoría de los dispositivos habilitados para la Web siguen un estándar conocido como",
    opciones: [
      "A) híbrida",
      "B) Terminal",
      "C) Peer-to-peer",
      "D) jerárquica"
    ],
    correcta: 2
  },
{
    pregunta: "342. Una red ________describe cómo se configura una red de computadoras y qué estrategias se emplean",
    opciones: [
      "A) protocolo",
      "B) NOS",
      "C) arquitectura",
      "D) conexión"
    ],
    correcta: 2
  },
  {
    pregunta: "343. Una tecnología relativamente nueva que permite la conectividad inalámbrica se llama:",
    opciones: [
      "A) Bluetooth",
      "B) Blacktooth",
      "C) Baseband",
      "D) Broadband"
    ],
    correcta: 0
  },
  {
    pregunta: "344. Un (a) _____-protege la red de una organización contra ataques externos",
    opciones: [
      "A) fortaleza",
      "B) Extranet",
      "C) Proxy",
      "D) Cortafuegos"
    ],
    correcta: 3
  },
  {
    pregunta: "345. La capacidad de un canal de comunicación se mide en:",
    opciones: [
      "A) ancho de banda",
      "B) Capacidad de bits",
      "C) Velocidad de transmisión",
      "D) flujo de datos"
    ],
    correcta: 0
  },
  {
    pregunta: "346. Bluetooth es un tipo de sistema de transmisión de información de ondas de radio que sirve para aproximadamente:",
    opciones: [
      "A) 30 pies",
      "B) 30 yardas",
      "C) 30 millas",
      "D) 300 millas"
    ],
    correcta: 0
  },
  {
    pregunta: "347. Cualquier dispositivo que esté conectado a una red se llama:",
    opciones: [
      "A) cliente",
      "B) Nodo",
      "C) Servidor",
      "D) Manager"
    ],
    correcta: 1
  },
  {
    pregunta: "348. Banda de voz:",
    opciones: [
      "A) Permite al usuario descargar mensajes.",
      "B) Se utiliza para la comunicación telefónica estándar.",
      "C) Se utiliza en líneas arrendadas especiales para conectar minicomputadoras y mainframes.",
      "D) Proporciona un canal de comunicación de alta velocidad."
    ],
    correcta: 1
  },
  {
    pregunta: "349. El acrónimo NOS se refiere a la",
    opciones: [
      "A) Sistema operativo en los clientes.",
      "B) Sistema de orden de red, o topología)",
      "C) Sistema operativo de la red.",
      "D) Arquitectura de red"
    ],
    correcta: 2
  },
  {
    pregunta: "350. Se realiza una tarea de desarrollar un plan técnico y especificaciones para una solución que cumpla con los requisitos del negocio emprendido en la siguiente fase del proceso de desarrollo del sistema:",
    opciones: [
      "a) iniciación del sistema",
      "b) implementación del sistema",
      "c) análisis del sistema",
      "d) diseño de sistemas"
    ],
    correcta: 3
  },
  {
    pregunta: "351. La gestión de procesos es:",
    opciones: [
      "a) la actividad continua de registro de hechos y especificaciones para un sistema para referencia actual y futura",
      "b) La actividad de alcance, planificación y dotación de personal para el desarrollo de un sistema)",
      "c) La actividad de organizar el desarrollo de un sistema)",
      "d) La actividad de documentar, gestionar y mejorar continuamente el proceso de desarrollo de sistemas."
    ],
    correcta: 3
  },
  {
    pregunta: "352. Desde la perspectiva de la gestión de proyectos, un proyecto se considera un éxito si:",
    opciones: [
      "a) el sistema se entrega a tiempo",
      "b) El sistema se desarrolla dentro del presupuesto.",
      "c) El sistema es aceptable para el cliente.",
      "d) Todas las anteriores"
    ],
    correcta: 3
  },
  {
    pregunta: "353. Todas las siguientes son las causas de gestión de proyectos de proyectos fallidos, excepto:",
    opciones: [
      "a) Falta de compromiso de la organización con la metodología de desarrollo del sistema)",
      "b) falta de documentación del proyecto",
      "c) Compromiso prematuro con un presupuesto y calendario fijo.",
      "d) No adoptar el cambio de negocio."
    ],
    correcta: 2
  },
  {
    pregunta: "354. ¿Cuál NO es una actividad de gestión de proyectos?",
    opciones: [
      "a) identificar tareas",
      "b) estimar la duración de la tarea",
      "c) asignar recursos",
      "d) evaluar riesgos"
    ],
    correcta: 3
  },
  {
    pregunta: "355. ¿Cuál de los siguientes es un modelo de red gráfica que describe las tareas de un proyecto y las relaciones entre esas tareas?",
    opciones: [
      "a) Tabla PERT",
      "b) WBS",
      "c) Gráfico de gantt",
      "d) Gráfico de linea"
    ],
    correcta: 0
  },
  {
    pregunta: "356. Una dependencia entre tareas en la que dos tareas deben terminar al mismo tiempo se denomina:",
    opciones: [
      "a) De principio a fin (SF)",
      "b) Acabado a acabado (FF)",
      "c) Finalizar para empezar (FS)",
      "d) Inicio a inicio (SS)"
    ],
    correcta: 1
  },
  {
    pregunta: "357. ¿Cuál de los gráficos de gestión de proyectos es más efectivo cuando desea estudiar las relaciones entre tareas?",
    opciones: [
      "a) Gráfico de gantt",
      "b) Carta de PMBOK",
      "c) Tabla de WBS",
      "d) Tabla PERT"
    ],
    correcta: 3
  },
  {
    pregunta: "358. ¿Cuál de los siguientes es el tiempo estimado requerido para completar una tarea, basado en un promedio ponderado de duración pesimista, optimista y esperada?",
    opciones: [
      "a) duración mínima",
      "b) finalización más temprana",
      "c) duración promedio ponderada",
      "d) duración más probable"
    ],
    correcta: 3
  },
  {
    pregunta: "359. Todas las siguientes son las pautas para seleccionar y reclutar miembros del equipo, excepto:",
    opciones: [
      "a) Selecciona la mejor tarea para cada persona)",
      "b) promover la armonía seleccionando miembros del equipo que se complementen y trabajen bien entre sí",
      "c) plan para el futuro",
      "d) reclutar miembros del equipo con amplia experiencia en desarrollo de sistemas"
    ],
    correcta: 3
  },
  {
    pregunta: "360. Los dispositivos físicos de una computadora:",
    opciones: [
      "a) software",
      "b) paquete",
      "c) Hardware",
      "d) Software del sistema"
    ],
    correcta: 2
  },
  {
    pregunta: "361. El paquete de software es un grupo de programas que resuelven múltiples problemas.",
    opciones: [
      "a) verdad",
      "b) falso"
    ],
    correcta: 0
  },
  {
    pregunta: "362. _________se refiere a renovar o cambiar componentes, como aumentar la memoria principal o las capacidades del disco duro, o agregar altavoces, módems, etc.",
    opciones: [
      "a) Grados",
      "b) Prosodia",
      "c) Síntesis",
      "d) Actualizaciones"
    ],
    correcta: 3
  },
  {
    pregunta: "363. ¿Cuál de los siguientes está diseñado para controlar las operaciones de una computadora?",
    opciones: [
      "a) Software de aplicación",
      "b) Software del sistema",
      "c) software de utilidad",
      "d) Usuario"
    ],
    correcta: 1
  },
  {
    pregunta: "364. ¿Cuál de los siguientes no es un ejemplo de software del sistema?",
    opciones: [
      "a) traductor de idiomas",
      "b) software de utilidad",
      "c) Software de comunicación",
      "d) Procesadores de textos"
    ],
    correcta: 3
  },
  {
    pregunta: "365. Una persona que diseña los programas en un paquete de software se llama:",
    opciones: [
      "a) usuario",
      "b) Gerente de Software",
      "c) Desarrollador del sistema",
      "d) Programador del sistema"
    ],
    correcta: 3
  },
  {
    pregunta: "366. ________está diseñado para resolver un problema específico o para hacer una tarea específica)",
    opciones: [
      "a) Software de aplicación",
      "b) Software del sistema",
      "c) software de utilidad",
      "d) Usuario"
    ],
    correcta: 0
  },
  {
    pregunta: "367. El ensamblador se utiliza como traductor para______.",
    opciones: [
      "a) lenguaje de bajo nivel",
      "b) lenguaje de alto nivel",
      "c) COBOL",
      "d) C"
    ],
    correcta: 0
  },
  {
    pregunta: "368. ¿Cómo llamas a un programa en ejecución?",
    opciones: [
      "a) comando",
      "b) proceso",
      "c) Tarea",
      "d) Instrucción"
    ],
    correcta: 1
  },
  {
    pregunta: "369. ¿Cuál de los siguientes no es un estado de proceso?",
    opciones: [
      "a) Terminado",
      "b) correr",
      "c) Bloqueado",
      "d) Ejecución"
    ],
    correcta: 2
  },
  {
    pregunta: "370. El software diseñado para realizar una tarea específica:",
    opciones: [
      "a) Software síncrono",
      "b) paquete de software",
      "c) Software de aplicación",
      "d) Software del sistema"
    ],
    correcta: 2
  },
  {
    pregunta: "371. El software de procesamiento de textos es un tipo de software de aplicación.",
    opciones: [
      "a) verdad",
      "b) falso"
    ],
    correcta: 0
  },
  {
    pregunta: "372. Desarrollar software _______-significa un gran compromiso de tiempo, dinero y recursos.",
    opciones: [
      "a) en casa",
      "b) en sincronización",
      "c) en fecha",
      "d) En duración"
    ],
    correcta: 0
  },
  {
    pregunta: "373. ¿Cuál de las siguientes no es una forma de adquirir software?",
    opciones: [
      "a) Comprando software preescrito",
      "b) Ordenar software personalizado",
      "c) Descargar software de dominio público",
      "d) Duplicar el software"
    ],
    correcta: 3
  },
  {
    pregunta: "374. OSS significa:",
    opciones: [
      "a) Servicio de sistema abierto (Open System Service)",
      "b) Software de código abierto (Open Source Software)",
      "c) Software de sistema abierto (Open System Software)",
      "d) Abrir software sincronizado (Open Synchronized Software)"
    ],
    correcta: 1
  },
  {
    pregunta: "375. El software de dominio público suele ser:",
    opciones: [
      "a) Sistema soportado",
      "b) Fuente soportada",
      "c) apoyado por la comunidad",
      "d) Programador soportado"
    ],
    correcta: 2
  },
  {
    pregunta: "376. Conjunto de programas que constan de documentación completa:",
    opciones: [
      "a) Paquete de software",
      "b) Software del sistema",
      "c) software de utilidad",
      "d) paquete de archivos"
    ],
    correcta: 0
  },
  {
    pregunta: "377. Intérprete se usa como traductor para:",
    opciones: [
      "a) lenguaje de bajo nivel",
      "b) lenguaje de alto nivel",
      "c) COBOL",
      "d) C"
    ],
    correcta: 1
  },
  {
    pregunta: "378. ¿Cómo se llama una instrucción específica diseñada para hacer una tarea?",
    opciones: [
      "a) comando",
      "b) proceso",
      "c) Tarea",
      "d) Instrucción"
    ],
    correcta: 0
  },
  {
    pregunta: "379. Normalmente interactúan con el sistema a través de la interfaz de usuario proporcionada por el software de la aplicación.",
    opciones: [
      "a) programadores",
      "b) Desarrolladores",
      "c) Usuarios",
      "d) Probadores"
    ],
    correcta: 2
  },
  {
    pregunta: "380. El software sustituye al hardware y se almacena en la ROM.",
    opciones: [
      "a) Software síncrono",
      "b) paquete de software",
      "c) Firmware",
      "d) middleware"
    ],
    correcta: 2
  },
  {
    pregunta: "381. Middleware ha permitido la producción de varios tipos de máquinas inteligentes con chips de microprocesador con software incorporado.",
    opciones: [
      "a) verdad",
      "b) falso"
    ],
    correcta: 1
  },
  {
    pregunta: "382. Un 'pegamento' entre las partes del cliente y el servidor de la aplicación.",
    opciones: [
      "a) middleware",
      "b) Firmware",
      "c) Paquete",
      "d) Software del sistema"
    ],
    correcta: 0
  },
  {
    pregunta: "383. ¿MOM significa?",
    opciones: [
      "a) Middleware orientado a mensajes.",
      "b) Middleware orientado a correos.",
      "c) middleware de mensajes",
      "d) middleware objeto principal"
    ],
    correcta: 0
  },
  {
    pregunta: "384. El almacenamiento del firmware es:",
    opciones: [
      "a) Memoria caché",
      "b) RAM",
      "c) Externo",
      "d) ROM"
    ],
    correcta: 3
  },
  {
    pregunta: "385. DNS significa:",
    opciones: [
      "a) Sistema de nombres de dominio",
      "b) Sistema de nombre directo",
      "c) Sistema de red directa",
      "d) Sistema de red de dominio"
    ],
    correcta: 0
  },
  {
    pregunta: "386. Un software que se encuentra entre el sistema operativo y las aplicaciones que se ejecutan en él.",
    opciones: [
      "a) Firmware",
      "b) middleware",
      "c) software de utilidad",
      "d) Software de aplicación"
    ],
    correcta: 1
  },
  {
    pregunta: "387. ¿Un tipo de middleware que permite entre las aplicaciones integradas y el sistema operativo en tiempo real?",
    opciones: [
      "a) Firmware",
      "b) middleware de base de datos",
      "c) portales",
      "d) Middleware embebido"
    ],
    correcta: 3
  },
  {
    pregunta: "388. ¿Cuál es el otro nombre para el middleware de objetos?",
    opciones: [
      "a) interfaz de solicitud de objeto",
      "b) Interfaz habilitada para objetos",
      "c) Agente de solicitud de objetos.",
      "d) Broker habilitado objeto"
    ],
    correcta: 2
  },
  {
    pregunta: "389. El _______ llama a ciertos procedimientos en sistemas remotos y se utiliza para realizar interacciones síncronas o asíncronas entre sistemas.",
    opciones: [
      "a) procedimiento",
      "b) RPC",
      "c) orientado al mensaje",
      "d) DB"
    ],
    correcta: 1
  },
  {
    pregunta: "390. Un software al que se puede acceder y modificar libremente.",
    opciones: [
      "a) Software síncrono",
      "b) paquete de software",
      "c) OSS",
      "d) middleware"
    ],
    correcta: 2
  },
  {
    pregunta: "391. El software de código abierto se puede utilizar para fines comerciales.",
    opciones: [
      "a) verdad",
      "b) falso"
    ],
    correcta: 0
  },
  {
    pregunta: "392. PNG es un:",
    opciones: [
      "a) formato de imagen",
      "b) formato de archivo",
      "c) formato de internet",
      "d) formato html"
    ],
    correcta: 0
  },
  {
    pregunta: "393. OSI significa:",
    opciones: [
      "a) Índice de código abierto",
      "b) Imagen de código abierto",
      "c) Iniciativa de código abierto",
      "d) Open Source Instant"
    ],
    correcta: 2
  },
  {
    pregunta: "394. ¿Cuál de los siguientes no es un software de código abierto?",
    opciones: [
      "a) LibreOffice",
      "b) Microsoft Office",
      "c) Manipulación de imágenes GNU.",
      "d) MySQL"
    ],
    correcta: 1
  },
  {
    pregunta: "395. Los usuarios deben aceptar los______términos y acuerdos cuando utilizan un software de código abierto.",
    opciones: [
      "a) sistema",
      "b) Licencia",
      "c) comunidad",
      "d) programador"
    ],
    correcta: 1
  },
  {
    pregunta: "396. ¿Cuál de los siguientes no es un inconveniente de OSS?",
    opciones: [
      "a) Falta de soporte personalizado",
      "b) Opción restringida",
      "c) Sin garantía",
      "d) Múltiples elecciones"
    ],
    correcta: 3
  },
  {
    pregunta: "397. Un ejemplo de un diseño web OSS.",
    opciones: [
      "a) Nvu",
      "b) KOffice",
      "c) AbiWorld",
      "d) Open Office"
    ],
    correcta: 0
  },
  {
    pregunta: "398. Un editor de imágenes similar a Adobe Photoshop.",
    opciones: [
      "a) Nvu",
      "b) Open Office",
      "c) Bluefish",
      "d) GIMPshop"
    ],
    correcta: 3
  },
  {
    pregunta: "399. Un OSS para fines de comunicación.",
    opciones: [
      "a) Virtue Mart",
      "b) Drupal",
      "c) Pidgin",
      "d) ZenCart"
    ],
    correcta: 2
  },
  {
    pregunta: "400. Una guía para las licencias OSS distintas de la GPL.",
    opciones: [
      "a) OSI",
      "b) OSD",
      "c) OSE",
      "d) OSL"
    ],
    correcta: 1
  },
  {
    pregunta: "401. La GPL de GNU dice que cada copia de un programa regido por la licencia de la GPL, incluso si se modifica, debe estar sujeta a la GPL nuevamente.",
    opciones: [
      "a) verdad",
      "b) falso"
    ],
    correcta: 0
  },
  {
    pregunta: "402. Richard Stallman del MIT, estableció una licencia especial, la licencia______-.",
    opciones: [
      "a) GNU",
      "b) Gratis",
      "c) Paquete",
      "d) Comercial"
    ],
    correcta: 0
  },
  {
    pregunta: "403. En 1969, los laboratorios AT&T desarrollaron ______ que apoyaba y trabajaba en diferentes plataformas de hardwad)",
    opciones: [
      "a) Linux",
      "b) Unix",
      "c) Windows",
      "d) Ubuntu"
    ],
    correcta: 1
  },
  {
    pregunta: "404. OSS significa:",
    opciones: [
      "a) Servicio de sistema abierto",
      "b) Software de código abierto",
      "c) Software de sistema abierto",
      "d) Abrir software sincronizado"
    ],
    correcta: 1
  },
  {
    pregunta: "405. El software de dominio público suele ser:",
    opciones: [
      "a) Sistema soportado",
      "b) Fuente soportada",
      "c) apoyado por la comunidad",
      "d) Programador soportado"
    ],
    correcta: 2
  },
  {
    pregunta: "406. Conjunto de un programa que consta de documentación completa:",
    opciones: [
      "a) Paquete de software",
      "b) Software del sistema",
      "c) software de utilidad",
      "d) paquete de archivos"
    ],
    correcta: 0
  },
  {
    pregunta: "407. ¿Se utiliza intérprete como traductor para?",
    opciones: [
      "a) lenguaje de bajo nivel",
      "b) lenguaje de alto nivel",
      "c) COBOL",
      "d) C"
    ],
    correcta: 1
  },
  {
    pregunta: "408. ¿Cómo se llama una instrucción específica diseñada para hacer una tarea?",
    opciones: [
      "a) comando",
      "b) proceso",
      "c) Tarea",
      "d) Instrucción"
    ],
    correcta: 0
  },
  {
    pregunta: "409. Normalmente interactúan con el sistema a través de la interfaz de usuario proporcionada por el software de la aplicación.",
    opciones: [
      "a) programadores",
      "b) Desarrolladores",
      "c) Usuarios",
      "d) Probadores"
    ],
    correcta: 2
  },
  {
    pregunta: "410. Para decirle a Excel que estamos ingresando una fórmula en la celda, debemos comenzar con un operador como:",
    opciones: [
      "a). PS",
      "b). @",
      "c). +",
      "d). ="
    ],
    correcta: 3
  },
  {
    pregunta: "411. ¿Cuál de los siguientes no es un paquete de software de aplicación?",
    opciones: [
      "a) Redhat Linux",
      "b) Microsoft Office",
      "c) Adobe Pagemaker",
      "d. Open Office"
    ],
    correcta: 0
  },
  {
    pregunta: "412. ¿Cuál de las siguientes afirmaciones es incorrecta?",
    opciones: [
      "a) Photoshop es una herramienta de diseño gráfico de Adobe.",
      "b) Linux es un software gratuito y de código abierto.",
      "c) Linux es propiedad y es vendido por Microsoft",
      "d) Windows XP es un sistema operativo"
    ],
    correcta: 2
  },
  {
    pregunta: "413. Microsoft Word es un ejemplo de:",
    opciones: [
      "a) un sistema operativo",
      "b) Dispositivo de procesamiento",
      "c) Software de aplicación",
      "d) un dispositivo de entrada"
    ],
    correcta: 2
  },
  {
    pregunta: "414. La extensión de archivo del documento MS-Word en Office 2007 es:",
    opciones: [
      "a) .Doc",
      "b) .docx",
      "c) .pdf",
      "d) .xls"
    ],
    correcta: 1
  },
  {
    pregunta: "415. ¿Cómo se organizan los datos en una hoja de cálculo?",
    opciones: [
      "a) Líneas y espacios",
      "b) Capas y planos",
      "c) Alto y ancho",
      "d) Filas y columnas"
    ],
    correcta: 3
  },
  {
    pregunta: "416. Cambiar un documento existente se llama _______el documento.",
    opciones: [
      "a) Creando",
      "b) Edición",
      "c) Modificando",
      "d) Ajustando"
    ],
    correcta: 1
  },
  {
    pregunta: "417. Para moverse al principio de una línea de texto, presione la tecla_______.",
    opciones: [
      "a. Home",
      "b. A",
      "c. PageUp",
      "d. Enter"
    ],
    correcta: 0
  },
  {
    pregunta: "418. ¿Cuál es el término utilizado para el correo electrónico no solicitado?",
    opciones: [
      "a) Grupo de noticias",
      "b) Usar red",
      "c) Columna vertebral",
      "d) Correo no deseado"
    ],
    correcta: 3
  },
  {
    pregunta: "419. Los programas diseñados para realizar tareas específicas se conocen como:",
    opciones: [
      "a) Software del sistema",
      "b) Software de aplicación",
      "c) Programas de utilidad",
      "d) sistema operativo"
    ],
    correcta: 1
  },
  {
    pregunta: "420. El programa que se utiliza para producir imágenes y texto y para organizarlo en un periódico se clasifica como:",
    opciones: [
      "a) paquete de publicación de texto",
      "b) paquete de publicación de escritorio",
      "c) paquete experimental",
      "d) paquete editorial organizador"
    ],
    correcta: 1
  },
  {
    pregunta: "421. ¿Qué tipo de software proporciona al público su código fuente de forma gratuita?",
    opciones: [
      "a) Software de código abierto",
      "b) Sistemas multitarea",
      "c) UNIX",
      "d) Software de sistemas"
    ],
    correcta: 0
  },
  {
    pregunta: "422. ¿Qué tipo de software de aplicación se desarrolla específicamente para una industria en particular?",
    opciones: [
      "a) Software de productividad personal",
      "b) Software de aplicaciones",
      "c) Sistemas de Soporte a la Decisión",
      "d) Software de mercado vertical"
    ],
    correcta: 3
  },
  {
    pregunta: "423. ¿Cuál de los siguientes no es software de aplicaciones?",
    opciones: [
      "a) Procesamiento de textos",
      "b) Hoja de cálculo",
      "c) UNIX",
      "d) Autoedición (Desktop publishing)"
    ],
    correcta: 2
  },
  {
    pregunta: "424. Las instrucciones de software destinadas a satisfacer las necesidades de procesamiento específicas de un usuario se denominan_________.",
    opciones: [
      "a) Software de sistemas",
      "b) Un microordenador",
      "c) Documentación",
      "d) Software de aplicaciones"
    ],
    correcta: 3
  },
  {
    pregunta: "425. CAD significa",
    opciones: [
      "a) Diseño asistido por ordenador",
      "b) Algoritmo informático para el diseño.",
      "c) Aplicación informática en diseño.",
      "d) Diseño análogo de computadora"
    ],
    correcta: 1
  },
  {
    pregunta: "426. El software _____- permite a los usuarios realizar cálculos en filas y columnas de datos.",
    opciones: [
      "a) Procesamiento de textos",
      "b) Gráficos de presentación",
      "c) Sistema de administración de base de datos",
      "d) Hoja de cálculo electrónica"
    ],
    correcta: 2
  },
  {
    pregunta: "427. Las líneas horizontales y verticales en una hoja de cálculo se llaman:",
    opciones: [
      "a) Celdas",
      "b) Hojas",
      "c) Líneas de bloque",
      "d) Líneas de cuadrícula"
    ],
    correcta: 3
  },
  {
    pregunta: "428. ¿Cuál es el nombre de un programa de aplicación que recopila información del usuario y la envía a alguien a través de Internet?",
    opciones: [
      "a) Un virus",
      "b) Spybot",
      "c) Bomba lógica",
      "d) Parche de seguridad"
    ],
    correcta: 1
  },
  {
    pregunta: "429. Los programas de software que cierran posibles brechas de seguridad en un sistema operativo se conocen como:",
    opciones: [
      "a) Corrección de violaciones de seguridad",
      "b) Actualizar parches",
      "c) Reparaciones de seguridad",
      "d) Parches de seguridad"
    ],
    correcta: 3
  },
  {
    pregunta: "430. La disposición física de los elementos en una página se conoce como__________ del documento.",
    opciones: [
      "a) características",
      "b) formato",
      "c) paginación",
      "d) Ninguno de esos"
    ],
    correcta: 1
  },
  {
    pregunta: "431. ¿Cómo se llama la intersección de una columna y una fila en una hoja de trabajo?",
    opciones: [
      "a) Columna",
      "b) Valor",
      "c) Dirección",
      "d) Celda"
    ],
    correcta: 3
  },
  {
    pregunta: "432. ¿Cuál de las siguientes opciones nos permite enviar la misma carta a diferentes personas en MS Word?",
    opciones: [
      "a) Unirse por correo",
      "b) Copia de correo",
      "c) Insertar correo",
      "d) Unificación de correo"
    ],
    correcta: 3
  },
  {
    pregunta: "433. Para pasar al principio de una línea de texto, presione la tecla :",
    opciones: [
      "a) lengüeta",
      "b) página arriba",
      "c) entrar",
      "d) casa"
    ],
    correcta: 3
  },
  {
    pregunta: "434. ¿Cuál de las siguientes aplicaciones de software sería la más adecuada para realizar cálculos numéricos y estadísticos?",
    opciones: [
      "a) Base de datos",
      "b) Procesador de documentos",
      "c) Paquete de gráficos",
      "d) Hoja de cálculo"
    ],
    correcta: 3
  },
  {
    pregunta: "435. Para guardar un documento existente con un nombre diferente, debe :",
    opciones: [
      "a) Vuelva a escribir el documento y asígnele un nombre diferente.",
      "b) Utilice el comando Guardar como",
      "c) Copie y pegue el documento original en un nuevo documento y luego guarde",
      "d) Use el Explorador de Windows para copiar el documento en una ubicación diferente y luego renómbrelo"
    ],
    correcta: 1
  },
  {
    pregunta: "436. ¿Cuál es el nombre del proceso que se usa para convertir una serie de instrucciones, o programa, escrito en un lenguaje de alto nivel en instrucciones (o un programa) que se pueden ejecutar en una computadora?",
    opciones: [
      "a) Montaje",
      "b) Compilando",
      "c) Traductorio",
      "d) Subiendo"
    ],
    correcta: 1
  },
  {
    pregunta: "437. Para 'maximizar' una ventana significa:",
    opciones: [
      "a) llenarlo a capacidad",
      "b) expandirlo para que se ajuste al escritorio",
      "c) poner solo como archivos dentro",
      "d) Arrástrelo a la Papelera de reciclaje"
    ],
    correcta: 1
  },
  {
    pregunta: "438. El guardar es el proceso de:",
    opciones: [
      "a) Copiar un documento de la memoria a un medio de almacenamiento.",
      "b) Realizar cambios en el contenido existente de un documento.",
      "c) Cambiar la apariencia o aspecto general de un documento.",
      "d) desarrollar un documento introduciendo texto usando un teclado"
    ],
    correcta: 0
  },
  {
    pregunta: "439. Para buscar un documento guardado en la memoria de la computadora y mostrarlo en la pantalla para verlo.",
    opciones: [
      "a) marcha atrás",
      "b) repetición",
      "c) recuperar",
      "d) regreso"
    ],
    correcta: 2
  },
  {
    pregunta: "440. ¿Cuál de los siguientes no es un software antivirus?",
    opciones: [
      "a. NAV",
      "b. F-Prot",
      "c. McAfee",
      "d. Oracle"
    ],
    correcta: 3
  },
  {
    pregunta: "441. Los programas diseñados para realizar tareas específicas se conocen como:",
    opciones: [
      "a) Software del sistema",
      "b) Sistema operativo",
      "c) Software de aplicación",
      "d) Programas de utilidad"
    ],
    correcta: 2
  },
  {
    pregunta: "442. El tipo de software diseñado para que los usuarios personalicen los programas es:",
    opciones: [
      "a) freeware",
      "b) software de código abierto",
      "c) shareware",
      "d) macros"
    ],
    correcta: 0
  },
  {
    pregunta: "443. Un software que resuelve una tarea es:",
    opciones: [
      "a) suite",
      "b) programa independiente",
      "c) programa de código abierto d) programa gratuito"
    ],
    correcta: 0
  },
  {
    pregunta: "444. En un programa de hoja de cálculo, las hojas de trabajo y los documentos están presentes en:",
    opciones: [
      "a) columna",
      "b) célula",
      "c) fórmula",
      "d) libro de trabajo"
    ],
    correcta: 3
  },
  {
    pregunta: "445. El poder de la hoja de cálculo reside en su:",
    opciones: [
      "a) hojas de trabajo",
      "b) Celdas",
      "c) etiquetas",
      "d) fórmulas"
    ],
    correcta: 1
  },
  {
    pregunta: "446. El componente que es portátil y permite al presentador colocar las diapositivas sobre cualquier superficie es:",
    opciones: [
      "a) monitor CRT a gran escala",
      "b) pantalla de computadora",
      "c) Conversor de PC a TV",
      "d) proyector de datos"
    ],
    correcta: 2
  },
  {
    pregunta: "447. Se llama conjunto de caracteres que tienen las mismas características.",
    opciones: [
      "a) tipo cara",
      "b) tipo de estilo",
      "c) fuente d) pico"
    ],
    correcta: 0
  },
  {
    pregunta: "448. En un programa de presentación, el cuadro de tamaño variable que se utiliza para texto y elementos gráficos es:",
    opciones: [
      "a) caja de texto",
      "b) célula",
      "c) cuadro",
      "d) objeto"
    ],
    correcta: 0
  },
  {
    pregunta: "449. En el software, las listas de comandos y opciones están presentes en",
    opciones: [
      "a) Barra de menús",
      "b) barra de título",
      "c) barra de formulas",
      "d) barra de herramientas"
    ],
    correcta: 0
  },
  {
    pregunta: "450. ¿Qué capa en la pila TCP / IP es equivalente a la capa de Transporte del modelo OSI?",
    opciones: [
      "A) Solicitud",
      "B) Host-to-Host",
      "C) internet",
      "D) Acceso a la red"
    ],
    correcta: 1
  },
  {
    pregunta: "451. ¿Cuál de las siguientes opciones permite que un enrutador responda a una solicitud de ARP destinada a un host remoto?",
    opciones: [
      "A) Gateway DP",
      "B) ARP inverso (RARP)",
      "C) Proxy ARP",
      "D) ARP inverso (IARP)"
    ],
    correcta: 2
  },
  {
    pregunta: "452. ¿Los agradecimientos, la secuenciación y el control de flujo son características de qué capa OSI?",
    opciones: [
      "A) Capa 2",
      "B) Capa 3",
      "C) Capa 4",
      "D) Capa 7"
    ],
    correcta: 2
  },
  {
    pregunta: "453. ¿Dónde se especifica un concentrador en el modelo OSI?",
    opciones: [
      "A) capa de sesión",
      "B) capa física",
      "C) Capa de enlace de datos",
      "D) Capa de aplicación"
    ],
    correcta: 1
  },
  {
    pregunta: "454. ¿Qué clase de dirección IP tiene la mayoría de las direcciones de host disponibles de forma predeterminada?",
    opciones: [
      "A) A",
      "B) B",
      "C) C",
      "D) A y B"
    ],
    correcta: 0
  },
  {
    pregunta: "455. ¿Qué tan amplia una dirección IPv6?",
    opciones: [
      "A) 32 bits",
      "B) 128 bytes",
      "C) 64 bits",
      "D) 128 bits"
    ],
    correcta: 3
  },
  {
    pregunta: "456. ¿Qué protocolo se usa para encontrar la dirección de hardware de un dispositivo local?",
    opciones: [
      "A) RARP",
      "B) ARP",
      "C) IP",
      "D) ICMP"
    ],
    correcta: 1
  },
  {
    pregunta: "457. ¿Qué protocolo de (layer) capa 4 se utiliza para una conexión Telnet?",
    opciones: [
      "A) IP",
      "B) TCP",
      "C) TCP / IP",
      "D) UDP"
    ],
    correcta: 1
  },
  {
    pregunta: "458. ¿Cuál es la razón principal por la que se creó el modelo OSI?",
    opciones: [
      "A) Para crear un modelo en capas más grande que el modo DoD",
      "B) Para que los desarrolladores de aplicaciones puedan cambiar solo los protocolos de una capa a la vez",
      "C) Para que las diferentes redes puedan comunicarse",
      "D) Para que Cisco pueda usar el modelo."
    ],
    correcta: 2
  },
  {
    pregunta: "459. ¿Qué protocolo utiliza Ping?",
    opciones: [
      "A) TCP",
      "B) ARP",
      "C) ICMP",
      "D) BootP"
    ],
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