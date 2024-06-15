import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule ,MatToolbarModule,
     AboutmeComponent, HomeComponent, ContactComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mileprastalowebsite';
}
