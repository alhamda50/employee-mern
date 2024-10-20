const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const empModel = require('../model/employeeData');
const employeeData = require('../model/employeeData');



//get
router.get('/', async(req,res) => {
    try {
        const data = await empModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }
}) 



//post
router.post('/post', async(req,res) => {
    try {
        var item = req.body;
    const data = new empModel(item);
    const savedData = await data.save();
    res.status(200).send('post successful');
    } catch (error) {
        res.status(404).send('post unsuccessful')
    }  
})

//put
router.put('/put/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const data = await empModel.findByIdAndUpdate(id, req.body);
        res.status(200).send('update successful');
    } catch (error) {
        res.status(404).send('update failed')
    }
   
})

//delete
router.delete('/delete/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const data = await empModel.findByIdAndDelete(id, req.body);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(404).send('Delete failed')
    }
   
})



module.exports = router;