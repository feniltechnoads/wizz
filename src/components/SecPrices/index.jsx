import PricingItem from "./PricingItem"

const SecPrices = ({ClassSec="features section-padding-0-100" , data}) => {

    return (

      <section className={ClassSec}>
        <div className="container">       
          <div className="row align-items-center justify-content-around">
            {data && data.map((item , key) => (
              <PricingItem
                key={key}
                Node={item.Node}
                Rewards = {item.Rewards}
                bonus={item.bonus}
                img={item.img}
                imgBlack={item.imgBlack}
              />
            ))}
          </div>
        </div>
      </section>
    );
}

export default SecPrices;