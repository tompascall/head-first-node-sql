exports.index = function (req, res) {
  res.render('index');
}

exports.hello = function (req, res) {
  res.render('hello', { name: 'John' });
};

exports.testPost = function (req, res) {
  console.log('PSTIN', req.body)
  res.render('hello', { name: 'Barbie' });
};