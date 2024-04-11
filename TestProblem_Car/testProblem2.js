import findLastCar from "../Problem_Car/Problem2.js";
import inventory from "../Cars_Inventory/inventory.js";

const lastCar = findLastCar(inventory);

console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);