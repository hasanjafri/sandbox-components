import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AutoCompleteModule } from './components/auto-complete/auto-complete.module';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { SbAutoCompleteComponent } from './components/sandbox/sb-auto-complete/sb-auto-complete.component';
import { SidenavResponsiveComponent } from './components/sidenav-responsive/sidenav-responsive.component';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [AppComponent, FilterPipe, SandboxComponent, SbAutoCompleteComponent, SidenavResponsiveComponent],
  imports: [
    BrowserModule,
    OverlayModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AutoCompleteComponent]
})
export class AppModule {}
