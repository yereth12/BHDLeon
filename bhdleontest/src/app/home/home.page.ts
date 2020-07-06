import { Component } from '@angular/core';
import { CreatecommentComponent } from './createcomment/createcomment.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private comment: CreatecommentComponent) {}
}
