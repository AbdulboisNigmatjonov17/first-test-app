import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    service.getUsers().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
    })
  });

  it('should add user', (done) => {
    service.addUser('John');

    service.getUsers().subscribe((users) => {
      expect(users).toContain('John');
      expect(users.length).toBe(3);
      done();
    })
  })
})