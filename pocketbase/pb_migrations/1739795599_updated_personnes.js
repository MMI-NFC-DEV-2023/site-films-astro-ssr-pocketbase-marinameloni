/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ud90g19qst8alne")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgkn3tdj",
    "name": "date_naissance",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i2dgy6xx",
    "name": "date_deces",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xnfdwmdp",
    "name": "lieu_naissance",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mkvylka0",
    "name": "nationalite",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Français",
        "Française",
        "Américain",
        "Américaine"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "619ksskg",
    "name": "profession",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "Acteur",
        "Actrice",
        "Réalisateur",
        "Réalisatrice"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ud90g19qst8alne")

  // remove
  collection.schema.removeField("fgkn3tdj")

  // remove
  collection.schema.removeField("i2dgy6xx")

  // remove
  collection.schema.removeField("xnfdwmdp")

  // remove
  collection.schema.removeField("mkvylka0")

  // remove
  collection.schema.removeField("619ksskg")

  return dao.saveCollection(collection)
})
