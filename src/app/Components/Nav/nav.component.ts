import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../common/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
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
  }
  getMenu() {
    this.http.get(environment.server_url + 'category').subscribe((data) => {
      this.category = data;
    });
  }
  getLogo() {
    this.http
      .get(environment.server_url + 'setting/logo_name')
      .subscribe((data) => {
        this.logo = data;
      });
  }
}
