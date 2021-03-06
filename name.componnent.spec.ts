import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NameService } from './name.service';
import { NameComponent } from './name.component';

describe('NameComponent', () => {
  let nameServiceSpy: jasmine.SpyObj<NameService>;
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;

  beforeEach(() => {
    nameServiceSpy = jasmine.createSpyObj('NameService', ['loadName', 'name$']);

    TestBed.configureTestingModule({
      declarations: [ NameComponent ],
      providers: [ { provide: NameService, useValue: nameServiceSpy } ]
    });

    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Checking component creation
    expect(component).toBeTruthy();
  });

  it('should call loadName on NameService', () => {
    fixture.detectChanges();

    // Checking loadName call
    expect(nameServiceSpy.loadName).toHaveBeenCalledWith();
  });

  it('should display NameService name', () => {
    // Setting name in service
    nameServiceSpy.name$.and.returnValue(of('the name'));

    fixture.detectChanges();

    // Checking displayed name
    expect(fixture.debugElement.nativeElement.innerText).toEqual('the name');
  });
});
