import { Component, inject, OnInit } from '@angular/core';
import { LarssenService } from '../service/larssen-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-larssen',
  imports: [CommonModule,FormsModule],
  templateUrl: './larssen.html',
  styleUrl: './larssen.css',
})
export class Larssen implements OnInit {
  items: any[] = [];

  userItem = {
    name: '',
    location: '',
    cost: ''
  };

  private larssenService = inject(LarssenService);
  // constructor(private larssenService: LarssenService){};

  ngOnInit(): void {
    this.itemList();
  };

  itemList(){
    this.larssenService.getItem().subscribe((data)=> {
      this.items = data;
    });
  };

  createItem(){
    this.larssenService.postItem(this.userItem).subscribe(()=>{
      this.itemList();
    });
  };

  updateItem(id: string, userData: any){
    this.larssenService.PutItem(id, this.userItem).subscribe(() => {
      this.itemList();
    });
  };

  deleteItem(id: string){
    this.larssenService.deleteItem(id).subscribe(() => {
      this.itemList();
    });
  };
}
