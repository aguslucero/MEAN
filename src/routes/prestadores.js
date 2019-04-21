const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db = mongojs('mean-tasks', ['Prestadores']);

// GET All tasks
router.get('/Prestadores', (req, res, next) => {
    db.prestadores.find((err, prestadores) => {
        if (err) return next(err);
        res.json(prestadores);
    });
});

// Single Task
router.get('/prestadores/:id', (req, res, next) => {
    db.prestadores.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if (err) return next(err);
        res.json(prestador);
    });
});

// Add a Task
router.post('/prestadores', (req, res, next) => {
    const prestador = req.body;
    if(!prestador.nombre) {
        res.status(400).json({
            'error': 'datos erroneos'
        });
    } else {
        db.prestadores.save(prestador, (err, prestador) => {
            if (err) return next(err);
            res.json(prestador);
        });
    }
});

// Delete task
router.delete('/prestadores/:id', (req, res, next) => {
    db.prestadores.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if(err){ res.send(err); }
        res.json(prestador);
    });
})


module.exports = router;