export const pages = [
  {
    title: 'Home',
    path: '/',
    newTab: false,
  },
  {
    title: 'Analyze',
    path: '/analyze',
    newTab: false,
  },
  {
    title: 'Husky Satellite Lab',
    path: 'https://huskysat.aa.washington.edu/',
    newTab: true,
  },
]

export function Navbar(props: { activePath: '/' | '/analyze' }) {
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
                    {page.title}
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
