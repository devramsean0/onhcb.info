import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Search } from '@/components/search'
import { StaticImages } from '@/lib/static_images'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <center>
        <Image src={StaticImages.HCB_LOGO_DARK} alt="Hack Club Bank Logo" width={100} height={100}/>
        <h2>Simplified Hack Club Bank Organization views</h2>
        <p>
          A view of transparent orgs and their transactions.
          <br />
          Without some of the boilerplate of the Hack Club Bank website which isn't needed for people who aren't part of the org.
        </p>
        <h3>Search!</h3>
        <Search textboxID={'mainBodySearch'} />
      </center>
      <Footer />
    </>
  )
}
