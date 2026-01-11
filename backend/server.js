const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Item = require('./models/Item');
const User = require('./models/User');


const app = express();
const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/crudDB')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));

app.use(cors());
app.use(express.json());

// USER SCHEMA
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// AUTHENTICATION 

// AUTH MIDDLEWARE
function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch {
    res.status(400).json({ message: 'Invalid token' });
  }
}

// REGISTER ROUTE
app.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  await user.save();
  res.status(201).json({ message: 'User registered' });
});

// LOGIN ROUTE
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign(
    // { userId: user._id }, // without role
    { userId: user._id, role: 'admin' }, // with role(role-based)
    'secret_key',
    { expiresIn: '1h' }
  );

  res.json({ token });
});


// HTTP ROUTE
// let items = [
//     {
//         id: '1',
//         name: 'Fridge',
//         location: 'Apapa',
//         cost: '300' 
//     },
//     {
//         id: '2',
//         name: 'Fan',
//         location: 'illupeju',
//         cost: '150' 
//     },
//     {
//         id: '3',
//         name: 'Television',
//         location: 'iyan-ipaja',
//         cost: '700' 
//     },
//     {
//         id: '4',
//         name: 'Generator',
//         location: 'surulere',
//         cost: '800' 
//     },
// ]

// MONGO DB SCHEMA
// const itemSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   cost: String
// });

// const Item = mongoose.model('Item', itemSchema);


// GET
app.get('/items', auth, async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// POST
app.post('/items', async (req, res) => {
    // const newItem = {
    //     id:Date.now().toString(),
    //     name: req.body.name,
    //     location: req.body.location,
    //     cost: req.body.cost,
    // };

    // items.push(newItem);
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
});

// PUT
app.put('/items/:id', async (req, res) => {
    // const { id } = req.params;

    // items = items.map(item => 
    //     item.id === id ? {...item, 
    //         name: req.body.name ?? item.name, // for name
    //         location: req.body.location ?? item.location, // for location
    //         cost: req.body.cost ?? item.cost // for cost
    //      } : item
    // );

    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.json({message: 'item updated'});
});

// DELETE
app.delete('/items/:id', async (req, res) => {
    // const { id } = req.params;
    // items = items.filter(item => item.id !== id);

    await Item.findByIdAndDelete(req.params.id);
    res.json({message: 'item deleted'});
});


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

