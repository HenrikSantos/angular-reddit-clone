import { Component, Input } from "@angular/core";
import { postType } from "./post.types";

import { Router } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent {
  @Input()
  // eslint-disable-next-line indent
  post: postType;

  constructor(private router: Router) {
    this.post = {
      id: "",
      title: "",
      post_comment: "",
      author: "",
      subreddit: {
        name: "",
        image: "",
      },
      score: 0,
      img: "",
      comments: [
        {
          comment_author: "",
          comment_text: "",
          comment_score: 0,
        },
      ],
    };
  }

  navigatoToPost() {
    this.router.navigate(["/post", this.post.id]);
  }
}
