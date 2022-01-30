import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';


@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class MasterModule { }
