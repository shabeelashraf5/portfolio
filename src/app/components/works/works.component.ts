import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements AfterViewInit {
  @ViewChildren('workItem') workItems!: QueryList<ElementRef>;

  items = [

    {
      sl: 1 ,
      title: 'ChuuNow - Food Application ',
      description: ['Ionic','Angular 17', 'NestJS', 'Mongoose', 'Tailwind CSS'],
      imageUrl: 'assets/5.png', 
      link: ''
    },

    {
      sl: 2 ,
      title: 'TutorMate - Educational Platform ',
      description: ['Angular 17', 'NestJS', 'Mongoose', 'Tailwind CSS'],
      imageUrl: 'assets/4.png', 
      link: 'https://github.com/shabeelashraf5/TutorMate-EducationalPlatform'
    },
    
    {
      sl: 3 ,
      title: 'ERP - Supply Chain Management Portal',
      description: ['NodeJS', 'ExpressJS', 'Angular 16', 'EC2', 'Mongoose', 'S3bucket', 'Tailwind CSS'],
      imageUrl: 'assets/2.png',
      link: 'https://github.com/shabeelashraf5/SCMS-PROJECT'
    },


    {
      sl: 4 ,
      title: 'Cowbwoy Fitness - E Commerce Application',
      description: ['NodeJS', 'ExpressJS', 'EJS', 'Mongoose', 'EC2', 'Bootstrap CSS'],
      imageUrl: 'assets/1.png', 
      link: 'https://github.com/shabeelashraf5/cowBwoyFitness-EcommerceApp.git'
    },

    {
      sl: 5 ,
      title: 'ManageX - Management Tool',
      description: ['NodeJS', 'ExpressJS', 'Angular 17', 'Mongoose', 'Tailwind CSS'],
      imageUrl: 'assets/3.png', 
      link: 'https://github.com/shabeelashraf5/ManageX-ManagementTool.git'
    },
   
   
  ];

  constructor(){}

  ngAfterViewInit(): void {
  
    this.workItems.forEach((item, index) => {
      gsap.fromTo(
        item.nativeElement,
        { opacity: 0, y: 50 }, // Starting state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: 'top 80%',
            toggleActions: 'play reset play reset', // Replays the animation
          },
        }
      );
    });
    
  }

  

}

