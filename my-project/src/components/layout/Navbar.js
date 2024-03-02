import { Fragment, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../image/logo.jpg';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', to: '/', current: true },
  { name: 'Service', to: '/services', current: false },
  { name: 'About', to: '/about', current: false },
  { name: 'Contact', to: '/contact', current: false },
  { name: 'Gallery', to: '/gallery', current: false },
  { name: 'Blog', to: '/Blog', current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [currentNavItem, setCurrentNavItem] = useState(navigation.find(item => item.current) || navigation[0]);

  const handleNavigationClick = (item) => {
    setCurrentNavItem(item);
  };

  return (
    <Disclosure as="nav" className="bg-yellow-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => handleNavigationClick(item)}
                      className={classNames(
                        currentNavItem === item ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={currentNavItem === item ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavigationClick(item)}
                  className={classNames(
                    currentNavItem === item ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={currentNavItem === item ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
