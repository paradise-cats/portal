'use client'
import { ControlPanel } from '../components/control-panel'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'

export default function Home() {
  return (
    <>
      <main className="main">
        <ControlPanel/>
        <Card/>
        <Pagination/>
      </main>
    </>
  )
}
