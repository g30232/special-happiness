// src/TimeUtils.java

public class TimeUtils {
    // Speed of light in meters per second (m/s)
    public static final double SPEED_OF_LIGHT = 299792458;

    // Planck constant in joule seconds (Js)
    public static final double PLANCK_CONSTANT = 6.62607015e-34;

    // Reduced Planck constant
    public static final double REDUCED_PLANCK_CONSTANT = PLANCK_CONSTANT / (2 * Math.PI);

    // Gravitational constant in m^3 kg^−1 s^−2
    public static final double GRAVITATIONAL_CONSTANT = 6.67430e-11;

    // Hubble constant in km/s/Mpc
    public static final double HUBBLE_CONSTANT = 70;

    // Calculate Planck time
    public static double getPlanckTime() {
        return Math.sqrt(REDUCED_PLANCK_CONSTANT * GRAVITATIONAL_CONSTANT / Math.pow(SPEED_OF_LIGHT, 5));
    }

    // Calculate time dilation (Special Relativity)
    public static double timeDilation(double properTime, double velocity) {
        return properTime / Math.sqrt(1 - Math.pow(velocity / SPEED_OF_LIGHT, 2));
    }

    // Calculate gravitational time dilation (General Relativity)
    public static double gravitationalTimeDilation(double properTime, double mass, double radius) {
        return properTime * Math.sqrt(1 - (2 * GRAVITATIONAL_CONSTANT * mass) / (radius * Math.pow(SPEED_OF_LIGHT, 2)));
    }

    // Calculate uncertainty in time (Heisenberg Uncertainty Principle)
    public static double uncertaintyInTime(double uncertaintyInEnergy) {
        return REDUCED_PLANCK_CONSTANT / (2 * uncertaintyInEnergy);
    }

    // Calculate Hubble's Law
    public static double hubblesLaw(double distance) {
        return HUBBLE_CONSTANT * distance;
    }

    public static void main(String[] args) {
        double properTime = 1; // in seconds
        double velocity = 100000; // in meters per second
        double mass = 5.972e24; // mass of Earth in kilograms
        double radius = 6371000; // radius of Earth in meters
        double uncertaintyInEnergy = 1e-19; // in joules
        double distance = 1e6; // in parsecs

        System.out.println("Planck Time: " + getPlanckTime() + " s");
        System.out.println("Time Dilation: " + timeDilation(properTime, velocity) + " s");
        System.out.println("Gravitational Time Dilation: " + gravitationalTimeDilation(properTime, mass, radius) + " s");
        System.out.println("Uncertainty in Time: " + uncertaintyInTime(uncertaintyInEnergy) + " s");
        System.out.println("Hubble's Law: " + hubblesLaw(distance) + " km/s");
    }
}