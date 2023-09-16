import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./pages/main/main.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostRouteComponent } from "./pages/post-route/post-route.component";
import { PostComponent } from "./components/post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PostRouteComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
