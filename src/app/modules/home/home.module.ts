import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PeopleTableComponent } from 'src/app/components/people-table';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PeopleTableComponent],
})
export class HomeModule {}
