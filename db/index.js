import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("publication.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS publication (id integer primary key not null, title text not null, description text not null, image text not null, autor text not null, date text not null);`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPublication = (title, description, image, autor, date) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`insert into publication (title, description, image, autor, date) VALUES (?, ?, ?, ?, ?);`,
            [title, description, image, autor, date],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            );
        });
    });
    return promise;
}

export const fetchPublication = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * from publication;`,
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
    return promise;
  };
