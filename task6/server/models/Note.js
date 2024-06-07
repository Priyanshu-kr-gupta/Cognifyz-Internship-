const mongoose=require('mongoose');
const notesSchema= new mongoose.Schema({
    user:{
        type:String,  
    },
    content:{
        type:String,
    
    },
    
    date:{
        type:String,
    },

});

module.exports=mongoose.model('note',notesSchema);
