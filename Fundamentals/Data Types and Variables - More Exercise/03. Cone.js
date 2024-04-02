function solve(radius, height) {

    let volume = 1 / 3 * (Math.PI * (radius * radius) * height);
    console.log(`volume = ${volume.toFixed(4)}`);
    let totalSurfaceArea = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}
solve(3, 5)