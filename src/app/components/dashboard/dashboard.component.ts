import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  fullName: string = 'Mohamed Shabeel Ashraf';
  position: string = 'Full Stack Developer'
  mean: string = 'Mean Stack'
  ionic: string = 'Ionic Mobile Developer'
  displayedText: string = '' 
  typingSpeed: number = 100; 
  displayedPos: string =''
  greeting: string = "Hello ! I'm "
  myself: string = "I'm"
  about: string = 'Passionate full stack developer specializing in Angular, Node JS, Express JS, Nest JS and MongoDB. I have a strong background in building dynamic web applications.  I thrive in both collaborative and independent environments. Explore my portfolio to see my work!'
  githubLink: string = 'https://github.com/shabeelashraf5'
  linkedInLink: string = 'https://www.linkedin.com/in/mohamed-shabeel-ashraf-8abb4938/'
  typing = true; 

  constructor(private router: Router){}

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying: boolean = false;

  ngOnInit(): void {
    this.typeName();
    
  }

//   typeName() {

//     for(let i = 0 ; i < this.fullName.length; i++){
//       setTimeout(() => {
//         this.displayedText += this.mean.charAt(i)
//       }, this.typingSpeed * i)
//     }

//     const nameTypingDuration = this.typingSpeed * this.fullName.length;
    
//    for(let j = 0 ; j < this.ionic.length ; j++){
//     setTimeout(() => {
//       this.displayedPos += this.mean.charAt(j)
//     }, nameTypingDuration + 100 * j)
//   }
// }


typeName() {
  const phrases = ["Ionic Mobile Developer", "MEAN Stack Developer"];
  let index = 0;
  let charIndex = 0;
  let typing = true; // Flag to control typing and erasing
  this.displayedText = ""; // Reset the displayed text

  // Typing and erasing speed
  const typingSpeed = 120; // Typing speed (ms per character)
  const pauseAfterTyping = 1000; // Pause before erasing (ms)
  const erasingSpeed = 60; // Erasing speed (ms per character)
  const pauseAfterErasing = 500; // Pause before typing the next phrase (ms)

  const typeEffect = () => {
    if (typing) {
      this.displayedText += phrases[index].charAt(charIndex);
      charIndex++;

      if (charIndex === phrases[index].length) {
        typing = false; // Switch to erasing
        setTimeout(typeEffect, pauseAfterTyping); // Pause before erasing
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    } else {
      this.displayedText = this.displayedText.slice(0, -1);
      charIndex--;

      if (charIndex === 0) {
        typing = true; // Switch back to typing
        index = (index + 1) % phrases.length; // Move to the next phrase
        setTimeout(typeEffect, pauseAfterErasing); // Pause before typing new phrase
      } else {
        setTimeout(typeEffect, erasingSpeed);
      }
    }
  };

  typeEffect();
}


downloadPDF(){

  let link = document.createElement('a')
  link.download = 'resume.pdf'
  link.href = 'assets/resume.pdf'
  link.click()
}

toggleAudio() {
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;

    audio.onended = () => {
      this.isPlaying = false;
    };
  }



}
