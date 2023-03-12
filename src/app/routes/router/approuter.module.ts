import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const router: Routes = [];
//{ path: '**', component: PageNotFoundComponent }
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRouterModule {}
