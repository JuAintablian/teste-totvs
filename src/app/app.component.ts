import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pageTitle = 'Cadastro';

  public setPageTitle(page) {
    this.pageTitle = page;
  }
}
