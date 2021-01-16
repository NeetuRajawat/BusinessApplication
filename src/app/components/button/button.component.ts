import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit,OnChanges {
  @Input() label: string;
 @Input() backgroundClass: string = 'purple-back';
 @Input() fontColor: string = 'black';
 @Input() textAlign: string = 'center';
 @Input() fontSize: string = '';
 @Input() width: string = '100%';
 @Input() height: string = '30px'
 @Input() color :string ='black';
 @Input() isBorderExist:boolean=false;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
 
  classList : string[] = [];
  constructor() { }

  ngOnInit() {
    this.classList.push(this.backgroundClass);
  }
  propagateClick = ($event) => {
    this.buttonClicked.emit();
  }
  ngOnChanges(){
    this.classList=[];
     this.classList.push(this.backgroundClass);
     if(this.isBorderExist){
         this.classList.push('borderClass');
     }
  }
  // onClickButton(event) {
  //   this.onClick.emit(event);
  // }
}
