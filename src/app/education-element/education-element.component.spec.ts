import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationElementComponent } from './education-element.component';

describe('EducationElementComponent', () => {
  let component: EducationElementComponent;
  let fixture: ComponentFixture<EducationElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
