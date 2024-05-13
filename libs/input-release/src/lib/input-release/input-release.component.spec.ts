import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputReleaseComponent } from './input-release.component';

describe('InputReleaseComponent', () => {
  let component: InputReleaseComponent;
  let fixture: ComponentFixture<InputReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputReleaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
