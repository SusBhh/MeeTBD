import Todo from './Component/Todo';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from './Firebase';

export default function Groups() {
    const [groups, setGroups] = React.useState([]);

    React.useEffect(() => {
        const q = query(collection(db, "groups"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let todosArray = [];
          querySnapshot.forEach((doc) => {
            todosArray.push({ ...doc.data(), id: doc.id });
          });
          setTodos(todosArray);
        });
        return () => unsub();
      }, []);
      
}