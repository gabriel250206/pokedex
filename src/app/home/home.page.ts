import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemones:any=[];
  constructor(private pokeService: PokeapiService) {}
  ngOnInit(){
    this.pokeService.getListPokemones().subscribe((data)=>{
      this.listPokemones=data.results
      console.log(data.results)
    })

  }
  handleDetail(url:any){
    console.log(url);
  }
}
