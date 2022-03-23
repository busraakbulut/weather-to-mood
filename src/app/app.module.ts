import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { TemperatureService } from './api-connection.service';

@NgModule({
  declarations: [			
    AppComponent,
    MainComponent
   ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
