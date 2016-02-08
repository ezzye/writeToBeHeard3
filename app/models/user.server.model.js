var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
var autopopulate = require("mongoose-autopopulate");


var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    desiredLocation: [Number],
    description: String,
    current_location: String,
    mobile: String,

    location: {
      type: [Number], // [Long, Lat]
    },

    email: {
              type: String,
              match: [/.+\@.+\..+/,
              "Please fill a valid e-mail address"]
    },
    username: {
              type: String,
              trim: true,
              required: 'Username is required',
              unique: true
    },
    password: {
              type: String,
              validate: [
              function(password) {
                return password && password.length > 6;
              },
              'Password should be longer']
    },
    salt: {type: String},
    provider: {type: String},
    providerId: String,
    providerData: {},
    created: {type: Date, default: Date.now},
    profile_picture: String,
    properties: [{ type: Schema.Types.ObjectId, ref: 'Property', autopopulate: true }],
    connections: [{ type: Schema.Types.ObjectId, ref: 'User', autopopulate: {select: '-connections -requests_sent -requests_recd -password -salt'} }],

    // , autopopulate: {select: '-connections -requests_sent -requests_recd -password -salt'}

    requests_sent: [{ type: Schema.Types.ObjectId, ref: 'User', autopopulate: {select: '-connections -requests_sent -requests_recd -password -salt'} }],

    // , autopopulate: {select: '-connections -requests_sent -requests_recd -password -salt'}

    requests_recd: [{ type: Schema.Types.ObjectId, ref: 'User' , autopopulate: {select: '-connections -requests_sent -requests_recd -password -salt'} }],

    // , autopopulate: {select: '-connections -requests_sent -requests_recd -password -salt'}

    currentArea: String,
    currentRentBand: Number,
    currentNoticePeriodDays: Number
  });

  UserSchema.virtual('fullName').get(
    function() {
      return this.firstName + ' ' + this.lastName;
    }).set(function(fullName) {
      var splitName = fullName.split(' ');
      this.firstName = splitName[0] || '';
      this.lastName = splitName[1] || '';
    });

  UserSchema.pre('save',
      function(next) {
          if (this.password) {
            this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
            this.password = this.hashPassword(this.password);
          }
          next();
      }
  );

  UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password,this.salt, 10000,64).toString('base64');
  };

  UserSchema.methods.authenticate = function(password) {
      return this.password === this.hashPassword(password);
  };

  UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
      var _this = this;
      var possibleUsername = username + (suffix || '');

      _this.findOne(
          {username: possibleUsername},
          function(err, user) {
              if (!err) {
                  if (!user) {
                      callback(possibleUsername);
                  }
                  else {
                      return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
                  }
              }
              else {
                  callback(null);
              }
          });
  };

  UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
  });

UserSchema.plugin(autopopulate);

// Indexes this schema in 2dsphere format, which is critical for running proximity searches.
// Allows MongoDB and Mongoose to run geospatial queries on our user data.
UserSchema.index({location: '2dsphere'});

var User = mongoose.model('User', UserSchema);
