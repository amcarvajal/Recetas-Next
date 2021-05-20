import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>HomeMade</span>
            </h1>
            <h2>Delicious Food</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just-Add  :)</p>
      </footer>
    </div>
  )
}