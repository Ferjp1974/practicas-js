function agregarTarea(){
//Obtenemos el valor del campo de la tarea

let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

//Validamos que  el valor no sea vació 
if(nuevaTareaTexto === ""){
    alert("Por favor, ingresa una tarea");
    return; 
}
//Crear el elemento de la lista 
let nuevaTarea = document.createElement("li");
nuevaTarea.textContent = nuevaTareaTexto +  "  ";

//Crear el botón de eliminar
let botonEliminar = document.createElement("button")
botonEliminar.textContent = "Eliminar";
botonEliminar.onclick = function(){nuevaTarea.remove();};

//Agregar el botón al elemento de la lista
nuevaTarea.appendChild(botonEliminar);

//Agregar la nueva tarea a la lista
document.getElementById("ListaTareas").appendChild(nuevaTarea);

//limpiar el cuadro de texto del nombre  de la tarea
document.getElementById("nuevaTarea").value = "";


}