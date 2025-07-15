let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const agregarTarea = () => {
  const input = document.getElementById("tareaInput");

  if (input.value === "") return;

  tareas.push(input.value);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  input.value = "";
  mostrarTareas();
};

const editarTarea = (indice) => {
  const input = document.getElementById("tareaInput");

  if (input.value === "") return;

  tareas[indice] = input.value;
  localStorage.setItem("tareas", JSON.stringify(tareas));
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

const mostrarTareas = () => {
  document.getElementById("listaTareas").innerHTML = tareas
    .map(
      (t, i) => `
    <li style="display: flex; align-items: center; gap: 10px;">
        <input type="checkbox">
        <span>${t}</span>
        <button onclick="removerTarea(${i})">Eliminar</button>
        <button onclick="editarTarea(${i})">Editar</button>
  </li>`
    )
    .join("");
};

mostrarTareas();