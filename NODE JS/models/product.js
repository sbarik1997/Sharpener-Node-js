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
    constructor(id,title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        fileProducts(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            }else{
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(filePath, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
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

    static deleteProductById(id){
        fileProducts(products => {
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
                console.log(err);
            });
        })
    }
}