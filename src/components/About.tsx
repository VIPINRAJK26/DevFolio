const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              About Me
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I'm a passionate full-stack developer with over 1 year of
                experience building scalable web applications. I love turning
                complex problems into simple, beautiful solutions.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-lg text-muted-foreground leading-relaxed"
              >
                My expertise spans from frontend frameworks like React and
                Next.js to backend technologies including Python, and cloud
                platforms. I'm always eager to learn new technologies and stay
                up-to-date with industry trends.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="text-center p-4 rounded-lg gradient-card"
                >
                  <h4
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="text-2xl font-bold text-primary mb-2"
                  >
                    15+
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-muted-foreground"
                  >
                    Projects Completed
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="text-center p-4 rounded-lg gradient-card"
                >
                  <h4
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="text-2xl font-bold text-secondary mb-2"
                  >
                    1+
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-muted-foreground"
                  >
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-30"
                />
                <div className="relative w-full h-full rounded-full gradient-card border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="800"
                      className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                    >
                      <span
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="text-4xl font-bold text-primary-foreground"
                      >
                        DEV
                      </span>
                    </div>
                    <h3
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="text-xl font-semibold text-foreground"
                    >
                      Software Developer
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1100"
                      className="text-muted-foreground"
                    >
                      Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;