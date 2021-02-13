import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumn } from '@po-ui/ng-components';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  @Input() items: Array<User>;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  showMoreDisabled = false;
  isLoading = false;

  public readonly columns: Array<PoTableColumn> = [
    { property: 'name', label: 'Nome'},
    { property: 'dateBirth', label: 'Data de Nascimento', type: 'date'},
    { property: 'identity', label: 'RG/CPF', type: 'columnTemplate'},
    { property: 'phone', label: 'Telefone', type: 'columnTemplate' },
    { property: 'organDonor', label: 'Doador de Órgãos', type: 'boolean' },
    {
      property: 'actions',
      label: 'Ações',
      type: 'icon',
      icons: [
        {
          icon: 'po-icon po-icon-edit',
          value: 'edit',
          action: (row) => this.actions({ type: 'edit', item: row}),
          tooltip: 'Editar usuário'
        },
        {
          icon: 'po-icon po-icon-close',
          value: 'del',
          action: (row) => this.actions({ type: 'del', item: row}),
          tooltip: 'Excluir usuário'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  actions(value) {
    const { type, item } = value;

    // tslint:disable: curly
    if (type === 'edit') return this.edit.emit(item);
    if (type === 'del') return this.delete.emit(item);
  }
}
