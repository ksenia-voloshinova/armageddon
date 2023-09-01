export const calculateImageWidth = (diameter) => {
    const roundedDiameter = Math.round(diameter);
    const width =
        roundedDiameter <= 100 ? 20 : roundedDiameter <= 400 ? 35 : 50;

    return width;
}
