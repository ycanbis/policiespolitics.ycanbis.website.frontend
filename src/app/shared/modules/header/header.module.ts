import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from '../../components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot()
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModule { }
