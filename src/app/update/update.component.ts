import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TouristService } from '../tourist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit {
  p: Tour = new Tour();
  id: number;

  constructor(
    private tour: TouristService,
    private active: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
        this.id = this.active.snapshot.params['id'];
        this.getid(this.id);
  }
  getid(id:number):void{
    console.log(id);
    this.tour.getbyid(id).subscribe((response)=>{
      this.p=response;
    });
    }
    goToUpdate():void{
      this.tour.updatebyid(this.id,this.p).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['update']);
      });
     }
}


