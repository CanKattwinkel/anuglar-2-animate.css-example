import {Component, trigger, keyframes, animate, transition} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('wobble', [
      transition('inactive => active', animate(1000, keyframes([
      ]))),
    ])
  ]

})
export class AppComponent {
  title = 'app works!';
  public wobbleState: string;

  triggerAnimation() {

  }

  reset() {
  }

}
