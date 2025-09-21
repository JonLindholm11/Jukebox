import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createPlaylist_Track, createPlaylist, createTrack } from "./query.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  await seedPlaylists();
  await seedTracks();
  await seedPlaylists_Tracks();
}

async function seedPlaylists() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const playlists_name = faker.internet.username();
    const playlists_description = faker.company.name();

    try {
      const response = await createPlaylist({
        playlists_name,
        playlists_description,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

async function seedTracks() {
  // TODO
  for (let i = 0; i < 20; i++) {
    const track_name = faker.music.songName();
    const track_duration = faker.number.int({
      max: 480000,
      min: 6000,
      multipleOf: 100,
    });

    try {
      const response = await createTrack({
        track_name,
        track_duration,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

async function seedPlaylists_Tracks() {
  // TODO
  const playlist_id_result = await db.query("SELECT id FROM playlists");
  const tracks_id_result = await db.query("SELECT id FROM tracks");

  const playlistIds = playlist_id_result.rows.map((row) => row.id);
  const tracksIds = tracks_id_result.rows.map((row) => row.id);

  for (let i = 0; i < 15; i++) {
    const randomPlaylistId = playlistIds[Math.floor(Math.random() * playlistIds.length)];
    const randomTrackId = tracksIds[Math.floor(Math.random() * tracksIds.length)];

    try {
      const response = await createPlaylist_Track({
        playlist_id: randomPlaylistId,
        track_id: randomTrackId,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}