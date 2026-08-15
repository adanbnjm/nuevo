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

interface Tareas {
  id: number;
  titulo: string;
  completado: boolean;
}

const tarea: Tareas[] = [];

let siguienteId = 1;

const baseDeDatosFake = (tarea: Tareas): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("tarea guardada en la base de datos.");
      resolve();
    }, 3000);
  });
};

const añadirTarea = async (titulo: string) => {
  try {
    if (titulo.trim() === "") {
      throw new Error("El título de la tarea no puede estar vacío.");
    }

    const nuevaTarea: Tareas = {
      id: siguienteId,
      titulo: titulo,
      completado: false,
    };

    await baseDeDatosFake(nuevaTarea);

    tarea.push(nuevaTarea);
    siguienteId++;

    console.log("Tarea agregada correctamente.");
  } catch (error) {
    console.log((error as Error).message);
  }
};

const listarTareas = () => {
  const tareasParaMostrar = tarea.map((tareaActual) => {
    const { id, titulo, completado } = tareaActual;

    return `[${id}] ${titulo} - ${completado ? "completado" : "pendiente"}`;
  });

  tareasParaMostrar.forEach((tareaParaMostrar) => {
    console.log(tareaParaMostrar);
  });
};

const eliminarTarea = () => {
  const tareaEliminada = tarea.pop();

  if (tareaEliminada) {
    console.log("se eliminó la tarea:", tareaEliminada.titulo);
  } else {
    console.log("no hay tareas para eliminar");
  }
};

const marcarCompletado = (id: number) => {
  const tareaEncontrada = tarea.find((tareaActual) => tareaActual.id === id);

  if (tareaEncontrada) {
    tareaEncontrada.completado = true;
    console.log("Tarea completada:", tareaEncontrada.titulo);
  } else {
    console.log("no encontramos la tarea con ese id");
  }
};

const filtrarPendientes = () => {
  return tarea.filter((tareaActual) => tareaActual.completado === false);
};

const filtrarCompletadas = () => {
  return tarea.filter((tareaActual) => tareaActual.completado === true);
};

let elige_una_opcion: string;

do {
  console.log(`
1. AGREGAR UNA TAREA

2. LISTA DE TAREAS

3. ELIMINAR LA ULTIMA TAREA

4. MARCAR UNA TAREA COMO COMPLETADA

5. LISTA DE TAREAS PENDIENTES

6. LISTA DE TAREAS COMPLETADAS

7. SALIR
`);

  elige_una_opcion = await rl.question("elige_una_opcion: ");

  switch (elige_una_opcion) {
    case "1":
      const titulo = await rl.question(
        "que tarea deseas añadir para el dia de hoy? : ",
      );

      await añadirTarea(titulo);
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

      marcarCompletado(id);
      break;

    case "5":
      const pendientes = filtrarPendientes();

      if (pendientes.length === 0) {
        console.log("No tienes tareas pendientes.");
      } else {
        pendientes.forEach((tareaActual) => {
          console.log(`[${tareaActual.id}] ${tareaActual.titulo} - pendiente`);
        });
      }
      break;
    case "6":
      filtrarCompletadas().forEach((tareaActual) => {
        console.log(`[${tareaActual.id}] ${tareaActual.titulo} - completado`);
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
