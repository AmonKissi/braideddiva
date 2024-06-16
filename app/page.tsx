import Image from 'next/image';
import Link from 'next/link';
import ViewCounter from '@/components/view-counter';
import { Suspense } from 'react';
import ExpandingArrow from '@/components/expanding-arrow';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {/* LOGO */}
      <div className="mb-3 mt-10 text-center">
        {/* <Image
          src="/img/logo.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo2.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo3.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo4.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo5.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        /> */}
        <Image
          src="/img/logo10.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          {/* <Image
          src="/img/logo6.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo7.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo8.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
          <Image
          src="/img/logo9.png" // Replace with your logo image path
          alt="Your Logo"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
        /> */}
      </div>
      {/* LOGO  */}
      {/* Social Media Icons */}
      <div className="flex space-x-2">
        {/* Email */}
        <a
          href="mailto:book@braideddiva.net"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image
            src="/img/socials/email.png"
            alt="Socials"
            width={30}
            height={30}
          />
        </a>
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@__dessycakes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image
            src="/img/socials/tiktok.png"
            alt="Socials"
            width={30}
            height={30}
          />
        </a>
        {/* YouTube */}
        <a
          href="/coming-soon.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image
            src="/img/socials/youtube.png"
            alt="Socials"
            width={30}
            height={30}
          />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/braideddiva/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image
            src="/img/socials/instagram.png"
            alt="Socials"
            width={30}
            height={30}
          />
        </a>
      </div>
      {/* Social Media Icons */}

      <Link
        href="https://braideddiva.square.site/"
        target="_blank"
        className="group mt-8 sm:mt-5 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>Book Now</p>
        <ExpandingArrow />
      </Link>

      {/* WELCOME  */}

      {/* <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Welcome
      </h1> */}
      <div className="mb-5 mt-3">
        <Image src="/img/welcome.gif" width="280" height="93" alt="welcome" />
      </div>

      {/* WELCOME  */}

      {/* BUTTONS  */}
     <Link href="./home/index.html" >
      <div className='mb-5'>
        <button className="btn">
          <span className="btn__visible">Braided Diva Official 💻</span>
          <span className="btn__invisible">Visit Website</span>
        </button>
      </div></Link>
      <Link href="./coming-soon.html" >
      <div className='mb-5'>
        <button className="btn">
          <span className="btn__visible">Shop Braided products 💇🏽‍♀️</span>
          <span className="btn__invisible">Shop Now</span>
        </button>
      </div></Link>

      {/* BUTTONS  */}

      {/* ABOUT  */}

      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">About Us</h2>
            <p className="text-sm text-gray-500">📍 Houston, Texas</p>
          </div>
          <Suspense>
            {/* @ts-expect-error Async Server Component */}
            <ViewCounter />
          </Suspense>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-gray-600">
            <strong>Braided Diva</strong> is a thriving beauty company with its
            roots firmly planted in the vibrant city of Houston, Texas. Founded
            by the talented and passionate Desiree Wilson approximately six
            years ago, our company has become a shining beacon in the world of
            professional braids.
          </p>
          <p className="text-gray-600">
            With a dedication to artistry and a commitment to enhancing natural
            beauty, <strong>Braided Diva</strong> has steadily gained
            recognition and trust among clients seeking exquisite and innovative
            braiding styles. We take pride in transforming everyday hair into
            stunning works of art, making each client feel like a true diva.
            Join us on this remarkable journey of hair transformation, where
            expertise, creativity, and a touch of Texan flair come together to
            make every braid a masterpiece.
          </p>
        </div>
      </div>

      {/* ABOUT  */}

      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <a
          href="#"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          © 2023 Braided Diva
        </a>{' '}
        |{' '}
        <Link
          href="/refund-policy.html"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          All Rights Reserved
        </Link>
        .
      </p>
      <div className="mt-3 sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link
          href="/privacy-policy.html"
          className="flex items-center space-x-2"
        >
          <Image
            src="/img/insurance.png"
            alt="Privacy"
            width={24}
            height={24}
            priority
          />{' '}
          <p className="font-light">Privacy Policy</p>
        </Link>
        <Link
          href="/refund-policy.html"
          className="flex items-center space-x-2"
        >
          <Image
            src="/img/card.png"
            alt="GitHub Logo"
            width={26}
            height={26}
            priority
          />
          <p className="font-light">Refund Policy</p>
        </Link>
      </div>
      <div className="mb-10"></div>
    </main>
  );
}
