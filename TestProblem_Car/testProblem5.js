import findOlderCars from '../Problem_Car/Problem5.js';
import inventory from '../Cars_Inventory/inventory.js';

const olderCars = findOlderCars(inventory);
console.log(olderCars.length);