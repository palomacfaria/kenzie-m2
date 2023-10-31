import { frutas, carros } from "./products.js";
//import frutasLegais, {carros} from "./products.js"; -> default
import { sum } from "./sum.js";

frutas.map(element => console.log(element));
carros.map(element => console.log(element));
console.log(sum(1,2));