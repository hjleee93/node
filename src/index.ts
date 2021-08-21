import Express from 'express';

const PORT = process.env.PORT ? process.env.PORT : 3000;
const app = Express();

app.get('/', (req:any, res:any) => {
    res.send('index page');
});

app.listen(PORT, () => {
    console.log(`${PORT}번 port에 http server를 띄웠습니다.`);
});