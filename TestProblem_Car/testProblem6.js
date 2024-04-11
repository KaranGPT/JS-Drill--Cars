import findBMWAndAudi from '../Problem_Car/Problem.6';
import inventory from '../Cars_Inventory/inventory.js';

let BMWAudi = findBMWAndAudi(inventory);

console.log(JSON.stringify(BMWAudi));