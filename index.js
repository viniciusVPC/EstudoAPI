const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'camisa',
        size: 'large'
    })

});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Insira uma logo!' })
    }

    res.send({
        tshirt: `camisa com a sua logo: ${logo} e ID de ${id}`,
    });

});