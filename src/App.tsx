import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import moment, { Moment } from 'moment';
import ProfilePicture from './images/profile.jpg';
import Xendit from './images/xendit.png';
import RevenueMonster from './images/revenuemonster.png';
import Octafa from './images/octafa.png';
import Quintiq from './images/quintiq.png';
import Traitquest from './images/traitquest.png';

const colors = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
];

const App = () => {
  return (
    <>
      <HeaderSection />
      <ExperienceSection />
    </>
  );
};

const HeaderSection = () => {
  const start = moment('07-01-2016', 'MM-DD-YYYY');
  const now = moment();
  const numberOfYears = now.diff(start, 'year');

  const navigation = [
    { name: 'Experience', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>

        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <div></div>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div></div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hello, I'm</span>{' '}
                <span className="block text-blue-600 xl:inline">
                  Wilson Tan
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I'm a <b>software engineer</b> with {numberOfYears}+ years
                experience with a passion to build sophisticated{' '}
                <b>web and mobile application</b> to meet customers' business
                needs
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-36 lg:w-1/3 flex justify-center grid content-center z-20 mb-16">
        <img
          className="h-56 object-contain sm:h-72 md:h-72 rounded-full"
          src={ProfilePicture}
          alt=""
        />
      </div>
    </div>
  );
};

interface Experience {
  position: string;
  company: string;
  companyLogo: string;
  startDate: Moment;
  endDate?: Moment;
  scopes?: React.ReactNode;
  achievements?: React.ReactNode;
  tools?: string[];
}

const ExperienceSection = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const experiences: Experience[] = [
    {
      position: 'Senior Software Engineer',
      company: 'Xendit',
      companyLogo: Xendit,
      startDate: moment('05-15-2022', 'MM-DD-YYYY'),
      achievements: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Led and built different vertical products within Xendit with 30%
              month-on-month growth on total processing value TPV
            </li>
          </ul>
        </>
      ),
      scopes: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Designed, developed, debugged and tested web applications
              (frontend & backend)
            </li>
            <li className="my-2">
              Implemented CI/CD to automate compilation, testing and deployment
              of system
            </li>
            <li className="my-2">Managed cloud infrastructure on AWS</li>
            <li className="my-2">
              Performed code review to ensure high quality software build
            </li>
          </ul>
        </>
      ),
      tools: [
        'Golang',
        'React.js',
        'Next.js',
        'KrakenD',
        'Docker',
        'AWS',
        'RabbitMQ',
        'Redis',
        'Github Action',
      ],
    },
    {
      position: 'Team Lead, Full-stack',
      company: 'Revenue Monster',
      companyLogo: RevenueMonster,
      startDate: moment('08-01-2020', 'MM-DD-YYYY'),
      endDate: moment('05-15-2022', 'MM-DD-YYYY'),
      achievements: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Increased the active users and merchant base of{' '}
              <a
                href="https://alacarte.my"
                target="_blank"
                className="font-semibold underline"
              >
                Ala Carte
              </a>{' '}
              by 3X within 1.5 year with active development of new features and
              enhancement
            </li>
            <li className="my-2">
              Developed an e-Wallet system for a client with integration to
              client’s legacy point system and allowed 3rd party vendors to
              integrate to the e-Wallet system as part of business
              digitalization process
            </li>
          </ul>
        </>
      ),
      scopes: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Designed, developed, debugged and tested web applications
              (frontend & backend)
            </li>
            <li className="my-2">
              Implemented CI/CD to automate compilation, testing and deployment
              of system
            </li>
            <li className="my-2">
              Managed cloud infrastructure on GoogleCloud Platform (GCP) and
              Alibaba Cloud
            </li>
            <li className="my-2">
              Performed code review to ensure high quality software build
            </li>
          </ul>
        </>
      ),
      tools: [
        'Golang',
        'React.js',
        'Vue.js',
        'Typescript',
        'Docker',
        'Kubernetes',
        'RabbitMQ',
        'Redis',
        'Github Action',
        'Gitlab CI',
        'CircleCI',
      ],
    },
    {
      position: 'Senior PHP Developer',
      company: 'Octafa Consulting',
      companyLogo: Octafa,
      startDate: moment('01-01-2020', 'MM-DD-YYYY'),
      endDate: moment('07-30-2020', 'MM-DD-YYYY'),
      scopes: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Designed, developed and debugged the online gaming platform using
              Yii framework based on the requirements from the Business Analyst
            </li>
          </ul>
        </>
      ),
      tools: ['PHP', 'Yii'],
    },
    {
      position: 'Web Developer (Part Time)',
      company: 'TraitQuest',
      companyLogo: Traitquest,
      startDate: moment('09-01-2016', 'MM-DD-YYYY'),
      endDate: moment('06-30-2019', 'MM-DD-YYYY'),
      achievements: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Built the web application from scratch within half a year,
              allowing the founders to roll it out to market and get funded by
              investors
            </li>
          </ul>
        </>
      ),
      scopes: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Designed and developed HR-based web application using Laravel
              framework
            </li>
            <li className="my-2">
              Collaborated with the team and QA the codes behind the application
              from time to time
            </li>
          </ul>
        </>
      ),
      tools: ['PHP', 'Laravel'],
    },
    {
      position: 'Application Consultant',
      company: 'Dassault Systemes (Quintiq)',
      companyLogo: Quintiq,
      startDate: moment('08-01-2016', 'MM-DD-YYYY'),
      endDate: moment('12-31-2019', 'MM-DD-YYYY'),
      scopes: (
        <>
          <ul className="list-disc">
            <li className="my-2">
              Developed and debugged Supply Chain Planning & Optimization
              applications in various industries such as workfoce planning and
              railway planning
            </li>
            <li className="my-2">
              Implemented unit testing to ensure high quality software build
            </li>
          </ul>
        </>
      ),
      tools: ['Quill', 'JMeter'],
    },
  ];

  return (
    <div className="bg-gray-800 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Experience
        </h2>
        <div className="md:grid md:grid-cols-2">
          <div className="py-12 px-6">
            {experiences.map((experience, index) => (
              <>
                <a
                  className={`cursor-pointer w-full rounded-md flex flex-row my-4 p-3 hover:bg-blue-100 ${
                    index == selectedExperienceIndex
                      ? 'bg-blue-100'
                      : 'bg-white'
                  }`}
                  onClick={() => setSelectedExperienceIndex(index)}
                >
                  <img
                    className="h-12 w-12 object-contain md:mr-4 mr-2"
                    src={experience.companyLogo}
                    alt={experience.company}
                  />
                  <div className="flex-grow">
                    <div className="flex flex-row">
                      <h4 className="flex-grow text-sm md:text-base font-semibold text-gray-700">
                        {experience.position}
                      </h4>
                      <span className="inline-flex items-center rounded-full bg-blue-200 px-2.5 py-0.5 text-xs font-small text-blue-800">
                        {experience.startDate.format('MMM YYYY')} -{' '}
                        {experience.endDate?.format('MMM YYYY') ?? 'Present'}
                      </span>
                    </div>
                    <h5 className="text-xs text-gray-500">
                      {experience.company}
                    </h5>
                  </div>
                </a>
              </>
            ))}
          </div>
          <div className="hidden md:block text-gray-300 py-14 px-6">
            {experiences[selectedExperienceIndex]?.achievements && (
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white sm:text-lg lg:text-2xl mb-4">
                  Achievements
                </h3>
                {experiences[selectedExperienceIndex]?.achievements}
              </div>
            )}
            {experiences[selectedExperienceIndex]?.scopes && (
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white sm:text-lg lg:text-2xl mb-4">
                  Scopes
                </h3>
                {experiences[selectedExperienceIndex]?.scopes}
              </div>
            )}
            {/* bg-green-200 text-green-800 bg-red-200 text-red-800 bg-gray-200 text-gray-800 bg-yellow-200 text-yellow-800
              bg-indigo-200 text-indigo-800 bg-purple-200 text-purple-800 bg-pink-200 text-pink-800
             */}
            {experiences[selectedExperienceIndex]?.tools && (
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white sm:text-lg lg:text-2xl mb-4">
                  Technologies
                </h3>
                {experiences[selectedExperienceIndex]?.tools?.map(
                  (tool, index) => {
                    const colorIndex = index % colors.length;
                    return (
                      <span
                        className={`inline-flex items-center rounded-full bg-${colors[colorIndex]}-200 mx-1 my-1 px-2.5 py-0.5 text-xs font-small text-${colors[colorIndex]}-800`}
                      >
                        {tool}
                      </span>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
