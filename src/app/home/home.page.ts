import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot, faUserTie, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FontAwesomeModule]
})
export class HomePage {

  aiIcon = faRobot;
  expertIcon = faUserTie;
  bookingIcon = faCalendarCheck;
  

 
  

  constructor() {}

}
