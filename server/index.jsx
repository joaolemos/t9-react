import express from 'express';
import { utils }  from './utils';
import * as bodyParser from 'body-parser';

const app = express();

let trie = utils.init('server/words.txt');

app.use(bodyParser.json());

app.get('/api', (request, response) => {
  response.send('Hello world from Express');
});

app.post('/api/search', function(req, res) {
  let num = req.body.word;
  let result = utils.searchString(trie, num);
  res.send({
    "res": result
  })
});

app.listen(3000, () => console.log('Server running'));
