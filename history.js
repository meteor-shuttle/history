Shuttler.History = new Mongo.Collection('shuttler:history');
Shuttler.History.attachGraph();

Shuttler.History.helpers({
	object: function() {
		return Shuttler.Ref(this._object);
	}
});

Shuttler.History.deny({
    insert: function() { return true; },
    update: function() { return true; },
    remove: function() { return true; }
});

Shuttler.History.attachSchema(new SimpleSchema({
    _object: {
        type: Shuttler.Ref.Schema
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