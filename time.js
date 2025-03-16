// Function to get the current time
const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
};

console.log(`The current time is: ${getCurrentTime()}`);

// Fundamental time-related constants in physics
const SPEED_OF_LIGHT = 299792458; // m/s (c)
const PLANCK_CONSTANT = 6.62607015e-34; // Js (h)
const REDUCED_PLANCK_CONSTANT = PLANCK_CONSTANT / (2 * Math.PI); // Js (ħ)
const GRAVITATIONAL_CONSTANT = 6.67430e-11; // m^3 kg^-1 s^-2 (G)
const EARTH_GRAVITY = 9.80665; // m/s^2 (g)
const ASTRONOMICAL_UNIT = 149597870700; // meters (AU)
const LIGHT_YEAR = SPEED_OF_LIGHT * 365.25 * 24 * 60 * 60; // meters
const PARSEC = 3.085677581e16; // meters
const BOLTZMANN_CONSTANT = 1.380649e-23; // J/K (k)
const AVOGADRO_CONSTANT = 6.02214076e23; // mol^-1
const ELECTRON_MASS = 9.10938356e-31; // kg
const PROTON_MASS = 1.6726219e-27; // kg

// Time dilation (Special Relativity)
const timeDilation = (properTime, velocity) => {
    const gamma = 1 / Math.sqrt(1 - (velocity ** 2) / (SPEED_OF_LIGHT ** 2));
    return properTime * gamma;
};

// Example: Calculate time dilation
const properTime = 1; // seconds
const velocity = 100000; // m/s
console.log(`Time dilation: ${timeDilation(properTime, velocity)} seconds`);

// Quantum physics: Energy-time uncertainty principle
const energyTimeUncertainty = (deltaEnergy) => {
    return REDUCED_PLANCK_CONSTANT / (2 * deltaEnergy);
};

// Example: Calculate minimum time uncertainty
const deltaEnergy = 1e-20; // Joules
console.log(`Minimum time uncertainty: ${energyTimeUncertainty(deltaEnergy)} seconds`);

// General Relativity: Schwarzschild radius (related to time near black holes)
const schwarzschildRadius = (mass) => {
    return (2 * GRAVITATIONAL_CONSTANT * mass) / (SPEED_OF_LIGHT ** 2);
};

// Example: Calculate Schwarzschild radius of a 1-solar-mass black hole
const SOLAR_MASS = 1.989e30; // kg
console.log(`Schwarzschild radius: ${schwarzschildRadius(SOLAR_MASS)} meters`);

// Hubble's Law: Time and distance in cosmology
const HUBBLE_CONSTANT = 67.4; // km/s/Mpc
const hubbleTime = () => {
    return 1 / (HUBBLE_CONSTANT * 1000 / PARSEC); // seconds
};
console.log(`Hubble time (approximate age of the universe): ${hubbleTime()} seconds`);

// Time in thermodynamics: Relaxation time
const relaxationTime = (initialState, finalState, timeConstant) => {
    return finalState + (initialState - finalState) * Math.exp(-timeConstant);
};

// Example: Calculate relaxation time
const initialState = 100; // arbitrary units
const finalState = 0; // arbitrary units
const timeConstant = 5; // seconds
console.log(`Relaxation time: ${relaxationTime(initialState, finalState, timeConstant)} units`);

// Additional constants for time-related physics
const EARTH_ROTATION_PERIOD = 86400; // seconds (1 day)
const EARTH_ORBITAL_PERIOD = 365.25 * EARTH_ROTATION_PERIOD; // seconds (1 year)
const MOON_ORBITAL_PERIOD = 27.3 * EARTH_ROTATION_PERIOD; // seconds (approximate)

console.log("All known constants and equations related to time have been added.");