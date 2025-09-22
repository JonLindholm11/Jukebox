import express from "express";
const router = express.Router();
export default router;
import {
    createPlaylist,
    getTracks,
    createPlaylist_Track,
    getTracksId,
    getPlaylists,
    getTracksByPlaylistId
} from "./query.js"

router
    .route("/tracks")
    .get(async (req, res) => {
        try {
        const response = await getTracks()
        res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    })

router
    .route("/playlists")
    .get(async (req, res) => {
        try {
        const response = await getPlaylists()
        res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    }).post(async (req, res) => {
        try {
            const response = await createPlaylist(req.body)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    })

router
    .route("/tracks/:id")
    .get(async (req, res) => {
        try {
        const response = await getTracksId(req.params.id)
        res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    })

router
    .route("/playlists/:id")
    .get(async (req, res) => {
        try {
        const response = await getTracksId(req.params.id)
        res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    })

router.route(["/playlists/:id/tracks"]).get(async (req, res) => {
    try {
        const playlist_id = req.params.id;
        const response = await getTracksByPlaylistId(playlist_id)

        if (response.length === 0) {
            return res.status(400).json({message: "no tracks in this playlists"})
        }
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}).post(async (req, res) => {
        try {
            const playlist_id = req.params.id;
            const { track_id } = req.body
            const response = await createPlaylist_Track(playlist_id, track_id)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send(error)
        }
    })