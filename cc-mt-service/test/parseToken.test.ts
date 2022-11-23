import { expect } from 'chai';
import { parseToken } from '../src/handleData';


describe('parseToken', () => {
  it('splits token and returns the tail or empty string if not Bearer + token', () => {
    expect(parseToken('Bearer abcde')).to.equal('abcde');
    expect(parseToken('xyz')).to.equal('');
    expect(parseToken('')).to.equal('');
  });
});