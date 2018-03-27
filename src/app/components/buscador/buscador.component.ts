import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  heroes: any = [];
  termino: string;

  constructor(private activateRoute: ActivatedRoute, private servicioHeroes: HeroesService) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      this.termino = params['texto'];
      console.log(params);
      this.heroes = this.servicioHeroes.buscarHeores(params['texto']);
    });
  }

}
