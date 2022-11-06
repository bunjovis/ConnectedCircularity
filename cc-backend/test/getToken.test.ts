import { expect } from 'chai';
//var chai = require("chai");
//var app = require("../dist/src/index.js")
//var getToken = require("../dist/src/utils.js");
import { getToken } from '../src/utils';

describe('GetToken', () => {
  it('Splits the token and returns the tail', () => {
    expect(getToken('Bearer xxxyyyzzz')).to.equal('xxxyyyzzz');
    expect(getToken('NotABearer xxxyyyzzz')).to.equal('Not a bearer token!');
  });
});
