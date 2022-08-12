import React, { useState } from "react";
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import EditIcon from '@material-ui/icons/Edit';
import EditTask from '../Modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListTask }) => {
  const [modal, setModal] = useState(false);

  const HandleDelete = (index) => {
    deleteTask(index);
  }

  const toggle = () => {
    setModal(!modal);
  };

  const UpdateTask = (obj) => {
    updateListTask(obj, index)
  }
  return (
    <div className="card--wrapperr" >

      <div className="card-top" style={{ backgroundColor: "", height: "3px" }}></div>

      <div className="todoIcons" style={{ display: "flex", position: "relative", justifyContent: "space-between", }}>
        <EditIcon style={{ position: "absolute", color: "gray", right: "30", cursor: "pointer", fontSize: '26px', top: "1" }} onClick={() => setModal(true)}
        />
      </div>
      <div className="todoIcons" style={{ display: "flex", position: "relative", justifyContent: "space-between", }}>
        <RestoreFromTrashIcon style={{ position: "absolute", color: "gray", right: "0px", cursor: "pointer", fontSize: '30px', top: "0" }}
          onClick={() => HandleDelete(index)} />
      </div>

      <div className="task-holder" kay={new Date().getTime().toString()} style={{ padding: "5px", marginTop: '20px', alignItems: 'center' }}>
        <span className="card-holder" style={{ width: "30vw", fontSize: "0.8rem", padding: '5px', fontWeight: 'bold', color: "gray", textTransform: 'capitalize', lineHeight: '1px', textShadow: "0 0 black", textAlign: "justify" }}>
          {taskObj.Name}
        </span>

        <p style={{ fontSize: "12px", color: "gray",paddingTop:'10px',marginBottom:'0px'}}>{taskObj.Status}</p>

        <div className="description">
          <p >{taskObj.description}</p>
        </div>

        <div style={{ position: "absolute", left: "10px", bottom: "10px", fontSize: "0.8rem", fontWeight: 'bold', color: "gray", textTransform: 'capitalize' }}> {taskObj.developer}</div>
      </div>
      <EditTask modal={modal} setModal={setModal} toggle={toggle} UpdateTask={UpdateTask} taskObj={taskObj} />
    </div>
  );
};

export default Card;
