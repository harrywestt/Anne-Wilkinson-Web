import { NgModule } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  exports: [
    ButtonModule,
    SplitterModule,
    DividerModule,
    TabMenuModule,
    OverlayPanelModule,
  ],
})
export class PrimeNgModule {}
