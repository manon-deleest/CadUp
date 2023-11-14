import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/sevices/blog.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  blog? : Blog ; 
  id : string | null = null;
  constructor(private _activatedRouter: ActivatedRoute, private blogService: BlogService) {
    _activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
      this.getBlogs();
    });
   }

  async ngOnInit(): Promise<void> {
    this.id = this._activatedRouter.snapshot.paramMap.get('id');
  }

  async getBlogs(){ 
    if(this.id == null) return;
    this.blog = await this.blogService.get_blog_by_id(this.id!); 
  }





}
