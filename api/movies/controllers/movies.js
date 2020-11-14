'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
   * Retrieve records.
   *
   * @return {Array}
   */

    async find(ctx) {
        let entities;
        console.log(ctx.query)
        if (ctx.query._q) {
            entities = await strapi.services.movies.search(ctx.query);
        } else {
            entities = await strapi.services.movies.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.movies }));
    },
};
