import Head from 'next/head';
import Image from "next/image";
import logo from "@/app/assets/Logo.webp";
import boxPic from "@/app/assets/box.webp";
import sachetPic from "@/app/assets/sachet.webp";
import hairUser from "@/app/assets/hair.webp";
import skinUser from "@/app/assets/skin.webp";
import { FeedbackForm } from "./components/feedbackForm";
import CallIcon from '@mui/icons-material/Call';

export const viewport = {
  themeColor: '#34495E',
}

export const metadata = {
  title: 'Mens Styling Club - Personalised Grooming Packs for Men',
  description: 'Discover the best skin and hair products for men with our curated sample packs. Tailored to your unique needs, try before you buy.',
  keywords: 'skin care for men, best body wash for men, mens skincare set, after shave men, men grooming, mens hair styling, grooming packs, personalised grooming, hair care, skin care, men\'s grooming products',
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/assets/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/assets/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: '/assets/apple-touch-icon.png',
    maskIcon: {
      href: '/assets/safari-pinned-tab.svg',
      color: '#34495E'
    }
  },
  msapplication: {
    TileColor: '#34495E'
  },
  alternates: {
    canonical: 'https://mensstyling.club',
  },
  openGraph: {
    title: 'Mens Styling Club - Personalised Grooming Packs for Men',
    description: 'Discover the best skin and hair products for men with our curated sample packs. Tailored to your unique needs, try before you buy.',
    url: 'https://mensstyling.club',
    type: 'website',
    images: [
      {
        url: 'https://mensstyling.club/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Mens Styling Club'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mensstylingclub',
    title: 'Mens Styling Club - Personalised Grooming Packs for Men',
    description: 'Discover the best skin and hair products for men with our curated sample packs. Tailored to your unique needs, try before you buy.',
    image: 'https://mensstyling.club/assets/twitter-image.webp'
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Mens Styling Club'
    },
    {
      name: 'revisit-after',
      content: '7 days'
    },
    {
      name: 'google-site-verification',
      content: 'lN1A9NW0C0EIMcWktRPLTM3LUg8vpz69w8gWQaCTZVA'
    }
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const ldJSON = { __html: {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Mens Styling Club - Personalised Grooming Packs for Men",
    "url": "https://mensstyling.club",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }};

  function WhyComponent({ title, content }) {
    return (
      <div className="flex flex-col w-7/8 z-10 even:self-end md:even:self-auto">
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-md">{content}</span>
      </div>
    );
  }

  function HowComponent({ title, content }) {
    return (
      <div className="flex flex-col md:flex-1 bg-secondary/20 m-5 p-5 gap-2 text-white shadow-xl backdrop-blur-sm rounded">
        <span className="text-xl">{title}</span>
        <div className="bg-primary h-0.5" />
        <span className="text-sm font-light">{content}</span>
      </div>
    );
  }

  function ProductComponent({ title, content, list, image }) {
    return (
      <div className="relative flex flex-col md:flex-1 bg-primary m-5 p-5 md:px-10 md:max-w-sm gap-2 text-secondary shadow-xl mt-[120px]">
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: 'calc(100% - 50px)' }}>
          <Image src={image} height={200} alt={title} className="relative" />
        </div>
        <div className="bg-secondary h-px mt-[30px] mx-8" />
        <div className="pt-[30px] flex flex-col gap-6 justify-between h-full">
          <div className="flex flex-col items-center gap-6 h-full">
            <h2 className="text-5xl uppercase font-light">{title}</h2>
            <p className="text-sm">{content}</p>
            <div className="flex flex-col">
              <span className="font-semibold">What&apos;s inside:</span>
              <ul className="list-disc ml-5 gap-2 flex flex-col text-sm">
                {list.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <a className="border-secondary transition hover:border-tertiary hover:text-tertiary border py-2 px-4 text-md w-fit self-center justify-self-end" href='/build'>
            Build my pack
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col h-screen bg-primary w-full text-secondary justify-between">
          <div className="flex flex-col h-3/5 w-full md:hidden">
            <Image src={boxPic} alt="Opened box showing sample products" className="self-center lg:block drop-shadow-2xl object-cover h-full w-full opacity-80" />
            <div className="z-10 flex flex-row flex-wrap gap-y-1 -mt-40 pl-5 text-2xl font-light">
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">Curated</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">sample</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">packs</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">of</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">top</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">hair</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">styling,</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">grooming,</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">and</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">skincare</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">products</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">for</span>
              <span className="inline-block bg-secondary bg-opacity-25 backdrop-blur-md text-secondary pl-1">men.</span>
            </div>
          </div>
          <a className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:items-center w-fit" href='/'>
            <Image src={logo} width={100} height={100} alt="Mens Styling Club Logo" />
            <div className="flex flex-col">
              <span className="text-4xl uppercase font-extralight tracking-[0.25em] font-montserrat">Mens Styling Club</span>
              <span className="font-extralight text-lg font-montserrat">Where men discover.</span>
            </div>
          </a>
          <div className="md:flex flex-col flex-grow hidden px-10 justify-center text-lg text-secondary">
            <h1 className="bg-secondary text-primary my-8 px-1 w-fit">Try the best hair styling products for men and men&apos;s skincare sets before you buy.</h1>
            <div className="flex flex-row flex-wrap gap-y-1 max-w-sm">
              <span className="inline-block bg-secondary text-primary pl-1">Curated</span>
              <span className="inline-block bg-secondary text-primary pl-1">sample</span>
              <span className="inline-block bg-secondary text-primary pl-1">packs</span>
              <span className="inline-block bg-secondary text-primary pl-1">of</span>
              <span className="inline-block bg-secondary text-primary pl-1">top</span>
              <span className="inline-block bg-secondary text-primary pl-1">hair</span>
              <span className="inline-block bg-secondary text-primary pl-1">styling,</span>
              <span className="inline-block bg-secondary text-primary pl-1">grooming,</span>
              <span className="inline-block bg-secondary text-primary pl-1">and</span>
              <span className="inline-block bg-secondary text-primary pl-1">skincare</span>
              <span className="inline-block bg-secondary text-primary pl-1">products</span>
              <span className="inline-block bg-secondary text-primary pl-1">for</span>
              <span className="inline-block bg-secondary text-primary pl-1">men.</span>
            </div>
            <a className="border-secondary text-light hover:text-tertiary transition hover:border-tertiary border my-8 text-base py-2 px-4 w-fit" href='/build'>Build your custom pack</a>
          </div>
          <Image src={boxPic} alt="Opened box showing sample products" className="md:block absolute bottom-[-80px] right-0 drop-shadow-2xl object-cover w-3/5 hidden" />
        </div>
        <div className="flex flex-col bg-secondary w-full text-primary">
          <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 pt-14 pb-4 text-center font-black opacity-70 md:mt-20">Why?</span>
          <div className="flex flex-col p-5 justify-evenly h-full w-full md:flex-row pb-14">
            <div className="h-[500px] w-full flex p-14 blur-[2px] opacity-70 md:opacity-100 md:order-1 md:blur-0 content-center">
              <Image src={sachetPic} alt="Sample products in sachets" className="self-center object-contain md:h-[500px]" />
            </div>
            <div className="h-[500px] -mt-[500px] w-full md:order-2 md:mt-0 flex flex-col justify-evenly items-center gap-10 md:flex-grow">
              <WhyComponent title="Personalized grooming, simplified" content="We understand that finding the right grooming products can be overwhelming. That's why we offer curated sample packs tailored to your specific needs, so you can discover what works best for you without the hassle." />
              <WhyComponent title="Try before you commit" content="No more buyer's remorse. Our sample packs allow you to test out top grooming products before making a full-sized purchase, ensuring you only invest in products you love." />
              <WhyComponent title="Quality you can trust" content="We partner with leading grooming brands to bring you high-quality samples. Each pack is carefully curated to provide you with the best grooming experience possible." />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-primary w-full text-secondary">
          <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 pt-10 md:pt-16 md:pb-6 text-center font-black opacity-70">How?</span>
          <div className="flex flex-col p-5 md:pb-16 justify-evenly w-full md:flex-row">
            <HowComponent title="Choose your preferences" content="Start by selecting your grooming preferences. Whether it's hair care, skincare, or beard grooming, we've got you covered." />
            <HowComponent title="Build your pack" content="Based on your preferences, we'll curate a sample pack that suits your needs. Our expert team ensures that you get the best products tailored to you." />
            <HowComponent title="Try and discover" content="Receive your personalised sample pack and try out the products in the comfort of your home. Find out what works best for you and make informed grooming choices." />
          </div>
        </div>
        <div className="flex flex-col bg-secondary w-full text-primary">
          <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 pt-10 md:pt-16 md:pb-6 text-center font-black opacity-70">The packs</span>
          <div className="flex flex-col justify-evenly h-full w-full p-5 md:flex-row">
            <ProductComponent title="Hair Care" content="Discover top hair care products that nourish and style your hair, keeping it healthy and strong." list={["Shampoo", "Conditioner", "Styling Gel", "Beard wash", "Curly hair creams"]} image={hairUser} />
            <ProductComponent title="Skin Care" content="Treat your skin with premium skincare sets designed to keep your skin looking and feeling great." list={["Face wash", "Moisturisers for dry skin", "Sunscreen", "Eye cream for dark circles", "Cleanser"]} image={skinUser} />
          </div>
        </div>
        <div className="flex flex-col bg-white w-full px-5 py-14 gap-8 shadow-lg text-tertiary">
          <h2 className="text-4xl uppercase tracking-[0.25em] font-montserrat opacity-70 text-center">Contact Us</h2>
          <FeedbackForm />
          <div className="flex flex-col md:flex-row items-center flex-wrap text-sm gap-4 justify-center md:justify-evenly">
            <div>The Modern Gentleman &copy; {new Date().getFullYear()}</div>
            <div className="flex flex-row gap-1">
              <CallIcon fontSize="small"/>
              <span>+44 7401 996 138</span>
            </div>
            <div>Deliveries made anywhere in the UK.</div>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={ldJSON} />
      </main>
    </>
  );
}
