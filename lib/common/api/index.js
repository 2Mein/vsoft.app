"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../state");
const apiUrl = 'http://www.convert-unix-time.com/api?timestamp=now';
/* JSON response:
{
  "localDate":"Wednesday 18th October 2017 03:03:13 PM",
  "utcDate":"Wednesday 18th October 2017 03:03:13 PM",
  "format":"l jS F Y h:i:s A",
  "returnType":"json",
  "timestamp":1508338993,
  "timezone":"UTC",
  "daylightSavingTime":false,
  "url":"http:\/\/www.convert-unix-time.com?t=1508338993"
}
*/
function getTimeStamp(city = state_1.City.Amsterdam) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(); // some extra delay for fun
        let finalUrl = apiUrl + '&timezone=' + city;
        let request = new Request(finalUrl, {
            mode: 'cors'
        });
        let response = yield fetch(request);
        let data = yield response.json();
        console.log(data);
        if (data.timestamp && data.localDate) {
            const spaceSplitted = data.localDate.split(' ');
            const colonSplitted = spaceSplitted[spaceSplitted.length - 2];
            const seconds = colonSplitted[colonSplitted.length - 1];
            const time = { timestamp: data.timestamp, seconds: seconds, location: city };
            return time;
        }
        else {
            throw new Error('No timestamp data in response');
        }
    });
}
exports.getTimeStamp = getTimeStamp;
function timeout() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
//# sourceMappingURL=index.js.map