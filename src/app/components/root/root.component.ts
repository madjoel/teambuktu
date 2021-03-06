import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";
import {SidenavService} from "../../services/sidenav.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  @ViewChild('sidenav') private sidenav: MatSidenav;

  constructor(private router: Router,
              private session: SessionService,
              private sidenavService: SidenavService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.session.setRouter(this.router);

    this.router.navigate(["/login"])
      .catch(reason => console.log("couldn't navigate to '/login': " + reason));

  }

  public logout(): void {
    this.session.logout();
    this.sidenav.close()
      .catch(reason => console.log("sidenav couldn't be closed: " + reason));
    this.router.navigate(["/login"])
      .catch(reason => console.log("couldn't navigate to '/login': " + reason));
  }

  back(): void {
    this.location.back();
  }


}
