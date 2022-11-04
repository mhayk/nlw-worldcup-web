import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-cup-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvataresExampleImg from '../assets/users-avatares-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28'>
      <main>
        <Image src={logoImg} alt="NLW World Cup" />

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Create your own cup pool and share it with friends!
        </h1>

        <div className='mt-10 flex items-center gap-2'>
          <Image src={usersAvataresExampleImg} alt="" />

          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+12.592</span> people is alredy using
          </strong>
        </div>

        <form className='mt-10 flex gap-2'>
          <input
            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm'
            type="text"
            required
            placeholder="What is the name of your pool ?"
          />
          <button
            className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
            type="submit"
          >
            Create my pool
          </button>
        </form>

        <p className='text-gray-300 mt-4 text-sm leading-relaxed'>
          After creating your pool, you will receive a unique code that you can use to invite others 🚀
        </p>

        <div className='mt-10 pt-10 border-t border-gray-600 divide-x grid grid-cols-2 text-gray-100'>
          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className=''>
              <span>+2.034</span>
              <span>Pools created</span>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className=''>
              <span>+192.847</span>
              <span>Guesses sent</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="Two mobile phones" />
    </div>
  )
}
