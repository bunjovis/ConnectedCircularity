import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);
import { getUserSurveys } from "../src/handleData";
import { expect } from 'chai';
import { Survey } from '../src/types';



describe('Array', function () {
  describe('#indexOf()', function () {


    it("should return users list", async () => {
      // given

      const survey:Survey = {
        id: "string",
        status: "DONE",
        type: "string",
        metadata: {
          creatorId: "creatorID",
          createdAt: new Date,
          lastModifierId: "string",
          modifiedAt:  new Date
        }
      }
      
      mock.onGet(`https://api.purkukartoitus.fi/v1/surveys`).reply(200, survey);

      // when
      const result =  await getUserSurveys("anyToken","creatorID");
      console.log(result);

   //   expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`);
   //   expect(result.data).toEqual(users);
    });


  });
})
