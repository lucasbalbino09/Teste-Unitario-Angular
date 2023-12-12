import { Investiments } from './../../model/investiments';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { of } from 'rxjs';



describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;
  const mockList: Array<Investiments> = MOCK_LIST;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // é como se fosse um booleano, garantindo uma condição valida. 
  });

  it('(U) shoud list investiments', () => {
    let Investiments = component.investiments;
    spyOn(service, 'list').and.returnValue(of(mockList));


    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(5);

    // expect(Investiments.length).toBe(4); // toBe() é como se fosse (investiments é igual a..);
    // expect(Investiments[0].name).toContain('Itaú'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
    // expect(Investiments[3].name).toContain('Inter'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
  });
  
  it('(I) Should list investiments', () => {
    
    spyOn(service, 'list').and.returnValue(of(mockList));
    component.ngOnInit();
    fixture.detectChanges();

    let Investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    
    expect(Investiments.length).toEqual(5);
    expect(Investiments[0].textContent.trim()).toEqual('Banco 1 | 100'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
    expect(Investiments[3].textContent.trim()).toEqual('Banco 5 | 400'); // toContain() é como se tivesse uma pergunta de que se contem aquele resultado.
    
  }) 
});
