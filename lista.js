// Declarar parsedDesires como una variable global
let parsedDesires = [];

// Función para cargar deseos almacenados en localStorage al cargar la página
function loadDesires() {
  const desiresList = document.getElementById("desires-list");
  const storedDesires = localStorage.getItem("deseos");

  if (storedDesires) {
    parsedDesires = JSON.parse(storedDesires); // Asignar los deseos almacenados a la variable global
    parsedDesires.forEach((desireText) => {
      const newDesireItem = createDesireItem(desireText);
      desiresList.appendChild(newDesireItem);
    });
  }
}

// Llama a la función para cargar deseos al cargar la página
loadDesires();

// Función para crear un elemento de deseo
function createDesireItem(desireText) {
  const newDesireItem = document.createElement("li");
  newDesireItem.innerHTML = `${desireText} <button class="delete-desire" data-desire="${desireText}">Eliminar</button>`;

  // Agregar evento para eliminar el deseo al hacer clic en "Eliminar"
  newDesireItem.querySelector(".delete-desire").addEventListener("click", () => {
    const desireText = newDesireItem.querySelector(".delete-desire").getAttribute("data-desire");
    deleteDesire(desireText);
    newDesireItem.remove();
  });

  return newDesireItem;
}

// Función para agregar un deseo
function addDesire(desireText) {
  const desiresList = document.getElementById("desires-list");
  const newDesireItem = createDesireItem(desireText);
  desiresList.appendChild(newDesireItem);

  // Actualizar el almacenamiento local con el nuevo deseo
  parsedDesires.push(desireText);
  localStorage.setItem("deseos", JSON.stringify(parsedDesires));
}

// Función para eliminar un deseo
function deleteDesire(desireText) {
  // Actualizar el almacenamiento local eliminando el deseo
  const index = parsedDesires.indexOf(desireText);
  if (index !== -1) {
    parsedDesires.splice(index, 1);
    localStorage.setItem("deseos", JSON.stringify(parsedDesires));
  }
}

// Obtener el formulario y agregar un evento para manejar su envío
const addDesireForm = document.getElementById("add-desire-form");
addDesireForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
  const newDesireInput = document.getElementById("new-desire");
  const newDesireText = newDesireInput.value.trim();
  if (newDesireText === "") {
    return; // No se permite agregar un deseo vacío
  }
  addDesire(newDesireText);
  newDesireInput.value = ""; // Limpiar el campo de entrada
});
