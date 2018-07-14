export default async (Mongoose, config) => {
  try {
    return await Mongoose.connect(`${config.get('mongo.host')}`, {
      dbName: config.get('mongo.database')
    });
  } catch(error) {
    throw error;
  }
}
