import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface City {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities: City[] = [];
  private storageKey = 'citiesList';

  constructor(private _http: HttpClient) {}

  loadCities(): Observable<City[]> {
    const localData = localStorage.getItem(this.storageKey);
    if (localData) {
      this.cities = JSON.parse(localData);
      return of(this.cities);
    } else {
      return this._http.get<City[]>('assets/cities.json').pipe(
        map((cities) => {
          this.cities = cities;
          this.saveToLocalStorage();
          return this.cities;
        }),
        catchError((error) => {
          console.error('Error loading cities:', error);
          return of([]);
        })
      );
    }
  }

  getCities(): City[] {
    return this.cities;
  }

  addCity(name: string): string | void {
    if (this.cities.some((city) => city.name.toLowerCase() === name.toLowerCase())) {
      return 'City already exists';
    }
    const newCity: City = {
      id: this.cities.length ? Math.max(...this.cities.map((city) => city.id)) + 1 : 1,
      name,
    };
    this.cities.push(newCity);
    this.saveToLocalStorage();
  }

  deleteCity(id: number): void {
    this.cities = this.cities.filter((city) => city.id !== id);
    this.saveToLocalStorage();
  }

  // Método para filtrar las ciudades por nombre
  filterCities(name: string): City[] {
    return this.cities.filter((city) => city.name.toLowerCase().includes(name.toLowerCase()));
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cities));
  }
}
