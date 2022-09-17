import SectionHeading from "../../components/SectionHeading";

const AboutUs = ({ HomeDemo4AboutUs }) => {
  return (
    <>
      <div className="container" id="aboutus">
        <section className="section-padding-100">
          <SectionHeading title="About Us"
          //  text="More About Node"
            />
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-12 col-lg-6">
              <img src={HomeDemo4AboutUs} alt="" className="img-fluid p-4" />
            </div>
            <div className="col-lg-6 offset-lg-0 col-xs-12">
              <p>
                WIZZ is a prominent business group serving people with a mission to a sustainable lifestyle for people over 18 years all over Europe. WIZZ operates its business in various sectors including aviation with the mission of a sustainable business model with Ultra-low emissions. 
              </p>
              <p>
                WIZZ group observing the current economic situation for a long and planning to take a part in the world economy, as we all know, currently the digital economic system is growing remarkably, and most organisations are moving into the blockchain which is sustainable for the world economy and matches our mission. With that influence, we hired experts in the industry and started to build a Blockchain, NFT-based cryptocurrency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
