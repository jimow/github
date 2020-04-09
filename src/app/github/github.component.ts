import { Component, OnInit } from '@angular/core';
import { Gitapi } from '../gitapi-class/gitapi';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  gitapi:Gitapi;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse {
      users: string;
      repository: string;
    }
  }

}
