import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotHomeScreenComponent } from './bot-home-screen/bot-home-screen.component';
import { BotSearchResultComponent } from './bot-search-result/bot-search-result.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BotHomeScreenComponent,
    BotSearchResultComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
