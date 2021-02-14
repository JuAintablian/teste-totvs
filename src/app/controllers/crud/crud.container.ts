import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { initialDataUser } from 'src/app/shared/mock/user.mock';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.container.html',
  styleUrls: ['./crud.container.scss']
})
export class CrudContainerComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar usuário', action: () => this.openAddModal(), icon: 'po-icon-plus' }
  ];

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    placeholder: 'Pesquisa'
  };

  disclaimerGroup;
  userForm: FormGroup;
  usersList: Array<User>;
  usersListFiltered: Array<User>;

  mask = '99.999.999-999';
  selectedUser: User;

  optionsOrganDonor = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ];

  @ViewChild('addModal', {static: true}) addModal: PoModalComponent;
  @ViewChild('editModal', {static: true}) editModal: PoModalComponent;
  @ViewChild('delModal', {static: true}) delModal: PoModalComponent;

  closeAdd: PoModalAction = {
    action: () => {
      this.closeModal('add');
    },
    label: 'Fechar',
    danger: true
  };

  confirmAdd: PoModalAction = {
    action: () => {
      this.saveUser();
    },
    label: 'Salvar'
  };

  closeEdit: PoModalAction = {
    action: () => {
      this.closeModal('edit');
    },
    label: 'Fechar',
    danger: true
  };

  confirmEdit: PoModalAction = {
    action: () => {
      this.updateUser();
    },
    label: 'Salvar'
  };

  closeDel: PoModalAction = {
    action: () => {
      this.closeModal('del');
    },
    label: 'Fechar',
    danger: true
  };

  confirmDel: PoModalAction = {
    action: () => {
      this.confirmDelUser();
    },
    label: 'Confirmar'
  };

  private disclaimers = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setInitialData();
    this.createUserForm();

    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this)
    };
  }

  setInitialData() {
    localStorage.setItem('data', JSON.stringify(initialDataUser));
    this.usersList = JSON.parse(localStorage.getItem('data'));
    this.usersListFiltered = [...this.usersList];
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      dateBirth: [null, Validators.required],
      identity: [null, Validators.required],
      phone: [null, Validators.required],
      organDonor: [null, Validators.required]
    });
  }

  editUser(user) {
    this.selectedUser = user;
    this.editModal.open();
    this.patchValueForm(user);
  }

  patchValueForm(user) {
    this.userForm.patchValue({
      id: user.id,
      name: user.name,
      dateBirth: user.dateBirth,
      identity: user.identity,
      phone: user.phone,
      organDonor: user.organDonor
    });
  }

  deleteUser(user) {
    this.selectedUser = user;
    this.delModal.open();
  }

  confirmDelUser() {
    const i = this.usersListFiltered.findIndex(item => item.id === this.selectedUser.id);
    this.usersListFiltered.splice(i, 1);

    localStorage.setItem('data', JSON.stringify(this.usersListFiltered));
    this.delModal.close();
  }

  closeModal(modal) {
    switch (modal) {
      case 'add':
        this.addModal.close();
        break;
      case 'edit':
        this.editModal.close();
        break;
      case 'del':
        this.delModal.close();
        break;
    }
  }

  saveUser() {
    const id = this.usersListFiltered[this.usersListFiltered.length - 1].id + 1;
    const user: User = {...this.userForm.value, id, actions: ['edit', 'del']};

    this.usersListFiltered.push(user);

    localStorage.setItem('data', JSON.stringify(this.usersListFiltered));
    this.addModal.close();
  }

  updateUser() {
    const user = this.userForm.value;
    const i = this.usersListFiltered.findIndex(item => item.id === user.id);

    this.usersListFiltered[i] = {
      ...this.usersListFiltered[i],
      name: user.name,
      dateBirth: user.dateBirth,
      identity: user.identity,
      phone: user.phone,
      organDonor: user.organDonor
    };

    localStorage.setItem('data', JSON.stringify(this.usersListFiltered));
    this.editModal.close();
  }

  // tslint:disable: curly
  verifyMaskKeyup(value) {
    this.mask = '99.999.999-999';
    if (value.length > 13) return this.mask = '999.999.999-99';
    if (value.length <= 13) return this.mask = '99.999.999-999';
  }

  openAddModal() {
    this.addModal.open();
    this.userForm.reset();
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.usersListFilter(filters) : this.resetFilterUsersList();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map(value => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterUsersList() {
    this.usersListFiltered = [...this.usersList];
  }

  usersListFilter(filters) {
    this.usersListFiltered = this.usersList.filter(item => {
      return Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters));
    });
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }
}
