// ubicacion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  getUbicacionPorCoordenadas(lat: number, lng: number): Observable<any>  {
    const params = {
      latlng: `${lat},${lng}`,
      language: 'en',
      region: 'en',
      result_type: 'administrative_area_level_1',
      location_type: 'APPROXIMATE'
    };
    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }

  private apiUrl = 'https://google-map-places.p.rapidapi.com/maps/api/geocode/json';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '438284335fmsha89fe88b67e67c3p1b738fjsn5bf0b3d02de6',
    'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getUbicacion(address: string): Observable<any> {
    const params = {
      address: address,
      language: 'en',
      region: 'en',
      result_type: 'administrative_area_level_1',
      location_type: 'APPROXIMATE'
    };

    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }


  
}
