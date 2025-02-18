/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x7hyoi9pw3njpxd",
    "created": "2025-02-18 14:34:45.595Z",
    "updated": "2025-02-18 14:34:45.595Z",
    "name": "films",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e6jf70x3",
        "name": "titre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mu3bxlkl",
        "name": "date_sortie",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "bchast5t",
        "name": "sysnopsis",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "a3kbumzd",
        "name": "langue",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Anglais",
            "Français",
            "Italien",
            "Espagnol",
            "Chinois",
            "Japonais",
            "Coréen",
            "Arabe",
            "Russe"
          ]
        }
      },
      {
        "system": false,
        "id": "mobejusm",
        "name": "duree",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "7hmv5k7v",
        "name": "producteur",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ud90g19qst8alne",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "cwyceovj",
        "name": "scenaristes",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ud90g19qst8alne",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("x7hyoi9pw3njpxd");

  return dao.deleteCollection(collection);
})
