
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  P1 = '';
  P2 = '';
  num : number = 0;
  constructor(private router : Router, private route: ActivatedRoute) {

  }

  GoHome() {
    this.router.navigateByUrl('/');
  }

  GoChartsFlot() {
    this.router.navigate(['/charts','flot']);
  }

  ngOnInit() {
    //this.num = parseInt(this.route.snapshot.params['num'],10);
    this.P1 = this.route.snapshot.params['p1'];
    this.P2 = this.route.snapshot.params['p2'];

    this.route.params.subscribe((params) => {
      if(params) {
        this.num = parseInt(params['num']);
      }
    })
  }

  AddNum(){
    this.router.navigate(['..', this.num+1, { p1: this.P1, p2: this.P2 }], {
      relativeTo: this.route,
      queryParams: {
       name: 'Will'
      }
    });
   }
  }

