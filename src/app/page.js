import Image from "next/image";
import logo from "@/app/assets/Logo.gif"
import invertedLogo from "@/app/assets/inverted.svg"
import boxPic from "@/app/assets/box.png"
import sachetPic from "@/app/assets/sachet.png"
import hairUser from "@/app/assets/hair.png"
import skinUser from "@/app/assets/skin.png"
import { FeedbackForm } from "./components/feedbackForm";
import CallIcon from '@mui/icons-material/Call';

export default function Home() {
  function WhyComponent({title, content}) {
    return (
      <div className="flex flex-col w-3/4 z-10 even:self-end md:even:self-auto">
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-md">{content}</span>
      </div>
    )
  }

  function HowComponent({title, content}) {
    return (
      <div className="flex flex-col md:flex-1 bg-secondary/20 m-5 p-5 gap-2 text-white shadow-xl backdrop-blur-sm rounded">
        <span className="text-xl">{title}</span>
        <div className="bg-primary h-0.5" />
        <span className="text-sm font-light">{content}</span>
      </div>
    )
  }

  function ProductComponent({title, content, list, image}) {
    return (
      <div className="relative flex flex-col md:flex-1 bg-primary m-5 p-5 md:px-10 md:max-w-sm gap-2 text-secondary shadow-xl mt-[120px]">
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: 'calc(100% - 50px)' }}>
          <Image src={image} height={200} alt={title} className="relative" />
        </div>
        <div className="bg-secondary h-px mt-[30px] mx-8" />
        <div className="pt-[30px] flex flex-col gap-6 justify-between h-full">
          <div className="flex flex-col items-center gap-6 h-full">
            <span className="text-6xl uppercase font-light">{title}</span>
            <span className="text-sm">{content}</span>
            <div className="flex flex-col">
              <span className="font-semibold">What&apos;s inside:</span>
              <ul className="list-disc ml-5 gap-2 flex flex-col text-sm">
                {list.map((point, index) => {
                  return (
                    <li key={index}>{point}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <button className="border-secondary transition hover:border-tertiary hover:text-tertiary border py-2 px-4 text-md w-fit self-center justify-self-end">
            Build my pack
          </button>
        </div>
      </div>

    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col h-screen bg-primary w-full text-secondary justify-between">
        <div className="flex flex-col h-3/5 w-full md:hidden">
          <Image src={boxPic} alt="Opened box showing sample products" className="self-center lg:block drop-shadow-2xl object-cover	h-full w-full opacity-80"/>
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
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:items-center">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <div className="flex flex-col">
            <span className="text-4xl uppercase font-extralight tracking-[0.25em] font-montserrat">Grooming Lab</span>
            <span className="font-extralight text-lg font-montserrat">Where men discover.</span>
          </div>
        </div>
        <div className="md:flex flex-col flex-grow hidden px-10 justify-center text-lg text-secondary">
          <span className="bg-secondary text-primary my-8 px-1 w-fit">Try the best men&apos;s grooming products before you buy.</span>
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
          <button className="border-secondary text-light hover:text-tertiary transition hover:border-tertiary border my-8 text-base py-2 px-4 w-fit">Build your custom pack</button>
        </div>
        <Image src={boxPic} alt="Opened box showing sample products" className="md:block absolute bottom-[-80px] right-0 drop-shadow-2xl object-cover w-3/5 hidden"/>
      </div>
      <div className="flex flex-col bg-secondary w-full text-primary">
        <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 pt-10 text-center font-black opacity-70 md:mt-20">Why?</span>
        <div className="flex flex-col p-5 justify-evenly h-full w-full md:flex-row">
          <div className="h-[500px] w-full flex p-14 blur-[2px] opacity-90 md:opacity-100 md:order-2 md:h-fit md:blur-0">
            <Image src={sachetPic} alt="Opened box showing sample products" className="self-center object-contain"/>
          </div>
          <div className="h-[250px] w-full flex mt-[-500px] flex-col justify-evenly md:order-1 md:mt-0 md:h-auto md:justify-evenly md:items-end md:text-right [&>*:nth-child(even)]:text-right">
            <WhyComponent title="Variety" content="Handpicked selection of top products." />
            <WhyComponent title="Convenience" content="Delivered right to your door." />
          </div>
          <div className="h-[250px] w-full flex flex-col justify-evenly md:order-3 md:mt-0 md:h-auto md:justify-evenly md:items-start md:text-left [&>*:nth-child(even)]:text-right md:[&>*:nth-child(even)]:text-left">
            <WhyComponent title="Affordable" content="Try before committing to full-sized products." />
            <WhyComponent title="Personalised" content="Tailored to suit your unique grooming needs." />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-primary text-secondary w-full overflow-hidden">
        <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 py-10 text-center z-10 font-black opacity-70">How?</span>
        <div className="h-[550px] w-full flex opacity-50 items-center">
          <Image src={invertedLogo} alt="Opened box showing sample products" className="object-cover h-[900px] w-[900px] -rotate-45 overflow-visible"/>
        </div>
        <div className="h-[550px] md:h-fit w-full flex mt-[-550px] flex-col justify-evenly md:flex-row md:pb-8">
          <HowComponent title="Select your pack" content="Use our forms to customise a curated pack of samples fit for you." />
          <HowComponent title="Try at home" content="The pack you've bought is delivered to you. Experience sample packs of the products in the comfort of your home." />
          <HowComponent title="Find your favourites" content="Discover what works best for you." />
        </div>
      </div>
      <div className="flex flex-col bg-secondary text-primary w-full">
        <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 py-10 text-center z-10  font-black opacity-70">The packs</span>
        <div className="flex flex-col md:flex-row md:justify-evenly">
          <ProductComponent title="Hair" content="Discover your best hair with our personalized hair care pack. Tailored to your unique hair type, this pack includes premium, expert-approved samples to help you find the perfect routine for healthy, stylish hair." list={["A variety of shampoos, conditioners or styling products.", "Customised based on your hair type and needs.", "Handpicked from top brands."]} image={hairUser}/>
          <ProductComponent title="Skin" content="Experience personalized skincare with our custom pack for men. Tailored to your skin profile, it includes premium samples for dryness, oiliness, sensitivity, acne, razor burn, and aging. Achieve a healthier, more resilient complexion with our expertly selected products." list={["A selection of cleansers, moisturisers or serums tailored to your skin type.", "Solutions for issues such as razor burn and ingrown hairs.", "Expertly curated from trusted skincare brands."]} image={skinUser}/>
        </div>
      </div>
      <div className="flex flex-col bg-white w-full px-5 py-14 gap-8 shadow-lg">
        <FeedbackForm />
        <div className="flex flex-row flex-wrap text-sm text-tertiary gap-2 justify-center md:justify-evenly">
          <div>The Modern Gentleman &copy; {new Date().getFullYear()}</div>
          <div className="flex flex-row gap-1">
            <CallIcon fontSize="small"/>
            <span>+44 7401 996 138</span>
          </div>
          <div>Deliveries made anywhere in the UK.</div>
        </div>
      </div>
    </main>
  );
}
