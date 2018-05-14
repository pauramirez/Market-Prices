import { Meteor } from 'meteor/meteor';  
import express from 'express';
const request = require('superagent');
export function setupApi() {  
  const app = express();
  

  app.post('/api/stocks/portafolio', function (req, res, next) {
    const apiKey = 'UW88YO72CML3PNC9';
    const tickers = ['MSFT'];

    let completed = 0;
    const results = [];
    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=UW88YO72CML3PNC9
    for (let i = 0; i < tickers.length; i++) {
        const ticker = tickers[i];
        request
            .get('https://www.alphavantage.co/query')
            .query({ function: 'TIME_SERIES_DAILY' })
            .query({ symbol: ticker })
            .query({ apikey: apiKey })
            .then((response) => {
                completed += 1;
                //console.log('res', res.body['Meta Data']);
                results.push(response.body);
                if (completed == tickers.length) 
                {
                    //all tckers are completed

                    console.log('completed');

                    res.send({
                        success: true,
                        message:'Ticker Info',
                        results: results,
                    });
                }

            });

    }

});

  WebApp.connectHandlers.use(app);
}
