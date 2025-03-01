import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



interface Input{
  stat:boolean;
  inputName:string;
}


@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  inputs:string[] = ["Name","Age","Email","Password"];

  inputsGroup:Input[] = [
    {stat:false, inputName:''},
    {stat:false, inputName:''},
    {stat:false, inputName:''},
    {stat:false, inputName:''}
  ];
  check(index:number){
      if(this.inputsGroup[index].inputName !== ''){
        this.inputsGroup[index].stat = true
      }else{
        this.inputsGroup[index].stat = false
      }    
  } 
}
