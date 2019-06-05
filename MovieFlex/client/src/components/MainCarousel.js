import React, { Component } from "react";

class MainCarousel extends Component {
  render() {
    // var slideIndex = 1;
    var slides = [
      {
        title: "Movie Toronto",
        image: "./images/movie.jpg",
        description:
          "Lorem, ipsum dolor sit amet consectet culpa, minima fugiat?"
      },
      {
        title: "MovieFlex Welcome",
        image: "./images/movie2.jpg",
        description: "Lorem, ipsum dolor sit amet c"
      }
    ];

    var Slider = React.createClass({
      getInitialState() {
        return {
          currentIndex: 0,
          length: this.props.data.length
        };
      },
      next() {
        if (this.state.currentIndex < this.state.length - 1) {
          this.setState({ currentIndex: this.state.currentIndex + 1 });
        } else {
          this.setState({ currentIndex: 0 });
        }
      },
      prev() {
        if (this.state.currentIndex > 0) {
          this.setState({ currentIndex: this.state.currentIndex - 1 });
        } else {
          this.setState({ currentIndex: this.stste.length - 1 });
        }
      },
      render() {
        var that = this;
        var slideNodes = this.props.data.map(function(slide, index) {
          return (
            <Slide
              title={slide.title}
              image={slide.image}
              description={slide.description}
              show={that.state.currentIndex === index}
            />
          );
        });

        return (
          <div className="slideShow">
            <a className="previous" onClick={this.prev}>
              prev
            </a>
            <div className="slider">{slideNodes}</div>
            <a className="next" onClick={this.next}>
              next
            </a>
          </div>
        );
      }
    });

    var Slide = React.createClass({
      render() {
        var classString = this.props.show ? "Slide Show" : "slide";
        return (
          <div className={classString}>
            <h1>{this.props.title}</h1>
            <img src={this.props.image} alt="carousel" />
            <p>{this.props.description}</p>
          </div>
        );
      }
    });

    React.render(<Slider data={slides} />, document.getElementById("content"));

    export default MainCarousel;

    // showSlides(slideIndex);

    // function plusSlides(n) {
    //   showSlides((slideIndex += n));
    //   // progressBar((slideIndex += n));
    // }

    // function currentSlide(n) {
    //   showSlides((slideIndex = n));
    // }

    // function showSlides(n) {
    //   var i = 0;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");

    //   if (n > slides.length) {
    //     slideIndex = 1;
    //   }
    //   if (n < 1) {
    //     slideIndex = slides.length;
    //   }
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }

    //   slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex - 1].className += " active";
    // }

    //     return (
    //       <div className="section">
    //         <div className="carousel">
    //           <div className="progress-bar" />
    //           <div className="mySlides fade">
    //             <div className="carousel-frame carousel-image1" />
    //             <div className="text">Movie Toronto</div>
    //             <div className="text-sub">
    //               Lorem, ipsum dolor sit amet consectet culpa, minima fugiat?
    //             </div>
    //           </div>

    //           {/* <div className="mySlides fade">
    //             <div className="carousel-frame carousel-image2" />
    //             <div className="text">Caption Two</div>
    //             <div className="text-sub">
    //               Lorem, ipsum dolor sit amet consectet culpa, minima fugiat?
    //             </div>
    //           </div>

    //           <div className="mySlides fade">
    //             <div className="carousel-frame carousel-image3" />
    //             <div className="text">Caption Three</div>
    //             <div className="text-sub">
    //               Lorem, ipsum dolor sit amet consectet culpa, minima fugiat?
    //             </div>
    //           </div> */}

    //           <p className="prev" onClick="plusSlides(-1)">
    //             &#10094;
    //           </p>
    //           <p className="next" onClick="plusSlides(1)">
    //             &#10095;
    //           </p>

    //           <span className="dot dot1" onClick="currentSlide(1)" />
    //           <span className="dot dot2" onClick="currentSlide(2)" />
    //           <span className="dot dot3" onClick="currentSlide(3)" />
    //         </div>
    //       </div>
    //     );
    //   }
    // }
  }
}
