import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send(`
        <div>
            <h1>Hi there</h1>
        </div>
    `);
});

router.get('/login', (req: Request, res: Response) => {
	res.send(`
    <form method="POST">
        <div>
            <label for="">Email</label>
            <input type="text" name="email" />
        </div>
        <div>
            <label for="">Password</label>
            <input type="password" name="password" />
        </div>
        <button>Submit</button>
    </form>
    `);
});

router.post('/login', (req: Request, res: Response) => {
	const { email, password } = req.body;

	res.send(email + password);
});

export { router };
