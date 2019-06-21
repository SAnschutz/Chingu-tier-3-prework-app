const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());

app.get('/api/roverquery/:sol/:camera/:page?', (req, res) => {
  // // app.get('/api/roverquery', (req, res) => {
  const sol = req.params.sol;
  const camera = req.params.camera;
  const page = req.params.page ? req.params.page : 1;

  request(
    {
      url: `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&page=${page}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('there was an error fetching photos');
      }
      const numOfPhotos = body.photos.length;
      const images = body.photos.map(photo => photo.img_src);

      res.send({ numOfPhotos, images });
    }
  );
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
