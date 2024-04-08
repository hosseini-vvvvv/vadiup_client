import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../common/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  header_text: any;
  home_text: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getHeader_text();
    this.getHome_text();
  }

  getHeader_text() {
    this.http
      .get(environment.server_url + 'setting/header_text')
      .subscribe((data) => {
        this.header_text = data;
      });
  }

  getHome_text() {
    this.http
      .get(environment.server_url + 'setting/home_text')
      .subscribe((data) => {
        this.home_text = data;
      });
  }
}
