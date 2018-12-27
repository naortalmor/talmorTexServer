import app from './app';

const port = 1111;

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`server is listening on ${port}`)
    }
});