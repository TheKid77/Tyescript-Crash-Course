let PrimaryInstument = "guitar";
let vehicle1 = {
    id: 1,
    model: "Honda Civic",
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
    id: 2,
    model: "Model 3",
    year: 2023,
    isElectric: true,
    vehicleType: "car",
};
const vehicles = [
    {
        id: 3,
        model: "Honda Civic",
        year: 2025,
        isElectric: false,
        vehicleType: "car",
    },
    {
        id: 4,
        model: "Harley-Davidson Sportster",
        year: 2024,
        isElectric: false,
        vehicleType: "motorcycle",
    },
    {
        id: 5,
        model: "Ford F-150",
        year: 2022,
        isElectric: false,
        vehicleType: "truck",
    },
];
function displayVehicleInfo(vehicle) {
    var _a;
    console.log(`${vehicle.model} is from ${vehicle.year} has a ${(_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type} engine.`);
}
function updateVehicleInfo(id, updates) {
    const foundVehicle = vehicles.find((veh) => veh.id === id);
    if (!foundVehicle) {
        console.error("Vehicle not found.");
        return;
    }
    Object.assign(foundVehicle, updates);
}
updateVehicleInfo(3, { model: "Honda Accord" });
updateVehicleInfo(4, { year: 2022 });
displayVehicleInfo(vehicle1);
displayVehicleInfo(vehicle2);
console.log(vehicles);
