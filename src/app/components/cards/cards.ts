import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Service } from '../../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {
  cards: any[] = [];
  constructor(private service: Service,
    private cdr: ChangeDetectorRef,
    private router: Router ) {}

  ngOnInit() {
    this.service.getProducts().subscribe((data: any) => {
      this.cards = data.recipes;
      this.cdr.detectChanges();
    });
  }
  viewDetails(product: any) {
    this.router.navigate(['/product', product.id],{state:{product}}); 
  }
}
