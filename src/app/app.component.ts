import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProvedorapiService } from './provedorapi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  frutas:[];
  item: any;
  fruta:string;
  searchTerm:string;

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public proveedor: ProvedorapiService, public  navCtrl: NavController ) {}

ionViewwDidLoad(){
  this.proveedor.getfruits(this.searchTerm)
  .subscribe(
    (data: [])=>{this.frutas = data;},
    (error)=>{console.log(error);}
  )
}

}
