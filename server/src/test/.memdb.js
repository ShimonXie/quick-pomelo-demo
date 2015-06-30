'use strict';

// memdb-server config for unit test

module.exports = {
    backend : {
        engine : 'mongodb',
        url : 'mongodb://localhost/quick-pomelo-demo-test',
        options : {},
    },

    locking : {
        host : '127.0.0.1',
        port : 6379,
        db : 1,
    },

    slave : {
        host : '127.0.0.1',
        port : 6379,
        db : 1,
    },

    log : {
        path : '/tmp',
        level : 'WARN',
    },

    promise : {
        longStackTraces : false,
    },

    collections : require('../config/.memdb.index'),

    shards : {
        s1 : {
            host : '127.0.0.1',
            port : 32017,
        },
    }
};
