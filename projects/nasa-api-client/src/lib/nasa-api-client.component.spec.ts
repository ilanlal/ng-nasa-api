import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaApiClientComponent } from './nasa-api-client.component';

describe('NasaApiClientComponent', () => {
  let component: NasaApiClientComponent;
  let fixture: ComponentFixture<NasaApiClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaApiClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaApiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
