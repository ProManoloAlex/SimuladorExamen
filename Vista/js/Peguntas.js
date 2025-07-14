// ---------------------------- CONFIGURACIÓN ----------------------------
const preguntasPorPagina = 10;
let paginaActual = 0;
let respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas")) || [];


// Aquí puedes añadir todas tus preguntas:
const preguntas = [
  {
    pregunta: "1.- Cual es la tecnología usada para imprimir de una impresora matricial ",
    opciones: [ "a. Impacto utilizando chorro de tinta", 
                "b. Impactando en un sistema de tinta liquida",
                "c. Impacto utilizando cabezal en una cinta", 
                "d. Todas son correctas"],
    correcta: 2 
  },  
  {
    pregunta: "2.- Cual es la tecnología usada para imprimir de una impresora de chorro de tinta",
    opciones: [ "a. Impacto utilizando pines de impresión", 
                "b. Impacto utilizando pines de tinta",
                "c. Cartucho que lanza pequeñas gotas de tinta en el papel", 
                "d.  Cartucho térmico de tinta"],
    correcta: 2 
  },
{
    pregunta: "3.- ¿Cuál es el único código que entiende la computadora?",
    opciones: [ "a. Impresión en papel en un cartucho de tinta", 
                "b. Impresión magnética por medio de un cartucho de tinta liquida",
                "c. Impresión electrostática cargada en un toner fotosensible", 
                "d. Impresión por mecanismos de pines impresos"],
    correcta: 2 
  },
  {
    pregunta: "4.-¿Cuál es el único código que entiende la computadora?",
    opciones: [ "a. Código binario", 
                "b. Código decimal",
                "c. Código de programación ", 
                "d. Código Java"],
    correcta: 0 
  },
    {
    pregunta: "5.- ¿Cuál es la unidad más pequeña de información que maneja la computadora?",
    opciones: [ "a. Gigabyte  ", 
                "b. Megabyte",
                "c. Byte", 
                "d. Terabyte"],
    correcta: 2 
  },
    {
    pregunta: "6.- ¿A cuántos MB equivale un GB?",
    opciones: [ "a. 1024 Megabytes", 
                "b. 1024 Kilobytes ",
                "c. 1024 Bytes", 
                "d. 1024 bits"],
    correcta: 2 
  },
    {
    pregunta: "7.- ¿Por qué es necesario formatear una unidad de disco?",
    opciones: [ "a. Verificar el tamaño del disco ", 
                "b. Verificar la presencia de virus ",
                "c. Verificar la calidad del disco ", 
                "d. Verificar si el disco está en buenas condiciones y borrar su contenido"],
    correcta: 3 
  },
    {
    pregunta: "8.-  ¿A qué se le denomina impresora predeterminada?",
    opciones: [ "a. Aquella que la computadora reconoce en la red  ", 
                "b. Aquella conectada directamente a la computadora  ",
                "c. Aquella conectada en red  ", 
                "d. Aquella que la computadora reconoce en caso de que se requiera imprimir algo  "],
    correcta: 3 
  },
    {
    pregunta: "9.- ¿La opción sonidos del panel de control, ¿para qué se utiliza?",
    opciones: [ "a. Sirve para escuchar música  ", 
                "b. Se utiliza para asignarle un sonido a una función determinada  ",
                "c. ", 
                "d. "],
    correcta: 1 
  },
  {
    pregunta: "10.- ¿Qué es el Hardware?",
    opciones: [ "a. Es la parte que se puede tocar de la computadora", 
                "b. Es la parte que no se puede tocar de la computadora",
                "c. Es la parte interna de la computadora", 
                "d. Es la parte programática de la computadora"],
    correcta: 0
  },
  {
    pregunta: "11.-  ¿Qué es el Software?",
    opciones: [ "a. Conjunto de sistemas y programas instalados en la computadora", 
                "b. Conjunto de unidades instaladas en la computadora",
                "c. Conjunto de sistemas y unidades instaladas en la computadora", 
                "d. Todas son correctas"],
    correcta: 0
  },
  {
    pregunta: "12.- ¿Qué es el Firmware?",
    opciones: [ "a. Parte tangible de la computadora", 
                "b. Instrucciones de programa grabados en una memoria no volatil",
                "c. Parte intangible de la computadora  ", 
                "d. Instrucciones para que funcione el hardware"],
    correcta: 2 
  },
{
    pregunta: "13.- El Word y el Excel, ¿a qué categoría de software pertenecen?",
    opciones: [ "a. Categoría de aplicaciones que realizan tareas específicas  ", 
                "b. Categoría de programación que realizan tareas específicas",
                "c. Categoría de Utilitarios que realizan tareas específicas", 
                "d. Categoría de Sistemas Operativos que realizan tareas específicas "],
    correcta: 0 
  },
  {
    pregunta: "14.- Los elementos que corresponden a la categoría Sistemas Operativos son:",
    opciones: [ "a. Word, Excel, Power Point, etc.", 
                "b. Antivirus, Diseñadores gráficos, etc.",
                "c. Windows, Linux, Unix, Ubuntu, etc.", 
                "d. Java Script, Visual, Fox, Turbo Pascal, etc."],
    correcta: 2 
  },
    {
    pregunta: "15.- Los elementos que corresponden a la categoría Utilitarios:",
    opciones: [ "a. Novell, Windows NT, Unix, Linux", 
                "b. ",
                "c. ", 
                "d. "],
    correcta: 1 
  },
    {
    pregunta: "16.- Que es internet Explorer?",
    opciones: [ "a. Un navegador de Internet", 
                "b. Un buscador como google",
                "c. Un procesador de texto", 
                "d. Un medio para realizar chat"],
    correcta: 0 
  },
    {
    pregunta: "17.- Que es un computador?",
    opciones: [ "a. Es una máquina que tiene programas", 
                "b. Es una máquina que permite realizar diferentes procesos",
                "c. Es una maquina digital de conexión a internet", 
                "d. Es una máquina electrónica que recibe y procesa datos"],
    correcta: 2 
  },
    {
    pregunta: "18.-Que es correo electrónico?  ",
    opciones: [ "a. Es un servicio de red que permite enviar y recibir información ", 
                "b. Es un medio electrónico para enviar datos ",
                "c. Es un programa de internet para mandar datos", 
                "d. Es un utilitario que permite recibir y enviar información "],
    correcta: 0
  },
    {
    pregunta: "19.- El Facebook, Twitter que tipo de red representa?",
    opciones: [ "a. Una red de tipo familiar", 
                "b. Una red de tipo laboral",
                "c. Una red de tipo social", 
                "d. Una red de tipo personal"],
    correcta: 2 
  },
  {
    pregunta: "20.- Que es un disco duro?",
    opciones: [ "a. Un disco, pero en vez de ser blando es duro", 
                "b. Un disco que gira y genera electricidad",
                "c. Una unidad de almacenamiento", 
                "d. Un disco que está dentro del CPU"],
    correcta: 2 
  },
  {
    pregunta: "21.- Que es Windows? ",
    opciones: [ "a. Un sistema operativo  ", 
                "b. En español significa “ventanas” ",
                "c. Lo que sale cuando enciendes el ordenador", 
                "d. Un elemento del computador"],
    correcta: 0
  },
  {
    pregunta: "22.- Componentes físicos y tangibles de la computadora? ",
    opciones: [ "a. Hardware", 
                "b. Software",
                "c. Firmware", 
                "d. eriféricos"],
    correcta: 0
  },
{
    pregunta: "23.- Componentes lógicos e intangibles de la computadora",
    opciones: [ "a. Sistema", 
                "b. Software",
                "c. Hardware", 
                "d. Todas las anteriores"],
    correcta: 2 
  },
  {
    pregunta: "24.- Dispositivos que permiten la introducción de datos a la computadora?",
    opciones: [ "a. Impresora, pantalla, parlantes", 
                "b. Teclado, lector de barras, scanner",
                "c. Plotter, proyectores", 
                "d. Disco duro, memory flash, cd room"],
    correcta: 1 
  },
    {
    pregunta: "25.- Dispositivo que permiten la salida de información de la computadora? ",
    opciones: [ "a. Teclado", 
                "b. Monitor",
                "c. Memory flash ", 
                "d. Mouse"],
    correcta: 2 
  },
    {
    pregunta: "26.- Símbolo o gráfico que representa algún archivo o programa?",
    opciones: [ "a. Icono", 
                "b. Imagen",
                "c. Boton de inicio", 
                "d. Acceso directo"],
    correcta: 0
  },
    {
    pregunta: "27.- Que es informática?",
    opciones: [ "a. Ciencia que estudia el internet", 
                "b. Ciencia que estudia un lenguaje de programación",
                "c. Ciencia que estudia las partes de la computadora  ", 
                "d. Ciencia que estudia el tratamiento automático de la información"],
    correcta: 3 
  },
    {
    pregunta: "28.- Que es información?",
    opciones: [ "a. Conjunto de datos procesados que constituyen un mensaje ", 
                "b. Lo que se ingresa a la computadora",
                "c. Conjunto de instrucciones computacionales ", 
                "d. Todas las anteriores"],
    correcta: 0
  },
    {
    pregunta: "29.- Que es un dato?",
    opciones: [ "a. Es una información ingresada a la computadora", 
                "b. Representación simbólica numérica, alfabética, algorítmica",
                "c. Unidad de información pequeñísima", 
                "d. Información para ser procesada"],
    correcta: 1 
  },
  {
    pregunta: "30.- Que es un procesador",
    opciones: [ "a. Es aquel que realiza el trabajo de la computadora", 
                "b. Es un dispositivo de proceso",
                "c. Es un circuito integrado que maneja todos los elementos de la CPU", 
                "d. Es un procesador de palabras como Word, Excel, etc."],
    correcta: 2 
  },
  {
    pregunta: "31.- Que es la memoria?",
    opciones: [ "a. Dispositivo o medio de almacenamiento que retienen datos durante un tiempo", 
                "b. Componente de la computadora",
                "c. Dispositivo con el que vienen las computadoras", 
                "d. Memoria de solo lectura ROM y RAM"],
    correcta: 0
  },
  {
    pregunta: "32.- ¿Cuál de los siguientes dispositivos es apropiado para transportar información?",
    opciones: [ "a. Memoria RAM", 
                "b. Disco Duro",
                "c. Memoria Secundaria", 
                "d.  CD’s"],
    correcta: 3
  },
{
    pregunta: "33.- ¿Cuál de las siguientes es una función del Sistema Operativo?",
    opciones: [ "a. Administrar los recursos de la computadora", 
                "b. Organizar la información que se almacena en la computadora",
                "c. Ser una interfaz entre la computadora y el usuario", 
                "d. Todas las anteriores"],
    correcta: 3 
  },
  {
    pregunta: "34.- Cuál de las siguientes es verdadera?",
    opciones: [ "a. Una vez borrado un archivo no hay manera de recuperarlo.  ", 
                "b. Al borrar un archivo se puede recuperar este solo si no se ha grabado algo encima de él.",
                "c. Al borrar un archivo este puede extraerse de un lugar que permite su reuso.", 
                "d. Un archivo nunca se borra de la computadora, siempre queda como respaldo."],
    correcta: 1
  },
    {
    pregunta: "35.- Si se está explorando una carpeta con archivos, ¿cuál de las siguientes opciones del Menú “Ver” nos permite ver la última fecha de cuando se modificaron los archivos?  ",
    opciones: [ "a. Vistas en miniatura  ", 
                "b. Iconos",
                "c. Lista  ", 
                "d. Detalles"],
    correcta: 3 
  },
    {
    pregunta: "36.- Nos sirve para disminuir el tamaño que ocupa físicamente un archivo.",
    opciones: [ "a. Antivirus", 
                "b. Compactador/descompactador",
                "c. Desfragmentador", 
                "d. Protector de Pantalla"],
    correcta: 1 
  },
    {
    pregunta: "37.- Sirve para reorganizar la información en disco y que se puede acceder más rápidamente a la información.",
    opciones: [ "a. Antivirus", 
                "b. Compactador/descompactador",
                "c. Desfragmentador", 
                "d. Protector de Pantalla"],
    correcta: 2 
  },
    {
    pregunta: "38.- ¿Es la extensión con la cual se crea un archivo compreso en el sistema operativo Windows?",
    opciones: [ "a. .rar", 
                "b. .zip",
                "c. .ace ", 
                "d. .arc"],
    correcta: 1 
  },
    {
    pregunta: "39.- Que es un pixel?",
    opciones: [ "a. Unidad de almacenamiento de datos", 
                "b. Es el elemento gráfico mínimo con el que se componen las imágenes en la pantalla de un ordenador.",
                "c. Es una unidad de medida que sirve para contar las cantidad de colores de los que se compone una imagen en la pantalla de un ordenador", 
                "d. Todas son correctas"],
    correcta: 1
  },
  {
    pregunta: "40.- Que es el USB?",
    opciones: [ "a. Es una interfase de tipo plug & play entre un ordenador y ciertos dispositivos", 
                "b. Emulador para juegos de consola",
                "c. Tipo de tarjeta aceleradora gráfica ", 
                "d. Puerto de conexión coaccial"],
    correcta: 0 
  },
  {
    pregunta: "41.- La papelera de reciclaje es:",
    opciones: [ "a. Una utilidad de Windows para poder recuperar ficheros y carpetas eliminados. No se pueden recuperar los objetos eliminados desde un disquete.", 
                "b. Es el lugar donde van todos los ficheros temporales y la basura que genera el Windows mientras trabaja.",
                "c. Es una utilidad de Windows para poder acceder a los ficheros que ya hemos visitado desde Internet y así poder verlos sin necesidad de conectarnos.", 
                "d. a y b son correctas."],
    correcta: 3 
  },
  {
    pregunta: "42.- Que es el Winzip? ",
    opciones: [ "a. Es una aplicación o programa informático que permite buscar ficheros en nuestro PC de una forma más rápida y eficiente.", 
                "b. Es una aplicación o programa informático diseñado para reducir el número de ficheros de nuestro ordenador con el fin de que éste vaya más rápido.",
                "c. Es una aplicación o programa informático que permite comprimir (reducir el número de Kilobytes) ficheros para que ocupen menos espacio y puedan ser manejados más fácilmente (copiados y trasladados)", 
                "d. Es un programa parte del sistema operativo"],
    correcta: 2 
  },
{
    pregunta: "43.- Qué tipo de dispositivos son: El CPU, memoria RAM, Tarjeta de Video y la Tarjeta Madre ",
    opciones: [ "a. Salida", 
                "b. Entrada",
                "c. Almacenamiento", 
                "d. Procesamiento"],
    correcta: 3 
  },
  {
    pregunta: "44.- El hardware se clasifica en:",
    opciones: [ "a. Dispositivos de Control, Análisis, Calculo, Pensamiento y Unidad", 
                "b. Dispositivos de Texto, Datos, Procesamiento, Información y Almacenamiento",
                "c. Dispositivos de Entrada, Salida, Proceso, Almacenamiento y Mixtos", 
                "d. Dispositivos de 1er Grado, 2do. Grado, 3er. Grado y Básicos"],
    correcta: 2 
  },
    {
    pregunta: "45.- El software se clasifica en:",
    opciones: [ "a. Sistema, aplicaciones y utilerías", 
                "b. Entrada, proceso y salida",
                "c. Estudio, Profesional y Diversión ", 
                "d. Primera clase y segunda clase"],
    correcta: 0 
  },
    {
    pregunta: "46.- ¿Cuál vista usarías para ver mejor los márgenes de una página en microsoft word?",
    opciones: [ "a. Normal", 
                "b. Diseño de Impresión",
                "c. Esquema", 
                "d. Diseño Web "],
    correcta: 1 
  },
    {
    pregunta: "47.- En Word al Oprimir [Ctrl.][Intro] insertas un:",
    opciones: [ "a. Salto de página suave", 
                "b. Salto de página manual",
                "c. Salto de sección continuo", 
                "d. Salto de columna "],
    correcta: 1 
  },
    {
    pregunta: "48.-  ¿En Word cuándo solo deseamos copiar el formato de algún texto debo hacer?",
    opciones: [ "a. Seleccionar el texto, darle copiar y luego pegar.", 
                "b. Seleccionar el texto, luego darle copiar formato y seleccionar al texto que deseo aplicárselo.",
                "c. Seleccionar el texto, darle cortar y luego pegar.", 
                "d. Ninguna de las anteriores."],
    correcta: 1 
  },
    {
    pregunta: "49.- ¿En Word cuál es el método abreviado para seleccionar todo el texto de un documento?",
    opciones: [ "a. Ctrl + E", 
                "b. Ctrl + C  ",
                "c. Ctrl + X ", 
                "d. "],
    correcta: 0 
  },
  {
    pregunta: "50.- Los	efectos	de	animación	de	PowerPoint	te	permiten	controlar",
    opciones: [ "a. El orden en que se animan el texto y objetos.", 
                "b. La dirección desde la cual aparecen los objetos animados.",
                "c. Cuales textos e imágenes se animan", 
                "d. Todas las anteriores"],
    correcta: 3 
  },
  {
    pregunta: "51.- Qué usarías para colocar objetos en un sitio específico de una diapositiva?",
    opciones: [ "a. Los campos", 
                "b. Las reglas",
                "c. La cuadrícula", 
                "d. Líneas dibujadas"],
    correcta: 2 
  },
  {
    pregunta: "52.- Mencione un formato de archivo con el que no se puede guardar una presentación en Power Point. ",
    opciones: [ "a. Página web", 
                "b. Documento Word",
                "c. Imagen *.jpg", 
                "d.  Imagen *.gif "],
    correcta: 1 
  },
{
    pregunta: "53.- ¿En Microsoft Excel, qué tipo de referencia de celda cambia al copiarla?",
    opciones: [ "a. Absoluta", 
                "b. Relativa",
                "c. Circular", 
                "d. Cerrada"],
    correcta: 1 
  },
  {
    pregunta: "54.- ¿En Excel qué carácter es utilizado para indicar una referencia absoluta?",
    opciones: [ "a. &", 
                "b. $",
                "c. % ", 
                "d. @"],
    correcta: 1 
  },
    {
    pregunta: "55.- En Excel, si en la columna A tenemos el precio de artículos y en la columna B queremos calcular el impuesto del 10%, la fórmula a copiar en cada celda de la columna B será:",
    opciones: [ "a. A1 * 10%", 
                "b. $A$1*0.1",
                "c. A1 * 0.1", 
                "d. $A$1*10%"],
    correcta: 2
  },
    {
    pregunta: "56.- La	intersección	de	cada	columna	con	cada	renglón	se	le	llama:",
    opciones: [ "a. Rango", 
                "b. Referencia Activa",
                "c. Coordenada", 
                "d. Celda"],
    correcta: 3 
  },
    {
    pregunta: "57.- ¿Cuál es el operador para construir una referencia absoluta?",
    opciones: [ "a. =", 
                "b. *",
                "c. abs()", 
                "d. $"],
    correcta: 3 
  },
    {
    pregunta: "58.-  Formula que permite sumar los valores desde la celda A1 hasta la celda A33.",
    opciones: [ "a. =(A1:A33)", 
                "b. =suma(A1:A33)",
                "c. Suma(A1:A33)", 
                "d.  =suma(A1+A33)"],
    correcta: 1 
  },
    {
    pregunta: "59.- Formula que permite calcular el número que más se repite en un rango",
    opciones: [ "a. Min(A1:A23) ", 
                "b. Max(B25:B65)",
                "c. Moda(C22:C80)", 
                "d. Promedio(B2:B52)"],
    correcta: 2 
  },
  {
    pregunta: "60.- En aplicaciones de internet las siglas de FTP corresponden a:",
    opciones: [ "a. Protocolo de Transferencia de Campos", 
                "b.  Protocolo de Transferencia de Archivos",
                "c. Protocolo de Trasbordo de Fuentes", 
                "d. Protocolo de Traslado de folders"],
    correcta: 1 
  },
  {
    pregunta: "61.- Los programas usados para tener acceso a páginas Web y desplegarlas se llaman: ",
    opciones: [ "a. Sitios Web", 
                "b. Ventanas Web",
                "c. Documentos Web ", 
                "d. Exploradores Web"],
    correcta: 3 
  },
  {
    pregunta: "62.- Es un IP válido:",
    opciones: [ "a. 12.345.77 ", 
                "b. 12.34.5.77",
                "c. 1234.577", 
                "d. 12.34.34.577"],
    correcta: 3 
  },
{
    pregunta: "63.- Una red de telecomunicaciones internacional que consiste en documentos con hipervínculos recibe el nombre de: ",
    opciones: [ "a. NSFNET", 
                "b. Netscape Navigator",
                "c. Internet Explorer", 
                "d. World Wide Web "],
    correcta: 3 
  },
  {
    pregunta: "64.- ¿Es el nombre de dominio destinado para aquellas instituciones no lucrativas que tienen una página en Internet?",
    opciones: [ "a. .com", 
                "b. .edu",
                "c. .org", 
                "d. .mx"],
    correcta: 2 
  },
    {
    pregunta: "65.- Proyecto que dio pauta para la creación de Internet",
    opciones: [ "a. Arpanet", 
                "b. Telnet",
                "c. Netscape", 
                "d. Red Lan"],
    correcta: 0 
  },
    {
    pregunta: "66.- Equipo que permite que lleguen los datos a su destino?",
    opciones: [ "a. Enrutadores", 
                "b. Servidores",
                "c. Terminales", 
                "d. Computadores"],
    correcta: 0 
  },
    {
    pregunta: "67.- Tipo de red que opera dentro de un área geográfica limitada por una institución ",
    opciones: [ "a. Wan", 
                "b. Man",
                "c. Lan", 
                "d. Wi-fi"],
    correcta: 2 
  },
    {
    pregunta: "68.- Programas navegadores de mayor uso",
    opciones: [ "a. Explorer y Mozilla Firefox", 
                "b. Mozilla Firefox y Opera",
                "c. Explorer y Opera", 
                "d. Ninguna"],
    correcta: 3 
  },
    {
    pregunta: "69.- Que es el Spam",
    opciones: [ "a. Virus Informático", 
                "b. Envío de correo no solicitado",
                "c. Marca de ordenador", 
                "d. Ninguna es correcta"],
    correcta: 1 
  },
  {
    pregunta: "70.- Que es un servidor?",
    opciones: [ "a. Es un ordenador utilizado básicamente para conectarse a internet", 
                "b. Es un ordenador central de un sistema de red que provee servicios y programas a otros ordenadores conectados",
                "c. Es un ordenador de tecnología avanzada utilizado para software potencialmente complejo", 
                "d. Ninguna es correcta"],
    correcta: 1 
  },
  {
    pregunta: "71.- Que es la Intranet?",
    opciones: [ "a. Es una red privada ubicada en Internet que sólo pueden acceder un grupo de usuarios con unas condiciones requisitas", 
                "b. Red Privada y clandestina ubicada en internet",
                "c. Es una red privada dentro de una compañía u organización que utiliza el mismo software que se encuentra en Internet.", 
                "d. Todas son correctas"],
    correcta: 2 
  },
  {
    pregunta: "72.- ¿Cuál es el propósito de un portal como Terra?",
    opciones: [ "a. Página de Internet donde se muestra información referente a las noticias.", 
                "b. El portal hace de conexión entre el ordenador del usuario e Internet. Cuando el usuario crea un acceso telefónico a redes en su ordenador, lo que está configurando es un acceso telefónico a un portal de Internet.",
                "c. Que cualquier usuario de Internet se conecte al portal y que no necesite ir a ninguna otra página porque puede encontrar allí cualquier cosa que busque.", 
                "d. a y b son correctas"],
    correcta: 3 
  },
{
    pregunta: "73.- ¿Diferencias entre buscador y directorio de Internet?",
    opciones: [ "a. En un directorio los enlaces son introducidos de forma automática por un robot que navega sin descanso por Internet, mientras que en un buscador los enlaces están catalogados en temas por personas.", 
                "b. En un buscador los enlaces son introducidos de forma automática por un robot que navega sin descanso por Internet, mientras que en un directorio los enlaces están catalogados en temas por personas. ",
                "c. Un buscador y un directorio son lo mismo, los dos sirven para buscar páginas en la red.", 
                "d. Todas son correctas"],
    correcta: 0
  },
  {
    pregunta: "74.- El Internet es una buena forma para:",
    opciones: [ "a. Encontrar direcciones", 
                "b. Ir al World Wide Web ",
                "c. Comunicar y compartir información", 
                "d. Ninguno de lo antedicho"],
    correcta: 2
  },
    {
    pregunta: "75.- Para poder conectarnos a una red WIFI necesitamos",
    opciones: [ "a. Un Modem", 
                "b. Un dispositivo Wi-Fi",
                "c. Un Satélite", 
                "d. Un RTB"],
    correcta: 1 
  },
    {
    pregunta: "76.-  La Video Conferencia por Celulares se debe a la tecnología de conexión.",
    opciones: [ "a. GSM", 
                "b. GPRS",
                "c. UMTS", 
                "d. ADSL"],
    correcta: 2 
  },
    {
    pregunta: "77.- Dirección de correo electrónico correctamente estructurada:",
    opciones: [ "a. Lopez1948@hotmail.com", 
                "b. López. luis@hotmail.com",
                "c. www.cooperativa.net", 
                "d. ana.com"],
    correcta: 1 
  },
    {
    pregunta: "78.- Una dirección de página Web correctamente estructurada:",
    opciones: [ "a. Htt://www.fuerzaaerea@hotmail.com", 
                "b. www.fuerzaaerea.com.ec",
                "c. http://fuerzaaerea.mil.ec  ", 
                "d. http://www.fuerzaaerea.mil.ec"],
    correcta: 3
  },
    {
    pregunta: "79.- Terminaciones de dominios en internet para representar un determinado país",
    opciones: [ "a. .com", 
                "b. .net",
                "c. .bra", 
                "d. .edu"],
    correcta: 2 
  },
  {
    pregunta: "80.- Terminaciones de dominios en internet para representar entidades educativas",
    opciones: [ "a. .edu", 
                "b. .org",
                "c. .educar", 
                "d. .com"],
    correcta: 0 
  },
  {
    pregunta: "81.Terminaciones de dominios en internet para representar organizaciones comerciales  ",
    opciones: [ "a. .comer", 
                "b. .net",
                "c. .com", 
                "d. .gob"],
    correcta: 2 
  },
  {
    pregunta: "82.- Terminaciones de dominios en internet para representar entidades gubernamentales",
    opciones: [ "a. .gob", 
                "b. .ec",
                "c. .gov", 
                "d. .gobierno"],
    correcta: 2 
  },
{
    pregunta: "83.- Terminaciones de dominios en internet para representar la propia internet",
    opciones: [ "a. .navigator", 
                "b. .red",
                "c. .inter", 
                "d. .net"],
    correcta: 3 
  }
];

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