import PropTypes from 'prop-types'
const ServiceCard = ({service}) => {
    const {title, img, price} = service;
return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="">
            <img src={img} alt="Shoes" className="h-[308px] w-full" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>Price : ${price}</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service : PropTypes.object
}