import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  public base_url = 'http://13.233.85.122:8000/tuna'

  postdata(data):Observable<any>{
    console.log("Data is in service 3333",data);
    var dta = {key:data}
    let url = `${this.base_url}/queryCar`;
    return this.http.post(url, dta)
  }

  queryCar():Observable<any>{
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    let url = `${this.base_url}/queryAllCars`;
    return this.http.get(url)
  }

  ChangeOwner(data1): Observable <any>{
  console.log("##############",data1);
  let url = `${this.base_url}/changeCarOwner`;
  return this.http.post(url,data1);
  }

  createNewCar(data2): Observable <any>{
  console.log('data is in service', data2);
  let url = `${this.base_url}/createCar`;
  return this.http.post(url,data2);
  }
}
