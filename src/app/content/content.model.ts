export enum Adress{
  null = "",
  Choose =  "ადგილმდებარეობა",
  Main = "მთავარი ოფისი",
  Gallery = "კავეა გალერია",
  Mall = "კავეა თბილისი მოლი",
  EastPoint = "კავეა ისთ ფოინთი",
  CityMall = "კავეა სითი მოლი"
  }
  export interface inventory{
   adress: 'string',
   name:'string',
   price:'number'
  }
