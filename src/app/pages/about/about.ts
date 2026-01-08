import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { Foodrecipe } from '../foodrecipe/foodrecipe';
import { RouterLink,} from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {

}
