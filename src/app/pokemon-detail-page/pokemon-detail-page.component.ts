import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { IonicModule } from '@ionic/angular';// estos dos los agregue para que funcione angular en los que no son home 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: 'pokemon-detail-page.component.html',
  imports: [IonicModule,CommonModule],
  styleUrls: ['pokemon-detail-page.component.scss'],
})
export class PokemonDetailPage implements OnInit {
  
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokeService: PokeapiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID desde la URL

    if (id) {
      this.pokeService.getPokemonById(id).subscribe(data => {
        this.pokemon = data;
      });
    }
  }
}
