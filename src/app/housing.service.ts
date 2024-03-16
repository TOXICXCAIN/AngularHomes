import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  // housingLocationList: Housinglocation[] = [
  //   {
  //     id: 0,
  //     name: 'Acme Fresh Start Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: 'https://cdn.carrot.com/uploads/sites/12149/2012/01/houston-house-2-hero.jpg',
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: 'A113 Transitional Housing',
  //     city: 'Santa Monica',
  //     state: 'CA',
  //     photo: 'https://www.neighbor.com/storage-blog/wp-content/uploads/2020/03/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000-550x367.jpeg',
  //     availableUnits: 0,
  //     wifi: false,
  //     laundry: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Warm Beds Housing Support',
  //     city: 'Juneau',
  //     state: 'AK',
  //     photo: 'https://d1ja9tyo8nbkbc.cloudfront.net/51466965_S0046/S0046/S0046-R0100/CAR4025265/644c268a9eaa19378f11af2a.jpg?version=1682714037&width=640',
  //     availableUnits: 1,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 3,
  //     name: 'Homesteady Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: 'https://photos.zillowstatic.com/fp/c148780be908b80d6b105d9d7e4ba8d0-p_e.webp',
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 4,
  //     name: 'Happy Homes Group',
  //     city: 'Gary',
  //     state: 'IN',
  //     photo: 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.mountainliving.com/content/uploads/2020/04/1.jpg',
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 5,
  //     name: 'Hopeful Apartment Group',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://hips.hearstapps.com/hmg-prod/images/imagereader-3-1550604255.jpg?crop=1.00xw:0.755xh;0,0&resize=1200:*',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 6,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://i.pinimg.com/originals/7f/4d/29/7f4d2968471f3dde482e34bff433a2b3.jpg',
  //     availableUnits: 5,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 7,
  //     name: 'Hopeful Housing Solutions',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://cdn.onekindesign.com/wp-content/uploads/2019/10/Modern-Home-Design-McClean-Design-01-1-Kindesign.jpg',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 8,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://cdn.onekindesign.com/wp-content/uploads/2019/10/Modern-Home-Design-McClean-Design-23-1-Kindesign.jpg',
  //     availableUnits: 10,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 9,
  //     name: 'Capital Safe Towns',
  //     city: 'Portland',
  //     state: 'OR',
  //     photo: 'https://cdn.onekindesign.com/wp-content/uploads/2019/10/Modern-Home-Design-McClean-Design-12-1-Kindesign.jpg',
  //     availableUnits: 6,
  //     wifi: true,
  //     laundry: true
  //   }
  // ];

  url = 'http://localhost:3000/locations';


  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() { }
}
