import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild("mapContainer", { static: false })
  public gmap!: ElementRef;
  
  public map: google.maps.Map | undefined;
  lat = 40.73061;
  lng = -73.935242;

  

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    

    
  }

  loadAllMarkers(): void {
    
  }

}
