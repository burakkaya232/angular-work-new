import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from 'src/test/test.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
