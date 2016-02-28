Shuttle.History = new Mongo.Collection('shuttle:history');
Shuttle.History.attachGraph();

Shuttle.History.helpers({
	object: function() {
		return Shuttle.Ref(this._object);
	}
});

Shuttle.History.deny({
    insert: function() { return true; },
    update: function() { return true; },
    remove: function() { return true; }
});

Shuttle.History.attachSchema(new SimpleSchema({
    _object: {
        type: Shuttle.Ref.Schema
    },
    type: {
        type: String
    },
    date: {
		type: Date,
		optional: true,
		autoValue: function() {
			if (this.isInsert) return new Date();
		}
    },
    data: {
        type: Object,
        optional: true
    }
}));