const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
};

console.log(`The current time is: ${getCurrentTime()}`);

// Constants
const SPEED_OF_LIGHT = 299792458; // in meters per second (m/s)
const PLANCK_CONSTANT = 6.62607015e-34; // in joule seconds (Js)
const REDUCED_PLANCK_CONSTANT = PLANCK_CONSTANT / (2 * Math.PI);
const GRAVITATIONAL_CONSTANT = 6.67430e-11; // in cubic meters per kilogram per second squared (m^3 kg^−1 s^−2)
const HUBBLE_CONSTANT = 70; // in kilometers per second per megaparsec (km/s/Mpc)

// Planck Time
const PLANCK_TIME = Math.sqrt(REDUCED_PLANCK_CONSTANT * GRAVITATIONAL_CONSTANT / Math.pow(SPEED_OF_LIGHT, 5));

// Time Dilation (Special Relativity)
function timeDilation(properTime, velocity) {
    return properTime / Math.sqrt(1 - Math.pow(velocity / SPEED_OF_LIGHT, 2));
}

// Gravitational Time Dilation (General Relativity)
function gravitationalTimeDilation(properTime, mass, radius) {
    return properTime * Math.sqrt(1 - (2 * GRAVITATIONAL_CONSTANT * mass) / (radius * Math.pow(SPEED_OF_LIGHT, 2)));
}

// Heisenberg Uncertainty Principle
function uncertaintyInTime(uncertaintyInEnergy) {
    return REDUCED_PLANCK_CONSTANT / (2 * uncertaintyInEnergy);
}

// Hubble's Law
function hubblesLaw(distance) {
    return HUBBLE_CONSTANT * distance;
}

// Example Usage
let properTime = 1; // in seconds
let velocity = 100000; // in meters per second (m/s)
let mass = 5.972e24; // mass of Earth in kilograms (kg)
let radius = 6371000; // radius of Earth in meters (m)
let uncertaintyInEnergy = 1e-19; // in joules (J)
let distance = 1e6; // in parsecs (pc)

console.log("Planck Time:", PLANCK_TIME, "s");
console.log("Time Dilation:", timeDilation(properTime, velocity), "s");
console.log("Gravitational Time Dilation:", gravitationalTimeDilation(properTime, mass, radius), "s");
console.log("Uncertainty in Time:", uncertaintyInTime(uncertaintyInEnergy), "s");
console.log("Hubble's Law:", hubblesLaw(distance), "km/s");

// Original function to get the current time
const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
};

console.log(`The current time is: ${getCurrentTime()}`);