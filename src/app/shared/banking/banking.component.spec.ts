import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import {ListComponent} from '../investiments/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent,ListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): shoud poupanca have 10`, () => {
    expect(component.getPoupanca()).toEqual(10);
  });
  it(`(U) getCarteira(): shoud carteira have 50`, () => {
    expect(component.getCarteira()).toEqual(50);
  });
  it(`(U) setSacar(): shoud transfer poupanca from carteira`, () => {
    component.setSacar('10');
    // fixture.detectChanges(); //  se você precisa ver a mudança renderizada no HTMl precisa desse trecho.

    expect(component.getPoupanca()).toEqual(0);

    expect(component.getCarteira()).toEqual(60);
  })

  it(`(i) setSacar(): shoud transfer poupanca from carteira`, () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#input-sacar').value = "10"
    element.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-sacar').textContent).toEqual('60');
    
    
  })

  it(`(U) setSacar(): shoud transfer poupanca dont have string (isNaN) 
    or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getPoupanca()).toEqual(10);

    expect(component.getCarteira()).toEqual(50);

  });

  it(`(U) setDepoistar(): shoud transfer carteira from poupanca `, () => {
    component.setDepositar('50');
    expect(component.getCarteira()).toEqual(0);
    expect(component.getPoupanca()).toEqual(60);
  })
  it(`(U) setDepoistar(): shoud transfer carteira dont have string (isNaN) 
  or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getPoupanca()).toEqual(10);

    expect(component.getCarteira()).toEqual(50);
  });

  it(`(i) setDepoistar(): shoud transfer carteira from poupanca `, () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#input-depositar').value = "10"
    element.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-poupanca').textContent).toEqual('20');

  })
});
