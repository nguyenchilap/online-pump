import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const History = new Schema({
    temperature: Number,
    airHuminity: Number,
    soilMoisture: Number
}, {
    timestamps: true,
    id: true
});

//plugin
History.plugin(paginate);

export default mongoose.model('History', History, 'histories');