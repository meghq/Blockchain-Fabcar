import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public homeserve : HomeService) { }
  public car;
  public data;
  data_element:any;  
  cardata = {
    'Key' : '',
     'owner' : ''
  }
  
  ngOnInit() {
  }

  login(data){
    console.log("Data is in ts",data);
    this.homeserve.postdata(data).subscribe(
      res=>{
        console.log(res,"response33333")
        this.car = JSON.parse(res);
        console.log("gotcha",this.car)
      },
      error=>{
        console.log(error,"error")
      }
    )
  }


  queryAllCar(){
    this.homeserve.queryCar().subscribe(
      res=>{
        this.data_element = JSON.parse(res);
        console.log("%%%%%%%%%%%%",this.data_element)
      },
      error=>{
        console.log("&&&&&&&&&&&&&&&&",error)
      }

    )
  }

  changeCarOwner(cardata){
    console.log("Yepieeeeeeeeeeee",cardata);
    this.homeserve.ChangeOwner(cardata).subscribe(
      res=>{
        console.log("HIIIIIIIIIIIII",res);
        alert("successfull");
      },
      error=>{
        console.log("errorrrrrrrrrrrrrrrrr",error)
      }
    )
  }

  
}
