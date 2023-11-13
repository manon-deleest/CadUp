import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Blog } from '../models/blog';
import { get } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: Firestore) { }

  startOfDay = new Date(); 
  collecti = collection(this.db, 'Blog');
  queryDate = query(this.collecti, where("Date", "<", this.startOfDay)); 
  // Récupérer tous les obget blog dans firebase 
  get_all_blogs(){
    let blogs : Blog[] = [];
    
    getDocs(this.queryDate).then((docs) => {
      docs.docs.forEach((doc) => {
        let blog : Blog = Blog.fromFirebase(doc);
        if(blog.created_at < this.startOfDay){
          blogs.push(blog);
        }
      });
    });

    return blogs;
  }

  async get_blog_by_id(id: string): Promise<Blog | undefined> {
    let blog : Blog |undefined = undefined; 
    const docRef = doc(this.db,"Blog", id); 
    
    await getDoc(docRef).then((doc) => {
      blog = Blog.fromFirebase(doc);
      console.log(blog);
      return blog;
    }); 

    return blog;
  }

  get_tree_blogs(id: string){
    let blogs : Blog[] = [];

    getDocs(this.queryDate).then((docs) => {
      docs.docs.forEach((doc) => {
        if(blogs.length < 3 && doc.id != id){
          let blog : Blog = Blog.fromFirebase(doc);
          blogs.push(blog);
        }
      });
    }); 

    return blogs;
  }


}
