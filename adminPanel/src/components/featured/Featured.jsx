import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Featured = () => {
    return(
        <div className="featuredChart">
            <div className = "top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon  fontSize="small"/>

            </div>

            <div className="bottom">
                <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>

                <p className="title">Total sales made today</p>
                <p className="amount">$100</p>
                <p className="desc">Previous transactions preocessing. Last payments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemsTitle">Target</div>
                        <div className="itemResult positive">
                            <div className="resultAmount"> $12.5k </div>
                            <ArrowUpwardIcon fontSize="small"/>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemsTitle">Last Week</div>
                        <div className="itemResult negative">
                            <div className="resultAmount"> $12.5k </div>
                            <ArrowUpwardIcon fontSize="small"/>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemsTitle">Last Month</div>
                        <div className="itemResult negative">
                            <div className="resultAmount"> $12.5k </div>
                            <ArrowUpwardIcon fontSize="small"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured