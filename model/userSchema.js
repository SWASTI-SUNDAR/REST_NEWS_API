const mongooose = require('mongoose');
const userSchema = new mongooose.Schema({
  author: {
    type: String,
  },
  source: [
    {
      id: {
        type: String
      },
      name: {
        type: String,
      }
    }
  ],
  title: {
    type: String,
  },
  description: {
    type: String
  },
  url: {
    type: String,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  category: {
   type: String
  },
  content: {
    type: String
  }
})

const News = mongooose.model('NEWS', userSchema);

module.exports = News;