let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const agregarTarea = () => {
  const input = document.getElementById("tareaInput");

  if (input.value === "") {
    mensajeAlerta("La tarea no puede estar vacia.");
    return;
  }

  tareas.push({
    texto: input.value,
    completada: false,
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
  input.value = "";
  mostrarTareas();
};

const editarTarea = (indice) => {
  const input = document.getElementById("tareaInput");

  if (input.value === "") {
    mensajeAlerta("La tarea no puede estar vacia.");
    return;
  }

  tareas[indice].texto = input.value;
  localStorage.setItem("tareas", JSON.stringify(tareas));
  input.value = "";
  mostrarTareas();
};

const removerTarea = (indice) => {
  tareas.splice(indice, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
};

const limpiarTareas = () => {
  localStorage.clear();
  tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  mostrarTareas();
};

const tareaCompletada = (indice) => {
  tareas[indice].completada = !tareas[indice].completada;
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
};

const mensajeAlerta = (mensaje) => {
  window.alert(mensaje);
};

const mostrarTareas = () => {
  document.getElementById("listaTareas").innerHTML = tareas
    .map(
      (t, i) => `
    <li style="display: flex; align-items: center; gap: 10px;">
        <input type="checkbox" ${
          t.completada ? "checked" : ""
        } onchange="tareaCompletada(${i})">
        <span style="text-decoration: ${
          t.completada ? "line-through" : "none"
        };">${t.texto}</span>
        <img src="assets/eliminar.png" alt="Eliminar tarea" onclick="removerTarea(${i})">
        <img src="assets/editar.png" alt="Descripción del icono" onclick="editarTarea(${i})">
    </li>`
    )
    .join("");
};

mostrarTareas();