import { Component, OnInit } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() {
    
 
  }
  ngOnInit(): void {
    const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')

const username = document.querySelector('.username')
const role = document.querySelector('.role')
const testimonials = [
    {
        name:'Anita',
        position:'Dhankawadi,Pune',
        text: "If I could give 10 stars I would. Highly recommend. the stiching is very good.",

    },
    {
        name:'Mrunal',
        position:'Katraj,pune',
        text: "Love the fabric and the fit. Consider me converted!",

    },
    {
        name:'Radika',
        position:'Kothrud.pune',
        text: "very happy with the product, better then expected. ",

    },
    {
        name:'Manisha',
        position:'Hadapsar,pune',
        text: " I was happy with fitting and Design.the fiting of blouses is very nice.",

    },
    {
        name:'Shama',
        position:'Balajinagar,pune',
        text: "The quality is Amazing. and the fabric design is very nice",

    },
]


let idx=1

function updateTestimonial() {
    const{ name, position, text} = testimonials[idx]
    testimonial.innerHTML = text
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length-1) {
        idx=0
    }
}
setInterval(updateTestimonial,10000)
  }
  public items: any[] = [
    { title: ' item 1', url: 'assets/1.png' },
    { title: ' item 2', url: 'assets/about.jpg' },
    { title: ' item 3', url: 'assets/16.jfif' },
    { title: ' item 4', url: 'assets/41.jpg' },
    { title: ' item 5', url: 'assets/images (72).jpg' },
    { title: ' item 6', url: 'assets/17.png' },
    { title: ' item 7', url: 'assets/11.jfif' },
    
  ]
  
  
  public width = '100%';
  public height = '700px';  
}
  


