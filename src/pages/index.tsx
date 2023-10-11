'use client'
import {useState} from 'react'
import { BaseLayout } from '../components/baseLayout'
import { ControlPanel } from '../components/controlPanel'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'
import { Register } from '../components/register'
import { RegisterForm } from '../components/register/form'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  return (
    <>
      <BaseLayout openModal={openModal}>
        <main className="main">
          <ControlPanel/>
          <Card/>
          <Pagination/>
        </main>
      </BaseLayout>
      {!!isModalOpen &&
        <Register>
         <RegisterForm closeModal={closeModal} />
        </Register>}
    </>
  )
}
