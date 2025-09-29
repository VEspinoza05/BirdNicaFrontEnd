export interface IBirdModel {
  id: number,
  name: string,
  scientificName: string,
  order: string,
  family: string,
  genus: string,
  description: string,
  picture: string,
  birdArea: Array<Array<number>>,
  reserves: Array<BasicReservesData>,
}

interface BasicReservesData {
  id: number,
  name: string,
  picture: string,
}

export interface IReserveModel{
  id: number,
  name: string,
  picture: string,
  division: string,
  surface: string,
  coordinates: string,
  latitude: number,
  longitude: number,
  country: string,
  Description: string,
  birds: Array<BasicBirdsData>,
}

interface BasicBirdsData {
  id: number,
  name: string,
  picture: string,
}