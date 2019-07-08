import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() message: Object ;

  constructor() { }

  ngOnInit() {
  }

  goo(){
    console.log("helllloooooooo");
  }




  //this is where I add things for ChildToParent
  messagee:string = "hola mundo";

  @Output() messageeEvent = new EventEmitter<string>();
  sendMessage(){
		this.messageeEvent.emit(this.messagee);
	}


  myFunction() {
    document.getElementById("c").style.backgroundColor = "lightblue";
  }




}
