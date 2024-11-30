export class User{
  name:string;
  location:{
    lat:number,
    lng:number
  };

  constructor(){
      this.name = 'Hello';
      this.location = {
        lat: parseFloat('23.44'),
        lng: parseFloat('24.55')
      }

      console.log(`${this.name} - ${JSON.stringify(this.location)}`);
  }
}