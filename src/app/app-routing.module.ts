import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';


const routes: Routes = [
/* {
  path:'',
  pathMatch:'full',
  redirectTo:'/login'
},  */
{
  path:'category',
  component: CategoryComponent,
},

{
 path: 'transactions',
 component: TransactionsComponent,
},
{
  path:'budgets',
  component: BudgetsComponent,
},
{
  path:'login',
  component: LoginComponent,
},
{path:'sign-up',
component: SignUpComponent,
},
{ 
  path: '**', 
  component: NotFoundComponent,
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
