import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './content/list/list.component';

const routes: Routes = [
  {
    // on empty path list component will run
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  { path: 'list', component: ListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
