import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LineChartCardComponent } from './line-chart-card.component';

describe('LineChartCardComponent', () => {
  let component: LineChartCardComponent;
  let fixture: ComponentFixture<LineChartCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
