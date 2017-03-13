var BaseError = require('maf-error');

var ModelError = BaseError.create('ModelError', {
    NO_COLLECTION_NAME: 'no collection name',
    ALREADY_EXISTS: 'document already exists',
    INVALID_ENSURE_INDEXES: 'invalid ensure indexes',
    FIND_CURSOR_CHAIN_NO_METHOD: 'Model/Mongodb/FindCursorChain: no method %name%',
    FIND_CURSOR_CHAIN_NO_CALLBACK: 'Model/Mongodb/FindCursorChain: no exec callback',
    INVALID_FIELDS_FORMAT: 'invalid fields format'
});

module.exports = ModelError;
