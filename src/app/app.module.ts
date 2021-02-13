import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { CrudContainerComponent } from './controllers/crud/crud.container';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserFormComponent } from './controllers/crud/components/user-form/user-form.component';
import { TableUsersComponent } from './controllers/crud/components/table-users/table-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RgCpfPipe } from './shared/pipes/rg-cpf.pipe';
import { TelefonePipe } from './shared/pipes/telefone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CrudContainerComponent,
    HeaderComponent,
    UserFormComponent,
    TableUsersComponent,
    RgCpfPipe,
    TelefonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
