import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div>
          <Link href="/" className="hover:underline">
            <h2 className="text-2xl md:text-6xl font-bold tracking-tight md:tracking-tighter leading-tight">
              Contentful Blogger
            </h2>
          </Link>
      </div>
      <div className='mt-5'>
          <nav className='container'>
              <ul className='flex gap-8'>
                <li>
                  <Link
                    href='/'
                    className='text-sm font-medium uppercase text-stone-400'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/posts'
                    className='text-sm font-medium uppercase text-stone-400'
                  >
                    Posts
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
      </div>

  )
}
