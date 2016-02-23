Shuttle.History.attachSchema(new SimpleSchema({
    _object: {
        type: Shuttle.Ref.Schema
    },
    type: {
        type: String
    },
    _user: {
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