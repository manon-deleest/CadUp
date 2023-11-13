import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/sevices/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = []; 
  temp: Blog[] = []; 

  constructor(private blogService : BlogService) { }

  async ngOnInit(): Promise<void> {
    this.temp = await this.blogService.get_all_blogs();  
    setTimeout(async () => {
      this.blogs = this.temp; 
    }, 1000);
  }

}
