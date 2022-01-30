import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { faCaretDown, faPager } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from 'src/app/helper/enum/social-link/social-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogedInUser: any = false;
  faCaretDown = faCaretDown;
  socialLink = SocialLink;


  constructor(private elRef:ElementRef) { }

  ngOnInit(): void {
    this.eventOnLoad();
  }

  isHideAtSmall = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let sm = event.target.innerWidth;
    if (sm <= 768) {
      this.isHideAtSmall = true;
    } else {
      this.isHideAtSmall = false;
    }
  }

  showAndHideMenu(){
    this.isHideAtSmall= !this.isHideAtSmall;
  }

  eventOnLoad(){
    if (window.innerWidth > 768) {
      this.isHideAtSmall = false;
    } else {
      this.isHideAtSmall = true;
    }
  }

  /**
   * 
   * On dropdown open or close event
   * @param $event 
   */

  onOpenChange($event : any){
  }
}
