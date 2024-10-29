import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';
import { LoadGuard } from './load.guard';
describe('LoadGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => LoadGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});