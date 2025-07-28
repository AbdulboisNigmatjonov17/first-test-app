import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import { HttpTestingController, provideHttpClientTesting, HttpClientTestingModule } from "@angular/common/http/testing";

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClientTesting()]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getch users', () => {
    const mockData = ['John', 'Doe'];

    service.getUsers().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockData);
    })

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  })

  it('should post new user', () => {
    const newUser = 'John';

    service.addUser(newUser).subscribe((res) => {
      expect(res).toEqual('Success');
    })

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name: 'John' });

    req.flush('Success');
  })

  it('should handle error', () => {
    service.getUsers().subscribe({
      next: () => fail('should have failed with 404'),
      error: (error) => expect(error.status).toBe(500)
    })

    const req = httpMock.expectOne('/api/users');
    req.flush('Error', { status: 500, statusText: 'Internal Server Error' });
  })
})

// it('should get users', () => {
//   service.getUsers().subscribe((data) => {
//     expect(data.length).toBeGreaterThan(0);
//   })
// });

// it('should add user', (done) => {
//   service.addUser('John');

//   service.getUsers().subscribe((users) => {
//     expect(users).toContain('John');
//     expect(users.length).toBe(3);
//     done();
//   })
// })