const express = require('express');
const app = express();
const cors = require('cors');
const routeRole = require('./routes/routeRole');
const routeUser = require('./routes/routeUser');
const routeDieu = require('./routes/routeDieu');
const routeAction = require('./routes/routeAction');

app.use(cors());
app.use(express.json());

app.use('/pantheon/role', routeRole);
app.use('/pantheon/utilisateur', routeUser);
app.use('/pantheon/dieu', routeDieu);
app.use('/pantheon/action', routeAction);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

