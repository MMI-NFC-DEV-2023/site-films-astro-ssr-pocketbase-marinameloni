/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7hyoi9pw3njpxd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xj6ktxss",
    "name": "roles",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rplpzoqsd4ogqmw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7hyoi9pw3njpxd")

  // remove
  collection.schema.removeField("xj6ktxss")

  return dao.saveCollection(collection)
})
