Events = new Meteor.Collection("events");

EventSchema = new SimpleSchema({
  "name":{
    type: String,
    label: "Event Name"
  },
  "owner":{
    type: String,
    label: "Events owner"
  },
  "created":{
    type: Date,
    label: "Date event was created",
    denyUpdate: true,
    autoValue: function(){
      if(this.isInsert){
        return new Date;
      }
    }
  },
  "participants":{
    type: [ String ],
    label: "Participants",
    optional: true
  },
  "timeOfEvent":{
    type: Date,
    label: "Date and time of meeting"
  },
  "location":{
    type: [Number],
    label: "Location",
    optional: true
  },
  "description":{
    type: String,
    label: "Description of event",
    optional: true
  }

});

Events.attachSchema( EventSchema );