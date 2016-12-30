import { Component } from '@angular/core';

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
*/
@Component({
  selector: 'app-root',
  templateUrl: './darshan.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heding: string = 'My First Bootstrap Page';
  resize: string = 'Resize this responsive page to see the effect!';
  php: string = 'PHP';
  designer:string = 'Eternal Main Headline';
  bdm:string = "BDM";
 
  placeholder : string = 'Place holder copy here';
  title : string = 'Boost your sale..!';
  pera1 : string = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English It is a long established fact that, It is a long established fact that a reader will be distracted by.';
  button1 : string = 'Buy the tickets now..!';
  pera2 : string = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters';
  button2 : string = 'Invite';
  comp_name : string = 'SOUND CLOUD PVT. LTD.';
  address : string = '123, Abc Sample Complex, New Street, Something City.';
}
