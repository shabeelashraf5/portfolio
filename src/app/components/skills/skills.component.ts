import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('textItem') textItems!: QueryList<ElementRef>;
  @ViewChildren('rightTextItem') rightTextItems!: QueryList<ElementRef>;

  // about: string = 'I am a dedicated and self-driven full stack developer with hands-on experience in Angular, Node.js, Express.js, and MongoDB. Over the past year, I’ve honed my skills by building scalable web applications, including a full ERP system. I enjoy solving complex problems, constantly learning new technologies, and delivering efficient, high-quality code. Outside of coding, I love exploring new software development trends and staying up-to-date with the latest industry practices. I’m always eager to take on new challenges and continue growing as a developer.'
  title: string = 'Self-Taught / Independent Projects';
  time: string = 'February 2023 - Present';
  description: string =
    'Developed dynamic web applications using Angular, Node JS, Express JS, Nest JS and MongoDB. I pursued MEAN stack development through self-study, demonstrating a strong ability to learn and adapt independently. During this time, I successfully completed four major projects and am still working on additional ones, continuously deepening my understanding of Full Stack development and honing my ability to create scalable and efficient solutions.';

  introduction: string =
    'Passionate Full Stack Developer with a unique journey from 8 years in a different industry to software development, providing me with a fresh perspective and strong problem-solving abilities. I specialize in building user-centric web applications, combining functionality with intuitive design. With a solid foundation in front-end and back-end development, I am proficient in Next.js, PostgreSQL, Angular, Node.js, Express.js, MongoDB, and NestJS.';

  experiences = [
    {
      company: 'Cyber Sapient',
      role: 'Full Stack Developer',
      type: 'Full-time',
      period: 'May 2025 - Present',
      location: 'Kerala, India',
      description: 'Developing high-performance full-stack applications using Next.js and PostgreSQL. Focused on building scalable features and optimizing performance.'
    },
    {
      company: 'Cyber Sapient',
      role: 'Full Stack Developer Intern',
      type: 'Internship',
      period: 'Jan 2025 - Apr 2025',
      location: 'Remote',
      description: 'Leveraged Next.js for dynamic UIs and PostgreSQL for efficient data management. Contributed to RESTful API integrations and performance optimization in an agile environment.'
    }
  ];

  contributions: string[] = [
    'AI Integration: Building intelligent workflows with Gemini, OpenAI and MCP Servers.',
    'Real-Time Systems: Implementing voice/video systems with WebRTC and LiveKit.',
    'Scalable Architecture: Designing multi-role platforms and RAG pipelines.',
    'Frontend Excellence: Professional UIs with Next.js, React and Tailwind CSS.',
    'Backend Mastery: Scalable systems with PostgreSQL, Node.js and Supabase.',
    'DevOps & Auth: Expertise in Git, AWS and Supabase Authentication.',
  ];

  conclusion: string =
    'Beyond coding, I stay updated on software trends and enjoy taking on challenges that push my limits and help me grow both personally and professionally.';

  ngAfterViewInit(): void {
    this.textItems.forEach((item) => {
      gsap.fromTo(
        item.nativeElement,
        { opacity: 0, x: -100 }, // Starting state from the left
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: 'top 90%',
            toggleActions: 'play none none none',
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
          duration: 0.5,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }
}
