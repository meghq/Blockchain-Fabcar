import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddLedgerComponent } from './add-ledger/add-ledger.component';


const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'addLedger', component : AddLedgerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
