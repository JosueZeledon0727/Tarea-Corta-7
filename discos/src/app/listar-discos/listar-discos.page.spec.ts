import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarDiscosPage } from './listar-discos.page';

describe('ListarDiscosPage', () => {
  let component: ListarDiscosPage;
  let fixture: ComponentFixture<ListarDiscosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDiscosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarDiscosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
