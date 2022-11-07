import { getToken } from "../src/utils";
import { expect } from 'chai';

describe('GetToken', () => {
  it('Splits the token, checks Bearer and returns the tail', () => {
    expect(getToken('Bearer xxxyyyzzz')).to.equal('xxxyyyzzz');
    expect(getToken('NotABearer xxxyyyzzz')).to.equal('Not a bearer token!');
  });
});