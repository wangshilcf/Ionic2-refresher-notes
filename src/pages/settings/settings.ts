import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service'
import { RedditsPage } from '../reddits/reddits'
import { NavController } from 'ionic-angular';
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController,private redditService: RedditService ) {
    this.getDefaults();
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

  // function to set defaults when saving on settings page
  setDefaults(){
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    //this.navCtrl.push directs to a given page
    this.navCtrl.push(RedditsPage);
  }

}
