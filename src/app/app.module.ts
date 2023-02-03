import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormLoginComponent } from './form-login/form-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,


  ],
  imports: [
    BrowserModule,

    HomeModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
