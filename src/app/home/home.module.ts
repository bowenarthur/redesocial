import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, ContentComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
