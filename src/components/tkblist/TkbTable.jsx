import TkbList from "./TkbList";

function TkbTable() {
    return (
        <div className="tkb-table">
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
                <TkbList/>
            </table>
        </div>
    )

}

export default TkbTable;