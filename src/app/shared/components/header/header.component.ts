import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: member-ordering
  readonly menus: Array<PoMenuItem> = [
    { label: 'Cadastro', action: () => this.onClick('crud'), icon: 'po-icon-home', shortLabel: 'Cad' },
    { label: 'Trending', action: () => this.onClick('api'), icon: 'po-icon-chart-area', shortLabel: 'Trend'},
  ];

  private onClick(option) {
    switch (option) {
      case 'crud':
        this.route.navigate(['/']);
        break;
      case 'api':
        this.route.navigate(['trending']);
        break;
    }
  }

}
