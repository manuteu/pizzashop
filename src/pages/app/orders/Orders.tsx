import { Helmet } from 'react-helmet-async'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import OrderTableFilters from './OrderTableFilters'
import OrderTableRow from './OrderTableRow'
import Pagination from '@/components/Pagination'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/get-orders'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce // Transforma algo em número
    .number()
    .transform((page) => page - 1) // Transforma a página em pag -1
    .parse(searchParams.get('page') ?? '1') // Se não tiver página informada no search params será 1

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status], // Toda vez que minha queryFn depender de algum parâmetro, precisa passar no queryKey
    queryFn: () => getOrders({ pageIndex, customerName, orderId, status: status === 'all' ? null : status }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result &&
                result.orders.map((order) => {
                  return <OrderTableRow key={order.orderId} order={order} />
                })}
            </TableBody>
          </Table>
        </div>
        {result && (
          <Pagination
            onPageChange={handlePaginate}
            pageIndex={result.meta.pageIndex}
            totalCount={result.meta.totalCount}
            perPage={result.meta.perPage}
          />
        )}
      </div>
    </>
  )
}