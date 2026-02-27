
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="bg-footercolor text-[#474747]">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* branding & social */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-dark text-2xl font-bold">Aayurveda</h3>
                    <p className="text-sm">
                        Bringing ancient wellness practices into your modern life. We believe in
                        natural balance, personalised care and sustainable health.
                    </p>
                    <div className="flex space-x-4 mt-4 text-xl text-dark">
                        <a href="#" aria-label="Facebook">
                            <FiFacebook />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FiTwitter />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FiInstagram />
                        </a>
                    </div>
                </div>

                {/* information links */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-dark text-lg font-semibold">Information</h4>
                    <ul className="text-sm space-y-2">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Shipping &amp; Returns</a></li>
                        <li><a href="#">International Delivery</a></li>
                        <li><a href="#">Business Partners</a></li>
                    </ul>
                </div>

                {/* contact details */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-dark text-lg font-semibold">Contact Us</h4>
                    <p className="text-sm">support@amrutam.co   .in</p>
                    <p className="text-sm">
                        Amrutam Pharmaceuticals Pvt Ltd.
                    </p>
                    {/* <p className="text-sm">+91 97131 71999</p> */}
                </div>

                {/* newsletter */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-dark text-lg font-semibold">Stay Updated</h4>
                    <p className="text-sm">
                        Subscribe to our newsletter and join the Aayurveda family.
                    </p>
                    {/* <form className="mt-2 flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 rounded-l-full border border-dark px-4 py-2 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white rounded-r-full px-6 py-2 hover:bg-gray-800 transition"
                        >
                            Subscribe
                        </button>
                    </form> */}
                </div>
            </div>

            <div className="border-t border-[#cccccc] pt-6 text-center text-sm text-[#666666]">
                © {new Date().getFullYear()} Aayurveda. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer