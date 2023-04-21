const mongoose = require('mongoose');
const { Post } = require('./models');

mongoose.connect('mongodb+srv://thisisjustpeter:XB9VKzco7BIFe9n8@elice.arckh9d.mongodb.net/blog-api-server', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dummyPosts = [
  {
    title: 'Post 1',
    content: 'Content for post 1',
  },
  {
    title: 'Post 2',
    content: 'Content for post 2',
  },
  {
    title: 'Post 3',
    content: 'Content for post 3',
  },
  {
    title: 'Post 4',
    content: 'Content for post 4',
  },
  {
    title: 'Post 5',
    content: 'Content for post 5',
  },
  {
    title: 'Post 6',
    content: 'Content for post 6',
  },
];

(async function () {
  try {
    await Post.deleteMany({});
    const result = await Post.insertMany(dummyPosts);
    console.log(`${result.length} posts have been inserted.`);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
})();
