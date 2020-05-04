import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ImageCard from '../otherUsers/ImageCard';
class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.currentlyViewing.posts,
      image: props.currentlyViewing.posts[0],
      index: 0,
    };
  }
  nextProperty = () => {
    const newIndex = this.state.index + 1;
    const imageViewing = this.state.images[newIndex];
    this.setState({
      image: imageViewing,
      index: this.state.index + 1,
    });
  };
  prevProperty = () => {
    console.log('this', this.state);
    const newIndex = this.state.index - 1;
    this.setState({
      image: this.state.images[newIndex],
      index: this.state.index - 1,
    });
  };
  render() {
    const { image, images, index } = this.state;
    const indexOf = images.findIndex((obj) => obj.id === 87);
    return (
      <MuiThemeProvider>
        <div className="">
          <div className="cont">
            <div className="my-roww2">
              <div className="col">
                <div className={` active-slide-${index}`}>
                  <div
                    className="cards-slider-wrapper"
                    style={{
                      transform: `translateX(-${
                        index * (100 / images.length)
                      }%)`,
                    }}
                  >
                    {images.map((image) => (
                      <ImageCard key={image.id} image={image} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <RaisedButton
              label=" Next"
              primary={true}
              style={styles.button}
              onClick={() => this.nextProperty()}
              disabled={index === 2}
            />
            <RaisedButton
              label="Prev"
              primary={true}
              style={styles.button}
              onClick={() => this.prevProperty()}
              disabled={index === 0}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
const mapStateToProps = (state) => {
  return {
    currentlyViewing: state.currentlyViewing,
    userData: state.userData,
  };
};
export default connect(mapStateToProps, null)(ImageSlider);
