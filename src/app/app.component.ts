import { Component, OnInit } from '@angular/core';
import { Event, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './P1/list/list.component';
import { ItemComponent } from './P1/item/item.component';
import { SearchComponent } from './P1/search/search.component';
import { CardComponent } from './P1/card/card.component';
import { data } from './P1/data';
import { AppColorsDirective } from './app-colors.directive';
import { CreateHtmlDirective } from './create-html.directive';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, SearchComponent, ListComponent, CardComponent, AppColorsDirective, CreateHtmlDirective, PurePipe, ImpurePipe, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  
  title = 'nuevo_proyecto_angular';
  list:any[] = []
  originalList: any[] = [];
  objectCard:any = ''
  students:number[] = [1,2,3,4,5,6,7,8,9]
  
  ngOnInit(): void {
    this.list=Object.entries(data);
    this.originalList = this.list;
    this.objectCard = this.list[0];
  }

  public receiveData(data:any){
    console.log("received person")
    if(data.operation){
      console.log("delete")
      this.list = this.list.filter(entry => entry[0] !== data.key);
    } else{
      this.objectCard = this.list.filter(entry => entry[0]===data.key)[0]
    }
  }

  public receiveSearchTerm(data:string){
    console.log("got search term")
    if (data) {
      this.list = this.list.filter(entry => {
        const fullName = `${entry[1].name} ${entry[1].lastName}`.toLowerCase();  // Concatenate name and lastName
        return fullName.includes(data.toLowerCase());  // Case-insensitive search
      });
    } else {
      this.list = [...this.originalList];  // Reset the list if the search term is empty
    }
  }
  public getColor(data:any){
    console.log(data)
  }

  public addNumber(){
    this.students = [...this.students,10]
  }
}

