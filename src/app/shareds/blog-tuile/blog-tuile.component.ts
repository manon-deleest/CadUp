import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-tuile',
  templateUrl: './blog-tuile.component.html',
  styleUrls: ['./blog-tuile.component.scss']
})
export class BlogTuileComponent implements OnInit {

  @Input() blog: Blog | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
