const request = require('request-promise');
var flowerPots = {
    flowerPot1: 3,
    flowerPot2: 2,
    flowerPot3: 4,
    // ...
};


(async function main() {
    try {
    const [flowerPot1, repos, subs] = await Promise.all(flowerPots.map(x => x *2 ));
    
    return request({
        
    })
    console.log('result', flowerPot1)
    } catch(e) {
        console.log(e.message)
    };
});