import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send(`
        <div>
            <h1>Hi there</h1>
        </div>
    `);
});

export { router };
