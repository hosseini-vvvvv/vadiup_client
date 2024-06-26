import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../common/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  displayMenu: boolean = false;
  about_text: any = {
    text: '',
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAbout_text();
  }

  getAbout_text() {
    this.http
      .get(environment.server_url + 'setting/about_text')
      .subscribe((data) => {
        this.about_text = data;
      });
  }
}
