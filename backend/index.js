/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");
const connectDB = require("./dataBase/database");
const User = require("./models/userModels.js");
const Cource = require("./models/courcesModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

// Connect to MongoDB
connectDB();

//
const secretKey = "jsonwebtoken";
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//middleware to Protect Routes
const authenticateToken = (req, res, next) => {
  const token = req.hedder("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
};

// Routes
app.get("/", async (req, res) => {
  try {
    const cources = await Cource.find();
    res.json({ cources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//
// Gettting detail
app.get("/detail/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const detailCources = await Cource.findOne({ _id: id });
    res.json({ detailCources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//add to cart
app.post("/cart", async (req, res) => {
  try {
    const { courceId, userId } = req.body;
    await User.findByIdAndUpdate(userId, {
      $push: { coursesAdded: courceId },
    });

    res.status(200).json({ message: "Course added to the cart successfully" });
  } catch (error) {
    console.error("Error adding course to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//

//Creating a course
app.post("/createCource", async (req, res) => {
  const {
    courceTitle,
    courceImageUrl,
    courceDescription,
    courcePrice,
    userId,
  } = req.body;
  try {
    newCource = new Cource({
      courceTitle,
      courceImageUrl,
      courceDescription,
      courcePrice,
      userId,
    });
    await newCource.save();

    // adding the cource id to user object

    await User.findByIdAndUpdate(userId, {
      $push: { coursesCreated: newCource._id },
    });

    //
    res.status(200).json({ message: "Cource added successfully" });
  } catch (error) {
    console.error("Error adding Cource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//SignUp

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add user to the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User added successfully:", newUser);
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Login

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "User not Valid" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // res.status(200).json({ message: "Login successful" });
    


    //assigning tokens to the users
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error during login:", error);

    if (error.response) {
      console.error("Response details:", await error.response.json());
    }

    console.error("An error occurred during login. Please try again.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App is  listening  on port ${port}`);
});
