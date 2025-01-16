import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent implements AfterViewInit {
  @ViewChildren('workItem') workItems!: QueryList<ElementRef>;

  isModalOpen: boolean[] = [];
  showDialog: boolean = false;

  items = [
    {
      sl: 1,
      title: 'ChuuNow - Food Application ',
      description: [
        'Ionic',
        'Angular 17',
        'NestJS',
        'Mongoose',
        'Tailwind CSS',
      ],
      imageUrl: 'assets/5.png',
      link: 'https://github.com/shabeelashraf5/chuuNow-FoodApp.git',
      demo: 'Demo LiVE Update in Progress',
      video: 'Stay tuned! The video will be uploaded soon'
    },

    {
      sl: 2,
      title: 'TutorMate - Educational Platform ',
      description: ['Angular 17', 'NestJS', 'Mongoose', 'Tailwind CSS'],
      imageUrl: 'assets/4.png',
      link: 'https://github.com/shabeelashraf5/TutorMate-EducationalPlatform',
      demo: 'Demo LiVE Update in Progress',
      video: 'Stay tuned! The video will be uploaded soon'
    },

    {
      sl: 3,
      title: 'ERP - Supply Chain Management Portal',
      description: [
        'NodeJS',
        'ExpressJS',
        'Angular 16',
        'EC2',
        'Mongoose',
        'S3bucket',
        'Tailwind CSS',
      ],
      imageUrl: 'assets/2.png',
      link: 'https://github.com/shabeelashraf5/SCMS-PROJECT',
      demo: 'Demo LiVE Update in Progress',
      video: 'Stay tuned! The video will be uploaded soon'
    },
    {
      sl: 4,
      title: 'ManageX - Management Tool',
      description: [
        'NodeJS',
        'ExpressJS',
        'Angular 17',
        'Mongoose',
        'Tailwind CSS',
      ],
      imageUrl: 'assets/3.png',
      link: 'https://github.com/shabeelashraf5/ManageX-ManagementTool.git',
      demo: 'https://managex-tool.netlify.app/',
      video: 'Stay tuned! The video will be uploaded soon'
    },
    {
      sl: 5,
      title: 'Cowbwoy Fitness - E Commerce Application',
      description: [
        'NodeJS',
        'ExpressJS',
        'EJS',
        'Mongoose',
        'EC2',
        'Bootstrap CSS',
      ],
      imageUrl: 'assets/1.png',
      link: 'https://github.com/shabeelashraf5/cowBwoyFitness-EcommerceApp.git',
      demo: 'https://cowbwoyfitness-ecommerceapp.onrender.com',
      video: 'Stay tuned! The video will be uploaded soon'
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.workItems.forEach((item, index) => {
      gsap.fromTo(
        item.nativeElement,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: 'top 80%',
            toggleActions: 'play reset play reset', 
          },
        }
      );
    });
  }

  toggleModal(index: number): void {

    const demoUrl = this.items[index].demo;
    
  if (demoUrl && demoUrl.startsWith('http')) {
   
    window.open(demoUrl, '_blank');
  }
    this.isModalOpen[index] = !this.isModalOpen[index];
  }

  toggleVideo(index: number): void {

    // const demoUrl = this.items[index].demo;
    
  // if (demoUrl && demoUrl.startsWith('http')) {
   
  //   window.open(demoUrl, '_blank');
  // }
    this.isModalOpen[index] = !this.isModalOpen[index];
   }

  closeDialog(index: number): void {
    this.isModalOpen[index] = false; 
  }
}
