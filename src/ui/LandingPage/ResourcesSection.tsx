import { StickyScrollReveal } from '@/components/StickyScrollReveal'
import React from 'react'

const ResourcesSection = ({resources}: any) => {
  return (
    <section className='mt-20'><StickyScrollReveal content={resources} /></section>
  )
}

export default ResourcesSection