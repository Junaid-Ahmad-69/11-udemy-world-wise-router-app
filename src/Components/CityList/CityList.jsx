import Spinner from "../Spinner/Spinner.jsx";
import styles from "./CityList.module.css"
import CityItem from "../CityItem/CityItem.jsx";
import Message from "../Message/Message.jsx";

// eslint-disable-next-line react/prop-types
const CityList = ({isLoading, cities , onRemoveCity}) => {
    if (isLoading) return <Spinner/>
    if(!cities.length) return <Message message="Add you first city by clicking on a city on the map"/>
    const city = cities.map(cityItem => <CityItem cityItem={cityItem} key={cityItem.id} onRemoveCity={onRemoveCity}/>)

    return (
        <ul className={styles.cityList}>
            {city}
        </ul>
    )
}

export default CityList
