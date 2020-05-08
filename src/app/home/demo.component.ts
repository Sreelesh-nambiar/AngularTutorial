import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
   <h2>
    Welcome {{name}}
   </h2>
   <h2 [class]="successClass">code works</h2>
   <h2 class="txt-special" [class]="successClass">code works</h2>

   <h2 [class.txt-danger]="hasError">code works</h2>
   <h2 [ngClass]="messageClasses">code works</h2>

   <h2 [ngStyle]="titleStyles">style Binding</h2>

   <input #myInput id={{myId}} type="text" value="sree">
   <input bind-disabled="isDisabled"  id={{myId}} type="text" value="sree">

   <button (click) ="onClick(myInput)" >greet</button>

   <h2 *ngIf="displayName; else elseBlock">code works</h2>

  <ng-template #elseBlock>
  <h2>name is hidden
  </h2>
  </ng-template>

   `,
  styles: [`
  .txt-success{
    color:green;
  }
  .txt-danger{
    color:red;
  }
  .txt-special{
    font-style: italic;
  }
  `]
})
export class DemoComponent implements OnInit {
public name = "sree";
public myId  ="testId";
public displayName = false;

public isDisabled= true;
public successClass= "txt-success";
public hasError= false;
public isSpecial = true;
public messageClasses = {
  "txt-success":!this.hasError,
  "txt-danger": this.hasError,
  "txt-special": this.isSpecial
}

public titleStyles={
  color:"blue",
  fontStyle: "italic"
}

  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    alert(value);
  }

}
