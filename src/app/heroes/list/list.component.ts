import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman']
  public deletedHero?: string;
  removeLasHero(): void {
    this.deletedHero = this.heroNames.pop()
  }
}
