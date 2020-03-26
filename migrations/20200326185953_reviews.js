exports.up = function(knex) {
  const createReviews = () => {
    return knex.schema.createTable('reviews', (t) => {
      t.increments('id').primary()
      t.string('author').notNull()
      t.string('title').notNull()
      t.timestamp('date_created').defaultTo(knex.fn.now())
    })
  }

  const migrations = [
    createReviews()
  ]
  const results = []
  for (const migration of migrations)
    results.push(migration)
  return results
}

exports.down = function(knex) {
  const dropReviews = () => {
    return knex.schema.dropTable('reviews')
  }

  const rollbacks = [
    dropReviews()
  ]
  const results = []
  for (const rollback of rollbacks)
    results.push(rollback)
  return results
}
