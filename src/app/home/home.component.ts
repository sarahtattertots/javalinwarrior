import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".list-ui").click(function(){
        if($(".menu").is(":hidden")){
            $(".menu").show();
        }else {
            $("div.menu").hide();
        }
    });
  }

}