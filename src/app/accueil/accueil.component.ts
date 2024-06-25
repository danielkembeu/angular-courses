import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  age: number = 22;
  verified: boolean = false;

  estVerifie() {
    if (this.age >= 21) {
      this.verified = true;
    } else if (this.age < 21) {
      this.verified = false;
    }
  }


  // iterable
  donnees = [
    {
      titre: 'Accueil',
      text: 'Bonjour Suzanne',
      lien: ''
    },
    {
      titre: 'Informations',
      text: 'Bonjour Monsieur',
      lien: 'informations'
    },
    {
      titre: 'Projets',
      text: 'Bonjour A KTC Center',
      lien: 'projets'
    }
  ];

}