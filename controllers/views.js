const requestIp = require("request-ip");
const { client } = require("../db/client");

const getViews = async (req, res) => {
  try {
    const clientIP = requestIp.getClientIp(req);
    const mongoClient = await client.connect();
    const db = mongoClient.db("data");
    const collection = db.collection("views");
    const views = await db.collection("views").countDocuments();
    const searchByIp = await collection.findOne({ IP: clientIP });

    if (searchByIp) {
      res.status(200).json({ views });
    } else {
      await collection.insertOne({ IP: clientIP });
      res.status(200).json({ views: views + 1 });
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getViews };
