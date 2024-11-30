import {  fakerEN } from '@faker-js/faker';
export class User{
  name:string;
  location:{
    lat:number,
    lng:number
  };

  constructor(){
    
      this.name = fakerEN.person.fullName();
      this.location = {
        lat: fakerEN.location.latitude(),
        lng: fakerEN.location.longitude()
      }

      console.log(`${this.name} - ${JSON.stringify(this.location)}`);
  }
}