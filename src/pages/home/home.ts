import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentsPage } from '../students/students'; 
import { QuotesProvider } from '../../providers/quotes/quotes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  Quote: string;
  author: string;
  
  constructor(public navCtrl: NavController, private qp: QuotesProvider) {

  }

  ionViewDidLoad() {
    this.qp.getQuotes().subscribe(data => {
      this.Quote = data.quote;
      this.author = data.author;
    });
  }

openStudentsPage(){
  console.log("IN openStudentsPage function...");
  this.navCtrl.push(StudentsPage);
}

}
