import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../common/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  displayMenu: boolean = false;
  contact_phone: any;
  contact_email: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getContact_phone();
    this.getContact_email();
  }

  getContact_phone() {
    this.http
      .get(environment.server_url + 'setting/contact_phone')
      .subscribe((data) => {
        this.contact_phone = data;
      });
  }
  getContact_email() {
    this.http
      .get(environment.server_url + 'setting/contact_email')
      .subscribe((data) => {
        this.contact_email = data;
      });
  }
}
