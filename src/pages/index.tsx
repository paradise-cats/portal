'use client'
import {useState, useEffect} from 'react'
import { BaseLayout } from '../components/baseLayout'
import { ControlPanel } from '../components/controlPanel'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'
import { Register } from '../components/register'
import { RegisterForm } from '../components/register/form'
import { RegisterLogin } from '../components/register/login'
import { database } from '../firebase'
import { ref, push, get, DataSnapshot, set, remove } from 'firebase/database';
import { IBillData } from '@/interfaces/bill'


export default function Home() {
  const [modalRoute, setModalRoute] = useState<'login'|'registerForm'|''>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [editingCard, setEditingCard] = useState<IBillData|null>(null)
  const [cards, setCards] = useState<IBillData[]>([]);

  const setBillModal = (shouldOpen: boolean, data: IBillData) => {
    if(!shouldOpen) return
    setEditingCard(data)
    setModalRoute('registerForm')
  }
  const Delete = () => {
    const dbRef = ref(database, `card/${editingCard?.key || ''}`)
    remove(dbRef)
    .then(() => {
      fetchBills()
      setModalRoute('')
    })
  }
  const Submit = (data: IBillData) => {
    delete data.key
    const dbRef = ref(database, `card/${editingCard?.key || ''}`)
    set(dbRef, data)
    setModalRoute('')
    fetchBills()
  }

  const fetchBills = () => {
    const refCard = ref(database, 'card');
    get(refCard)
    .then((snapshot: DataSnapshot) => {
      const cardData: { [key: string]: IBillData } = snapshot.val();
      if (cardData) {
        const cardsArray = Object.entries(cardData).map(([key, data]) => ({
          key,
          title: data.title,
          price: data.price,
          amount: data.amount,
          date: data.date,
          description: data.description,
          photo: data.photo
        }));
        console.log({cardsArray})
        setCards(cardsArray);
      } else {
        setCards([]);
      }
    })
    .catch((error) => {
      console.error('Error fetching card data:', error);
    });
  }

  useEffect(() => {
    fetchBills()
  }, []);

  const recording = () => {
    const dbRef = ref(database, 'login');
    const account = {
      username,
      password
    };
    push(dbRef, account);
  }

  const reading = async () => {
    const dataRef = ref(database, 'login');
    console.log({dataRef})
    try {
      const snapshot = await get(dataRef);
      if (snapshot?.exists()) {
        const data = snapshot.val();
        console.log({data});
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.log("err")
      console.error('Error fetching data:', error);
    }
  }

   useEffect(()=> {
     reading()
   },[])

  return (
    <>
      <BaseLayout setModalRoute={setModalRoute}>
        <main className="main">
          <ControlPanel/>
          {cards.map(card => {
            return <Card key={card.key} data={card} setBillModal={setBillModal} />
          })}
          <Pagination/>
        </main>
      </BaseLayout>
      {
        !!modalRoute && (
          <Register setModalRoute={setModalRoute}>
            {
              modalRoute === 'login' && <RegisterLogin setUsername={setUsername} setPassword={setPassword} recording={recording}/>
            }
            {
              modalRoute === 'registerForm' &&
              <RegisterForm
                editingCard={editingCard}
                Submit={Submit}
                Delete={Delete}
              />
            }
          </Register>
        )
      }
    </>
  )
}
