export const pages = [
  {
    title: 'Home',
    path: '/',
    newTab: false,
  },
  {
    title: 'Try It Out',
    path: '/analyze',
    newTab: false,
  },
  //{ title: 'Generate', path: '/generate', newTab: false },
  {
    title: 'Our Lab',
    path: 'https://huskysat.aa.washington.edu/',
    newTab: true,
  },
]

export function Navbar(props: { activePath: '/' | '/analyze' | '/generate' }) {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-8" alt="LOST Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              LOST: Open-Source Star Tracker
            </span>
          </a>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {pages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.path}
                    target={page.newTab ? '_blank' : ''}
                    className={`block py-2 px-3 rounded-sm bg-transparent ${page.path === props.activePath ? 'text-blue-700' : 'text-black'}  md:p-0`}
                    aria-current="page"
                  >
                    {page.title === 'Try It Out' ? (
                      <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold">
                        {page.title}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        {page.title}
                        {page.newTab && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        )}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
