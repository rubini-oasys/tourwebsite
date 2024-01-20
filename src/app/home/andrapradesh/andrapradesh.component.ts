import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-andrapradesh',
  templateUrl: './andrapradesh.component.html',
  styleUrls: ['./andrapradesh.component.css']
})
export class AndrapradeshComponent {
  constructor(private router: Router) {}  

  gotohome(){
    this.router.navigate(['/home']);



  }

}
