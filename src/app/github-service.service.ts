import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient:HttpClient) { }

  // FOR profile
  public getProfile(searchQuery:any){
    let dataURL = 'https://api.github.com/users/${searchQuery}?client_id=${}';
  }
}
