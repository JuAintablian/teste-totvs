import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() pageTitle = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: member-ordering
  readonly menus: Array<PoMenuItem> = [
    { label: 'Cadastro', action: () => this.onClick('crud') },
    { label: 'Trending', action: () => this.onClick('api')},
  ];

  private onClick(option) {
    switch(option) {
      case 'crud':
        this.pageTitle.emit('Cadastro');
        this.route.navigate(['/']);
        break;
      case 'api':
        this.pageTitle.emit('Trending');
        this.route.navigate(['trending']);
        break;
    }
  }

}
