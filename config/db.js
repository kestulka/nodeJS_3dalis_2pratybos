const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`connected to database ${connecting.connection.host}`);
  } catch (error) {
    console.error("could not connect", error);
  }
};

module.exports = connectToDB;
