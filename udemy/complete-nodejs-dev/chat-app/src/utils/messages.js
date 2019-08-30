const generateMessage = text => {
  return {
    text,
    createdAt: new Date().getTime()
  };
};

const generateLocationMessage = (latitude, longitude) => {
  return {
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage
};
