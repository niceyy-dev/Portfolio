import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ClassProps } from "@/app/type";

const navigation = [
  { name: "projects", href: "/projects", current: false },
  { name: "about", href: "/about", current: false },
  { name: "contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ className }: ClassProps) {
  return (
    <div className={className}>
      <Disclosure>
        <div className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50">
          <div className="header-title mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#D5BDAF] hover:text-white focus:outline-none transition-colors duration-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center space-x-20">
                  <div className="flex flex-col items-end ml-auto">
                    <Link href="/">
                      <p className="pl-10 pt-8">AN</p>
                      <p className="pl-10 pb-8">ZH</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-12 justify-between w-full">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-[#D5BDAF] text-white"
                            : "text-black hover:text-white", // Remplace hover:bg et hover:text
                          "rounded-md px-6 py-3 text-sm transition-colors duration-200"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-[#D5BDAF] text-white"
                    : "text-black hover:text-white", // Même ici, ajuste pour le texte blanc
                  "block rounded-md px-3 py-2 text-base transition-colors duration-200"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
