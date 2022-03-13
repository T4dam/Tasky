import database from '../database/index.js';

// export const getTasks = (req, res) => {
//     //   const user = database.data.users.find(x => x.email === req.user.email);
//     const DB = JSON.parse(JSON.stringify(database.data));
//     const userBoardsArr = DB.boards.filter(b => b.userId === '....'); // [] ar [a]
//     const userBoard = userBoardsArr.length ? userBoardsArr[0] : null; 

//     const tasks = DB.lists[0].tasks;
//     res.status(200).json(DB.board);

 
//   }

  export const getLists = (req, res) => {
    const DB = JSON.parse(JSON.stringify(database.data));
    const user = DB.users.find(x => x.email === req.user.email);
    const userID = user !== undefined && user !== null ? user.id : null;
    const boardArr = DB.boards.filter(b => b.userId === userID);
    const boardLists = boardArr.length ? boardArr[0].lists : null;

    res.status(200).json(boardLists);
  }

  export const saveTasks = (req, res) => {
    //   req.body

    //   const user = database.data.users.find(x => x.email === req.user.email);
    // const DB = JSON.parse(JSON.stringify(database.data));
  
    // const tasks = DB.lists[0].tasks;
    const dataToSave = req.data.board;
    database.boards = [database.boards, ...dataToSave]
    res.status(200).json(DB.lists);

 
  }

  export const createList = (req, res) => {
      const { title } = req.body;
      const DB = database.data;
      const user = DB.users.find(x => x.email === req.user.email);
      const userID = user !== undefined && user !== null ? user.id : null;

      const userBoard = DB.boards.find(b => b.userId === userID);
  
      if (!!userBoard) {
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

