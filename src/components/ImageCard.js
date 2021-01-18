import React from 'react';

class ImageCard extends React.Component {
    constructor (props) {
        super(props);

        //set state inside constructor
        this.state = { spans: 0 };
//assign an instance variable we can then refer to inside out class
        this.imageRef = React.createRef();
    }
//component did mount only gets called after component is rendered
    componentDidMount() {
        //we add an vanilla js event listener and use the event load
         this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //will need to bind this so use an arrow function for set spans
    setSpans = () =>{
        const height = (this.imageRef.current.clientHeight);

        const spans = Math.ceil(height / 10);

        this.setState({ spans });

    }

    render() {
        const { description, urls} = this.props.image;

        return (
            // add span inline style to div
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;