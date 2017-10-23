import {Component} from '@angular/core';
import {correctHeight, detectBody} from './app.helpers';
import {ToastyConfig, ToastyService} from "ng2-toasty";

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastyConfig: ToastyConfig) {

  }
}
