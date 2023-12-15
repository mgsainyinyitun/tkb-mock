function TkbItem({ index, id, occureDate, group, server, serverity, fase, message,max }) {

    function convertISOToFormattedString(isoString) {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }


    return (
        <tr key={id} className={index % 2 === 0 ? "tkbItem" : "tkbItem2"} style={{borderBottom: max?"1px solid black":""}}>
            <td>
                {convertISOToFormattedString(occureDate)}
            </td>
            <td>
                {group}
            </td>
            <td>
                {server}
            </td>
            <td className={
                serverity === "危険" ? "danger" :
                    serverity === "情報" ? "info" :
                        serverity === "警告" ? "warning" :
                            ""
            }>
                {serverity}
            </td>
            <td>
                {fase}
            </td>
            <td className="itemMsg">
                {message}
            </td>
        </tr>
    )
}

export default TkbItem;

// 危険
// 情報
// 警告

