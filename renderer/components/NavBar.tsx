import React, { useState } from 'react'
import { BiBell, BiCog, BiMovie, BiPlay, BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const [rev, setRev] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  const detectChange = (e: any) => {
    if (e.target.value !== '') {
      setRev(true)
      setSearchInput(e.target.value)
    } else {
      setRev(false)
    }
  }

  const subSearch = (e: any) => {
    e.preventDefault()
    if (searchInput !== '') {
      router.push(`/store/search/${searchInput}`)
    }
  }

  return (
    <div className="sm:px-11 z-[60] flex h-[60px] w-full items-center justify-between bg-stone-800 p-3 shadow-lg">
      <div className="flex ">
        <div className="w-[100px] flex object-cover cursor-pointer">
          <img src="/static/images/weblogo.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center">
        <BiBell className="cursor-pointer rounded-full bg-stone-900 p-2  text-4xl text-gray-700" />
        <BiCog className="ml-2 cursor-pointer rounded-full bg-stone-900  p-2 text-4xl text-gray-700" />
      </div>
    </div>
  )
}

export default Navbar
