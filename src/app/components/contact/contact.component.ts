import { AfterViewInit, Component } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  email: string = 'shabeelash5@gmail.com'
  linkedInLink: string = 'https://www.linkedin.com/in/mohamed-shabeel-ashraf-8abb4938/'

  ngAfterViewInit() {
    const animation = lottie.loadAnimation({
      container: document.getElementById('myLottieIcon')!, // Target the icon container
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/lin.json' // Path to your .json file
    });

    // Set the animation speed (0.5 will slow it down)
    animation.setSpeed(0.4); 
    
  }

}
