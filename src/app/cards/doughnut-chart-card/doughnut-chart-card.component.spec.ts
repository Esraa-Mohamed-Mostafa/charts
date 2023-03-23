import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DoughnutChartCardComponent } from './doughnut-chart-card.component';

describe('DoughnutChartCardComponent', () => {
  let component: DoughnutChartCardComponent;
  let fixture: ComponentFixture<DoughnutChartCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutChartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
