import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/sevices/blog.service';

@Component({
  selector: 'app-preview-blog',
  templateUrl: './preview-blog.component.html',
  styleUrls: ['./preview-blog.component.scss']
})
export class PreviewBlogComponent implements OnInit {

  blogs: Blog[] = [];
  @Input() id : string | null = null;
  @Input() title : string = "";
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }


  async getBlogs(){ 
    if(this.id == null){
      this.blogs = await this.blogService.get_tree_blogs();  
      return;
    }     
    this.blogs = await this.blogService.get_tree_blogs(this.id);  
  }
}
