import React, { useState } from 'react'
import ModalBox from '../Modals/ModalBox'
import Card from './Card';

const ToDoArea = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => {
        setModal(!modal);
    };

    const save = (taskObj) => {
        setTaskList((oldCards) => {
            return [...oldCards, taskObj]
        })
        setModal(false)
    };
    const deleteTask = (id) => {
        setTaskList((oldCards) => {
            return oldCards.filter((obj, index) => {
                return index !== id
            })
        })
    };
    const updateListTask = (obj, index) => {
        const tempList = taskList.slice();
        tempList[index] = obj
        console.log(tempList)
        setTaskList(tempList)
        setModal(false)
    }



    return (

        <>
            <div className="todoArea">
                <div className="addTODO">
                    <button className="addButton" style={{ fontWeight: 'bold', color: "gray" }} onClick={() => { setModal(true) }}> Task-Stock
                    </button>
                </div>
                <div className="task-container" style={{ overflowY: 'scroll',display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'20px' }}>
                    {taskList &&
                        taskList.map((obj, index) => (
                            <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListTask={updateListTask} setTaskList={setTaskList} taskList={taskList} />
                        ))}
                </div>
                <ModalBox toggle={toggle} modal={modal} save={save} />
            </div>
        </>
    )
}

export default ToDoArea
