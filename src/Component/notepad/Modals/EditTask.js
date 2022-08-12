import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, setModal, toggle, UpdateTask, taskObj }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Status, setStatus] = useState("");
    const [developer, setDeveloper] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "taskName") {
            setTaskTitle(value);
        } else if (name === "descriptionDetails") {
            setDescription(value);
        } else if (name === "selectStatus") {
            setStatus(value);
        } else if (name === "developerName") {
            setDeveloper(value);
        }
    };

    useEffect(() => {
        setTaskTitle(taskObj.Name);
        setStatus(taskObj.Status)
        setDescription(taskObj.description)
        setDeveloper(taskObj.developer)


    }, [taskObj.developer, taskObj.description, taskObj.Status, taskObj.Name])

    const handleUpdate = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskTitle;
        taskObj["description"] = description;
        taskObj["Status"] = Status;
        taskObj["developer"] = developer;
        UpdateTask(taskObj);
        setModal(false)
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form className="form-group">
                    <div className="form-group">
                        <label htmlFor="">Task Title</label>
                        <input
                            type="text"
                            className="form-control mb-3"
                            value={taskTitle}
                            onChange={handleChange}
                            name="taskName"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Task Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={description}
                            onChange={handleChange}
                            name="descriptionDetails"
                            autoComplete="off"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Status</label>
                        <select
                            name="selectStatus"
                            id=""
                            className="form-control mb-2"
                            value={Status}
                            onChange={handleChange}
                        >
                            <option value="Select Status">Select Status</option>
                            <option value="Todo">Todo</option>
                            <option value="In Processing">In Processing </option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Developer Name</label>
                        <input
                            type="text"
                            className="form-control mb-3"
                            value={developer}
                            onChange={handleChange}
                            name="developerName"
                            autoComplete="off"
                        />
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
                <span style={{ display: "flex", gap: '10px', justifyContent: 'space-evenly' }}>
                    <Button
                        style={{ width: "173px", marginLeft: "0px", backgroundColor: '#f1ba40d9', color: "gray" }}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                    <Button
                        style={{ width: "173px", marginRight: "20px", backgroundColor: '#f1ba40d9', color: "gray" }}
                        onClick={toggle}
                    >
                        Cancel
                    </Button>
                </span>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;
