'use strict';

const Events = require('events');

const eventPool = new Events();

// eventPool.on()
// eventPool.emit()
module.exports = eventPool;

/* let SQL = "DELETE FROM sometable WHERE id = $1"
let values = [request.query.id];
client.query(SQL, values)
  .then( results => {
    emit('delete', request.query.id);
    res.send('Record Deleted')
});

events.on('delete', (data) => {
  sendEmail({
      to: 'admin@here.com',
      subject: 'Someone deleted part of the database',
      body: `Record id: ${data} was removed`
  });
}); */