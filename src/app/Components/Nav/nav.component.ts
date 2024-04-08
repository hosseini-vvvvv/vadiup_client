import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  displayMenu: boolean = false;
  category: any;
  logo: any = {
    text: '',
    id: 0,
    key: '',
  };
  header_text: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMenu();
    this.getLogo();
    this.getHeader_text();
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
  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }
}
