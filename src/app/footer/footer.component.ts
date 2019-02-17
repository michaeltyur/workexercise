import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  images:string[];
  showimages:string[];

  constructor() { 
    this.images=[];
    this.showimages=[];
    this.images.push("../../assets/giro-pay.png");
    this.images.push("../../assets/american-express.png");
    this.images.push("../../assets/visa.png");
    this.images.push("../../assets/mastercard.png");



    
  }

  ngOnInit() {
  }

  onSlideLeft():void{
    let tmp=this.images[0];
    this.images[0]=this.images[1];
    this.images[1]=this.images[2];
    this.images[2]=this.images[3];
    this.images[3]=tmp;
  }
  onSlideRight():void{
    let tmp=this.images[3];
    this.images[3]=this.images[2];
    this.images[2]=this.images[1];
    this.images[1]=this.images[0];
    this.images[0]=tmp;
  }
}
