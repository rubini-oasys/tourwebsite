import { Component } from '@angular/core';
import { TouristService } from '../tourist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private ts:TouristService,private route:Router){}
  gotoform(){
    this.route.navigate(["login"]);
  }
}


