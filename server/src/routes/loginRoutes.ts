import { Router, Request, Response, NextFunction} from 'express';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void{
    if (req.session && req.session.loggedIn) {
         next();
         return ;
    } 
    res.status(403);
    res.send('Not premitted');
}

const router = Router();

router.get('/', (req: RequestWithBody, res: Response) => {
    
    if(req.session && req.session.loggedIn){
        res.send(`
        <div>
			<div>You are logged in</div>
			<a href="/logout">Logout</a>
        </div>
    `);
    }else{
        res.send(`
        <div>
			<div>You are not logged in</div>
			<a href="/login">Login</a>
        </div>
    `);
    }
    
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

router.get('/logout', (req: RequestWithBody, res: Response)=> {
    req.session = undefined;
    res.redirect('/');
})

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

	if (email && password && email==='hi@hi.hi' && password === 'password') {
        //mark this person ad logged in
        req.session = {loggedIn: true};
        //redirect them to the root route
        res.redirect('/');
    }else{
        res.send('Invalid email or password!';)
    }
});

router.get('/protected',requireAuth , ( req:Request, res:Response)=>{
    res.send('Welcome to protected route, logged in user');
})

export { router };
