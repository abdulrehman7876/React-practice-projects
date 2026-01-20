export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#956943] text-white flex flex-col items-center"
    >
      <div className="w-full flex items-center justify-between px-5 sm:px-20 lg:px-45 pt-10 pb-7 gap-10">
        <div className="hidden lg:block mb-4">
          <img
            loading="lazy"
            className="h-30 object-cover"
            src="/Logo.png"
            alt="Logo"
          />
        </div>
        <div className="grid grid-rows-[repeat(3,max-content)] gap-6 sm:grid-cols-3 sm:grid-rows-1 lg:grid-cols-[repeat(3,max-content)]  sm:gap-20 justify-center">
          <div className="gap-2 flex flex-col font-light">
            <h3 className="font-semibold mb-2 text-2xl">Contact Us</h3>
            <p>Email: info@thecafe.com</p>
            <p>Phone: +92 302617692</p>
            <p>Location: Near University || ETC Town</p>
          </div>
          <div className="gap-2 flex flex-col font-light">
            <h3 className="font-semibold mb-2 text-2xl">Hours</h3>
            <p>Monday - Friday:</p>
            <p>7am - 8pm</p>
            <p>Saturday - Sunday:</p>
            <p>8am - 9pm</p>
          </div>
          <div className="gap-2 flex flex-col font-light">
            <h3 className="font-semibold mb-2 text-2xl">Follow Us</h3>
            <p>Instagram: @thecafe</p>
            <p>Facebook: The Cafe</p>
          </div>
        </div>
      </div>
      <div className="bg-black mt-4 text-sm w-full text-center py-5">
        &copy; {new Date().getFullYear()} THE Cafe. All rights reserved.
      </div>
    </footer>
  );
}
