import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { PostRouteComponent } from "./pages/post-route/post-route.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "post",
    component: PostRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
