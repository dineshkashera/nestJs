var oldFerrari = {
    name: 'Formula ferarri',
    year: 2023,
    broken: false
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("year: ".concat(vehicle.year));
    console.log("Broken: ".concat(vehicle.broken));
};
printVehicle(oldFerrari);
var oldFerrari2 = {
    name: 'Formula ferarri',
    year: 2023,
    broken: false,
    summary: function () {
        return "Summary name ".concat(this.name, " - ").concat(this.year, " - ").concat(this.broken);
    }
};
var printVehicle2 = function (vehicle) {
    console.log("Example 2: ".concat(vehicle.summary()));
};
printVehicle2(oldFerrari2);
