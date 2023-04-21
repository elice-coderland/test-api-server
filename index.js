const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRouter  = require('./routes/postsRouter');
const app = express();

mongoose.connect(`mongodb+srv://thisisjustpeter:XB9VKzco7BIFe9n8@elice.arckh9d.mongodb.net/blog-api-server`)
  .then((res) => console.log('DB connected'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Blog');
});

app.use('/posts', postsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});


app.listen(8080, () => {
  console.log('The Server is Listening...!');
});