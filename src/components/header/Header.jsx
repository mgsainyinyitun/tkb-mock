

function Header({setDate}) {
    function onDateChange(e){
        setDate(e.target.value);
    }
    return (
        <div className="header">
            <h1>TKB</h1>
            <div>
                <input type="date" onChange={onDateChange} className="date"/>
            </div>
        </div>
    )
}

export default Header;