import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from  "dotenv"

const port=process.env.PORT || 9090;
const app = express();
app.use(express.json());
dotenv.config();



app.use(cors())


const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://jayantjagtap001:d6BV24jubvuyNCTz@cluster0.2upgx0j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Mongo is Connected...");
  } catch (error) {
    console.log(error);
  }
};
db();

const mydata = new mongoose.Schema({
  First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Role: { type: String, required: true },
  ProfileImg: { type: String, required: true },
  LinkedIn: { type: String, required: true },
  Twitter: { type: String, required: true },
});

const usertable = mongoose.model("Resident_Card", mydata);

app.post("/postData", async (req, res) => {
  try {
    let addData = new usertable(req.body);
    await addData.save();
    console.log(addData);
    res.status(200).json({ message: addData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

app.get("/getData", async (req, res) => {
  try {
    const getData = await usertable.find();
    console.log(getData);
    res.status(200).json({ message: getData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.listen(port, () => {
  console.log(`Server is Running at port http://localhost:${port}`);
});
