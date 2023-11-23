import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.less']
})
export class BankingComponent {

  private poupanca: number = 10;
  private carteira: number = 50;

  public getPoupanca(): number {
    return this.poupanca
  }
  public getCarteira(): number {
    return this.carteira
  }

  public setSacar(value: string): number | undefined {
    const sacar = Number(value);

    if (isNaN(sacar) || this.poupanca < sacar) {
      return;
    }
    this.poupanca -= sacar
    return (this.carteira += sacar);
  }

  public setDepositar(value: string): number | undefined {
    const depositar = Number(value);
    if (isNaN(depositar) || this.carteira < depositar) {
      return;
    }

    this.carteira -= depositar
    return (this.poupanca += depositar);
  }


}