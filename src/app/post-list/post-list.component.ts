import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getLoveIts(){
    if(this.postLoveIts > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onLove(love){
    if(love){
      this.postLoveIts++;
    }else{
      this.postLoveIts--;
    }
  }

}
