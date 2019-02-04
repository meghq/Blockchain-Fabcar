import { Component, OnInit } from '@angular/core';
import { HomeService} from '../service/home.service';


@Component({
  selector: 'app-add-ledger',
  templateUrl: './add-ledger.component.html',
  styleUrls: ['./add-ledger.component.css'],
})
export class AddLedgerComponent implements OnInit {

  constructor(public get : HomeService) { }

  ngOnInit() {
    
  }
  carDetails = {
    'carNo' : '',
    'companyName' : '',
    'modelName' : '',
    'colour' : '',
    'ownerName' : ''
  }

  createCar(data){
    console.log('data is in component', data);
    this.get.createNewCar(data).subscribe(
       res=>{
         console.log("got response", res);
         alert(res.hi);
       },
       error=>{
         console.log('why error',error)
       }
       )

  }
}
