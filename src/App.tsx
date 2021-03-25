import { firestore } from './firebase';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<object[]>([]);

  const removeHandler = useCallback(() => {
    firestore.collection('tasks').doc('').delete();
  }, []);
  console.log(tasks);

  const createDocument = useCallback(() => {
    firestore
      .collection('practice')
      .add({ todo: { task: 'hi', id: '1' } })
      .then((res) => {
        console.log(res);
        // setTasks((prevTasks) => prevTasks.concat(res))
      });
  }, []);

  const fetchData = useCallback(() => {
    let tasksData: object[] = [];

    firestore
      .collection('practice')
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data());

          tasksData.push({ todo: doc.data().todo, id: doc.id });
        });

        setTasks((prevTasks) => prevTasks.concat(tasksData));
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <button onClick={createDocument}>버튼</button>
    </>
  );
}

export default App;
