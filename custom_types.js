let PrimaryInstument = "guitar";
let vehicle1 = {
    model: "Civic",
    year: 2021,
    isElectric: false,
    engine: {
        type: "inline-4",
        horsepower: 158,
        fuelType: "Gasoline",
    },
    vehicleType: "car",
};
let vehicle2 = {
    model: "Model 3",
    year: 2023,
    isElectric: true,
    vehicleType: "car",
};
function displayVehicleInfo(vehicle) {
    var _a;
    console.log(`${vehicle.model} has a ${(_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type} engine.`);
}
displayVehicleInfo(vehicle1);
displayVehicleInfo(vehicle2);
