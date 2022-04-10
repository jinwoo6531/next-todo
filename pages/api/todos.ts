import { TodoType } from './../../types/todo.d';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'GET') {
//     try {
//       const todos = await new Promise<TodoType[]>((resolve, reject) => {
//         fs.readFile('/data/todos.json', (err, data) => {
//           if (err) {
//             return reject(err.message);
//           }

//           const todosString = data.toString();
//           if (!todosString) {
//             return resolve([]);
//           }
//           const todos = JSON.parse(data.toString());
//           return resolve(todos);
//         });
//       });
//       res.statusCode = 200;
//       return res.send(todos);
//     } catch (e) {
//       console.log(e);
//       res.statusCode = 500;
//       res.send(e);
//     }
//   }

//   res.statusCode = 405;
//   return res.end();
// };

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const todos = new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile('/data/todos.json', (err, data) => {
          if (err) {
            return reject(err.message);
          }
          const todosData = data.toString();
          if (!todosData) {
            return resolve([]);
          }
          const todos = JSON.parse(data.toString());
          return resolve(todos);
        });
      });
      res.statusCode = 200;
      return res.send(todos);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }
};
