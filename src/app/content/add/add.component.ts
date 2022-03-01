import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model: choose = {
    adress: Adress.Choose
  };
adress = Adress;
  constructor() { }

  ngOnInit() {
  }


}
interface choose {
  adress: Adress;
}
enum Adress{
Choose =  "ადგილმდებარეობა",
Main = "მთავარი ოფისი",
Gallery = "კავეა გალერია",
Mall = "კავეა თბილისი მოლი",
EastPoint = "კავეა ისთ ფოინთი",
CityMall = "კავეა სითი მოლი"
}
