import SectionHeading from "../../../components/SectionHeading"

import Service from "./Service"


const 
OurServices = ({data}) => {

    return (

      <section className="our_services_area section-padding-100-0 clearfix" id="ecosystem">
        <div className="container section-padding-100">
          <SectionHeading
            title="Our Eco System"
            // text="Our Eco System"
          />

          <div className="row justify-content-around">
            {data && data.map((item , key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
                description= {item.description}
              />
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurServices;