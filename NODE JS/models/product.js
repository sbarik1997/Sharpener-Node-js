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
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        this.id = Math.random().toString();
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

    static findById(id, cb){
        fileProducts(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }
}