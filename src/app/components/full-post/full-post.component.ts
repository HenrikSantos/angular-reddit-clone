import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { fakeData } from "../../data/fakeData";

import { postType } from "../post/post.types";

@Component({
  selector: "app-full-post",
  templateUrl: "./full-post.component.html",
  styleUrls: ["./full-post.component.css"]
})

export class FullPostComponent {
  post: postType;
  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];

    this.post = fakeData.posts.find(el => el.id === this.id) || {
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
}
