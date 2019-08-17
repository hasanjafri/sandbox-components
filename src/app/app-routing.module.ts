import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './components/sandbox/sandbox.component';

const routes: Routes = [{ path: 'sandbox', component: SandboxComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
