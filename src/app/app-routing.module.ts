import { ViewdataComponent } from "./viewdata/viewdata.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "viewdata", pathMatch: "full" },
  { path: "viewdata", component: ViewdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
