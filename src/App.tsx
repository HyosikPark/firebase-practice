import { fireAuth, firestore } from './firebase';
import { useCallback, useEffect, useState } from 'react';
import useInput from './hooks/useInput';
import { signIn, signUp } from './auth';

function App() {
  const [tasks, setTasks] = useState<object[]>([]);
  const [email, setEmail, onChangeEmail] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');

  const user = fireAuth().currentUser;

  const removeHandler = useCallback(() => {
    firestore.collection('tasks').doc('').delete();
  }, []);

  const createDocument = useCallback(() => {
    firestore
      .collection('practice')
      .add({ todo: { task: 'hi', id: '1' } })
      .then((res) => {
        // setTasks((prevTasks) => prevTasks.concat(res))
      });
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      signIn(email, password);
    },
    [email, password]
  );

  const logout = useCallback(() => {
    if (user) {
      user.delete();
    }
  }, [user]);

  const fetchData = useCallback(() => {
    let tasksData: object[] = [];

    firestore
      .collection('practice')
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
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
      <form onSubmit={onSubmit}>
        <input type='text' value={email} onChange={onChangeEmail} />
        <input type='text' value={password} onChange={onChangePassword} />
        <button>로그인</button>
      </form>
      <button onClick={createDocument}>data create</button>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}

export default App;
