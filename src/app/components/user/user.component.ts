import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Classหลัก คล้ายๆJavaเนอะว่ามะ
  name:string;
  age:number;
  email:string;
  address:Address; // ประกาศชนิดตัวแปรเองด้วย interface ข้างล่างนี้นะแจ๊ะ


  constructor() {
    console.log('constructor ran.. Pug');
    
   }

  ngOnInit() {
    console.log('ngOnInit ran.. Pug');
    //ภายใต้ngOnInit() จะOverwrite Class UserComponent
     this.name = 'Pug3eye'; 
     this.age = 23;
     this.address = {
       street:'Koon Liam Girl, Ladkrabang',
       city:'BKK',
       state:'TH'
      }
  }

  
}

//สร้างชนิดตัวแปรใหม่ ใช้Interface
interface Address{      
   street:string,     // ประกาศแบบArray
    city:string,
    state:string
}
