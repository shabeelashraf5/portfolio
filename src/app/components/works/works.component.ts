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
      description: '#NodeJS #expressJS #ejs #mongoose #EC2',
      imageUrl: 'assets/P1.png', 
      link: 'https://github.com/shabeelashraf5/cowbwoy.shop'
    },
    {
      title: 'ERP - Supply Chain Management Portal',
      description: '#nodeJS #expressJS #Angular16 #EC2 #mongoose #s3bucket',
      imageUrl: 'assets/p2.png',
      link: 'https://github.com/shabeelashraf5/SCMS-PROJECT'
    },

    {
      title: 'Password Generator',
      description: '#NodeJS #expressJS #Angular17 #mongoose ',
      imageUrl: 'assets/p3.png', 
      link: 'https://github.com/shabeelashraf5/password_generator.git'
    },
   
   
  ];

}

