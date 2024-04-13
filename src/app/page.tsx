import Image from "next/image";

import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import AboutMeSection from "../components/AboutMeSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {

	return (
		<main className="flex min-h-screen flex-col bg-[#121212] container">

			<Navbar />

			<div className="container mx-auto mt-24 px-12 py-4">
				<IntroSection />
			</div>

			<AboutMeSection/>

			<ProjectSection/>

		</main>
	)
}