import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
  screenSize: number = 0;
  ngOnInit(): void {
    this.screenSize = window.innerWidth;
    console.log("INNER WIDTH:::: " + this.screenSize);
  }

  get displayFooter() {
    if (this.screenSize < 768)
    {
      return false;
    }
    return true;
  }
  
  
}
