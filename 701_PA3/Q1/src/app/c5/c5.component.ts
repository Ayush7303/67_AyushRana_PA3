import { Component } from '@angular/core';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component {
name:string='';
email:string='';
isSubmitted: boolean = false;
onSubmit(){
  this.isSubmitted = true;
}
}
