import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-nav',
  templateUrl: './small-nav.component.html',
  styleUrls: ['./small-nav.component.css']
})
export class SmallNavComponent implements OnInit, OnDestroy {
  @Input()
  isLoggedIn: boolean = false;
  @Input()
  username: string = 'error';
  
  isNavPanelOpen: boolean = false;
  isSessionPanelOpen: boolean = false;

  ngOnDestroy(): void {
    window.removeEventListener('pointerdown', this.handlePointerDown);
  }

  ngOnInit(): void {
    window.addEventListener('pointerdown', this.handlePointerDown);
  }

  handlePointerDown = (event: PointerEvent) => {
    if (event.target != null && event.target instanceof HTMLElement) {
      console.log(event.target.classList);
      if (event.target.classList.contains('nav-clickbox') === false) {
        this.isNavPanelOpen = false;
      }
      if (event.target.classList.contains('nav-session-clickbox') === false) {
        this.isSessionPanelOpen = false;
      }
    }
  }

  toggleMainNavPanel() {
    this.isNavPanelOpen = !this.isNavPanelOpen;
    console.log('IsNavPanelOpen? ', this.isNavPanelOpen);
  }

  toggleSessionPanel() {
    this.isSessionPanelOpen = !this.isSessionPanelOpen;
  }
}
