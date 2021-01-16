import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatCardModule,
  MatSliderModule,MatSelectModule,MatSlideToggleModule,MatInputModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EligibilityCalcComponent } from 'src/app/components/eligibility-calc/eligibility-calc.component';
import { LoanAmountComponent } from 'src/app/components/loan-amount/loan-amount.component';
import { CommonCardComponent } from 'src/app/components/common-card/common-card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    EligibilityCalcComponent,
    LoanAmountComponent,
    CommonCardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    EligibilityCalcComponent,
    LoanAmountComponent,
    CommonCardComponent,
    ButtonComponent
  ]
})
export class AppModule { }
