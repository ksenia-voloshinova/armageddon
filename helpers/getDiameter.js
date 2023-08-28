export const getDiameter = (asteroid) => {
    return Math.round((asteroid.estimated_diameter.meters.estimated_diameter_min + asteroid.estimated_diameter.meters.estimated_diameter_max) / 2);

}
