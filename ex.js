var ev = require('events').EventEmitter;

var exception = function( ctx, ex, callback ) {
    if( !ex )
    {
        callback ? callback():null;
        return false;
    }

    console.log( ex.stack );
    if( ctx.__proto__ == ev.prototype )
        ctx.emit( 'error', ex, message( ex ) );
    return true;
};

var message = function( ex ) {
    var msg = {code : 500,
               type : 'error',
               description : ex.message};
    return msg;
}

module.exports = {ex : exception}; 
