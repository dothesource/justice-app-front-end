import Dexie from 'dexie';

const db = new Dexie("menucontrol_db");
db.version(1).stores({ inputs: 'id,code,name,input_category_id,acquisition_unit_level_1_id,acquisition_unit_level_2_id,acquisition_unit_level_3_id,efficiency,created_at,updated_at,deleted_at,last_price,last_acquisition_id,package,in_stock,count_unit_id' });

db.transaction('rw', db.inputs, async() => {

  // Make sure we have something in DB:
  // if ((await db.inputs.where({name: 'Maionese'}).count()) === 0) {
  //     const id = await db.inputs.add({name: "Maionese", id: 1});
  //     alert (`Added maionese with id ${id}`);
  // }

  // Query:
  // const youngFriends = await db.inputs.where("age").below(25).toArray();

  // Show result:
  // alert ("My young inputs: " + JSON.stringify(youngFriends));

}).catch(e => {
  alert(e.stack || e);
});

export default db
