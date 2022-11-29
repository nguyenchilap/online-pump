import mongoose from 'mongoose';

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/online_pump', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect succesfully!!!');
    }
    catch (error) {
        console.log('Connect failed!!!');
    }
}

export default {connect};