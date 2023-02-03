import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full'},
  { path: 'list_propduct', component: ListProductComponent },

  {
    path: 'list_product',
    loadChildren: () =>
      import('./list-product/list-product.module').then(
        (m) => m.ListProductModule
      ),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
