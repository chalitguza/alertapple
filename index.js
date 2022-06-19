const api = require('./api.js');
const sleep = require('./sleep.js');
const component = require('./component.js');
const fs = require('fs')
const path = './file.txt'
var lineNotify = require('line-notify-nodejs')('----------- This Token LINE ------------');
(async () => {

    await api()

    let i = 0;
    while (true) {
        // console.clear()
        let msg = await component.app2()
        console.log( 'Loop = ' ,i , msg)

        if(msg == 'เปิดให้ซื้อ Macbook Air M2 แล้ว'){

            /////////////////
            fs.access(path, fs.F_OK, (err) => {
                if (err) {
                    console.log('Not file')
                    fs.writeFile('file.txt', msg, function (err) {
                        if (err) throw err;
                        console.log('File is created successfully.');
                      });
                    lineNotify.notify({
                    	message: `\n\n😎${msg}🤖\n`,
                      }).then(() => {
                    	console.log('send completed!');
                      });
                  return
                }
              
               console.log('File found..')
                    
              })

            /////////////////
        }
        await sleep(3)
        i++;
    }

})();






