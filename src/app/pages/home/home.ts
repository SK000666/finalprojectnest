import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from "@angular/router"
import { Carousel } from "../../components/carousel/carousel";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  
}
