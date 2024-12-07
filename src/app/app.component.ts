import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //title = 'profile';

  showFooter: boolean = true

  showProfile: boolean = false

  isLoading: boolean = true  
  showHomePage: boolean = false; 
  
  constructor(private viewport: ViewportScroller, private router: Router ){
   
    
    this.router.events.subscribe((event) => {

      if(event instanceof NavigationEnd){
        const footerHiddenRoutes = ['/profile', '/skills', '/projects']

        this.showFooter = !footerHiddenRoutes.includes(event.urlAfterRedirects)
      }

    })

  }


  ngOnInit(): void {
    const preloader = document.getElementById('preloader');
    const percentageText = document.getElementById('loading-percentage');
    const logo = document.getElementById('preloader-logo');
  
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      if (percentageText) {
        percentageText.innerText = `${progress}%`;
      }
      if (progress >= 100) {
        clearInterval(interval);
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none'; 
            this.isLoading = false;
  
            if (logo) {
              logo.style.opacity = '1';
              
              setTimeout(() => {
                logo.style.opacity = '0';
              }, 3000); 
            }
          }, 10); 
        }
      }
    }, 50); 
  }

  

}
