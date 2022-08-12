import React from 'react';
import SideBar from './HomeComponent/SideBar';
import ToDoArea from './HomeComponent/ToDoArea';

const Home = ({ block }) => {

    return (
        <>
            <div className="home" style={{ display: 'flex' }}>
                <div style={{flex:'1'}}>
                    {block && <SideBar />}
                </div>
                <div style={{flex:'9'}}>
                    <ToDoArea />
                </div>
            </div>

        </>
    )
}

export default Home
