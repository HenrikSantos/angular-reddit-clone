import { Component } from "@angular/core";
import { fakeData } from "src/app/data/fakeData";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  posts = fakeData.posts;
}
