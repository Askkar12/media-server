const JSONserver=require('json-server')
const MPserver=JSONserver.create()
const router=JSONserver.router('db.json')
const middileware=JSONserver.defaults()

const PORT=3000 || process.env.PORT

MPserver.use(middileware)
MPserver.use(router)


MPserver.listen(PORT,()=>{
    console.log((`MediaPlayer server running at PORT:${PORT} & waiting  for client request...`));
    
})