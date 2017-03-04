import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.service'
import {DetailsPage} from '../details/details'
import { NavController } from 'ionic-angular';
@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController,private redditService: RedditService ) {
    this.getDefaults();
  }

  // lifecycle hook ngOnInit runs on render
  ngOnInit(){
    this.getPosts(this.category,this.limit)
  }

  getDefaults(){
    if(localStorage.getItem('category')!= null){
      this.category = localStorage.getItem('category');
    } else {
      this.category = "all";
    }
    if(localStorage.getItem('limit')!= null){
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }

  getPosts(category, limit){
    this.redditService.getPosts(category,limit).subscribe(response => {
        this.items = response.data.children;
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  changeCategory(){
    this.getPosts(this.category, this.limit)
  }

}
