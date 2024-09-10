import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(id);
    try {
        if(response){
            setCarData(response)
        }
    }
    catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
}

export const handlePreviousItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        let response = null;
        if (carData && carData?.id > 1) {   
            response = await fetchGetCarData(carData.id - 1);
        }

        if(response){
            setCarData(response)
        }
        else {
            setCarData(null)
        }
    } 
    catch(error) {
        console.error('Erro ao buscar dados:', error);
        setCarData(null)
    }
}

export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        let response = null;
        if (carData && carData?.id < 10) {   
            response = await fetchGetCarData(carData.id + 1);
        }
        if(response){
            setCarData(response)
        }
        else {
            setCarData(null)
        }
    } 
    catch(error) {
        console.error('Erro ao buscar dados:', error);
        setCarData(null)
    }
}