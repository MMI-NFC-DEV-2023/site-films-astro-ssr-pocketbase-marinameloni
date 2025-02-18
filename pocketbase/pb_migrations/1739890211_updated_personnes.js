/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ud90g19qst8alne")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6slc2wcn",
    "name": "nom_prenom",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ud90g19qst8alne")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
