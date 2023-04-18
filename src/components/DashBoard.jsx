import React from 'react'
import { Stack } from '@mui/material'
import { SideBar } from './SideBar'
import { Feed } from './Feed'
import { RightBar } from './RightBar'
export const DashBoard = () => {
  return (
    <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SideBar/>
        <Feed/>
        <RightBar/>
    </Stack>
  )
}
