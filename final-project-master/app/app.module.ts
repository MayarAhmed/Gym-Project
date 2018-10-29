// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { observable} from 'rxjs'
import { NgxSlideshowModule } from 'ngx-slideshow';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FitnessComponent } from './fitness/fitness.component';
import { GymsComponent } from './gyms/gyms.component';
import { OffersComponent } from './offers/offers.component';
import { GymDetailComponent } from './gym-detail/gym-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CareersComponent } from './careers/careers.component';
import { SignComponent } from './sign/sign.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';



//service

import { DataService } from './data.service';
import { ServerService } from './server.service';
import { AreaService } from './area.service';
import { TransferService } from './transfer.service';

const navigation:Routes=[
  {path:'',component:HomeComponent},
  {path:"signup",component:SignComponent},
  {path:"login",component:LoginComponent},
  {path:"fitness",component:FitnessComponent},
  {path:"gyms",component:GymsComponent},
  {path:"careers",component:CareersComponent},
  {path:"offers",component:OffersComponent},
  {path:"profile",component:ProfileComponent},
  {path:"gyms/gym-detail",component:GymDetailComponent},
  {path:"gyms/gym-detail/:id/:name",component:GymDetailComponent},
  {path:"login/profile",component:ProfileComponent},
  {path:"gyms/gym-detail/:id/:name/book",component:BookingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FitnessComponent,
    GymsComponent,
    OffersComponent,
    GymDetailComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    SignComponent,
    CareersComponent,
    BookingComponent,
    GymsComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(navigation),
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgwWowModule,
    NgxSlideshowModule,
    AnimateOnScrollModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRIV17HFwByZJYeqaV-UV6F6V6hrc0r4k'
    })
  ],
  providers: [ServerService , TransferService , AreaService ,DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]

})
export class AppModule { }
