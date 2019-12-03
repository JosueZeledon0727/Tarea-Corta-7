import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarDiscoPage } from './editar-disco.page';

describe('EditarDiscoPage', () => {
  let component: EditarDiscoPage;
  let fixture: ComponentFixture<EditarDiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDiscoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarDiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
