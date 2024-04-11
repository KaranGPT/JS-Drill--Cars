// ==== Problem #3 ====

/* The marketing team wants the car models listed alphabetically on the website. 
Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
*/

function sortCarModels(inventory){
    let models = [];
    for(let i = 0; i < inventory.length; i++){
        models.push(inventory[i].car_model.toLowerCase());
    }

    for (let i = 0; i < models.length; i++){
        for (let j = i+1; j < models.length; j++){
            if(models[i] > models[j]){
                let temp = models[i];
                models[i] = models[j];
                models[j] = temp;
            }
        }
    }


}
