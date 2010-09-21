var express = require ('express')

app.get('/helloworld', function(req, res){
  res.render('index.jad', {
    locals:{
      hello: 'hello world'
    }
  });
});


app.listen(3000, function(){  
});
