type Instrument = string;
let PrimaryInstument: Instrument = "guitar";

type Engine = {
  // Optional
  type: string;
  horsepower: number;
  fuelType: string;
};

type Vehicle = {
  model: string;
  year: number;
  isElectric: boolean;
  engine?: Engine;
  vehicleType: "motorcycle" | "car" | "truck";
};

let vehicle1: Vehicle = {
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

let vehicle2: Vehicle = {
  model: "Model 3",
  year: 2023,
  isElectric: true,
  vehicleType: "car",
};

function displayVehicleInfo(vehicle: Vehicle) {
  console.log(`${vehicle.model} has a ${vehicle.engine?.type} engine.`);
}

displayVehicleInfo(vehicle1);
displayVehicleInfo(vehicle2);
