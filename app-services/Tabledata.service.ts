
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TabledataService {
  constructor(private http: HttpClient) { }


  getTableData()
  {
    console.log('fethching data from server');

    const url = "https://reqres.in/api/users?page=2";
    return this.http.get(url);

  }

}
