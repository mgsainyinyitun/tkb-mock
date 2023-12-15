import TkbTable from "../tkblist/TkbTable";

function Body({date}){

    return(
        <div className="body">
            <TkbTable date={date}/>
        </div>
    )
}

export default Body;