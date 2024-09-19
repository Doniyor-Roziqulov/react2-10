import React from "react";

const Hero = () => {
    return (
        <section className="hero bg-[#000] relative pb-20">
            <div className="wrapper grid lg:grid-cols-2 place-items-center py-6 px-2 gap-16 lg:gap--">
                <div className="hero__info flex flex-col items-center text-center lg:items-start lg:text-start gap-5 lg:gap-7">
                    <p className="hero__info--title w-fit p-3 px-5 text-slate-100 text-sm bg-[#094556] sm:text-nowrap rounded-full animate-fade-in-top-7">
                        Experience the future of driving today!
                    </p>
                    <h1 className=" text-[1.8rem] sm:text-[2.6rem] lg:text-[3.8rem] font-bold leading-[1.04] text-slate-200 animate-fade-in-top-8">
                        Unlock the Road to Your Next Adventure
                    </h1>
                    <p className="text-[#849499] text-[.8rem] sm:text-sm animate-fade-in-top-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto distinctio optio sed quasi doloribus impedit
                        placeat dicta beatae totam! Natus dolores labore, quod
                        quis adipisci unde omnis aliquid neque iure vel quos
                        eius, expedita, consectetur animi totam! Itaque non
                        ipsam odio nobis dolorum esse assumenda praesentium.
                        Cumque magnam quia iusto?
                    </p>
                    <div className="btns flex gap-7 text-sm animate-fade-in-top-9">
                        <button className="bg-[#FFA639] p-3 px-5 rounded-full hover:brightness-110 duration-150 cursor-pointer">
                            Hire Me
                        </button>
                        <button className="hover:underline underline-offset-4 text-slate-200">
                            My Work
                        </button>
                    </div>
                </div>
                <div className="hero__img relative max-w-[18rem]] animate-fade-in-top-10">
                    <img
                        src="https://i.pinimg.com/736x/2c/8e/98/2c8e981280d108b806c2e07bfbcc15b9.jpg"
                        className="rounded-md max-h-[54rem]"
                        alt="img of businessman"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
