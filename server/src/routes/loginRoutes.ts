import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/', (req, res) => {
	res.send(`
        <div>
            <h1>Hi there</h1>
        </div>
    `);
});

router.get('/login', (req: RequestWithBody, res: Response) => {
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

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

	if (email) {
		res.send(email.toUpperCase());
	} else {
		res.send('Email requ');
	}
});

export { router };
