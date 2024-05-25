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
      <div className="flex flex-col w-3/4 z-10 even:self-end even:items-end even:text-right">
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-md">{content}</span>
      </div>
    )
  }

  function HowComponent({title, content}) {
    return (
      <div className="flex flex-col bg-secondary/20 m-5 p-5 gap-2 text-white shadow-xl backdrop-blur-sm rounded">
        <span className="text-xl">{title}</span>
        <div className="bg-primary h-0.5" />
        <span className="text-sm font-light">{content}</span>
      </div>
    )
  }

  function ProductComponent({title, content, list, image}) {
    return (
      <div className="relative flex flex-col bg-primary m-5 p-5 gap-2 text-secondary shadow-xl mt-[120px]">
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: 'calc(100% - 50px)' }}>
          <Image src={image} height={200} alt={title} className="relative" />
        </div>
        <div className="bg-secondary h-px mt-[30px] mx-8" />
        <div className="pt-[30px] flex flex-col items-center gap-6">
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
          <button className="border-secondary transition hover:border-tertiary border py-2 px-4 text-md w-fit self-center">
            Build my pack
          </button>
        </div>
      </div>

    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col h-screen bg-primary w-full text-secondary justify-between">
        <div className="flex flex-col h-3/5 w-full">
          <Image src={boxPic} alt="Opened box showing sample products" className="self-center lg:block drop-shadow-2xl object-cover	h-full w-full"/>
          <div className="z-10 flex flex-row flex-wrap gap-y-1 -mt-40 pl-5 text-2xl">
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">Curated</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">sample</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">packs</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">of</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">top</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">hair</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">styling,</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">grooming,</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">and</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">skincare</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">products</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary pr-1">for</span>
            <span className="inline-block bg-secondary bg-opacity-55 backdrop-blur-md text-primary">men.</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <span className="text-4xl uppercase font-extralight tracking-[0.25em] font-montserrat">Grooming Lab</span>
          <span className="font-light text-lg font-montserrat">Where men discover</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl hidden bg-secondary text-primary px-5 py-20">Try the best men&apos;s grooming products before you buy.</span>
        <span className="text-xl bg-secondary text-primary px-5 py-20">Curated sample packs of top hair styling, grooming, and skincare products for men.</span>
        <div className="bg-primary h-px mx-10" />
      </div>
      <div className="flex flex-col bg-secondary w-full text-primary">
        <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 pt-10 text-center font-black opacity-70">Why?</span>
        <div className="flex flex-col p-5 justify-evenly h-full w-full">
          <div className="h-[500px] w-full flex p-14 blur-[2px] opacity-90">
            <Image src={sachetPic} alt="Opened box showing sample products" className="self-center object-contain"/>
          </div>
          <div className="h-[500px] w-full flex mt-[-500px] flex-col justify-evenly">
            <WhyComponent title="Variety" content="Handpicked selection of top products." />
            <WhyComponent title="Convenience" content="Delivered right to your door." />
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
        <div className="h-[550px] w-full flex mt-[-550px] flex-col justify-evenly">
          <HowComponent title="Select your pack" content="Use our forms to customise a curated pack of samples fit for you." />
          <HowComponent title="Try at home" content="The pack you've bought is delivered to you. Experience sample packs of the products in the comfort of your home." />
          <HowComponent title="Find your favourites" content="Discover what works best for you." />
        </div>
      </div>
      <div className="flex flex-col bg-secondary text-primary">
        <span className="text-7xl uppercase tracking-[0.25em] font-montserrat px-5 py-10 text-center z-10  font-black opacity-70">The packs</span>
        <ProductComponent title="Hair" content="Discover your best hair with our personalized hair care pack. Tailored to your unique hair type, this pack includes premium, expert-approved samples to help you find the perfect routine for healthy, stylish hair." list={["A variety of shampoos, conditioners or styling products.", "Customised based on your hair type and needs.", "Handpicked from top brands."]} image={hairUser}/>
        <ProductComponent title="Skin" content="Experience personalized skincare with our custom pack for men. Tailored to your skin profile, it includes premium samples for dryness, oiliness, sensitivity, acne, razor burn, and aging. Achieve a healthier, more resilient complexion with our expertly selected products." list={["A selection of cleansers, moisturisers or serums tailored to your skin type.", "Solutions for issues such as razor burn and ingrown hairs.", "Expertly curated from trusted skincare brands."]} image={skinUser}/>
      </div>
      <div className="flex flex-col bg-white w-full px-5 py-14 gap-8 shadow-lg">
        <FeedbackForm />
        <div className="flex flex-row flex-wrap text-sm text-tertiary gap-2 justify-center">
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
