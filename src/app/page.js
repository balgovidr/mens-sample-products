import Image from "next/image";
import logo from "@/app/assets/Logo.gif"
import invertedLogo from "@/app/assets/inverted.svg"
import boxPic from "@/app/assets/box.png"
import sachetPic from "@/app/assets/sachet.png"

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
        <divider className="bg-primary h-0.5" />
        <span className="text-md">{content}</span>
      </div>
    )
  }

  function ProductComponent({title, content, image}) {
    return (
      <div className="relative flex flex-col bg-primary m-5 p-5 gap-2 text-secondary shadow-lg mt-[160px]">
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: 'calc(100% - 50px)' }}>
          <Image src={image} height={200} alt={title} className="relative" />
        </div>
        <div className="bg-secondary h-px w-full mt-[30px]" />
        <div className="pt-[30px] flex flex-col items-center gap-2">
          <span className="text-6xl uppercase font-light">{title}</span>
          <span className="text-md">{content}</span>
          <button className="border-secondary transition hover:border-tertiary border py-2 px-4 text-md w-fit self-center">
            Add to cart
          </button>
        </div>
      </div>

    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col h-screen bg-primary w-full text-secondary justify-between">
        <div className="h-3/5 w-full">
          <Image src={boxPic} alt="Opened box showing sample products" className="self-center lg:block drop-shadow-2xl object-cover	h-full w-full"/>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <span className="text-4xl uppercase font-extralight tracking-[0.25em] font-montserrat">Grooming Lab</span>
          <span className="font-light text-lg font-montserrat">Where men discover</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl bg-secondary text-primary px-5 py-20">Try the best men&apos;s grooming products before you buy.</span>
        <span className="text-right hidden text-2xl bg-primary text-secondary px-5 py-20">Curated sample packs of top hair styling, grooming, and skincare products for men.</span>
        <divider className="bg-primary h-px mx-10" />
      </div>
      <div className="flex flex-col bg-secondary w-full text-primary">
        <span className="text-5xl font-light uppercase tracking-[0.25em] font-montserrat px-5 pt-10 text-center">Why?</span>
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
        <span className="text-5xl font-light uppercase tracking-[0.25em] font-montserrat px-5 py-10 text-center z-10">How?</span>
        <div className="h-[500px] w-full flex opacity-50 items-center">
          <Image src={invertedLogo} alt="Opened box showing sample products" className="object-cover h-[900px] w-[900px] -rotate-45 overflow-visible"/>
        </div>
        <div className="h-[500px] w-full flex mt-[-500px] flex-col justify-evenly">
          <HowComponent title="Select your pack" content="Choose from our curated sample packs." />
          <HowComponent title="Try at home" content="Experience the products in the comfort of your home." />
          <HowComponent title="Find your favourites" content="Discover what works best for you." />
        </div>
      </div>
      <div className="flex flex-col bg-secondary text-primary">
        <ProductComponent title="Hair" content="Get a box with 5 hair products to try out." image={logo}/>
      </div>
    </main>
  );
}
