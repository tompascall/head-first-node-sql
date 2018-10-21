exports.hello = function(req, res){
  res.render('hello', { name: 'John' });
};