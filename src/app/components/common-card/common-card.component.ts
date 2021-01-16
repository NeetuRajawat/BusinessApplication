import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent implements OnInit {
  @Input() title :string;
  @Input() classProp:string;
  @Input() description :string;
  @Input() imageURL :string;
  @Input() bgColor :string;
  @Input() backgroundClass:string ='white-back';
  @Input() titleColor :string ='black';
  @Input() desColor :string ='grey';
  constructor() { }

  ngOnInit() {
    console.log(this.classProp);
  }

}
