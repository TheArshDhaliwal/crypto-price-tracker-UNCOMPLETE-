import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  coinImages: string[] = ['aurouracoin.png', 'bitcoin.png', 'dash.png', 'dogecoin.png', ]
  
  headerCoins: any=[];

  constructor(private api : ApiService){}
  
  ngOnInit(): void {
    this.getHeaderCoins();
    this.getAllCoins();
  }

  getHeaderCoins(){
    this.api.getTrendingCoins("CAD")
    .subscribe((res: any)=>{
      console.log(res);
      this.headerCoins = res;
    })
  }

  getAllCoins(){
    this.api.getCoins("CAD")
    .subscribe((res: any)=>{
      console.log(res);
    })
  }
}
