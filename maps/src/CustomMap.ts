//how multiple class can use markers, so that every time we no need to add class name as arguments
//Ex: addMarkers(getValues:(User | Company)): void 
//instead use interface as a parameter in addMarkers(inteface name)

interface mappable{
  name: string,
  location:{
    lat:number,
    lng:number
  }
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(Mapid:string){
      this.googleMap = new google.maps.Map(document.getElementById(Mapid), {
        zoom:1,
        center:{
          lat:0,
          lng:0
        }
      })
  }

  addMarkers(getValues:mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: getValues.location,
      title: getValues.name
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `Hello ${getValues.name}`
      });

      infoWindow.open(this.googleMap, marker);
    })
  }
}