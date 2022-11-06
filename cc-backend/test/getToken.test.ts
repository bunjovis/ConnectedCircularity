import { expect } from 'chai';
import { getToken } from '../src/utils';

describe('GetToken', () => {
  it('Splits the token, checks Bearer and returns the tail', () => {
    expect(getToken('Bearer xxxyyyzzz')).to.equal('xxxyyyzzz');
    expect(getToken('NotABearer xxxyyyzzz')).to.equal('Not a bearer token!');
  });
});
