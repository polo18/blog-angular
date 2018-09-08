import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle :String;
  @Input() postContnu :String;
  @Input() postLoveIt :Number;
  @Input() postDate :Date;
  
  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
  	this.postLoveIt++;
  }

  onNotLoveIt(){
  	this.postLoveIt--;
  }

}
