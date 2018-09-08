import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
  	{
  		title: 'first post' ,
  		content: 'Donec id elit non mi porta gravida at eget metus.'
  				+' Maecenas sed diam eget risus varius blandit.'
  				+'Donec id elit non mi porta gravida at eget metus',
  		loveIts: 0,
  		created_at: new Date()
	},
	{
  		title: 'Second post',
  		content: 'Donec id elit non mi porta gravida at eget metus.'
  		 		+'Maecenas sed diam eget risus varius blandit.'
  		 		+'Donec id elit non mi porta gravida at eget metus',
  		loveIts: 0,
  		created_at: new Date()
	},
	{
  		title: 'third post',
  		content: 'Donec id elit non mi porta gravida at eget metus.'
  				+' Maecenas sed diam eget risus varius blandit.'
  				+'Donec id elit non mi porta gravida at eget metus',
  		loveIts: 0,
  		created_at: new Date()
	}  

  ];
}
