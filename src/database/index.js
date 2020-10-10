import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    //const url = 'mongodb+srv://usuario_admin:eIFybP6tlALclj1G@cluster0.yrkiv.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority'
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://usuario_admin:eIFybP6tlALclj1G@cluster0.yrkiv.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  }
}

export default new Database();
