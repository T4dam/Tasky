import database from '../database/index.js';

  export const getLists = (req, res) => {
    const DB = JSON.parse(JSON.stringify(database.data));
    const user = DB.users.find(x => x.email === req.user.email);
    const userID = user !== undefined && user !== null ? user.id : null;
    const boardArr = DB.boards.filter(b => b.userId === userID);
    const boardLists = boardArr.length ? boardArr[0].lists : null;

    res.status(200).json(boardLists);
  }

  export const createList = (req, res) => {
      const { title } = req.body;
      const DB = database.data;
      const user = DB.users.find(x => x.email === req.user.email);
      const userID = user !== undefined && user !== null ? user.id : null;

      const userBoard = DB.boards.find(b => b.userId === userID);
  
      if (userBoard) {
          userBoard.lists.push(
              {
                  title,
                  tasks: []
              }
          )
      } else {
        DB.boards.push({
            userId: userID,
            lists: [
                {
                    title,
                    tasks: []
                }
            ]
        })
      }

      database.write();
      res.status(200).json();

}
export const updateList = (req, res) => {
    const { title, listIndex } = req.body;
    const DB = database.data;
    const user = DB.users.find(x => x.email === req.user.email);
    const userID = user !== undefined && user !== null ? user.id : null;

    const userBoard = DB.boards.find(b => b.userId === userID);
    const currentList = userBoard.lists.find((l, i) => i === listIndex);
    if (title && title !== currentList.title) currentList.title = title;

    database.write();
    res.status(200).json();

}

export const saveLists = (req, res) => {
    const { lists } = req.body;
    const DB = database.data;
    const user = DB.users.find(x => x.email === req.user.email);
    const userID = user !== undefined && user !== null ? user.id : null;

    const userBoard = DB.boards.find(b => b.userId === userID);
    if (userBoard) {
        userBoard.lists = [...lists];
        database.write();
        res.status(200).json();
    } else {
        res.status(400).json();
    }
};

export const saveTasks = (req, res) => {
    const { tasks, listIndex } = req.body;
    const DB = database.data;
    const user = DB.users.find(x => x.email === req.user.email);
    const userID = user !== undefined && user !== null ? user.id : null;

    const userBoard = DB.boards.find(b => b.userId === userID);

    if (userBoard) {
        const currentList = userBoard.lists.find((l, i) => i === listIndex);

        if (currentList) {
            currentList.tasks = [...tasks];
            database.write();
            res.status(200).json();  
        } else {
            res.status(400).json()
        }
    }
    res.status(200).json();
}
export const updateTasks = (req, res) => {
    const { tasks, listIndex } = req.body;
    const DB = database.data;
    const user = DB.users.find(x => x.email === req.user.email);
    const userID = user !== undefined && user !== null ? user.id : null;

    const userBoard = DB.boards.find(b => b.userId === userID);

    if (userBoard) {
        const currentList = userBoard.lists.find((l, i) => i === listIndex);

        if (currentList) {
            currentList.tasks = [...tasks];
            database.write();
            res.status(200).json();  
        } else {
            res.status(400).json()
        }
        
       
    }
    
    res.status(200).json(); 
}
