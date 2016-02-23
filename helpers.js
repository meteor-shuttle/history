Shuttle.History.helpers({
	object: function() {
		return Shuttle.Ref(this._object);
	},
	user: function() {
		return this._user?Meteor.users.findOne(this._user):undefined;
	}
});