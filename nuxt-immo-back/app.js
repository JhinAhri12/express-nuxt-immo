require('dotenv').config()
const express = require('express');

const app = express();
const mongoose = require('mongoose')
const House = require('./models/house');

mongoose.connect('mongodb+srv://'+process.env.USERNAME+':'+ process.env.PASSWORD +'@cluster0.cdhwbn1.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/house/create', (req, res, next) => {
    const stuff = [
      {
        _id: '1',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: '2',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

  app.use('/house/index', (req, res, next) => {
    House.find()
      .then(houses => res.status(200).json(houses))
      .catch(error => res.status(400).json({ error }));
  });
 
  app.post('/house/create', (req, res, next) => {
    delete req.body._id;
    const house = new House({
      ...req.body
    });
    house.save()
      .then(() => res.status(201).json({ message: 'Bien enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;