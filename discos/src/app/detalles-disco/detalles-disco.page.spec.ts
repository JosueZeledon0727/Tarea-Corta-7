import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesDiscoPage } from './detalles-disco.page';

describe('DetallesDiscoPage', () => {
  let component: DetallesDiscoPage;
  let fixture: ComponentFixture<DetallesDiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesDiscoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesDiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
