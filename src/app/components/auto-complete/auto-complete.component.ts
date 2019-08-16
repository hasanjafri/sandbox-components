import { Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, switchMap } from 'rxjs/operators';
import { AutoCompleteContentDirective } from 'src/app/directives/auto-complete-content.directive';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
  exportAs: 'appAutoComplete'
})
export class AutoCompleteComponent {
  @ViewChild('root', { static: false }) rootTemplate: TemplateRef<any>;

  @ContentChild(AutoCompleteContentDirective, { static: false })
  content: AutoCompleteContentDirective;

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map(option => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
