import React from 'react';
// import footerImg from '../assets/footer_img.png'; // Update the path to your image

const Footer = () => {
    return (
        // FOOTER IMAGE IS MESSED UP (TRIED TO INCLUDE THE SAME IMAGE AS THE ONE FROM DESGIN BUT RATIO IS BAAAAAAAADDDDDDDDDD) ; IF SOMEONE CAN FIX JUST REPLACE IT IN ASSETS WITH THE SAME NAME EVERYTHING ELSE IS FINE
        <footer
        className="text-white text-center py-8"
        // style={{
        //     backgroundImage: `url(${footerImg})`,
        //     backgroundSize: 'fill',
        //     backgroundPosition: 'center',
        // }}
        >
        {/* <h2 className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 mb-4 rounded-full text-lg font-medium inline-flex items-center">Contact Us</h2> */}
        <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.instagram.com/iste_manipal/" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/istemanipal/" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://in.linkedin.com/company/iste-manipal" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin text-2xl"></i>
            </a>
        </div>
        <p className="text-sm mb-2"> 
            For any queries, contact:<br /> +91-9845780894 | +91-8809795723
        </p>
        <p className="text-sm mb-2"> 
            Copyright &copy; 2024 All rights reserved | Made by ISTE Manipal
        </p>
        </footer>
    );
};

export default Footer;
