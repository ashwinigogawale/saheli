import { MapsAPILoader } from '@agm/core';
import {MouseEvent}from '@agm/core'
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { anyChanged } from '@progress/kendo-angular-common';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;

  private geoCoder: google.maps.Geocoder;


  @ViewChild('search')
  public searchElementRef: ElementRef;

    constructor(private formBuilder: FormBuilder,
        private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http:HttpClient,
    private _registration:RegistrationService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
            lastName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
            mobile:['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)]],
            email: ['', [Validators.required, Validators.email,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
            msg: ['', [Validators.required, Validators.maxLength(1000)]]
             }),
             this.mapsAPILoader.load().then(() => {
                this.setCurrentLocation();
                this.geoCoder = new google.maps.Geocoder;

                let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
                autocomplete.addListener("place_changed", () => {
                  this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                      return;
                    }

                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                  });
                });
              });
              const toggles = document.querySelectorAll('.faq-toggle')

              toggles.forEach(toggle =>{
                  toggle.addEventListener('click',()=>{
                    (<Element> toggle.parentNode).classList.toggle('active')
                  })
              })


    }



// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 8;
      this.getAddress(this.latitude, this.longitude);
    });
  }
}
 markerDragEnd($event: MouseEvent) {

    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: { formatted_address: string; }[], status: string) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      }

    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {

        this.submitted = true;
        this._registration.register(this.registerForm.value)
        .subscribe(
          data=>console.log('Success!',data),
          error=>console.log('Error!',error)

        )
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this.onReset();
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset('');
    }

}




