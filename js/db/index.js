/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var idbApp = (function() {
  "use strict";

  if (!("indexedDB" in window)) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }

  var dbPromise = idb.open("vanilla-chuck", 5, function(upgradeDb) {
    switch (upgradeDb.oldVersion) {
      case 0:
      // a placeholder case so that the switch block will
      // execute when the database is first created
      // (oldVersion is 0)
      case 1:
        console.log("Creating the jokes object store");
        upgradeDb.createObjectStore("jokes", { keyPath: "id" });

      case 2:
        console.log("Creating a joke index");
        var store = upgradeDb.transaction.objectStore("jokes");
        store.createIndex("joke", "joke", { unique: true });

      case 3:
        console.log("Creating the users object store");
        upgradeDb.createObjectStore("users", { keyPath: "id" });
    }
  });

  function addJokes() {
    dbPromise.then(function(db) {
      var tx = db.transaction("jokes", "readwrite");
      var store = tx.objectStore("jokes");
      var items = [
        {
          id: 535,
          joke: "Chuck Norris uses canvas in IE.",
          categories: ["nerdy"]
        },
        {
          id: 360,
          joke:
            "Two wrongs don't make a right. Unless you're Chuck Norris. Then two wrongs make a roundhouse kick to the face.",
          categories: []
        },
        {
          id: 513,
          joke: "Chuck Norris does not code in cycles, he codes in strikes.",
          categories: ["nerdy"]
        },
        {
          id: 546,
          joke: "Chuck Norris does infinite loops in 4 seconds.",
          categories: ["nerdy"]
        }
      ];
      return Promise.all(
        items.map(function(item) {
          console.log("Adding item: ", item);
          return store.add(item);
        })
      )
        .catch(function(e) {
          tx.abort();
          console.log(e);
        })
        .then(function() {
          console.log("All items added successfully!");
        });
    });
  }

  function getAllJokes() {
    dbPromise.then(function(db) {
      var tx = db.transaction("jokes", "readwrite");
      var store = tx.objectStore("jokes");
      store
        .getAll()
        .then(e => {
          // TODO checken of dit niet ook met foreach kan!!
          e.map(joke => {
            const li = document.createElement("li");
            li.classList.add("card");
            const parent = document.getElementById("joke-placeholder");
            parent.appendChild(li);
            li.innerHTML = joke.joke;
          });
        })
        .catch(err => console.log(err));
    });
  }

  return {
    dbPromise: dbPromise,
    addJokes: addJokes,
    getAllJokes: getAllJokes
  };
})();

idbApp.addJokes();
