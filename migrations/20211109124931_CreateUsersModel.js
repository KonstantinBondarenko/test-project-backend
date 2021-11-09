
exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
        table.increments();
        table.string("password").notNullable();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").notNullable();
        table.string("avatar");
        table.timestamp('created_at')
          .notNullable()
          .defaultTo(knex.fn.now());
        table.string('created_by')
          .notNullable();
        table.timestamp('updated_at')
        table.string('updated_by');
        table.boolean("is_active")
          .notNullable()
          .defaultTo(true);
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("users")
};
