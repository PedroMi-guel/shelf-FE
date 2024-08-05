import { Component, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  pedidos:any = [];

  constructor(private ps:PedidosService) {
    console.log(this.pedidos)

    this.ps.getPedidos().subscribe((data)=>{
      console.log(data);
      this.pedidos = data;

    })
  }

  ngOnInit() {
  }

}
