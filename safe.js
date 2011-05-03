var safe_callback = function( callback ) {
    if( callback )
        callback( arguments );
};

var safe_exception = function( ex, callback ) {
    if( ex ) {
        console.log( ex.stack );
    }
    else {
        var args = new Array();
        for( var i = 2; i < arguments.length; i++ )
        {
            args.push( arguments[i] );
        }
        callback( ex, args );
    }
};

module.exports = { callback : safe_callback,
                   ex : safe_exception }
