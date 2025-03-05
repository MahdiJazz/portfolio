import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="l-main">
        {/* 🔹 Home */}
        <section className="home" id="home">
          <div className="home-container bd-grid">
            <div className="home-data">
              <div className="home-img">
                <Image
                  src="/images/mahdijazini.jpg"
                  alt="Mahdi Jazini"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <h1 className="home-title">Mahdi Jazini</h1>
              <span className="home-profession">Frontend Developer</span>
              <div className="home-social">
                <a
                  href="https://www.linkedin.com/in/mahdijazini/"
                  className="home-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-linkedin"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </a>

                <a
                  href="https://github.com/MahdiJazz"
                  className="home-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </a>
                <a
                  href="https://t.me/mahdijazini"
                  className="home-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-telegram"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </a>
                <a
                  href="https://wa.me/989354155639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-link"
                >
                  <i
                    className="bx bxl-whatsapp"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 About */}
        <section className="about section" id="about">
          <span className="section-subtitle">My Intro</span>
          <h2 className="section-title">About Me</h2>
          <div className="about-container bd-grid">
            <div className="about-data">
              <p className="about-description">
                Hello, I’m Mehdi, a Frontend Developer with a true passion for
                building beautiful, responsive, and user-friendly websites. As a
                dedicated frontend specialist, I create interactive web
                experiences users love, ensuring sites are visually appealing
                and functionally excellent. From performance optimization and
                cross-browser compatibility to engaging interactive features, I
                craft high-quality web applications that consistently surpass
                client expectations. Leveraging cutting-edge technologies like
                React and Next.js, I develop lightning-fast, SEO-optimized
                websites rich with modern features. My core skills include
                proficiency in HTML, CSS, and JavaScript, enhanced by state
                management expertise with Redux for complex applications.
              </p>
              <Image
                src="/images/about.jpg"
                alt="About Me"
                width={220}
                height={220}
                className="about-img"
              />
            </div>
            <div>
              <div className="about-information">
                <h3 className="about-information-title">Information</h3>
                <div className="about-information-data">
                  <i className="bx bx-user about-information-icon"></i>
                  <span>Mahdi Jazini</span>
                </div>
                <div className="about-information-data">
                  <i className="bx bx-phone about-information-icon"></i>
                  <span>+989354155639</span>
                </div>
                <div className="about-information-data">
                  <div className="mb-16">
                    <i className="bx bx-envelope about-information-icon"></i>
                    <span>mahdi.jazini.frontend@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="about-information">
                <div className="mt-16">
                  <h3 className="about-information-title">
                    Experience and Support
                  </h3>
                </div>

                <div className="about-information-data">
                  <i className="bx bx-medal about-information-icon"></i>
                  <div>
                    <span className="about-information-subtitle">
                      5 Years Job
                    </span>
                    <span className="about-information-subtitle-small">
                      Experience
                    </span>
                  </div>
                </div>
                <div className="about-information-data">
                  <i className="bx bx-briefcase about-information-icon"></i>
                  <div>
                    <span className="about-information-subtitle">
                      50+ Projects
                    </span>
                    <span className="about-information-subtitle-small">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="about-information-data">
                  <i className="bx bx-support about-information-icon"></i>
                  <div>
                    <span className="about-information-subtitle">Support</span>
                    <span className="about-information-subtitle-small">
                      Online 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 Skills */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Why Choose Me</h2>
          <div className=" bd-grid  mb-5 text-xl">
            <ul>
              <li>
                ✔️ Server-Side Performance Mastering SSR, SSG, and API
                efficiency for ultra-fast web apps
              </li>
              <li>
                ✔️ Modern Web Technologies Expert in React, Next.js, Tailwind
                CSS, and Redux
              </li>
              <li>
                ✔️ Scalability & Optimization Optimized data fetching, caching,
                and lazy loading for smooth performance
              </li>
              <li>
                ✔️ User Experience & Design Creating responsive, intuitive, and
                user-friendly interfaces
              </li>
              <li>
                ✔️ SEO & Core Web Vitals Ensuring top performance,
                accessibility, and search engine visibility
              </li>
            </ul>
            <br />
            <p className="text-center">
              Let’s build something fast, powerful, and future-proof together!
            </p>
          </div>
        </section>

        {/* 🔹 Education */}
        <section className="education section">
          <span className="section-subtitle">Qualification</span>
          <h2 className="section-title">My Education</h2>
          <div className="education-container bd-grid">
            <div className="education-content">
              <div>
                <h3 className="education-year">2008-2011</h3>
                <span className="education-university">
                  University of Technology
                </span>
              </div>
              <div className="education-time">
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>
              <div>
                <h3 className="education-race">
                  Associate’s Degree in Software
                </h3>
              </div>
            </div>

            <div className="education-content">
              <div>
                <h3 className="education-year">2013-2015</h3>
                <span className="education-university">
                  University of Technology
                </span>
              </div>
              <div className="education-time">
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>
              <div>
                <h3 className="education-race">BSc in IT Engineering</h3>
              </div>
            </div>

            {/* <div className="education-content">
              <div>
                <h3 className="education-year">2018 - 2020</h3>
                <span className="education-university">
                  University of Technology
                </span>
              </div>
              <div className="education-time">
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>
              <div>
                <h3 className="education-race">Certificate Design</h3>
                <span className="education-specialty">UI/UX Designer</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* 🔹 Services */}
        <section className="services section" id="services">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">My Services</h2>

          <div className="services-container bd-grid">
            {/* Web Design */}
            <div className="services-content">
              <i className="bx bx-code services-icon"></i>
              <h3 className="services-title">Web Design</h3>
              <p className="services-description">
                I create modern, responsive websites that make a lasting
                impression. My designs focus on user experience, combining
                attractive aesthetics with intuitive navigation to help your
                business stand out online. From landing pages to full-scale web
                applications, I deliver custom solutions that align with your
                brand and business goals.
              </p>
            </div>

            {/* Graphic Design */}
            <div className="services-content">
              <i className="bx bx-pen services-icon"></i>
              <h3 className="services-title">Graphic Design</h3>
              <p className="services-description">
                I specialize in creating visually striking designs that
                communicate your message effectively. From brand identity and
                logos to marketing materials and social media graphics, I
                combine creativity with strategic thinking to deliver designs
                that capture attention and resonate with your target audience.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="services-content">
              <i className="bx bx-brush services-icon"></i>
              <h3 className="services-title">UI/UX Design</h3>
              <p className="services-description">
                SEO (Search Engine Optimization) I specialize in optimizing
                websites to rank higher on search engines and drive organic
                traffic. Using strategies like keyword research, on-page
                optimization, technical SEO, and link building, I improve
                visibility, enhance user experience, and ensure sustainable
                growth.
              </p>
            </div>

            {/* SEO (Search Engine Optimization) */}
            <div className="services-content">
              <i className="bx bx-server services-icon"></i>
              <h3 className="services-title">
                SEO (Search Engine Optimization)
              </h3>
              <p className="services-description">
                {/* I specialize in building robust and scalable server-side
                solutions that power modern web applications. Using technologies
                like Node.js, PHP, and various databases, I develop secure APIs,
                implement efficient data management systems, and create reliable
                server architectures. */}
                I specialize in optimizing websites to achieve higher rankings
                on search engine results pages and drive organic traffic. Using
                strategies like keyword research, on-page optimization,
                technical SEO, and link building, I enhance website visibility,
                improve user experience, and ensure sustainable growth in search
                engine performance.
              </p>
            </div>

            {/* Content Writing */}
            <div className="services-content">
              <i className="bx bx-pencil services-icon"></i>
              <h3 className="services-title">Content Writing</h3>
              <p className="services-description">
                I craft engaging and SEO-optimized content that tells your story
                and connects with your audience. From website copy and blog
                posts to marketing materials and social media content, I deliver
                clear, compelling writing that drives engagement and
                conversions.
              </p>
            </div>

            {/* Mobile Interface */}
            <div className="services-content">
              <i className="bx bx-mobile services-icon"></i>
              <h3 className="services-title">Mobile Interface</h3>
              <p className="services-description">
                I design and develop intuitive mobile interfaces that provide
                exceptional user experiences across all devices. Specializing in
                responsive design and mobile-first approaches, I create
                applications that combine smooth functionality with modern
                aesthetics.
              </p>
            </div>
          </div>
        </section>

        <section className="project section">
          <div className="project-container bd-grid">
            {/* info-projects*/}
            <div className="project-data">
              <h2 className="section-title project-title">
                Do you have any project in mind?
              </h2>
              <p className="project-description">
                If you have any project in mind, please contact me. I will be
                happy to help you.
              </p>
              <a href="#contact" className="button button-light">
                Contact Me
              </a>
            </div>

            {/* photo-projects*/}
          </div>
        </section>

        {/*  portfolio */}
        <section className="works section" id="works">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-title">Recent Works</h2>

          <div className="works-container bd-grid">
            {/* لیست پروژه‌ها */}

            {[
              {
                id: 1,
                img: "/images/work1.jpg",
                title: "Work 1",
              },

              {
                id: 2,
                img: "/images/work2.jpg",
                title: "Work 2",
              },
              {
                id: 3,
                img: "/images/work3.jpg",
                title: "Work 3",
              },
              {
                id: 4,
                img: "/images/work4.jpg",
                title: "Work 4",
              },
              {
                id: 5,
                img: "/images/work5.jpg",
                title: "Work 5",
              },
              {
                id: 6,
                img: "/images/work6.jpg",
                title: "Work 6",
              },
            ].map((work) => (
              <div key={work.id} className="works-img">
                <img src={work.img} alt={`Project ${work.id}`} />
                <div className="works-data">
                  <a href="#" className="works-link">
                    <i className="bx bx-link-alt"></i>
                  </a>
                  <span className="works-title">{work.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*  contact */}
        <section className="contact section" id="contact">
          <span className="section-subtitle">Contact me</span>
          <h2 className="section-title">Get in Touch</h2>

          <div className="contact-container bd-grid">
            {/* form */}
            <ContactForm />

            {/* info-contact  */}
            <div>
              <div className="contact-info">
                <h3 className="contact-subtitle">Call me</h3>
                <span className="contact-text">+989354155639</span>
              </div>

              <div className="contact-info">
                <h3 className="contact-subtitle">E-mail</h3>
                <span className="contact-text">
                  mahdi.jazini.frontend@gmail.com
                </span>
              </div>

             
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
