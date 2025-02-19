import type {NextPage} from 'next'
import Head from 'next/head'
import ScheduleItem from "../components/ScheduleItem";
import useScrollPosition from "../util/useScrollPosition";
import {useEffect, useState} from "react";
import LinkCard from "../components/LinkCard";

const workshops: { name: string; description: string; image: string; handout: string; slides?: string; recording?: string; }[] = [
    {
        name: "Day 1: Web Fundamentals",
        description: "Start with the underlying technologies of the web: HTML, CSS, and Javascript.",
        image: "/basics.png",
        handout: "https://docs.google.com/document/d/1c3VRt4PgSsJcJjQnO3ybej8tHbJF0gYu0Ydf-gZXvRw/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/1G2giTCFRvywLJ6Y0yccIgiDK3qyJx7T_mP6D4LH0TCA/edit?usp=sharing",
        // recording: "https://brown.zoom.us/rec/share/uGXXyTsPD0g1Iq9B9Io7JClsrlD00Tf98ELdG6f5jrAyNPtqz5fV7oF8W3kQtfnu.RZhZiPMoNOeA1vp1",
    }, {
        name: "Day 2: Express + MongoDB",
        description: "Build a server to persist and manipulate data for your web apps using Express and MongoDB.",
        image: "/backend.png",
        handout: "https://docs.google.com/document/d/1EYAvslfccZSvYkq_vKsWODYHLydxtU8PW0fCtJoAGMc/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/1hF3TuzTu6exQPA9ekFjQdP-OPg-E0-YeU5gUDayoLYw/edit?usp=sharing",
        // recording: "",
    },
    {
        name: "Day 3: React",
        description: "Build a user interface for your app using React: a modern front-end framework.",
        image: "/react.png",
        handout: "https://docs.google.com/document/d/1GuqxjAZ6mkzfLBbbJC14q0bCK3TRweEZS5lVXKzUS1E/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/1gDeKXtuXb33L6nT3cWZVKKxH3BrxFeU3W7zfLYHpbEY/edit?usp=sharing",
        // recording: "https://brown.zoom.us/rec/share/Jy5c8U1Nh03YE_LD3ma3aDRd0SPE7MMdufCQUwb8NEip8-8YpFKGnuFIxcpmjCRw.wX9CGRDM04rhLouH",
    }, {
        name: "Day 4: Integration",
        description: "Connect your front-end with your server with API calls, then deploy your app to the web.",
        image: "/deploy.png",
        handout: "https://docs.google.com/document/d/1Hld8akpY6k5v2KeWvEoL1uS9mQZourflHn7bEljujfY/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/14RujbxgLKe6B06LPbI8jnSg5vpRmPuF67GAg_arPCWo/edit?usp=sharing",
        // recording: "https://brown.zoom.us/rec/share/zM88u1r0WRDvX6nPybnlYVC7EWZ1R5IZtlyutVfb5IScPmmnD-gNxGWRK8UGQPU.96_hU7bwzUYP-uia",
    }];

const Home: NextPage = () => {
    const scrollPosition = useScrollPosition();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300);
    }, []);

    return (<div>
        <Head>
          <title>FSAB Bootcamp Fall 2023</title>
          <meta property="og:title" content="FSAB Bootcamp Fall 2023" key="title" />
        </Head>
        <div
            className={"min-h-screen transition-opacity ease-in duration-500 " + (loaded ? "opacity-100" : "opacity-0")}>
            <div style={{backgroundImage: "url('/flare.jpg')", backgroundPosition: "bottom"}}>
                <div
                    className={`p-4 z-50 text-sm sm:text-base flex items-center justify-between fixed bg-opacity-40 transition-all duration-150 bg-[#06080D] backdrop-blur-lg w-full ${scrollPosition < 10 && "backdrop-blur-none bg-opacity-0"}`}>
                    <p className="font-bold">Full Stack at Brown</p>
                    <nav className="space-x-6">
                        <a href="https://calendar.google.com/calendar/u/0?cid=Y181NGI4ODA2NmE3N2U0MTdiODZiOTQ3NzVjZjhmOWFjMDZjYTgxMzJlNzBmMWJmYzcxODUxODRhZjNmYzJhYjU3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Add
                            to Calendar</a>
                        {/* <a href="https://www.fullstackatbrown.com/about">About Us</a> */}
                    </nav>
                </div>
                <div className="max-w-5xl px-4 mx-auto pt-36 space-y-24">
                    <section>
                        <p className="text-lg md:text-xl font-mono uppercase">
                            Sep 11 — 14, 2023
                        </p>
                        <h1 className="mt-2 text-4xl md:text-6xl font-semibold">
                            Web Development Bootcamp
                        </h1>
                        <p className="text-xl md:text-2xl opacity-75 font-light mt-4">
                            Meet other Full Stack at Brown members and enjoy a light snack on us, all while learning modern web
                            development.
                            Throughout the week, you&apos;ll learn industry-standard tooling and technologies by
                            building a real project you can add to your portfolio.
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-4">
                            Times: <strong>September 11 - 14, 8pm - 10pm</strong>
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-1">
                            Location: <strong>Barus & Holley 166</strong>
                        </p>
                        {/* <p className="text-l md:text-xl opacity-75 mt-1">
                            Zoom Link: <a className="underline" href="https://brown.zoom.us/j/96870814005">https://brown.zoom.us/j/96870814005</a>
                        </p> */}
                    </section>
                    <section>
                        <h2 className="text-3xl md:text-4xl">
                            Schedule
                        </h2>
                        <ul className="space-y-4 mt-4">
                            {workshops.slice(0, 2).map(workshop => <ScheduleItem key={workshop.name}
                                                                                 name={workshop.name}
                                                                                 description={workshop.description}
                                                                                 image={workshop.image}
                                                                                 handout={workshop.handout}
                                                                                 slides={workshop.slides}
                                                                                 recording={workshop.recording}/>)}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="max-w-5xl px-4 mx-auto space-y-24 mt-4">
                <section>
                    <ul className="space-y-4">
                        {workshops.slice(2).map(workshop => <ScheduleItem key={workshop.name}
                                                                          name={workshop.name}
                                                                          description={workshop.description}
                                                                          image={workshop.image}
                                                                          handout={workshop.handout}
                                                                          slides={workshop.slides}
                                                                          recording={workshop.recording}/>)}
                    </ul>
                </section>
                <section>
                    <h2 className="text-3xl md:text-4xl">
                        More stuff
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <LinkCard title="Day 0: Set up your development environment"
                                href="https://docs.google.com/document/d/1olSoQayXFkPtc6a_v05fCKcyx-R1kZ69TndzWP9w7uo/edit?usp=sharing"
                                  description="Download and install the tooling we'll use throughout the week."/>
                        {/*<LinkCard title="Download project starter"*/}
                        {/*          description="Clone the starter code for the project we'll build together."/>*/}
                        {/*<LinkCard title="View project demo"*/}
                        {/*          description="See a live demo of the project you'll build throughout the week."/>*/}
                        <LinkCard title="Submit your project for certification"
                                  href="https://forms.gle/pVP2G9pDBqaP2jNH9"
                                  description="Send us your completed bootcamp project to become eligible to work on projects for
                                    Full Stack."/>
                    </div>
                </section>
            </div>
            <footer>
                <p className="text-center opacity-40 mb-12 my-24">
                    © {(new Date()).getFullYear()} Full Stack at Brown. All rights reserved.
                </p>
            </footer>
        </div>
    </div>)
}

export default Home
