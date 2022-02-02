const receivesAFunction = function(cb){
    return cb('test');
}

// Somehow this gives me 3 passing tests? q-q
const returnsANamedFunction = function(){
    return returnsANamedFunction;
}

const returnsAnAnonymousFunction = function(){
    return function(){};
}