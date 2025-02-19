/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7hyoi9pw3njpxd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yzmdl2hj",
    "name": "photo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7hyoi9pw3njpxd")

  // remove
  collection.schema.removeField("yzmdl2hj")

  return dao.saveCollection(collection)
})
