import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ArchiveIcon from '@material-ui/icons/Archive';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

const SideBar = () => {
    return (
        <>
            <div className="section1" style={{ display: "flex ", marginTop: "0px", flexDirection: "column", gap: "20px", flex: "1", width: '230px', height: "85vh", padding: "20px 10px 10px 10px", transition: "all 0.4s ease-in-out" }}>
                <div className="icon_div" > <EmojiObjectsIcon style={{ color: 'gray', fontSize: "30px" }} /> <span className="nameOFIcon">Notes</span></div>
                <div className="icon_div"> <FindReplaceIcon style={{ color: 'gray', fontSize: "30px" }} /><span>In Progress</span></div>
                <div className="icon_div"> <AssignmentTurnedInIcon style={{ color: 'gray', fontSize: "30px" }} /><span>Done</span></div>
                <div className="icon_div"> <ArchiveIcon style={{ color: 'gray', fontSize: "30px" }} /><span>Archive</span></div>
                <div className="icon_div"><RestoreFromTrashIcon style={{ color: 'gray', fontSize: "30px" }} /><span>Trash</span></div>
                <div className="cloneName">
                    <h5 style={{ color: 'gray', bottom: '10px', fontSize: "1.05rem" }} >Google-KeepNote-Clone</h5>

                </div>
            </div>
        </>
    )
}

export default SideBar
