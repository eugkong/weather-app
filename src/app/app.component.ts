import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  
  constructor(
    private router: Router){}

  ngOnInit(){
    
  }

  goHome(){
    this.router.navigate(['/']);
  }

  addCity(){
    console.log("add city")
    this.router.navigate(['/add-city']);
  }
  
  /*
  addCity(): void {
    const dialogRef = this.dialog.open(AddCityDialog, {
      width: '250px',
      data: {city: this.city, country: this.country, imageurl: this.imageurl}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(typeof result !== 'undefined'){
        
      }
    });
  }*/
}