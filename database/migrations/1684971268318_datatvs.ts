import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'datatvs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name', 255)
      table.string('image', 255)
      table.string('loc', 255)
      table.string('coord', 255)
      table.string('desc', 1000)
      table.string('tags', 255)
      table.string('imgmark', 255)
      table.string('descmark', 1000)
      table.string('nearby', 255)
      table.string('regency', 255)

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
