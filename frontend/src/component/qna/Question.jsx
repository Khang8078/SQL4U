import React, { Component,useState} from "react";
import { Link } from "react-router-dom";






export default function Question(props) {

    // const location = useLocation();
    // console.log('mes', location);
    // const { courseId } = location.state;
    //const [state, setState] = useState({});

    // useEffect(() => {
    //     const user = auth.getCurrentUser();
    //     setState(user)
    // }, []);
   

    const info = {
        _id:props._id,
        userName: props.userName,
        userAvatar: props.userAvatar,
        description: props.description,
        topic: props.topic,
        title: props.title,
    } 



    return (

        <div className="question-post">
            <div className="avatar">
                <img src={info.userAvatar}
                    alt="user avatar" className="user-avartar" id="user-avatar" />
                <h6 id="user-name">{info.userName}</h6>

            </div>
            <div className="topic-chosen"><p>{props.topic}</p></div>
            <div className="question-content" data-toggle="tooltip" data-placement="top" title="Click here to see answers">
                 <Link
                to={`/qna/${info._id}`} 
                userQuestion={{questionPost:info}}
                className='QuestionAndAnswer'>
                <p className="question-value " >{info.title}</p>
                 </Link> 

            </div>

        </div>





    );

}