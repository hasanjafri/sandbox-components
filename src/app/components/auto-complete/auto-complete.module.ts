import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from 'src/app/components/auto-complete/auto-complete.component';
import { AutoCompleteContentDirective } from 'src/app/directives/auto-complete-content.directive';
import { AutoCompleteDirective } from 'src/app/directives/auto-complete.directive';
import { OptionComponent } from './option/option.component';

const publicApi = [AutoCompleteComponent, AutoCompleteContentDirective, OptionComponent, AutoCompleteDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [publicApi],
  exports: [publicApi]
})
export class AutoCompleteModule {}
