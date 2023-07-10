const mongoose = require('mongoose');

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log('Connection Sucessful...!!!')
})
.catch((err)=>console.log('Failure Occured...!!!'));