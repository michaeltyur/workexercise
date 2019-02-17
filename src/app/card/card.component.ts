import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  clicked:boolean;

  constructor() { 
    this.clicked=false;
  }

  ngOnInit() {
  }

  onClick():void{
    this.clicked=!this.clicked;
    //debugger;
  }
  mouseover(){
    this.clicked=true;
    //debugger;
  }
  mouseout(){
    this.clicked=false;
    //debugger;
  }
}
