import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

  constructor(){}

  

  items = [
    {
      title: 'E-Commerce Web Application',
      description: ['NodeJS', 'ExpressJS', 'EJS', 'Mongoose', 'EC2'],
      imageUrl: 'assets/P1.png', 
      link: 'https://github.com/shabeelashraf5/cowbwoy.shop'
    },
    {
      title: 'ERP - Supply Chain Management Portal',
      description: ['NodeJS', 'ExpressJS', 'Angular16', 'EC2', 'Mongoose', 'S3bucket'],
      imageUrl: 'assets/p2.png',
      link: 'https://github.com/shabeelashraf5/SCMS-PROJECT'
    },

    {
      title: 'Password Generator',
      description: ['ExpressJS', 'Angular17', 'Mongoose', 'NodeJS'],
      imageUrl: 'assets/p3.png', 
      link: 'https://github.com/shabeelashraf5/password_generator.git'
    },
   
   
  ];

}

