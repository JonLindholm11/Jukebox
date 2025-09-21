import db from "./client.js";

export async function joinPlaylist_track() {
  try {
    const SQL = `
        SELECT p.id, t.id from playlists_tracks as pt
        JOIN playlists as p on pt.playlists_id = p.id
        JOIN tracks as t on pt.tracks_id = t.id
        `;
    const { rows: pt } = await db.query(SQL);
    console.log(pt);
    return pt;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlaylist_Track({ playlist_id, track_id }) {
  try {
    const SQL = `
        INSERT INTO playlists_tracks (playlist_id, track_id)
        VALUES($1, $2) RETURNING *
        `;
    const { rows: playlists_tracks } = await db.query(
      SQL, [playlist_id, track_id]
    );
    return playlists_tracks;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlaylist({ playlists_name, playlists_description }) {
  try {
    const SQL = `
        INSERT INTO playlists (playlists_name, playlists_description)
        VALUES($1, $2) RETURNING *
        `;
    const { rows: playlist } = await db.query(SQL, [
      playlists_name,
      playlists_description,
    ]);
    console.log(playlist);
    return playlist;
  } catch (error) {
    console.error(error);
  }
}

export async function createTrack({ track_name, track_duration }) {
  try {
    const SQL = `
        INSERT INTO tracks (track_name, track_duration)
        VALUES($1, $2) RETURNING *
        `;
    const { rows: track } = await db.query(SQL, [track_name, track_duration]);
    console.log(track);
    return track;
  } catch (error) {
    console.error(error);
  }
}
