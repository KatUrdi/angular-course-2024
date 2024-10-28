import { socialNetworks } from './../../data';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css' ] // Cambié `styleUrl` a `styleUrls` para corregir el error
})
export class UserDataComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() user: any = {};
  @Input() newMedia: any = {};
  @Input() availableSocialNetworks: any[] = [];
  @Input() subscribedSocialNetworks: any[] = [];

  @Output() sendData = new EventEmitter<{ platform: string, message: string }>();
  @Output() addSocialMedia = new EventEmitter<number>();
  @Output() removeSocialMedia = new EventEmitter<number>();

  activate: boolean = true;
  subscription: Subscription = new Subscription();
  socialNetworks: any[] = [];

  ngOnInit(): void {
    this.socialNetworks = Object.entries(socialNetworks);
    console.log(this.socialNetworks);
  }

  ngOnChanges(): void {
    // Puedes implementar alguna lógica aquí si es necesario
  }

  ngAfterViewInit(): void {
    // Puedes implementar alguna lógica aquí si es necesario
  }

  public addSocialMediaNetwork(code: number): void {
    this.addSocialMedia.emit(code);
  }

  public removeSocialMediaNetwork(code: number): void {
    this.removeSocialMedia.emit(code);
  }

  public addNotification(platform: string, message: string): void {
    const subs = this.subscribedSocialNetworks.find((entry: any) => entry[1].platform === platform);
    if (subs) {
      console.log('Notification received');
      this.sendData.emit({ platform, message });
    }
  }

  public closeAccount(): void {
    this.activate = false;
  }

  public receiveData(data: any): void {
    console.log("Received code");
    if (data.operation) {
      console.log("Add");
      const canAddSocialMedia = (data.code !== 2 && data.code !== 4) ||
                                (this.user[1].subscriptionType === "premium" && this.user[1].amountAvailable >= 5);
      if (canAddSocialMedia) {
        this.addSocialMediaNetwork(data.code);
      }
    } else {
      this.removeSocialMediaNetwork(data.code);
    }
  }
}
