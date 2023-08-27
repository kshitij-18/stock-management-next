import Image from 'next/image'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'
import SearchFrom from './components/SearchFrom'

export default function Home() {
  return (
    <>
      <Header />
      <div className='container mx-auto max-w-2xl'>
       <StockForm />
       <SearchFrom />
       <StockTable stocks={[]}/>
      </div>
    </>
  )
}
