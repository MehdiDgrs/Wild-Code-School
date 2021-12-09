const Names = require('../models/Argonaute')

const getArgo = async (req,res) => {
    try{ 
   const getAll = await Names.find({});
   res.status(201).json({getAll})
    }
    catch(err) {
        res.status(500).json({msg:err})
    }

}

const postArgo = async (req,res) => {
    try{
    const thisName = await Names.create(req.body)
    
    res.status(201).json({thisName});
    }
    catch(err){
        res.status(500).json({msg:err})
    }
};

module.exports = {getArgo,postArgo}