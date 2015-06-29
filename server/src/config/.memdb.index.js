'use strict';

// Index definitions

module.exports =  {
	// Collection name
	area_players : {
		// Index setting, modify it on your need
		indexes : [
			{
				// Index keys
				keys : ['areaId', 'playerId'],
				unique : true,
				// Value exclude from index. Values like '', -1 occurs too often, which can make the index too large.
				// 'null' or 'undefined' is ignored by default.
				valueIgnore : {
				//	areaId : [''],
				},
			},
		]
	},

	bindings : {
		indexes : [
			{
				keys : ['socialId', 'socialType'],
				unique : true,
			},
			{
				keys : ['socialId'],
			},
			{
				keys : ['playerId'],
			},
		]
	},

	players : {
		indexes : [
			{
				keys : ['areaId'],
			},
			{
				keys : ['teamId'],
			},
		]
	},
};
