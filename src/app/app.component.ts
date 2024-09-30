import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'profile';

  showFooter: boolean = true

  showProfile: boolean = false

  constructor(private viewport: ViewportScroller, private router: Router ){
   
    

    this.router.events.subscribe((event) => {

      if(event instanceof NavigationEnd){
        const footerHiddenRoutes = ['/profile', '/skills', '/projects']

        this.showFooter = !footerHiddenRoutes.includes(event.urlAfterRedirects)
      }

    })

  }


}
