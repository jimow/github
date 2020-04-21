import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { User } from './user';
import 'rxjs/add/operator/map';







@Injectable()
export class GitserveService {

  private userName = 'jimow';
  private clientId =  'Iv1.7fcea3c7f3ef03cf';
  private clientSecret= 'ce8ef5d4cf0bce255bc873f5af181458348c86d3';
 

  constructor(private ht: HttpClient) {

   }
   //daneden?access_token=' + apiKey
   getUser(){
    return this.ht.get('https://api.github.com/users/' + this.userName + '?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret)
   .map(res => res)
   }
  

  getRepos(){
    return this.ht.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret)
   .map(res => res)
   }
  
 
 updateUser(user:string){
  this.userName = user;

 }
   

 
 
}
