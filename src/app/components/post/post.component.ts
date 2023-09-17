import { Component, Input } from "@angular/core";
import { postType } from "./post.types";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})

export class PostComponent {
  @Input()
    post: postType;

  constructor() {
    this.post = {
      id: "",
      title: "",
      post_comment: "",
      author: "",
      subreddit: {
        name: "",
        image: ""
      },
      score: 0,
      img: "",
      comments: [{
        comment_author: "",
        comment_text: "",
        comment_score: 0
      }]
    };
  }
}
