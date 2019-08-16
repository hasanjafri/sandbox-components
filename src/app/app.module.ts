import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AutoCompleteModule } from './components/auto-complete/auto-complete.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [BrowserModule, OverlayModule, ReactiveFormsModule, BrowserAnimationsModule, AutoCompleteModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AutoCompleteComponent]
})
export class AppModule {}
