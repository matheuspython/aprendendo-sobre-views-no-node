exports.paginaInicial = (req, res)=>{
  res.render('index');
}

exports.trataPost = (req, res) =>{
  const {nome} = req.body
  res.send(req.body)
}