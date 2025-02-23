type Instrument = string;
let PrimaryInstument: Instrument = "guitar";

type Engine = {
  // Optional
  type: string;
  horsepower: number;
  fuelType: string;
};

type Vehicle = {
  id: number;
  model: string;
  year: number;
  isElectric: boolean;
  engine?: Engine;
  vehicleType: "motorcycle" | "car" | "truck";
};

let vehicle1: Vehicle = {
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

let vehicle2: Vehicle = {
  id: 2,
  model: "Model 3",
  year: 2023,
  isElectric: true,
  vehicleType: "car",
};

const vehicles: Vehicle[] = [
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

let nextVehicle = 6;

function displayVehicleInfo(vehicle: Vehicle) {
  console.log(
    `${vehicle.model} is from ${vehicle.year} has a ${vehicle.engine?.type} engine.`
  );
}

function updateVehicleInfo(id: number, updates: Partial<Vehicle>): void {
  const foundVehicle = vehicles.find((veh) => veh.id === id);
  if (!foundVehicle) {
    console.error("Vehicle not found.");
    return;
  }
  Object.assign(foundVehicle, updates);
}

function addNewVehicle(newVeh: Omit<Vehicle, "id">): Vehicle {
  const vehicle: Vehicle = {
    id: nextVehicle++,
    ...newVeh,
  };
  vehicles.push(vehicle);
  return vehicle;
}

console.log(`orig:`, vehicles);

updateVehicleInfo(3, { model: "Honda Accord" });
updateVehicleInfo(4, { year: 2022 });

displayVehicleInfo(vehicle1);
displayVehicleInfo(vehicle2);
addNewVehicle({
  model: "Toyota Camry",
  year: 2020,
  isElectric: false,
  vehicleType: "car",
});
console.log(`new:`, vehicles);
