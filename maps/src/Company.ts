import {  fakerEN } from '@faker-js/faker';
export class Company{
  name:string;
  catchPhrase: string;
  location:{
    lat:number,
    lng:number
  };

  constructor(){
    
      this.name = fakerEN.company.name();
      this.catchPhrase = fakerEN.company.catchPhrase();
      this.location = {
        lat: fakerEN.location.latitude(),
        lng: fakerEN.location.longitude()
      }

      console.log(`${this.name} - ${JSON.stringify(this.location)}`);
  }
}