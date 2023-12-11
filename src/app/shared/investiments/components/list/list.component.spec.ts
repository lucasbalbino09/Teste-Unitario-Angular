import { Investiments } from './../../model/investiments';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // é como se fosse um booleano, garantindo uma condição valida. 
  });

  it('(U) shoud list investiments', () => {
    let Investiments = component.investiments;
    expect(Investiments.length).toBe(4); // toBe() é como se fosse (investiments é igual a..);
    expect(Investiments[0].name).toContain('Itaú'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
    expect(Investiments[3].name).toContain('Inter'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
  });
  
  it('(I) Should list investiments', () => {
    let Investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    
    expect(Investiments.length).toBe(4)
    expect(Investiments[0].textContent.trim()).toEqual('Itaú | 100'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
    expect(Investiments[3].textContent.trim()).toEqual('Inter | 400'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
    
  }) 
});
