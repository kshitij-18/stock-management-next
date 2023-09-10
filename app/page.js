import Image from 'next/image'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'
import SearchFrom from './components/SearchFrom'
import client from './utils/mongodb'

export default async function Home() {
  const getStocks = async () => {
    const stocks = await client.db('stock-management').collection('stocks').find().toArray();
    return stocks;
  }
  const stocks = await getStocks();
  return (
    <>
      <Header />
      <div className='container mx-auto max-w-2xl'>
       <StockForm />
       <SearchFrom />
       <StockTable stocks={stocks}/>
      </div>
    </>
  )
}
