import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
