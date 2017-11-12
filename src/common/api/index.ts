import { City, Time } from '../state'

const apiUrl = 'http://www.convert-unix-time.com/api?timestamp=now'

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

export async function getTimeStamp(city: City = City.Amsterdam): Promise<Time> {
    await timeout() // some extra delay for fun
    let finalUrl = apiUrl + '&timezone=' + city

    let request = new Request(finalUrl, {
        mode: 'cors'
    })

    let response = await fetch(request)
    let data = await response.json()
    console.log(data)
    if (data.timestamp && data.localDate) {
        const spaceSplitted = data.localDate.split(' ')
        const colonSplitted = spaceSplitted[spaceSplitted.length - 2]
        const seconds = colonSplitted[colonSplitted.length - 1]
        const time = { timestamp: data.timestamp, seconds: seconds, location: city } as Time
        return time
    } else {
        throw new Error('No timestamp data in response')
    }
}

function timeout() {
    return new Promise(resolve => setTimeout(resolve, 1000))
}