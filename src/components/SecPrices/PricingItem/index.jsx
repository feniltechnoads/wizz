
const PricingItem = ({ Node, Rewards, img, imgBlack }) => {

    return (
      <div className="col-lg-3 col-sm-6 col-xs-12 secpricing ">
        <div className="pricing-item d-flex flex-column align-items-center">
          <div className="mb-3 myimg">
            <img src={img} alt="" className="img-fluid imgWhite" />
            <img src={imgBlack} alt="" className="img-fluid imgBlack" />
          </div>
          <h4>{Node}</h4> 
          <div className="px-2 mb-4">{Rewards}</div>
        </div>
      </div>
    );
}

export default PricingItem;