import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container bd-grid">
        {/* عنوان فوتر */}
        <h1 className="footer-title">Mahdi</h1>

        {/* توضیحات درباره توسعه‌دهنده */}
        <p className="footer-description">
        Obsessed with server-side performance and modern web technologies to create fast scalable and userfriendly experiences. Every line of code is optimized for speed accessibility and seamless interaction.
        </p>

        {/* لینک‌های شبکه‌های اجتماعی */}
        <div className="footer-social">
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

        {/* متن کپی‌رایت */}
        <p className="footer-copy">
          All rights reserved - 2025
        </p>
      </div>
    </footer>
  );
}
