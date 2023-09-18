import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  subreddits = ["Nature", "Cooking", "Space", "Cats", "Gaming"];
  selectedSubreddit = "Homepage";

  constructor(private router: Router) { }

  navigatoToMain() {
    this.router.navigate(["/"]);
  }
}
