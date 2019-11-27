import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  // Dia final da contagem
  public diaFinal = 1574996400;
  // Dia Final da contagem

  // ngIf
  public contagem = true;
  // ngIf

  // Unidades de Tempo Restantes
  public dias;
  public minutos;
  public horas;
  public segundos;
  // Unidades de Tempo Restantes

  constructor() { }

  ngOnInit() {
    const contagem = setInterval(() => {
      const now = Date.now() / 1000;
      const difference = Math.abs(now - this.diaFinal);
      if (difference === 0) {
        this.contagem = false;
        clearInterval(contagem);
      } else {
        this.dias = Math.floor(difference / 86400);
        this.horas = Math.floor(difference / 3600) % 24;
        this.minutos = Math.floor(difference / 60) % 60;
        this.segundos = Math.floor(difference % 60);
      }
    }, 1000);
  }
}
