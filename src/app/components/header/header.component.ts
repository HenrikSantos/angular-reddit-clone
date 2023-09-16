import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  subreddits = ["Nature", "Cooking", "Space", "Cats", "Gaming"];
  selectedSubreddit = "Página inicial";
}
