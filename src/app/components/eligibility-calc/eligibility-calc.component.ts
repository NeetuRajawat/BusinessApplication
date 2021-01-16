import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calc',
  templateUrl: './eligibility-calc.component.html',
  styleUrls: ['./eligibility-calc.component.scss']
})
export class EligibilityCalcComponent implements OnInit {
  incomeValue:number=0;
  expenseValue:number=0;
  constructor() { }

  ngOnInit() {
   
  }
  onSliderIncomeChange(event){
      this.incomeValue=event.value;
  }
  onSliderExpenseChange(event){
    this.expenseValue = event.value;
  }
}
