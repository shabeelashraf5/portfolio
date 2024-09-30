import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

   about: string = 'I am a dedicated and self-driven full stack developer with hands-on experience in Angular, Node.js, Express.js, and MongoDB. Over the past year, I’ve honed my skills by building scalable web applications, including a full ERP system. I enjoy solving complex problems, constantly learning new technologies, and delivering efficient, high-quality code. Outside of coding, I love exploring new software development trends and staying up-to-date with the latest industry practices. I’m always eager to take on new challenges and continue growing as a developer.'
   title: string = 'Bootcamp (Full Stack Developer)'
   time: string = 'February 2023'
   description: string = 'As a dedicated student, I pursued MEAN stack development through self-study. During this time, I successfully completed two major projects that deepened my understanding of Full Stack development.'

}
