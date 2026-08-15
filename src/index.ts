import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "sistema de benji";
let version: number = 1.0;
let username: string = "benji";
console.log("============================");
console.log("nombre del sistema: " + systemName + " v" + version);
console.log(" ¡bienvenido, " + username + "!");
console.log(" version x 10 = " + version * 10);
console.log("============================");
/// este es otra tarea

interface Tareas {
  id: number;
  titulo: string;
  completado: boolean;
}

const tarea: Tareas[] = [];

let siguienteId = 1;

const añadirTarea = (titulo: string) => {
  const nuevaTarea: Tareas = {
    id: siguienteId,
    titulo: titulo,
    completado: false,
  };

  tarea.push(nuevaTarea);
  siguienteId++;
};

const listarTareas = () => {
  const tareasParaMostrar = tarea.map((tarea) => {
    const { id, titulo, completado } = tarea;

    return `[${id}] ${titulo} - ${completado ? "completado" : "pendiente"}`;
  });

  tareasParaMostrar.forEach((tareasParaMostrar) => {
    console.log(tareasParaMostrar);
  });
};

const eliminarTarea = () => {
  const tareaEliminada = tarea.pop();

  if (tareaEliminada) {
    console.log("Se eliminó la tarea:", tareaEliminada.titulo);
  } else {
    console.log("No hay tareas para eliminar.");
  }
};

const marcarcompletado = (id: number) => {
  const tareaEncontrada = tarea.find((tarea) => tarea.id === id);

  if (tareaEncontrada) {
    tareaEncontrada.completado = true;
    console.log("Tarea completada:", tareaEncontrada.titulo);
  } else {
    console.log("no encontramos la tarea con ese id.");
  }
};

const filtrarPendientes = () => {
  return tarea.filter((tarea) => tarea.completado === false);
};

const filtrarCompletado = () => {
  return tarea.filter((tarea) => tarea.completado === true);
};

let elige_una_opcion: string;

do {
  console.log(`
1. Agrega una tarea

2. Lista las tareas

3. Elimina la última tarea

4. Marca una tarea como completada

5. Lista las tareas pendientes

6. Lista las tareas completadas

7. Salir
`);

  elige_una_opcion = await rl.question("elige_una_opcion: ");

  switch (elige_una_opcion) {
    case "1":
      const titulo = await rl.question(
        "que tarea deseas añadir para el dia de hoy? : ",
      );

      añadirTarea(titulo);
      break;

    case "2":
      listarTareas();
      break;

    case "3":
      eliminarTarea();
      break;

    case "4":
      const id = Number(
        await rl.question("id de la tarea que deseas completar: "),
      );

      marcarcompletado(id);
      break;

    case "5":
      filtrarPendientes().forEach((tarea) => {
        console.log(`[${tarea.id}] ${tarea.titulo} - pendiente`);
      });
      break;

    case "6":
      filtrarCompletado().forEach((tarea) => {
        console.log(`[${tarea.id}] ${tarea.titulo} - completado`);
      });
      break;

    case "7":
      console.log("nos vemos pronto.");
      break;

    default:
      console.log("opcion no valida.");
  }
} while (elige_una_opcion !== "7");

rl.close();

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
