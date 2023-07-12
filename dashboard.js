import React from 'react'
import './board.css';
import './dash.css';
function dashboard() {
  return (
    <div>
        <header>
    
            <div class="logosec">
                <div class="logo">Safewheels</div>
                <img src= "https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                    class="icn menuicn"
                    id="menuicn"
                    alt="menu-icon"></img>
            </div>
    
            

            <div class="message">
                <div class="circle"></div>
                <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                    class="icn"
                    alt=""></img>
                <div class="dp">
                <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                        class="dpicn"
                        alt="dp"></img>
                </div>
            </div>
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                class="nav-img"
                                alt="dashboard"></img>
                            <h3> Dashboard</h3>
                        </div>
    
                        
    
                        <div class="nav-option option3">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                class="nav-img"
                                alt="report"></img>
                            <h3> Premium</h3>
                        </div>
    
                        <div class="nav-option option4">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                class="nav-img"
                                alt="institution"></img>
                            <h3> Help Desk</h3>
                        </div>
    
                        <div class="nav-option option5">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                class="nav-img"
                                alt="blog"></img>
                            <h3>Status</h3>
                        </div>
    
                        <div class="nav-option option6">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                                class="nav-img"
                                alt="settings"></img>
                            <h3> Settings</h3>
                        </div>
    
                        <div class="nav-option logout">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                class="nav-img"
                                alt="logout"></img>
                            <h3>Logout</h3>
                        </div>
    
                    </div>
                </nav>
            </div>
            <div class="main">
    
                
    
                <div class="box-container">
    
                    <div class="box box1">
                        <div class="text">
                            <h2 class="topic-heading">60.5k</h2>
                            <h2 class="topic">Policies Sold</h2>
                        </div>
    
                        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                            alt="Views"></img>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                            <h2 class="topic-heading">150</h2>
                            <h2 class="topic">Insurance Partners</h2>
                        </div>
    
                        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                            alt="likes"></img>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                            <h2 class="topic-heading">320 million</h2>
                            <h2 class="topic">Registered Customers</h2>
                        </div>
    
                        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                            alt="comments"></img>
                    </div>
    
                    <div class="box box4">
                        <div class="text">
                            <h2 class="topic-heading">70</h2>
                            <h2 class="topic">Pay As You Drive</h2>
                        </div>
    
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"></img>
                    </div>
                </div>
    
                <div class="report-container">
                    <div class="report-header">
                        <h1 class="recent-Articles">Recent Members</h1>
                        <button class="view">View All</button>
                    </div>
    
                    <div class="report-body">
                        <div class="report-topic-heading">
                            <h3 class="t-op">Member ID</h3>
                            <h3 class="t-op">Type</h3>
                            <h3 class="t-op">Plans</h3>
                            <h3 class="t-op">Status</h3>
                        </div>
    
                        <div class="items">
                            <div class="item1">
                                <h3 class="t-op-nextlvl">1819001</h3>
                                <h3 class="t-op-nextlvl">Four-wheeler</h3>
                                <h3 class="t-op-nextlvl">Premium</h3>
                                <h3 class="t-op-nextlvl label-tag">Issued</h3>
                            </div>
    
                            <div class="item1">
                                <h3 class="t-op-nextlvl">1819002</h3>
                                <h3 class="t-op-nextlvl">Four-wheeler</h3>
                                <h3 class="t-op-nextlvl">Premium</h3>
                                <h3 class="t-op-nextlvl label-tag">Issued</h3>
                            </div>
    
                            <div class="item1">
                                <h3 class="t-op-nextlvl">1819003</h3>
                                <h3 class="t-op-nextlvl">Four-wheeler</h3>
                                <h3 class="t-op-nextlvl">Premium</h3>
                                <h3 class="t-op-nextlvl label-tag">Issued</h3>
                            </div>
    
                            <div class="item1">
                                <h3 class="t-op-nextlvl">1819004</h3>
                                <h3 class="t-op-nextlvl">Two-wheeler</h3>
                                <h3 class="t-op-nextlvl">Premium</h3>
                                <h3 class="t-op-nextlvl label-tag">Issued</h3>
                            </div>
    
                            
    
                            
    
                            
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default dashboard