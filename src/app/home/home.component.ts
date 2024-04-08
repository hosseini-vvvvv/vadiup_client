import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  displayMenu: boolean = false;
  category: any;
  logo: any = {
    text: '',
    id: 0,
    key: '',
  };
  header_text: any;
  home_text: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMenu();
    this.getLogo();
    this.getHeader_text();
    this.getHome_text();
  }

  getMenu() {
    this.http.get('http://localhost:5136/api/category').subscribe((data) => {
      this.category = data;
    });
  }
  getLogo() {
    this.http
      .get('http://localhost:5136/api/setting/logo_name')
      .subscribe((data) => {
        this.logo = data;
      });
  }
  getHeader_text() {
    this.http
      .get('http://localhost:5136/api/setting/header_text')
      .subscribe((data) => {
        this.header_text = data;
      });
  }

  getHome_text() {
    this.http
      .get('http://localhost:5136/api/setting/home_text')
      .subscribe((data) => {
        this.home_text = data;
      });
  }


  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }
}
