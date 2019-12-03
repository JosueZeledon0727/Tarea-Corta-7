import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarDiscosPage } from './eliminar-discos.page';

describe('EliminarDiscosPage', () => {
  let component: EliminarDiscosPage;
  let fixture: ComponentFixture<EliminarDiscosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarDiscosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarDiscosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
