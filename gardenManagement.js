const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//watering control

if (temperature > 80) {
   console.log("Watering on"); 
}
else{
    console.log("Watering off");
}

//Garden lights control

if (timeOfDay === "morning" || timeOfDay === "night") {
    console.log("lights on");
}
else{
    console.log("lights off");
}

//soil moisture adjustment

while (soilMoisture < 40) {
    soilMoisture +=5;
    console.log(soilMoisture);
}


