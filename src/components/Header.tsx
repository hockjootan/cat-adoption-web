import { useRouter } from "next/router";

import { headerPages } from "src/config";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-teal-300 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            FurEverHome
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-teal-300">
            {headerPages.map((page) => (
              <li key={page.title}>
                <a
                  href={page.href}
                  className={`block py-2 px-3 text-teal-950 ${
                    page.href === router.pathname ? "text-teal-800" : ""
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-800 md:p-0`}
                >
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
