const RestaurantCard = (props) => {
  const { restaurantData } = props
  const { image, name, cuisines, avgRating, deliveryTime, costForTwo } =
    restaurantData
  return (
    <div className="restaurant-card" style={{ background: "#f0f0f0" }}>
      <img className="restaurant-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard
