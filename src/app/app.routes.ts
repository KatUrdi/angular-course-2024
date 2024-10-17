import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {
        path: "card",
        component: UserCardComponent,
    },
    {
        path: "calc",
        component: CalculatorComponent
    },
    {
        path: "counter",
        loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent)
    }
];