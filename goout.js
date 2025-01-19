fetch("https://www.ceair.com/portal/v3/shopping/briefInfo", {
    headers: {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "content-type": "application/json;charset=UTF-8",
      "currencycode": "CNY",
      "languagecode": "zh",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-tingyun": "c=B|q-39mIdownM;x=847fe285bb244549"
    },
    referrer: "https://www.ceair.com/shopping?eyJ0cmF2ZWxUeXBlIjoib25ld2F5IiwicGFzc2VuZ2VyTnVtIjoiMSwwLDAiLCJkZXBDaXR5IjoiU0hBIiwiYXJyQ2l0eSI6IkJKUyIsImRlcFZhbHVlcyI6IlNIQSxQVkciLCJhcnJWYWx1ZXMiOiJQRUssUEtYIiwiZGVwQ2l0eU5hbWUiOiLkuIrmtbciLCJhcnJDaXR5TmFtZSI6IuWMl+S6rCIsImRhdGUiOiIyMDI1LTAxLTA1IiwiY2FiaW5DbGFzcyI6IkFMTCIsInBheVdheSI6Im1vbmV5IiwiZGVwU2VsZWN0VmFsdWUiOiJTSEEsUFZHIiwiYXJyU2VsZWN0VmFsdWUiOiJQRUssUEtYIiwiZGVwTGFiZWwiOiIiLCJhcnJMYWJlbCI6IiIsImlzQXJyQ2l0eSI6dHJ1ZSwiaXNEZXBDaXR5Ijp0cnVlLCJhcnJDbiI6IkNOIiwiZGVwQ24iOiJDTiIsInQiOjE3MzYwNTcxMjUwMTB9encoded",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "{\"adultCount\":1,\"arrCityCode\":\"BJS\",\"arrCode\":\"PEK,PKX\",\"arrDate\":\"\",\"childCount\":0,\"depCityCode\":\"SHA\",\"depCode\":\"SHA,PVG\",\"depDate\":\"2025-01-05\",\"infantCount\":0,\"routeType\":\"OW\",\"onlyPlaneFlag\":false,\"cabinLevel\":\"\",\"verifyUrl\":\"/portal/v3/shopping/briefInfo?SHABJS2025-01-05\"}",
    method: "POST",
    mode: "cors",
    credentials: "include"
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    console.log(data); // This will log the JSON data
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });