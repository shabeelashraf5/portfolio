import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  fullName: string = 'Mohamed Shabeel Ashraf';
  position: string = 'Full Stack Developer'
  displayedText: string = '' 
  typingSpeed: number = 100; 
  displayedPos: string =''
  greeting: string = "Hello ! I'm "
  myself: string = "I'm"
  about: string = 'Passionate full stack developer specializing in Angular, Node.js, Express.js, and MongoDB. I have a strong background in building dynamic web applications.  I thrive in both collaborative and independent environments. Explore my portfolio to see my work!'
  githubLink: string = 'https://github.com/shabeelashraf5'
  linkedInLink: string = 'https://www.linkedin.com/in/mohamed-shabeel-ashraf-8abb4938/'

  constructor(private router: Router){}

  ngOnInit(): void {
    this.typeName();
    
  }

  typeName() {

    for(let i = 0 ; i < this.fullName.length; i++){
      setTimeout(() => {
        this.displayedText += this.fullName.charAt(i)
      }, this.typingSpeed * i)
    }

    const nameTypingDuration = this.typingSpeed * this.fullName.length;
    
   for(let j = 0 ; j < this.position.length ; j++){
    setTimeout(() => {
      this.displayedPos += this.position.charAt(j)
    }, nameTypingDuration + 100 * j)
  }
}


downloadPDF(){

  let link = document.createElement('a')
  link.download = 'resume.pdf'
  link.href = 'assets/resume.pdf'
  link.click()
}



}
