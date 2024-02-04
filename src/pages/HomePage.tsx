import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Header from '../features/home/Header'
import DoctorAppointment from '../features/home/DoctorAppointment'
import Overview from '../features/home/Overview'
import WeightBalance from '../features/home/WeightBalance'
import HeartRate from '../features/home/HeartRate'
import SleepPeriodic from '../features/home/SleepPeriodic'
import HydrationLevel from '../features/home/HydrationLevel'
import BloodCells from '../features/home/BloodCells'
import BloodTracking from '../features/home/BloodTracking'

const HomePage = () => {
  return (
    <HomeLayout>
      <Header />
      <DoctorAppointment />
      <Overview />
      <WeightBalance />
      <HeartRate />
      <SleepPeriodic />
      <HydrationLevel />
      <BloodCells />
      <BloodTracking />
    </HomeLayout>
  )
}

export default HomePage