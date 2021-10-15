
app.get('/testes/:idUsiarios?/:parametro?', (req, res)=>{
  console.log(req.params)//params 
  console.log(req.query)// variaveis da url
  const {idUsiarios} = req.params
  console.log(idUsiarios) 
  res.send(req.params)
})

app.post('/', (req, res)=>{
  console.log(req.body)
  const {nome} = req.body
  res.send(`o seu nome é ${nome}`)
})