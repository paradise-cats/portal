'use client'
import { BaseLayout } from '../components/baseLayout'
import { ControlPanel } from '../components/controlPanel'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'

export default function Home() {
  return (
    <BaseLayout>
      <main className="main">
        <ControlPanel/>
        <Card/>
        <Pagination/>
      </main>
    </BaseLayout>
  )
}
