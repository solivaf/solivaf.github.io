import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  me: {coverImageUrl: string} = {coverImageUrl: 'https://preview.ibb.co/eMW1BF/about_bg.jpg'};

  constructor() { }

  ngOnInit() {}

}
