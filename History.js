Shuttle.History = new Mongo.Collection('shuttle:history');

Shuttle.History.deny({
    insert: function() { return true; },
    update: function() { return true; },
    remove: function() { return true; }
});