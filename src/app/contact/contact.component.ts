import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  completeMessage;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.completeMessage = this.formBuilder.group({
      email: '',
      message:''
    })
  }

  onSubmit(){
    window.alert("Thank you for your feedback!");
  }

  ngOnInit() {
  }

}