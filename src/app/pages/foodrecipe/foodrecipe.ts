import { Component } from '@angular/core';
import { TopImage } from "../../components/top-image/top-image";
import { Cards } from "../../components/cards/cards";

@Component({
  selector: 'app-foodrecipe',
  imports: [TopImage, Cards],
  templateUrl: './foodrecipe.html',
  styleUrl: './foodrecipe.css',
})
export class Foodrecipe {

}
