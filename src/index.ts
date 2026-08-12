import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "sistema de benji";
let version: number = 1.0;
let username: string = "benji";
console.log("============================")
console.log("nombre del sistema: " + systemName + " v" + version);
console.log(" ¡bienvenido, " + username + "!");
console.log(" version x 10 = " + (version * 10));
console.log("============================")
/// este es otra tarea

const tareas: string[] = [];
let elige_una_opcion: string;

do {
    console.log(`
1. Agrega una tarea

2. Lista las tareas 

3. Elimina la última tarea

4. Salir
`); 

    elige_una_opcion = await rl.question("elige_una_opcion: ");

    switch (elige_una_opcion) {
        case "1":
            tareas.push(await rl.question("que tarea deseas añadir para el dia de hoy? : "));
            break;

        case "2":
            for (let i = 0; i < tareas.length; i++)
                console.log(`${i + 1}. ${tareas[i]}`);
            break;

        case "3":
            console.log("se elimino la tarea:", tareas.pop());
            break;

        case "4":
            console.log("nos vemos pronto.");
            break;

        default:
            console.log("opcion no valida.");
    }
} while (elige_una_opcion !== "4");

rl.close();

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();