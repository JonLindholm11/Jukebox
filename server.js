import app from "#app";
import db from "#db/client";
import playlists_router from "./db/playlist_tracks.js"

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.use(playlists_router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
