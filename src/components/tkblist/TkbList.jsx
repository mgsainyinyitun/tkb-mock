
import TkbItem from "./TkbItem";

function TkbList({ tkbList }) {

    return (
        <>
            {
                tkbList.length === 0 ? (<tbody><tr class="tkbItem" style={{ borderBottom: `1px solid black` }}><td colSpan="6">{`No data available in table`}</td></tr></tbody>) : (
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
                                max={index + 1 === tkbList.length}
                            />
                        ))}
                    </tbody>)}
        </>
    )
}

export default TkbList;