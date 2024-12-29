import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 

  @Input() isLoading: boolean = false

  constructor(private router: Router) {}

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  scrollToSection(section: string): void {
   
    this.router.navigate([], { fragment: section }).then(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  vibrate(event: MouseEvent) {
    const element = event.target as HTMLElement;
    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: 5,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );
  }

}
