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
    }
    entrada.value = ""; //Limpiamos el campo de entrada
}

//Creamos una función para que se muestre la list con los nombres introducidos
function mostrarNombres (){
    
}