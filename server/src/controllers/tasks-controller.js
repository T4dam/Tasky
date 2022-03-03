import database from '../database/index.js';

    export const getTasks = (req, res) => {
    //   const user = database.data.users.find(x => x.email === req.user.email);
    const DB = JSON.parse(JSON.stringify(database.data));
  
    const tasks = DB.lists[0].tasks;
    res.status(200).json(DB.lists);

 
  }

