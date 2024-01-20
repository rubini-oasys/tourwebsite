import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tamilnadu',
  templateUrl: './tamilnadu.component.html',
  styleUrls: ['./tamilnadu.component.css']
})
export class TamilnaduComponent {
  constructor(private router: Router) {}  
  gotohome(){
    this.router.navigate(['/home']);



  }

}
