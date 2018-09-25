import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StatePipe } from './state.pipe';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [AppComponent, StatePipe, AutofocusDirective],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
