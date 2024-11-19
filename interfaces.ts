//Example 1
interface Vehicle{
  name: string,
  year: number,
  broken: boolean
} 

const oldFerrari = {
  name: 'Formula ferarri',
  year: 2023,
  broken: false
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldFerrari)

//Example 2
interface Vehicle2{
  name: string,
  year: number,
  broken: boolean,
  summary(): string
} 

const oldFerrari2 = {
  name: 'Formula ferarri',
  year: 2023,
  broken: false,
  summary(): string {
    return `Summary name ${this.name} - ${this.year} - ${this.broken}`
  }
}

const printVehicle2 = (vehicle: Vehicle2): void => {
  console.log(`Example 2: ${vehicle.summary()}`);
  
}

printVehicle2(oldFerrari2)