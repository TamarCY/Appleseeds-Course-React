import React from "react";


class AvatarCard extends React.Component {
    render(props){
        return (
            <div>
                <h3>{`${this.props.data.name.first} ${this.props.data.name.last}`}</h3>
                <img src={this.props.data.picture.medium} alt="#" style={{width:"100px"}}/>
            </div>
        )
    }
}


export default AvatarCard