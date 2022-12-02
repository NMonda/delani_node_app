// const { Console } = require('console');
let express = require('express');
let homeRouter = require('./routes.index');
// let loginRouter = require('./routes.login')
// let aboutRouter = require('./routes.about')
// const { send } = require('process');

let app = express();// createServer()

// app.get('/', (req,res)=>{
//     console.log('Home page');
//     res:send('Home page');
// });

app.use('/',homeRouter);
// app.use('./account',loginRouter);
// app.use('./about',aboutRouter);
 app.set(view)

let PORT = null;
if(process.env.PORT){
    PORT = process.env.PORT;
}else {
    PORT = 5500;
}
app.listen(PORT,()=>{
    Console.log('Server is starting on port ${PORT}')
});
//ejs