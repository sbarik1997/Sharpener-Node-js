const path = require('path');

const fs = require('fs');

const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const fileProducts = (cb) => {
    fs.readFile(filePath, (err,fileContent) => {
        if(err){
          return cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        fileProducts(products => {
            products.push(this);

            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        fileProducts(cb);
    }
}