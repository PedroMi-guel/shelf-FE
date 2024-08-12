import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../../../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  pedidos:any = [];

  constructor(private ps:PedidosService, private router:Router) {
    console.log(this.pedidos)

    this.ps.getPedidos().subscribe((data)=>{
      console.log(data);
      this.pedidos = data;

    })
  }

  goToDetail(id: number) {
    this.router.navigate(['/page-details', id]); // Ajusta la ruta según tu configuración
  }

  ngOnInit() {
  }

}
