// --a=10 --b=20

// externo
import minimist from "minimist";

// interno
import { soma as _soma } from "./meu_modulo.js";
const soma = _soma;

const args = minimist(process.argv.slice(2));

const a = args["a"];
const b = args["b"];

soma(a, b);
