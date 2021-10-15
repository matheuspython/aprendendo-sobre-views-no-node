exports.middlewareGlobal = (req,res,next) =>{
  console.log()
  console.log('passe no middleware global')
  console.log()
  next()
}

exports.middlewareSecundario = (req,res,next) =>{
  console.log()
  console.log('passe no middleware secundario')
  console.log()
  next()
}