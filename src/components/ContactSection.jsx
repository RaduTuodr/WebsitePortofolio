import Link  from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactSection = () => {

    return (

            <section>

                <div className="bg-[#303030] h-[150px] w-full flex md:flex-row flex-col justify-around items-start pt-4">

                    <div>
                        <ul>
                            <p className="text-white font-bold text-2xl">
                                My social media
                            </p>

                            <div className="flex gap-6 pb-4 pt-4">
                            <a href="https://www.linkedin.com/in/tudor-eduard-radu/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl"/></a>
                            <a href="https://github.com/RaduTuodr" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl"/></a>
                            <a href="mailto:radutudoreduard@gmail.com"><SiGmail className="text-2xl"/></a>
                            <a href="https://www.instagram.com/radu.tudor17" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl"/></a>
                            </div>
                        </ul>

                        <ul>
                            <p className="text-white">
                                radutudoreduard@gmail.com
                            </p>
                        </ul>
                    </div>
                    <div className="p-4">
                        <p className="font-semithin">
                            Done in 🌷 spring of 2024
                        </p>
                    </div>

                </div>

            </section>
    );
};

export default ContactSection;