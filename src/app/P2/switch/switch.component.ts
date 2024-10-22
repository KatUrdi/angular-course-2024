import { user } from '../user/user.component'; 
import { Component, Input } from '@angular/core'; 
 
@Component({ 
  selector: 'user', 
  standalone: true, 
  imports: [UserCardComponent], 
  templateUrl: './user-card.component.html', 
  styleUrl: './user-card.component.css' 
}) 
export class UserCardComponent { 
 
  @Input() user: any = {}; 
  @Input() tab:number=1; 
 
}