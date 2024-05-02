import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorybookHostBotaoComponent } from './storybook-host-botao.component';

describe('StorybookHostBotaoComponent', () => {
  let component: StorybookHostBotaoComponent;
  let fixture: ComponentFixture<StorybookHostBotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorybookHostBotaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StorybookHostBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
