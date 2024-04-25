import { useParams } from "react-router-dom";
import CustomButton from './CustomButton.jsx';

function Detail (props) {

    let {id} = useParams();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={props.libs[id].image} width="50%" alt="lib" />
                <h5>{props.libs[id].title}</h5>
                <h6>{props.libs[id].price}</h6>
                <CustomButton text="Buy" />
                </div>
            </div>
        </div>
    )
}

export default Detail;