import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getVBallRes() {
    try {
        const response = await fetch('https://volleybox.net/japan-t286/matches');
        const body = await response.text();
        const $ = cheerio.load(body);  
        
        const results = []
        $('#matches_list_23070').map((i, el) => {
            var result = $(el).find('.paddingTop15').text();
            console.log(result)
            results.push(result);
        })

        /*console.log(results);*/

    } catch (error) {
        console.log(error);
    }
}

getVBallRes();