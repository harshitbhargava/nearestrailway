import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
declare var google;

/**
 * Generated class for the NearestStationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearest-station',
  templateUrl: 'nearest-station.html',
})
export class NearestStationPage {
  Destination: any = '';
  MyLocation: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?location=26.8215623,75.8666092&type=train_station&key=AIzaSyChtIus3arMIhw9IROgfuFiWghMaCIwLL4')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
            .subscribe(data =>{
                //console.log(data);
                //console.log(data.results[0].geometry.location);
                console.log(data.results[1].formatted_address);
                 this.Destination= data.results[1].formatted_address;
                console.log(this.Destination);
              
             },error=>{
                 console.log(error);// Error getting the data
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearestStationPage');
  }
  calculateAndDisplayRoute() {
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 26.8230, lng: 75.8674}
    });
    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        that.MyLocation = new google.maps.LatLng(pos);

      }, function() {

      });
    } else {
      // Browser doesn't support Geolocation
    }

    directionsService.route({
    origin: this.MyLocation,
    destination: this.Destination,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}



}
