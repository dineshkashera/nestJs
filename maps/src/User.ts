import faker from 'faker';

export default class User{
  name:string;
  location:{
    lat:number,
    lng:number
  };

  constructor(){
      this.name = faker.address.cityName();
      this.location = {
        lat: parseFloat(faker.address.latitude(23, 34, 0)),
        lng: parseFloat(faker.address.longitude(24, 33, 1))
      }

      console.log(`${this.name} - ${this.location}`);
  }
}