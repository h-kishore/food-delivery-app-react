import { RESTAURANT_LOGO } from "../utils/constants"

const RestaurantCard = (props) => {
  const { restaurantCardData } = props

  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = restaurantCardData.info

  return (
    <div className="restaurant-card" style={{ background: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={ RESTAURANT_LOGO + cloudinaryImageId}
        alt="Image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard
