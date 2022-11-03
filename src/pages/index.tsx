import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-cup-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvataresExampleImg from '../assets/users-avatares-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW World Cup" />

        <h1>Create your own cup pool and share it with friends!</h1>

        <div>
          <Image src={usersAvataresExampleImg} alt="" />

          <strong>
            <span>+12.592 people is alredy using</span>
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="What is the name of your pool ?" />
          <button type="submit">Create your pool</button>
        </form>

        <p>After creating your pool, you will receive a unique code that you can use to invite others 🚀</p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+2.034</span>
              <span>Pools created</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
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
