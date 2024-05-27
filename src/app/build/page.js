'use client'

import Head from 'next/head';
import Image from "next/image";
import logo from "@/app/assets/Logo.gif";
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { db } from '@/firebase/firebaseClient';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 

export default function Page() {
    const [email, setEmail] = useState('');
    const [formFields, setFormFields] = useState({});
    const [alert, setAlert] = useState({visibility: false});
    const [loading, setLoading] = useState(false);

    async function submitForm() {
      setLoading(true)

      try {
        // Add the feedback to firebase
        await addDoc(collection(db, "interest"), {
            ...formFields,
            email: email,
            dateTime: Timestamp.fromDate(new Date())
        });
        
        setAlert({visibility: true, content: 'Sent!'})
        setTimeout(() => {setAlert({visibility: false})}, 3000);
      } catch {
        setAlert({visibility: true, content: "Sorry, that didn't sent. Please try again."})
        setTimeout(() => {setAlert({visibility: false})}, 3000);
      } finally {
        setLoading(false)
      }
    }

  return (
    <>
      <Head>
        <title>Mens Styling Club - Personalised Grooming Packs for Men</title>
        <meta name="description" content="Discover the best grooming products for men with our curated sample packs. Tailored to your unique needs, try before you buy." />
        <meta name="keywords" content="skin care for men, best body wash for men, mens skincare set, after shave men, men grooming, mens hair styling, grooming packs, personalised grooming, hair care, skin care, men's grooming products" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col bg-primary w-full text-secondary justify-between gap-6 p-5">
          <a className="flex flex-row gap-4 md:gap-6 md:items-center justify-start w-fit" href='/'>
            <Image src={logo} alt="Mens Styling Club Logo" className='h-14 w-14 object-contain'/>
            <div className="flex flex-col">
              <span className="text-2xl uppercase font-extralight tracking-[0.25em] font-montserrat">Mens Styling Club</span>
              <span className="font-extralight text-lg font-montserrat">Where men discover.</span>
            </div>
          </a>
          <span className='text-lg bg-secondary text-primary px-1 w-fit'>Thank you for your interest in Mens Styling Club!</span>
          <span className='text-md'>We&apos;re excited to understand your grooming needs and see how we can best serve you. Please fill out the form below to help us create a personalized grooming experience just for you.</span>
          <span className='text-sm'>FYI - none of these are mandatory. Just fill in whatever you&apos;re comfortable with.</span>
        </div>
        <div className='flex flex-col bg-secondary text-primary py-5 w-full'>
            <h1 className="text-4xl uppercase tracking-[0.25em] font-montserrat px-10 pt-10 text-center font-black opacity-70">Interest Form</h1>
            <div className="flex flex-col mt-8 md:flex-row md:flex-wrap gap-y-5 justify-center">
                <div className="flex flex-col md:w-1/2 px-5">
                  <label htmlFor="email" className="font-semibold">Email</label>
                  <input type="text" id="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}} className="border rounded p-2 mt-1" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col md:w-1/2 px-5">
                <label htmlFor="skinConcern" className="font-semibold">What is your primary skin concern?</label>
                <select id="skinConcern" name="skinConcern" className="border rounded p-2 mt-1" onChange={(event) => {setFormFields((prevState) => ({...prevState, skinConcern: event.target.value}))}}>
                    <option value="" disabled selected>Select an option</option>
                    <option value="dryness">Dryness</option>
                    <option value="oiliness">Oiliness</option>
                    <option value="sensitivity">Sensitivity</option>
                    <option value="acne">Acne</option>
                    <option value="razorBurn">Razor burn</option>
                    <option value="aging">Aging</option>
                    <option value="other">Other (please specify)</option>
                </select>
                </div>
                <div className="flex flex-col md:w-1/2 px-5">
                <label htmlFor="hairConcern" className="font-semibold">What is your primary hair concern?</label>
                <select id="hairConcern" name="hairConcern" className="border rounded p-2 mt-1" onChange={(event) => {setFormFields((prevState) => ({...prevState, hairConcern: event.target.value}))}}>
                  <option value="" disabled selected>Select an option</option>
                    <option value="dryness">Dryness</option>
                    <option value="thinning">Thinning</option>
                    <option value="dandruff">Dandruff</option>
                    <option value="frizz">Frizz</option>
                    <option value="stylingHold">Styling hold</option>
                    <option value="other">Other (please specify)</option>
                </select>
                </div>
                <div className="flex flex-col md:w-1/2 px-5">
                  <label htmlFor="productInterest" className="font-semibold">What type of products are you most interested in trying?</label>
                  <select id="productInterest" name="productInterest" className="border rounded p-2 mt-1" onChange={(event) => {setFormFields((prevState) => ({...prevState, productInterest: event.target.value}))}}>
                    <option value="" disabled selected>Select an option</option>
                      <option value="shampoos">Shampoos and Conditioners</option>
                      <option value="styling">Hair Styling Products</option>
                      <option value="cleansers">Cleansers and Moisturizers</option>
                      <option value="serums">Serums and Treatments</option>
                      <option value="shaving">Shaving Products</option>
                      <option value="other">Other (please specify)</option>
                  </select>
                </div>
                <div className="flex flex-col md:w-1/2 px-5">
                  <label htmlFor="tryFrequency" className="font-semibold">How often do you try new grooming products?</label>
                  <select id="tryFrequency" name="tryFrequency" className="border rounded p-2 mt-1" onChange={(event) => {setFormFields((prevState) => ({...prevState, tryFrequency: event.target.value}))}}>
                    <option value="" disabled selected>Select an option</option>
                      <option value="frequently">Frequently</option>
                      <option value="occasionally">Occasionally</option>
                      <option value="rarely">Rarely</option>
                      <option value="never">Never</option>
                  </select>
                </div>
                <div className="flex flex-col md:w-1/2 px-5">
                  <label htmlFor="importantFactors" className="font-semibold">What are the most important factors when choosing grooming products?</label>
                  <select id="importantFactors" name="importantFactors" className="border rounded p-2 mt-1" onChange={(event) => {setFormFields((prevState) => ({...prevState, importantFactors: event.target.value}))}}>
                    <option value="" disabled selected>Select an option</option>
                      <option value="quality">Quality</option>
                      <option value="price">Price</option>
                      <option value="brand">Brand</option>
                      <option value="ingredients">Ingredients</option>
                      <option value="reviews">Reviews</option>
                      <option value="other">Other (please specify)</option>
                  </select>
                </div>
                <div className="flex flex-col md:w-full px-5">
                  <label htmlFor="specificBrand" className="font-semibold">Is there a specific brand or product you wish to try?</label>
                  <input type="text" id="specificBrand" name="specificBrand" className="border rounded p-2 mt-1" placeholder="Enter brand or product" value={formFields.specificBrand} onChange={(event) => {setFormFields((prevState) => ({...prevState, specificBrand: event.target.value}))}}/>
                </div>
                <div className="flex flex-col md:w-full px-5">
                  <label htmlFor="features" className="font-semibold">What features would you like to see in a personalized grooming service?</label>
                  <input type="text" id="features" name="features" className="border rounded p-2 mt-1" placeholder="Enter features" value={formFields.features} onChange={(event) => {setFormFields((prevState) => ({...prevState, features: event.target.value}))}}/>
                </div>
                <div className="flex flex-col md:w-full px-5">
                  <label htmlFor="hearAboutUs" className="font-semibold">How did you hear about us?</label>
                  <input type="text" id="hearAboutUs" name="hearAboutUs" className="border rounded p-2 mt-1" placeholder="Enter source" value={formFields.source} onChange={(event) => {setFormFields((prevState) => ({...prevState, source: event.target.value}))}}/>
                </div>
                <button type="submit" className="mt-4 py-2 px-4 bg-primary text-secondary rounded" onClick={() => submitForm()}>{loading ? <CircularProgress size={20} className={'text-tertiary' + (loading ? ' block' : ' hidden')}/> : "Submit"}</button>
            </div>
            <div className={'w-full shadow-md rounded-md bg-tertiary/65 text-primary py-1 px-2 items-center m-5' + (alert.visibility ? ' flex' : ' hidden')}><NotificationsNoneIcon /> {alert.content}</div>
        </div>
        <div className="flex flex-col bg-white w-full px-5 py-14 gap-8 shadow-lg text-tertiary">
          <h2 className="text-4xl uppercase tracking-[0.25em] font-montserrat opacity-70 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center flex-wrap text-sm gap-4 justify-center md:justify-evenly">
            <div>The Modern Gentleman &copy; {new Date().getFullYear()}</div>
            <div className="flex flex-row gap-1">
              <CallIcon fontSize="small"/>
              <span>+44 7401 996 138</span>
            </div>
            <div>Deliveries made anywhere in the UK.</div>
          </div>
        </div>
      </main>
    </>
  );
}
