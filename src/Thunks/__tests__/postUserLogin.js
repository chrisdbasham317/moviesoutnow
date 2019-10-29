import { postUserLogin } from '../postUserLogin';
import { isLoading, hasErrored, currentUser } from '../../Actions';
import { fetchFavorites } from '../fetchFavorites';

describe('postUserLogin', () => {
  let mockLoginCreds
  let mockDispatch

  beforeEach(() => {
    mockLoginCreds = {
      email: 'chris@me.com',
      password: 'password'
    };
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        id: 2,
        name: 'Chris',
        email: 'chris@me.com'
      })
    }));
  });

  it('should dispatch isLoading(true)', () => {
    const thunk = postUserLogin(mockLoginCreds);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with correct url and options', () => {
    const url = 'http://localhost:3001/api/v1/login/';
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockLoginCreds),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const thunk = postUserLogin(mockLoginCreds);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });
})