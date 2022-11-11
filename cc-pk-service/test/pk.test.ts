import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);
import { getUserSurveys } from "../src/handleData";
import { expect } from 'chai';
import { Survey } from '../src/types';
const { assert } = require('chai')

const survey:Survey[] = [{
  id: "string",
  status: "DONE",
  type: "string",
  metadata: {
    creatorId: "creatorID",
    createdAt: new Date,
    lastModifierId: "string",
    modifiedAt:  new Date
  }
}];

describe('Get User Surveys', function () {
    it("should return User Survey list", async () => {    
      
      mock.onGet(`https://api.purkukartoitus.fi/v1/surveys`).reply(200, survey);
      // when
      const result =  await getUserSurveys("anyToken","creatorID");
      expect(result[0].id).to.equal(survey[0].id);  
      assert.isNotNull(result);   
    });
})
