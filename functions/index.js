const request = require('request-promise');
const endpoint = "https://api.github.com/users";
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36';

const urls = [
    `${endpoint}/kinfol`,
    `${endopint}/kinfol/repos`,
    `${endpoint}/kinfol/repos`
];

(async function main() {
    try {

    // loop over and call all the endpoints 

    // do something else when we're done
        const res = await request({
            url: `${endpoint}/kinfol`,
            method: 'GET',
            headers: {
                'User-Agent': ua
            }
        });
        console.log(res);

    } catch (e) {
    console.log(e.message);
}
})();
