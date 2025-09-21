-- TODO

DROP TABLE IF EXISTS playlists_tracks;
DROP TABLE IF EXISTS playlists CASCADE;
DROP TABLE IF EXISTS tracks CASCADE;

CREATE TABLE playlists(
    id SERIAL PRIMARY KEY,
    playlists_name TEXT NOT NULL,
    playlists_description TEXT NOT NULL
);

CREATE TABLE tracks(
    id SERIAL PRIMARY KEY,
    track_name TEXT NOT NULL,
    track_duration INT NOT NULL
);

CREATE TABLE playlists_tracks(
    id SERIAL PRIMARY KEY,
    playlist_id INT REFERENCES playlists(id) ON DELETE CASCADE ON UPDATE CASCADE,
    track_id INT REFERENCES tracks(id) ON DELETE CASCADE ON UPDATE CASCADE
);