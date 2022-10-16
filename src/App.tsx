import React, { Fragment, useState, useRef, useCallback } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import moment, { Moment } from 'moment';
import _ from 'lodash';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageViewer from 'react-simple-image-viewer';
import ProfilePicture from './images/profile.jpg';
import Xendit from './images/xendit.png';
import RevenueMonster from './images/revenuemonster.png';
import Octafa from './images/octafa.png';
import Quintiq from './images/quintiq.png';
import Traitquest from './images/traitquest.png';
import MyRoadtaxStore1 from './images/myroadtax-1.png';
import MyRoadtaxStore2 from './images/myroadtax-2.png';
import { ReactSVG } from 'react-svg';
import Website from './images/internet.svg';
import Android from './images/android.svg';
import IOS from './images/apple.svg';

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
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const onClick = (key: string) => {
    switch (key) {
      case '#experience':
        experienceRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case '#skills':
        skillRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case '#projects':
        projectRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
    }
  };

  return (
    <>
      <HeaderSection onClick={onClick} />
      <ExperienceSection reference={experienceRef} />
      <SkillSection reference={skillRef} />
      <ProjectSection reference={projectRef} />
    </>
  );
};

const HeaderSection = ({ onClick }: { onClick: (key: string) => void }) => {
  const start = moment('07-01-2016', 'MM-DD-YYYY');
  const now = moment();
  const numberOfYears = now.diff(start, 'year');

  const navigation = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
                      onClick={() => onClick(item.href)}
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
                        onClick={() => onClick(item.href)}
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

const ExperienceSection = ({
  reference,
}: {
  reference: React.LegacyRef<HTMLDivElement>;
}) => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const experiences: Experience[] = [
    {
      position: 'Senior Software Engineer',
      company: 'Xendit',
      companyLogo: Xendit,
      startDate: moment('05-15-2022', 'MM-DD-YYYY'),
      achievements: (
        <>
          <ul className="list-disc list-inside text-xs md:text-base">
            <li className="my-2">
              Led and built different vertical products within Xendit with 30%
              month-on-month growth on total processing value TPV
            </li>
          </ul>
        </>
      ),
      scopes: (
        <>
          <ul className="list-disc list-inside text-xs md:text-base">
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
          <ul className="list-disc list-inside text-xs md:text-base">
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
          <ul className="list-disc list-inside text-xs md:text-base">
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
          <ul className="list-disc list-inside text-xs md:text-base">
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
          <ul className="list-disc list-inside text-xs md:text-base">
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
          <ul className="list-disc list-inside text-xs md:text-base">
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
          <ul className="list-disc list-inside text-xs md:text-base">
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
    <div
      ref={reference}
      className="bg-gray-800 py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Experience
        </h2>
        <div className="md:grid md:grid-cols-2">
          <div className="py-12 px-6">
            {experiences.map((experience, index) => (
              <>
                <a
                  className={`cursor-pointer w-full flex flex-col rounded-md my-4 p-3 hover:bg-blue-100 ${
                    index == selectedExperienceIndex
                      ? 'bg-blue-100'
                      : 'bg-white'
                  }`}
                  onClick={() => setSelectedExperienceIndex(index)}
                >
                  <div className="w-full flex flex-row">
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
                  </div>
                  {index === selectedExperienceIndex && (
                    <div className="block md:hidden">
                      <div className="relative my-2">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="w-full border-t border-gray-300" />
                        </div>
                      </div>
                      <div className="mt-4">
                        {experiences[selectedExperienceIndex]?.achievements && (
                          <div className="mb-4">
                            <h3 className="text-sm font-bold text-gray-600 mb-2">
                              Achievements
                            </h3>
                            {experiences[selectedExperienceIndex]?.achievements}
                          </div>
                        )}
                        {experiences[selectedExperienceIndex]?.scopes && (
                          <div className="mb-4">
                            <h3 className="text-sm font-bold text-gray-600 mb-2">
                              Scopes
                            </h3>
                            {experiences[selectedExperienceIndex]?.scopes}
                          </div>
                        )}
                        {experiences[selectedExperienceIndex]?.tools && (
                          <div className="mb-4">
                            <h3 className="text-sm font-bold text-gray-600 mb-2">
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
                  )}
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

interface Skill {
  name: string;
  percentage: number;
}

const SkillSection = ({
  reference,
}: {
  reference: React.LegacyRef<HTMLDivElement>;
}) => {
  const skills: Skill[] = [
    {
      name: 'Golang',
      percentage: 85,
    },
    {
      name: 'React.js',
      percentage: 80,
    },
    {
      name: 'Typescript',
      percentage: 65,
    },
    {
      name: 'Vue.js',
      percentage: 60,
    },
    {
      name: 'React Native',
      percentage: 50,
    },
    {
      name: 'Node.js',
      percentage: 45,
    },
    {
      name: 'PHP (Laravel)',
      percentage: 45,
    },
  ];

  const databases: Skill[] = [
    {
      name: 'MySQL',
      percentage: 85,
    },
    {
      name: 'PostgreSQL',
      percentage: 85,
    },
    {
      name: 'MongoDB',
      percentage: 80,
    },
    {
      name: 'Redis',
      percentage: 70,
    },
  ];

  const devops: Skill[] = [
    {
      name: 'Docker',
      percentage: 90,
    },
    {
      name: 'Github Action',
      percentage: 90,
    },
    {
      name: 'CircleCI',
      percentage: 80,
    },
    {
      name: 'Kubernetes',
      percentage: 80,
    },
    {
      name: 'Gitlab CI',
      percentage: 70,
    },
  ];

  const cloud: Skill[] = [
    {
      name: 'AliCloud',
      percentage: 80,
    },
    {
      name: 'AWS',
      percentage: 70,
    },
    {
      name: 'Google Cloud',
      percentage: 50,
    },
  ];

  return (
    <div
      ref={reference}
      className="bg-gray-100 py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
          Skills
        </h2>
        <div className="my-6 bg-white py-3 px-4 rounded-md">
          <h5 className="mb-2 text-lg text-gray-600">Language / Frameworks</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {skills.map((skill) => (
              <div className="grid grid-cols-3">
                <div className="text-sm col-span-1 text-right text-gray-500 mr-2">
                  {skill.name}
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 bg-white py-3 px-4 rounded-md">
          <h5 className="text-lg text-gray-600">Database</h5>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {databases.map((skill) => (
              <div className="grid grid-cols-3">
                <div className="text-sm col-span-1 text-right text-gray-500 mr-2">
                  {skill.name}
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 bg-white py-3 px-4 rounded-md">
          <h5 className="text-lg text-gray-600">DevOps</h5>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {devops.map((skill) => (
              <div className="grid grid-cols-3">
                <div className="text-sm col-span-1 text-right text-gray-500 mr-2">
                  {skill.name}
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 bg-white py-3 px-4 rounded-md">
          <h5 className="text-lg text-gray-600">Cloud Services</h5>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {cloud.map((skill) => (
              <div className="grid grid-cols-3">
                <div className="text-sm col-span-1 text-right text-gray-500 mr-2">
                  {skill.name}
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Project {
  name: string;
  startDate: Moment;
  endDate?: Moment;
  description: string;
  shortDescription: string;
  images: string[];
  technologies: string[];
  link?: string;
  androidLink?: string;
  iosLink?: string;
}

const ProjectSection = ({
  reference,
}: {
  reference: React.LegacyRef<HTMLDivElement>;
}) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projects: Project[] = [
    {
      name: 'Carlink',
      startDate: moment('08-01-2022', 'MM-DD-YYYY'),
      shortDescription: 'Vehicle inspection web and mobile application',
      description:
        'Vehicle inspection mobile app and web application that enables Carlink second-hand car dealer to manage the vehicles and carry out vehicle inspection',
      images: [
        'https://play-lh.googleusercontent.com/6HWu6gtVV1kBQ6TZHXBpDoPV98SbAwWggQAqLVQ7WLS5PcHGIndQ4mw9jAaP_XsRuWx_=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/dymPBZJ21fAiOG08o-lk3xcAXcKieTGbbyi5eImIL9OXDI97Ejuoavm29ygTdUo8X5M=w2560-h1440-rw',
      ],
      technologies: ['React Native', 'React.js', 'Typescript', 'Next.js'],
      link: 'https://carlink.my',
      androidLink:
        'https://play.google.com/store/apps/details?id=com.carlinkapp',
    },
    {
      name: 'My Roadtax Store',
      startDate: moment('05-01-2021', 'MM-DD-YYYY'),
      shortDescription: 'Runner management system for roadtax renewal',
      description:
        'Runner management system that allows vendor to allocate runners for orders received from Touch N Go, Shopee, Allianz Insurance etc',
      images: [MyRoadtaxStore1, MyRoadtaxStore2],
      technologies: ['Golang', 'Docker', 'AliCloud'],
      link: 'https://renew.myroadtax.store/',
    },
    {
      name: 'Financial News Web Crawler',
      startDate: moment('05-01-2020', 'MM-DD-YYYY'),
      endDate: moment('05-01-2020', 'MM-DD-YYYY'),
      shortDescription: 'Malaysia Finance News Aggregator',
      description:
        'A web crawler site for local and international financial news',
      images: ['https://miro.medium.com/max/1400/1*1hllnQYLfjstxSEp3fTayw.png'],
      technologies: ['Golang', 'Vue.js'],
    },
    {
      name: 'Real Time Chat',
      startDate: moment('05-01-2020', 'MM-DD-YYYY'),
      endDate: moment('05-01-2020', 'MM-DD-YYYY'),
      shortDescription: 'Real time chatting application',
      description:
        'A real-time chat that allows users to chat in private or in group',
      images: ['https://wilson-tan.web.app/img/realtimechat1.83c9ecb6.png'],
      link: 'https://real-time-chat-wt.web.app/',
      technologies: ['Vue.js', 'Firebase'],
    },
    {
      name: 'www.mskin.com.my',
      startDate: moment('04-01-2018', 'MM-DD-YYYY'),
      endDate: moment('08-01-2018', 'MM-DD-YYYY'),
      shortDescription: 'Product landing page on bio-cellulose mask',
      description:
        'A landing page that promotes bio-cellulose mask together with its benefits. Comes with contact form to allow users to send enquiries.',
      images: [
        'https://wilson-tan.web.app/img/mskin1.d95742a2.png',
        'https://wilson-tan.web.app/img/mskin2.4a015f35.png',
        'https://wilson-tan.web.app/img/mskin3.fe4890dc.png',
      ],
      link: 'https://meridic.herokuapp.com/',
      technologies: ['PHP'],
    },
    {
      name: 'bookcar.asia',
      startDate: moment('08-01-2017', 'MM-DD-YYYY'),
      endDate: moment('08-01-2017', 'MM-DD-YYYY'),
      shortDescription: 'Interest registration page for ride-hailing platform',
      description:
        'An interest registration page for ride-hailing platform in Malaysia that offers flexibility to drivers to drive whenever they want',
      images: [
        'https://wilson-tan.web.app/img/bookcar1.4593cc13.jpg',
        'https://wilson-tan.web.app/img/bookcar2.81c66734.png',
      ],
      link: 'https://powerful-peak-79558.herokuapp.com/',
      technologies: ['PHP', 'Laravel'],
    },
    {
      name: '3 Blocks',
      startDate: moment('05-01-2017', 'MM-DD-YYYY'),
      endDate: moment('06-01-2017', 'MM-DD-YYYY'),
      shortDescription: 'Maths puzzle Android game',
      description:
        'A maths puzzle game app which users swap tiles like Candy Crush while performing mathematical calculation at the same time.',
      images: ['https://wilson-tan.web.app/img/3blocks1.d560e9cb.png'],
      technologies: ['C#', 'Unity'],
    },
  ];

  const onClickProject = useCallback((index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  }, []);

  const onCloseProject = useCallback(() => {
    setSelectedProjectIndex(null);
    setIsModalOpen(false);
  }, []);

  return (
    <div
      ref={reference}
      className="bg-gray-100 py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            Projects
          </h2>
          <div className="text-gray-500 my-4">
            <p className="mb-2">
              These are some of the side / hobby projects I carry out during my
              free time.
            </p>
            <p className="mb-2">
              Like what you see? Contact me for more information.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <Carousel
            responsive={responsive}
            swipeable={true}
            arrows={!isModalOpen}
          >
            {projects.map((project, index) => (
              <a
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickProject(index);
                }}
              >
                <div className="bg-white mx-2 rounded-md h-full">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="mx-auto rounded-lg h-48 object-cover shadow-lg"
                      src={project.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="py-3 px-4">
                    <div className="space-y-1 font-medium leading-6">
                      <h3 className="text-base">{project.name}</h3>
                      <p className="text-blue-600 text-xs">
                        {project.startDate.format('MMM YYYY')} -{' '}
                        {project.endDate?.format('MMM YYYY') ?? 'Present'}
                      </p>
                    </div>

                    <div className="text-gray-400 text-xs">
                      {project.shortDescription}
                    </div>

                    <div className="flex flex-row mt-2">
                      {!_.isEmpty(project.link) && (
                        <a
                          className="mr-1"
                          href={project.link}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ReactSVG src={Website} className="h-4 w-4" />
                        </a>
                      )}
                      {!_.isEmpty(project.androidLink) && (
                        <a
                          className="mr-1"
                          href={project.androidLink}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ReactSVG src={Android} className="h-4 w-4" />
                        </a>
                      )}
                      {!_.isEmpty(project.iosLink) && (
                        <a
                          className="mr-1"
                          href={project.iosLink}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ReactSVG src={IOS} className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </Carousel>
          {isModalOpen && (
            <ImageViewer
              src={projects[selectedProjectIndex ?? 0].images}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={onCloseProject}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
