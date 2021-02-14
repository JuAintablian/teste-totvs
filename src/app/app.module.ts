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
import { HttpClientModule } from '@angular/common/http';
import { TrendingContainerComponent } from './controllers/trending/trending.container';
import { GridTrendsComponent } from './controllers/trending/components/grid-trends/grid-trends.component';
import { FilterComponent } from './controllers/trending/components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudContainerComponent,
    HeaderComponent,
    UserFormComponent,
    TableUsersComponent,
    RgCpfPipe,
    TelefonePipe,
    TrendingContainerComponent,
    GridTrendsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
