import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filterRestaurant, setfilterRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json()

    const allCards = json?.data?.cards
    const restaurantCard = allCards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setListOfRestaurants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    )
    setfilterRestaurant(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    )
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              console.log("hello world")
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              )
              console.log(filteredRestaurant)
              setfilterRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            )
            setListOfRestaurants(filteredList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurant?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info?.id}
            restaurantCardData={restaurant}
          />
        ))}
      </div>
    </div>
  )
}

export default Body
