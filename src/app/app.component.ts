import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent implements OnInit {

  title = 'app';
  showApp = false;
  job: string;

  initForm: FormGroup;
  uci: string;
  app: string;

  constructor(private appService: AppService) {
    this.uci = environment.uci;
    this.app = environment.app;

    this.initForm = new FormGroup({
      uci: new FormControl(this.uci),
      app: new FormControl(this.app)
    });

    if (this.uci && this.app) {
      this.go();
    }
  }

  ngOnInit(): void {
    this.appService.getSessionInfo().then((res) => {
      this.job = res['data']['sessionId'];
    })
    .catch((err) => {
      alert(err);
    });
  }

  go() {
    this.showApp = true;
  }
}
