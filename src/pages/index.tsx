'use client'
import {useState} from 'react'
import { BaseLayout } from '../components/baseLayout'
import { ControlPanel } from '../components/controlPanel'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'
import { Register } from '../components/register'
import { RegisterForm } from '../components/register/form'
import { RegisterLogin } from '../components/register/login'


export default function Home() {
  const [modalRoute, setModalRoute] = useState('')
  return (
    <>
      <BaseLayout setModalRoute={setModalRoute}>
        <main className="main">
          <ControlPanel/>
          <Card/>
          <Pagination/>
        </main>
      </BaseLayout>
      {
        !!modalRoute && (
          <Register setModalRoute={setModalRoute}>
            {
              modalRoute === 'login' && <RegisterLogin />
            }
            {
              modalRoute === 'registerForm' && <RegisterForm />
            }
          </Register>
        )
      }
    </>
  )
}
