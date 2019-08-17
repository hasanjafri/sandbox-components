import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sb-auto-complete',
  templateUrl: './sb-auto-complete.component.html',
  styleUrls: ['./sb-auto-complete.component.css']
})
export class SbAutoCompleteComponent {
  options = [{ id: 1, label: 'One' }, { id: 2, label: 'Two' }, { id: 3, label: 'Three' }];
  control = new FormControl();
}
