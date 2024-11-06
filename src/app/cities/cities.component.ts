import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../sevices/cities.service'; // Importar CitiesService

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-cities',
  standalone: true, // Asegúrate de que esto esté configurado como true
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  imports: [FormsModule, CommonModule] // Importar FormsModule y CommonModule
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  newCityName = '';
  filterText = '';
  errorMessage = '';

  constructor(private citiesService: CitiesService) {}

  ngOnInit() {
    this.citiesService.loadCities().subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }

  addCity() {
    this.errorMessage = '';
    const error = this.citiesService.addCity(this.newCityName);
    if (error) {
      this.errorMessage = error;
    } else {
      this.newCityName = '';
      this.cities = this.citiesService.getCities();
    }
  }

  deleteCity(id: number) {
    this.citiesService.deleteCity(id);
    this.cities = this.citiesService.getCities();
  }

  filterCities() {
    this.cities = this.citiesService.filterCities(this.filterText);
  }
}
