'use client'
import {useState, useEffect, useCallback} from 'react'
import { BaseLayout } from '../components/baseLayout'
import { ControlPanel } from '../components/controlPanel'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'
import { Register } from '../components/register'
import { RegisterForm } from '../components/register/form'
import { RegisterLogin } from '../components/register/login'
import { database } from '../firebase'
import {
  ref,
  push,
  get,
  DataSnapshot,
  set,
  remove,
  query,
  startAt,
  endAt,
  orderByChild,
  QueryConstraint,
} from 'firebase/database';
import { IBillData, IFormError, ISortType } from '@/interfaces/bill'


export default function Home() {
  const [modalRoute, setModalRoute] = useState<'login'|'registerForm'|''>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [editingCard, setEditingCard] = useState<IBillData|null>(null)
  const [cards, setCards] = useState<IBillData[]>([]);
  const [displayCards, setDisplayCards] = useState<IBillData[]>([]);
  const [storeStartDate, setStoreStartDate] = useState<string>('')
  const [storeEndDate, setStoreEndDate] = useState<string>('')
  const [searchText, setSearchText] = useState<string>("")
  const [errorList, setErrorList] = useState<IFormError[]>([])
  const [sortType, setSortType] = useState<ISortType>({
    name:'z-a',
    date:'newest'
  })

  const setBillModal = (shouldOpen: boolean, data: IBillData) => {
    if(!shouldOpen) return
    setEditingCard(data)
    setModalRoute('registerForm')
  }

  const fetchBills = useCallback(() => {
    const refCard = ref(database, 'card');
    const date1 = new Date(storeStartDate || '').getTime();
    const date2 = new Date(storeEndDate || '').getTime();
    const queryConstrains: QueryConstraint[] = []
    if(storeStartDate || storeEndDate) queryConstrains.push(orderByChild("date"))
    if(storeStartDate) queryConstrains.push(startAt(date1))
    if(storeEndDate) queryConstrains.push(endAt(date2))
    const filteredQuery = query(
      refCard,
      ...queryConstrains
    );
    get(filteredQuery)
    .then((snapshot: DataSnapshot) => {
      const cardData: Array<IBillData> = snapshot.val();
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
        setCards(cardsArray);
      } else {
        setCards([]);
      }
    })
    .catch((error) => {
      console.error('Error fetching card data:', error);
    });
  }, [storeStartDate, storeEndDate]);

  const Delete = useCallback(() => {
    const dbRef = ref(database, `card/${editingCard?.key || ''}`)
    remove(dbRef)
    .then(() => {
      fetchBills()
      setModalRoute('')
    })
  },[editingCard, fetchBills])

  const Submit = useCallback((data: IBillData) => {
    const allErrors: IFormError[] = []
    if (!data.title || !data.price || !data.amount || !data.date) {
      if(!data.title) allErrors.push({key:'title', message: 'título é um campo obrigatorio'})
      if(!data.price) allErrors.push({key:'price', message: 'preço é um campo obrigatorio'})
      if(!data.amount) allErrors.push({key:'amount', message: 'valor é um campo obrigatorio'})
      if(!data.date) allErrors.push({key:'date', message: 'data é um campo obrigatorio'})
      console.log({allErrors})
      setErrorList(allErrors)
      return allErrors;
    }
    setErrorList([])
    data.date = (new Date(data.date)).getTime();

    const dbRef = ref(database, `card/${editingCard?.key || ''}`);

    if (editingCard?.key) {
      delete data.key;
      set(dbRef, data);
    } else {
      push(dbRef, data);
    }
    fetchBills();
    setModalRoute('');
  }, [editingCard, fetchBills]);


  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  useEffect(() => {
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayCards(filteredCards);
  }, [searchText, cards]);

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  useEffect(() => {
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
    let sorted = filteredCards
    if(sortType.date) {
      sorted = filteredCards.sort((a,b) => {
        if(a.date > b.date){
          return sortType.date === "oldest" ? 1 : -1
        }if(a.date < b.date){
          return sortType.date === "newest" ? 1 : -1
        }
        return 0
      })
    }
    if(sortType.name) {
      sorted = filteredCards.sort((a,b) => {
        if(a.title.toLowerCase() > b.title.toLowerCase()){
          return sortType.name === "a-z" ? 1 : -1
        }if(a.title.toLowerCase() < b.title.toLowerCase()){
          return sortType.name === "z-a" ? 1 : -1
        }
        return 0
      })
    }
    setDisplayCards(sorted);
  }, [searchText, cards, sortType]);

  return (
    <>
      <BaseLayout setModalRoute={setModalRoute}>
        <main className="main">
          <ControlPanel
            setSearchText={setSearchText}
            searchText={searchText}
            setStoreStartDate={setStoreStartDate}
            storeStartDate={storeStartDate}
            setStoreEndDate={setStoreEndDate}
            storeEndDate={storeEndDate}
            setSortType={setSortType}
            sortType={sortType}
          />
          {displayCards.map(card => {
            return <Card key={card.key} data={card} setBillModal={setBillModal} />
          })}
          <Pagination/>
        </main>
      </BaseLayout>
      {
        !!modalRoute && (
          <Register setModalRoute={setModalRoute}>
            {
              modalRoute === 'login' && <RegisterLogin setUsername={setUsername} setPassword={setPassword} recording={()=>{}}/>
            }
            {
              modalRoute === 'registerForm' &&
              <RegisterForm
                editingCard={editingCard}
                Submit={Submit}
                Delete={Delete}
                setErrorList={setErrorList}
                errorList={errorList}
              />
            }
          </Register>
        )
      }
    </>
  )
}
