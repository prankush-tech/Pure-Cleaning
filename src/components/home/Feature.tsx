import React from 'react'

const Feature = () => {
  return (
    <>
  {/* Features */}
  <div className="max-w-[85rem] mt-4 px-4 py-15 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <div>
        <img
          className="rounded-xl"
          src="/feature.jpeg"
          alt="Features Image"
        />
      </div>
      {/* End Col */}
      <div className="mt-5 sm:mt-10 lg:mt-0">
        <div className="space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="space-y-2 md:space-y-4">
            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
              We tackle the challenges start-ups face
            </h2>
            <p className="text-gray-500 ">
              Besides working with start-up enterprises as a partner for
              digitalization, we have built enterprise products for common pain
              points that we have encountered in various products and projects.
            </p>
          </div>
          {/* End Title */}
          {/* List */}
          <ul className="space-y-2 sm:space-y-4">
            <li className="flex gap-x-3">
              <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-900 text-gray-100 ">
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="grow">
                <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  <span className="font-bold">Easy &amp; fast</span> designing
                </span>
              </div>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-900 text-gray-100 ">
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="grow">
                <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  Powerful <span className="font-bold">features</span>
                </span>
              </div>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-900 text-gray-100 ">
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="grow">
                <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  User Experience Design
                </span>
              </div>
            </li>
          </ul>
          {/* End List */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>

  )
}

export default Feature