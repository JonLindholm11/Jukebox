import express from "express";
const router = express.Router();
export default router;
import {
    createPlaylist,
    createTrack,
    createPlaylist_track
} from "./query.js"

router
    .route("/tracks")
    .get(async (req, res) => {
        try {
        const response = await createTrack()
        res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    })
router
    .route("/tracks/:id")
    .get(async (req, res) => {
        
    })