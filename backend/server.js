const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./models/routes/auth");
const bookingRoutes = require("./models/routes/booking"); // Add this line
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3522;

app.use(cors());
app.use(bodyParser.json());



// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
 //LOCAL DATABASE
/*   mongoose.connect('mongodb://localhost:27017/CasaBlanca', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})  */


// Include auth routes
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
