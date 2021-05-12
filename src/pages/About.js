function About() {
    return (
        <section className="container">

            <header className="row">
                <h1 className="center-mobile">About Me</h1>
            </header>

            <hr className="solid" />

            <section className="row">

                <section className="indexContent">
                    <img src="./assets/images/headshot.jpg" alt="headshot" className="floatleft" />
                    <p>
                        Welcome to my page! My name’s Dorrian. I’m 24 years old and based in Sacramento, CA. Hailing from
                        Columbus, OH, I relocated to California in 2017 to take an Americorps job as a student mentor in an
                        elementary school. By the time I completed my year-long term-of-service, however, Sacramento had
                        become my new home. I had quickly formed many deep friendships, plugged into the vibrant local music
                        and art scene, and fell in love with the weather in the region. So I decided to stay, and the rest
                    is history!<br /> <br />
                                As a student in UC Davis’ Full Stack Flex coding bootcamp, I am currently amassing a range of web
                                development skills including browser based technologies (such as HTML, CSS, Javascript, and
                                responsive design—to name a few), API interaction, server side development, deployment, and quality
                                assurance. New to computer science, my background lies in education & childcare. In my free time, I
                                love to cook, explore the beauty of my Northern Californian surroundings, and play music with my
                                friends. I’m passionate about economic justice and human dignity, and my ideal job would be with a
                                company or organization that advances those values.
                    <br /> <br />
                        <a href="./assets/Tech_Resume.pdf" download>
                            Click here to download a copy of my resume.
                    </a>
                    </p>
                </section>

            </section>

        </section>
    );
};

export default About;