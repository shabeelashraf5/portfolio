import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('textItem') textItems!: QueryList<ElementRef>;
  @ViewChildren('rightTextItem') rightTextItems!: QueryList<ElementRef>;

  // about: string = 'I am a dedicated and self-driven full stack developer with hands-on experience in Angular, Node.js, Express.js, and MongoDB. Over the past year, I’ve honed my skills by building scalable web applications, including a full ERP system. I enjoy solving complex problems, constantly learning new technologies, and delivering efficient, high-quality code. Outside of coding, I love exploring new software development trends and staying up-to-date with the latest industry practices. I’m always eager to take on new challenges and continue growing as a developer.'
   title: string = 'Self-Taught / Independent Projects'
   time: string = 'February 2023 - Present'
   description: string = 'Developed dynamic web applications using Angular, Node JS, Express JS, Nest JS and MongoDB. I pursued MEAN stack development through self-study, demonstrating a strong ability to learn and adapt independently. During this time, I successfully completed four major projects and am still working on additional ones, continuously deepening my understanding of Full Stack development and honing my ability to create scalable and efficient solutions.'
   
  
   introduction: string = 'I am a dedicated and self-driven Full-Stack Developer with hands-on experience in Angular, Node JS, Express JS, Nest JS and MongoDB. Over the past year, I’ve honed my skills by building scalable web applications. My passion lies in solving complex problems, learning emerging technologies, and delivering efficient, high-quality code that meets user needs.';  

   contributions: string[] = [
     'Frontend Development: Responsive UI design with Angular and Tailwind CSS.',
     'Backend Development: Backend Development: Scalable RESTful APIs with Node.js, Express.js, and MongoDB.',
     'End-to-End Development: Managed projects from requirements to deployment.',
     'Version Control & Deployment: Expertise in Git and AWS services like S3, EC2, and Route 53.',
     'Payment Integration: Integrated secure payment gateways like Stripe to facilitate seamless online transactions.',
     'Performance & Security: Optimized application performance and secure coding.'
   ];  
 
   conclusion: string = 'Beyond coding, I stay updated on software trends and enjoy taking on challenges that push my limits and help me grow both personally and professionally.'; 
   

   ngAfterViewInit(): void {
  
    this.textItems.forEach((item) => {
      gsap.fromTo(
        item.nativeElement,
        { opacity: 0, x: -100 }, // Starting state from the left
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: 'top 90%',
            toggleActions: 'play reset play reset', // Replays the animation
          },
        }
      );
    });

    this.rightTextItems.forEach((item) => {
      gsap.fromTo(
        item.nativeElement,
        { opacity: 0, x: 100 }, // Starting from the right
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: 'top 90%',
            toggleActions: 'play reset play reset',
          },
        }
      );
    });
    
  }
  
  }


  