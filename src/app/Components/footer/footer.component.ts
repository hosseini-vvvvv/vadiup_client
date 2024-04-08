import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../common/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  displayMenu: boolean = false;
  footer_text: any = {
    text: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFooter_text();
  }

  getFooter_text() {
    this.http
      .get(environment.server_url + 'setting/footer_text')
      .subscribe((data) => {
        console.log(data);

        this.footer_text = data;
      });
  }
}
