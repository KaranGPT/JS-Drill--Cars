import findCarById from '../Problem_Car/Problem1.js';
import inventory from '../Cars_Inventory/inventory.js';

const car = findCarById(inventory, 33);

console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`);
