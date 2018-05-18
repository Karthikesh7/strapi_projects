'use strict';

var jwt = require('jsonwebtoken');

/**
 * Events.js controller
 *
 * @description: A set of functions called "actions" for managing `Events`.
 */

module.exports = {

  /**
   * Retrieve events records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.events.fetchAll(ctx.query);

    /*const params = {
	 'userId':"123"
	}


	const jwt = ctx.request.header.authorization;
	const arr = jwt.split(" ");
	if (arr.length>1) {
		console.log(arr[1]);
		var decode = jwt.decode(arr[1]);
		console.log(decode);
	}

    return strapi.services.events.fetchAll(params);*/
  },

  /**
   * Retrieve a events record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.events.fetch(ctx.params);
  },

  /**
   * Create a/an events record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.events.add(ctx.request.body);
  },

  /**
   * Update a/an events record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.events.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an events record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.events.remove(ctx.params);
  }
};
