import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-karnataka',
  templateUrl: './karnataka.component.html',
  styleUrls: ['./karnataka.component.css']
})
export class KarnatakaComponent {
  constructor(private router: Router) {}  
  gotohome(){
    this.router.navigate(['/home']);



  }


}
