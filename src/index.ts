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



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();