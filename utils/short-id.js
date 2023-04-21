const { nanoid } = require('nanoid');

exports.shortId = {
  type: String,
  default: () => {
    return nanoid();
  },
  required: true,
  index: true,
};