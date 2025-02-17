/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ud90g19qst8alne",
    "created": "2025-02-17 09:37:54.292Z",
    "updated": "2025-02-17 09:37:54.292Z",
    "name": "personnes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6slc2wcn",
        "name": "nom_prenom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ud90g19qst8alne");

  return dao.deleteCollection(collection);
})
