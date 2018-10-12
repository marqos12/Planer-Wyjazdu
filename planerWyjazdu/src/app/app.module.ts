 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
 import {BsDropdownModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import { NewPlaceFormComponent } from './content/new-place-form/new-place-form.component';
 import {FlexLayoutModule} from "@angular/flex-layout";
 import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from "@angular/material";
import { PlaceHeaderComponent } from './content/place-header/place-header.component';
import { PlaceBodyComponent } from './content/place-body/place-body.component';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NewPlaceFormComponent,
    PlaceHeaderComponent,
    PlaceBodyComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
