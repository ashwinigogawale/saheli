import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { PocketsComponent } from './pockets/pockets.component';
import { BookappoinmentComponent } from './bookappoinment/bookappoinment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { KidsComponent } from './kids/kids.component';
import { DressesComponent } from './dresses/dresses.component';
import { RepairComponent } from './repair/repair.component';
import { BlouseComponent } from './blouse/blouse.component';
import { FallComponent } from './fall/fall.component';
import { SareeComponent } from './saree/saree.component';
import { LongfComponent } from './longf/longf.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from '../service/admin.service';


const routes: Routes = [
  {path : '' , redirectTo: '/home',pathMatch:'full' },
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
 {path:'about',component:AboutusComponent},
 { path:'contact',component:ContactusComponent},
 {path:'service', component:ServicesComponent},
 {path:'price',component:PricingComponent },
  {path:'howitwork',component:HowitworkComponent},
  {path:'bookappoinment',component:BookappoinmentComponent},
  {path:'pocket',component:PocketsComponent},
  {path:'kids', component:KidsComponent},
   { path:'dresses',component:DressesComponent},
   {path:'repair', component:RepairComponent},
   {path:'blouses',component:BlouseComponent},
    {path:'fallpico', component:FallComponent},
   {path:'saree',component:SareeComponent},
    {path:'one',component:LongfComponent},
  ];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    PricingComponent,
    HowitworkComponent,
    PocketsComponent,
    NavbarComponent,
    FooterComponent,
   BookappoinmentComponent,
   KidsComponent,
   DressesComponent,
   RepairComponent,
   BlouseComponent,
   FallComponent,
   SareeComponent,
   LongfComponent,
   AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SliderModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANLL4jzSpBXaTzN4Fy2bULDBHgIpwVSZg ',
      libraries: ['places']
    }),
    RouterModule.forRoot(routes),
    ScrollViewModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
