import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProvedorapiService {

Frutas: [];

private urlApi = 'https://api.nal.usda.gov/fdc/v1/food/search/';
  constructor(private http : HttpClient) { 
    console.log('Hello provedor')
  }

getfruits(fruit:string)
{
return this.http.get("https://api.nal.usda.gov/fdc/v1/foods/search?query="+fruit+"&pageSize=2&api_key=ZWQtNhsIJMEKJnsoGivLfhFMRf8DY2oMs3TvmrZ3")
} 




}
