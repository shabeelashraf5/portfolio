import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css',
})
export class ExpertiseComponent implements AfterViewInit {
  @ViewChildren('workItem') workItems!: QueryList<ElementRef>;

  offers = [
    {
      title: 'Custom Web Development',
      description:
        'Tailored web applications to meet unique client needs, ensuring scalability and user-friendliness.',
    },
    {
      title: 'Frontend Development',
      description:
        'Responsive and visually appealing user interfaces with modern frameworks like Angular and Tailwind CSS.',
    },
    {
      title: 'Backend Development',
      description:
        'Secure and robust server-side applications with seamless API integration using Node.js and MongoDB.',
    },
    {
      title: 'Full-Stack Development',
      description:
        'End-to-end development combining both frontend and backend expertise for cohesive applications.',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Secure online stores with payment gateway integration and efficient inventory management.',
    },

    {
      title: 'API Development & Integration',
      description:
        'Custom and third-party API development to expand application functionality.',
    },
  ];

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
