const Project = require("../models/project.model")

module.exports.index = (req, res)=>{
    res.json({
        message: "safely connected to the back-end"
    })
}

module.exports.createAuthor =(req, res)=>{
    console.log(req.body)
    Project.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch( err => res.status(400).json(err))
}


module.exports.getAllAuthors = (req,res)=>{
    // Project.find({}).collation({locale:'en', strength:2}).sort({title:1})
    Project.find({}).sort({title:1,age:-1})
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req,res)=>{
    console.log("findOne",req.params.id)
    Project.findOne({_id:req.params.id})
    .then( foundItem => res.json(foundItem))
    .catch(err=> res.status(400).json(err))
}

module.exports.updateOne = (req,res)=>{
    Project.findOneAndUpdate({_id:req.params.id}, req.body, {new:true , runValidators:true})
    .then( updatedItem => res.json(updatedItem))
    .catch( err => res.status(400).json(err))
}

module.exports.deleteOne = (req, res)=>{
    
    console.log("deleteOne",req.params.id)
    Project.deleteOne({_id: req.params.id})
    .then( result => res.json(result))
    
}