/*
In simple cases of circular references, we can exclude an offending property from 
serialization by its name.

But sometimes we can’t just use the name, as it may be used both in circular 
references and normal properties. So we can check the property by its value.

Write replacer function to stringify everything, but remove properties that reference meetup:

result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
'use strict';

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));