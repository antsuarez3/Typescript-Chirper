import * as express from 'express';
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore"

const router = express.Router();

// Get all chirps
router.get("/", (req: express.Request, res: express.Response) => {
    res.send(GetChirps());
});

// Get one chirp
router.get("/:id", (req: express.Request, res: express.Response) => {
    const id: string = req.params.id
    res.send(GetChirp(id));
});

// Create new chirp
router.post("/", (req: express.Request, res: express.Response) => {
    let chirpObj: chirp = {
        username: req.body.username,
        message: req.body.message
    };
    CreateChirp(chirpObj);

    res.sendStatus(200);
});

// Edit a chirp
router.put("/:id", (req: express.Request, res: express.Response) => {
    const id: string = req.params.id
    let chirpObj: chirp = {
        username: req.body.username,
        message: req.body.message
    };
    UpdateChirp(id, chirpObj);

    res.sendStatus(200);
});

// Delete a chirp
router.delete("/:id", (req: express.Request, res: express.Response) => { 
    const id: string = req.params.id
    DeleteChirp(id);

    res.send(`chirp ${(id)} was deleted`);
});

interface chirp {
    username: string,
    message: string
}

export default router;