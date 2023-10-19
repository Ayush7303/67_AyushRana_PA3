import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  intData:number=67;
  stringData:string="Ayush";
  dateData:Date=new Date();
}
