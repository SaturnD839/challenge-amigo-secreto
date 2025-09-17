// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos la lista con los nombres
let amigos = []

/*Creamos una función para que el usuario introduzca los nombres
con la condicion de que muestre una alerta cuando el campo esté vacío
y limpiar el campo de entrada
*/
function agregarAmigo (){
    let entrada = document.getElementById("amigo"); //Se busca la entrada por su id
    let nombreAmigo = entrada.value; // el 'valor' de lo que el usuario escribió
    console.log(nombreAmigo); //Mostramos el valor en la consola

    if (nombreAmigo === "") {
        alert("Por favor, insterte un nombre."); //Mensaje de alerta si el campo esta vacío
    } else {
        amigos.push(nombreAmigo); //Agregamos el elemento a la lista inicial
        console.log(amigos); //Pedimos que nos muestre en la consola la lista de amigos
        mostrarNombres(); 
    }
    entrada.value = ""; //Limpiamos el campo de entrada
}

//Creamos una función para que se muestre la list con los nombres introducidos
function mostrarNombres (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar la lista existente
    //Iterar sobre el arreglo
    let i = 0;
    for (i; i<amigos.length; i++){
        let nombreActual = amigos[i]; //Tomamos el elemento actual de la lista de nombres
        let nuevoElemento = document.createElement("li"); //Creamos un elemento <li>
        nuevoElemento.textContent = nombreActual;
        lista.appendChild(nuevoElemento); 
    }  
}

function sortearAmigo(){
// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (amigos.length === 0) {
        alert("No hay elementos para sortear");
        return;
    } 

    // Generar un índice aleatorio

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
// Obtener el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];
     //Mostrar resultado
     let resultado = document.getElementById("resultado");
     resultado.innerHTML = "<li>" + nombreSorteado +"<\li>";
}