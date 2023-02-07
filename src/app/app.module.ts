import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserAnimationsModule, ToolbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
