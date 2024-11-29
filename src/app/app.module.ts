import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ColorChangerComponent,
    BusinessCardComponent,
    DefaultImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
