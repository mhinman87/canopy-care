import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot, faUserTie, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FontAwesomeModule, CommonModule]
})
export class HomePage {

  aiIcon = faRobot;
  expertIcon = faUserTie;
  bookingIcon = faCalendarCheck;
  headerHeight = '150px'; // ✅ Default header height
  

  isScrolled = false; // ✅ Track scroll state
  menuOpen = false; // Menu is closed at launch

  test() {

    const scrollTop = document.querySelector('.main')?.scrollTop || 0; // ✅ Get scroll position
   
    // ✅ HEADER SHRINKING LOGIC
    const minHeight = 100; // ✅ Smallest header height
    const maxHeight = 150; // ✅ Largest header height
    const scrollRange = 100; // ✅ Smooth transition over the first 100px
  
    let newHeight = maxHeight - (scrollTop / scrollRange) * (maxHeight - minHeight);
  
    // ✅ Ensure newHeight stays within bounds
    if (newHeight < minHeight) newHeight = minHeight;
    if (newHeight > maxHeight) newHeight = maxHeight;
  
    this.headerHeight = newHeight + 'px'; // ✅ Bind this to CSS dynamically
  
    // ✅ PARALLAX EFFECT
    const speeds = [1.0, 0.6, 0.4, 0.3, 0.2, 0.0]; // ✅ Different speeds for each layer
    const layers = document.querySelectorAll('.parallax-layer');
  
    layers.forEach((layer, index) => {
      const speed = speeds[index];
      (layer as HTMLElement).style.transform = `translateY(${scrollTop * speed}px)`;
    });

    

  }
  



toggleMenu() {
  this.menuOpen = !this.menuOpen;
  console.log("Testing");
}
  
  
  

  constructor() {}

}
