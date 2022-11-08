import React from 'react'
import OrderList from '../components/OrderList'
import OrderHeader from '../components/OrderHeader'
import { Box } from '@mui/system'

const Order = () => {
  return (
    <Box display='flex' flexDirection='column' >
    <OrderHeader />
    <OrderList />
    </Box>
  )
}

export default Order