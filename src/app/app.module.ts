import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./pages/main/main.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostRouteComponent } from "./pages/post-route/post-route.component";
import { PostComponent } from "./components/post/post.component";
import { CreateYourOwnPageComponent } from "./components/create-your-own-page/create-your-own-page.component";
import { RecentPostsComponent } from "./components/recent-posts/recent-posts.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PostRouteComponent,
    PostComponent,
    CreateYourOwnPageComponent,
    RecentPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
