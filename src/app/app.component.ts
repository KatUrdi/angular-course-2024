import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface City {
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class AppComponent implements OnInit {
  title = 'City List Application';
  cities: City[] = [];  
  allCities: City[] = []; 
  newCityName = '';
  filterText = '';
  errorMessage = '';

  ngOnInit() {
    this.loadCities(); 
  }

  async loadCities() {
    try {
      const response = await fetch('assets/cities.json'); 
      if (!response.ok) throw new Error('Failed to load cities');
      
      const data: City[] = await response.json();
      console.log('Cities loaded from JSON:', data); 
      
      this.allCities = data; 
      this.cities = [...this.allCities]; 
      console.log('Cities to display:', this.cities); 
    } catch (error) {
      console.error('Error loading cities:', error);
    }
  }

  addCity() {
    this.errorMessage = '';
    if (this.newCityName.trim() === '') {
      this.errorMessage = 'City name is required';
      return;
    }
    // Verificar nombre duplicado
    if (this.allCities.some(city => city.name.toLowerCase() === this.newCityName.toLowerCase())) {
      this.errorMessage = `City with name "${this.newCityName}" already exists`;
      return;
    }
    // Agregar la nueva ciudad
    const newCity: City = { name: this.newCityName };
    this.cities.push(newCity);
    this.allCities.push(newCity); 
    this.newCityName = '';
  }

  deleteCity(name: string) {
    this.cities = this.cities.filter(city => city.name !== name);
    this.allCities = this.allCities.filter(city => city.name !== name);
  }

  filterCities() {
    const filter = this.filterText.toLowerCase();
    this.cities = this.allCities.filter(city =>
      city.name.toLowerCase().includes(filter)
    );
  }

  resetSearch() {
    this.filterText = '';
    this.cities = [...this.allCities];
  }
}
