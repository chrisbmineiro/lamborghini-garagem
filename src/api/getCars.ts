import axios from "axios";
import { CAR_API_BASE_URL } from "../constants/car";
import { CarModel } from "../components/CardView/props";

interface ApiResponse {
    cars: CarModel[];
}

export const fetchGetCarData = async(id: number) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
        const carData = response.data.cars.find((car)=> car.id === id) || null;
        return carData;    
    }
    catch (error) {
        console.error('Error fetching car data:', error);
        return null;
    }
}