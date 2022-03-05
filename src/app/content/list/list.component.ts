import { Component, OnInit } from '@angular/core';
import { inventoryResult } from '../content.model';
import { FireStoreService } from '../fire-store.service';

const EMPTY = 'სია ცარიელია.';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  inventoryList: inventoryResult[] = [];
  id: string = '';

  get emptySting(): string {
    return EMPTY;
  }
  constructor(private fireService: FireStoreService) {}

  getAlldata() {
    this.fireService.getData().subscribe((res) => {
      this.inventoryList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  deleteInventory(inventory: inventoryResult) {
    this.fireService.deleteData(inventory);
  }

  ngOnInit() {
    this.getAlldata();
  }
}
