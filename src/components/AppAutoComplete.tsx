import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people: any = [
  { id: 1, name: "USA" },
  { id: 2, name: "Pakistan" },
  { id: 3, name: "KSA" },
  { id: 4, name: "Africa" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Rest of the world" },
];

export default function AppAutoComplete() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person: any) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="bg-app-color-100 border border-app-color-300 text-app-color-700 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-app-color-700 dark:text-app-color-300"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-app-color-100 dark:bg-app-color-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person: any) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-app-color-500 text-app-color-50"
                          : "text-app-color-700"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-app-color-50"
                                : "text-app-color-500"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
