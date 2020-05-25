import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClickSubmit(Data)
  {
    alert("Entered Emailid:" +Data.fname);
    alert("Entered Emailid:" +Data.Email);
  }
}
