const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

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

      // if (page === 1 && images.length < 1) {
      //   return res.send('No photos available');
      // } else if (page > 1 && images.length < 1) {
      //   return res.send('No more photos available');
      // }
      // res.send(images);
    }
  );
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
