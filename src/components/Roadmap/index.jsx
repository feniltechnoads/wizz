import SectionHeading from "../SectionHeading";
import { VscCircleFilled } from "react-icons/vsc";

const Roadmap = ({data , ClassSpanTitle}) => {

    return (

      <section className="roadmap section-padding-100" id="roadmap">
        <SectionHeading
          title="Our ICO Roadmap"
          // text="Our ICO Roadmap"
          ClassSpanTitle={ClassSpanTitle}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {data && data.map((item , key) => (
                  <div className="timeline" key={key}>
                    <div className="icon" />
                    <div className={item.class}>
                      <div className="date-outer">
                        <span className="date">
                          <span className="month">{item.month}</span>
                          <span className="year">{item.year}</span> 
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content text-light">
                      <h5 className="title"><li>{item.title}</li></h5>
                      {/* <p className="description text-light-gray">{item.description}</p> */}
                      {/* <ul> */}
                        {item.list1 && <li>{item.list1}</li>}
                        {item.list2 && <li>{item.list2}</li>}
                        {item.list3 && <li>{item.list3}</li>}
                        {item.list4 && <li>{item.list4}</li>}
                        {item.list5 && <li>{item.list5}</li>}
                        {item.list6 && <li>{item.list6}</li>}
                        {item.list7 && <li>{item.list7}</li>}
                        {item.list8 && <li>{item.list8}</li>}
                        {item.list9 && <li>{item.list9}</li>}
                      {/* </ul> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Roadmap