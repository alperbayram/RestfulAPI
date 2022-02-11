const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  MONGO_URI: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zzeey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
