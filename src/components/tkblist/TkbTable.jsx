import axios from "axios";
import { useEffect, useState } from "react";
import TkbList from "./TkbList";

function TkbTable({date}) {
    const [tkbList, setTkbList] = useState([]);
    useEffect(() => {
        const fetchTKB = async () => {
            try {
                const response = await axios.get(`https://calm-pink-donkey-tie.cyclic.app/tkb/all/json?sort=occureDate&order=desc&date=${date?date:""}`);
                setTkbList(response.data.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTKB();
    }, [date]);

    return (
        <div className="tkb-table">
            <p>Showing {tkbList.length===0?0:1} to {tkbList.length} of {tkbList.length} entries</p>
            <table className="tkbTable">
                <thead className="tbHeader">
                    <td className="tbgenRow" width={200}>
                        発生時刻
                    </td>
                    <td className="tbgenRow" width={100}>
                      グループ
                    </td>
                    <td className="tbgenRow" width={100}>
                        システム
                    </td>
                    <td className="tbgenRow" width={100}>
                        重要度
                    </td>
                    <td width={10} className="tbgenRow">
                        fase
                    </td>
                    <td colSpan={5} className="tbMsgRow">
                       メッセージ
                    </td>
                </thead>
                <TkbList tkbList={tkbList}/>
            </table>
            <p>Showing {tkbList.length===0?0:1} to {tkbList.length} of {tkbList.length} entries</p>
            <br/>
        </div>
    )

}

export default TkbTable;