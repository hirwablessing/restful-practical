import 'dotenv/config';
import express from 'express';
import { Swaggiffy } from 'swaggiffy'; // Import Swaggiffy for documentation
import cors from 'cors';
import db from './database';
import authRoute from './routes/auth.routes';
import ownersRoute from './routes/owner.routes';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to the Vehicle tracking system API',
        client: "Rwanda Revenue Authority",
    })
});

new Swaggiffy().setupExpress(app).swaggiffy(); // Setup Swaggiffy for documentation

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/owners', ownersRoute);


const PORT = 5000;
app.listen(PORT, () => {
    console.log("App running on port ...  " + PORT);
})