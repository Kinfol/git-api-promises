const request = require('request-promise');
const endpoint = 'https://api.github.com/users';
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36';

const urls = [
    `${endpoint}/kinfol`,
    `${endpoint}/Kinfol/repos`,
    `${endpoint}/Kinfol/subscriptions`,
];

(async function main() {
    try {

    // loop over and call all the endpoints
    const result = await Promise.all(urls.map((url) => {
        return request({
            url,
            method: 'GET',
            headers: {
                'User-Agent': ua
            }
        });
    }));
    
    console.log('done the loop')
    console.log('res 1', result[0]);
    console.log('res 1', result[1]);

    } catch (e) {
    console.log(e.message);
}
})();
