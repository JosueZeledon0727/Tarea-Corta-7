import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearDiscoPage } from './crear-disco.page';

describe('CrearDiscoPage', () => {
  let component: CrearDiscoPage;
  let fixture: ComponentFixture<CrearDiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDiscoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearDiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
