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