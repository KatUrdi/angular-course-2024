import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
    {
        path: "card/:studentId",
        component: UserCardComponent,
        title: "User Card"
    },
]