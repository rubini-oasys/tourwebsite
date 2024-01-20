import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kerala',
  templateUrl: './kerala.component.html',
  styleUrls: ['./kerala.component.css']
})
export class KeralaComponent {
  constructor(private router: Router) {}  
  gotohome(){
    this.router.navigate(['/home']);



  }

}
