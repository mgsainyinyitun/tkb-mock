import axios from "axios";
import { useEffect, useState } from "react";
import TkbItem from "./TkbItem";

function TkbList() {
    const [tkbList, setTkbList] = useState([]);
    useEffect(() => {
        console.log(tkbList);
        const fetchTKB = async () => {
            try {
                const response = await axios.get('https://calm-pink-donkey-tie.cyclic.app/tkb/all/json?sort=occureDate&order=desc', { crossDomain: true })
                setTkbList(response.data.data); // Assuming the response contains the timetable data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTKB();
    }, []);

    return (
        <tbody>
            {tkbList.map((tkbItem, index) => (
                <TkbItem
                    index={index}
                    id={tkbItem.id}
                    occureDate={tkbItem.occureDate}
                    group={tkbItem.group}
                    server={tkbItem.server}
                    serverity={tkbItem.serverity}
                    fase={tkbItem.fase}
                    message={tkbItem.message}
                />
            ))}
        </tbody>
    )
}

export default TkbList;