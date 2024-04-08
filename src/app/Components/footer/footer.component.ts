import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
      .get('http://localhost:5136/api/setting/footer_text')
      .subscribe((data) => {
        console.log(data);

        this.footer_text = data;
      });
  }
}
