import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    SidemenuComponent,
    NzLayoutModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
