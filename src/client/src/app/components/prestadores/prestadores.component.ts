import { Component, OnInit } from '@angular/core';

import { PrestadorService } from '../../services/prestador.service';
import { Prestador } from '../../Prestador';

@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css'],
  providers: [PrestadorService]
})
export class PrestadoresComponent implements OnInit {
  prestadores: Prestador[];
  nombre: string;

  constructor(private prestadorsevice: PrestadorService) {
    this.prestadorsevice.getPrestadores()
      .subscribe(prestadores => {
        console.log(prestadores);
        this.prestadores = prestadores;
      });
  }

  ngOnInit() {
    
  }

  addPrestador(event){
    event.preventDefault();
    const newPrestador:Prestador = {
      nombre: this.nombre,
    };
    this.prestadorsevice.addPrestador(newPrestador)
      .subscribe(Prestador => {
        this.prestadores.push(Prestador);
        this.nombre = '';
      })        
  }

  deletePrestador(id) {
    const response = confirm('are you sure to delete it?');
    if (response ){
      const prestadores = this.prestadores;
      this.prestadorsevice.deletePrestador(id)
        .subscribe(data => {
          console.log(data.n);
          if(data.n == 1) {
            for(let i = 0; i < prestadores.length; i++) {
              if(prestadores[i]._id == id) {
                prestadores.splice(i, 1);
              }
            }
          }
        })
    }
  }                 



}
