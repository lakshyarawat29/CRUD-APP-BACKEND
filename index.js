const express = require("express");
const mongoose = require("mongoose") 
const Product = require('./models/product.model.js')                 
const app = express();
const productRoute = require('./routes/product.route.js')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//url for the route directory
app.use("/api/products", productRoute);

app.get('/',function(req,res){
    res.send("HELLO CUTE WORLD")
})

//find a particular product

// app.get('/api/products/:id',async(req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

// show all the products

// app.get('/api/products', async(req,res) =>{
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

//create or add a new product

app.post('/api/products', async(req,res) =>{
    try{
       const product =  await Product.create(req.body)
       res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }

})

// update a product
//put is used to update


// app.put('/api/products/:id',async(req,res) =>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);

//         if(!product){
//             return res.status(404).json({message: "Product Not Found"});
//         }

//         const updatedProduct =  await Product.findById(id)
//         res.status(200).json({updatedProduct});
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// })


//delete a product

// app.delete('/api/products/:id', async(req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id); 
//         if(!product){
//             return res.status(404).json({message: "Product Not Found"});
//         }
//         res.status(200).json({message: "Last Deleted Data: " + product})
//     }catch(error){
//         res.status(500).json({message: error.message})
//     }
// })



mongoose.connect('mongodb+srv://22ucs113BE:D7yratTDn4zl39DA@backenddb.daiydep.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {console.log("Connected to the DATABASE!!!!")

app.listen(3000, () =>{
    console.log("Listening to the portNo: 3000")
});

})

.catch(() => {
    console.log("Connection Failure--")
})
