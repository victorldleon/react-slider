import React, { Component } from "react";

class Slides extends Component {
  state = {
    index: 0,
    currentSlide: {
      title: "",
      text: "",
    },
  };

  componentDidMount() {
    this.setState({
      currentSlide: this.props.slides[this.state.index],
    });
    console.log(this.props.slides.length, "length");
  }

  nextSlide = () => {
    const nextIndex = this.state.index + 1;
    this.setState({
      index: nextIndex,
      currentSlide: this.props.slides[nextIndex],
    });
  };

  prevSlide = () => {
    const prevIndex = this.state.index - 1;
    this.setState({
      index: prevIndex,
      currentSlide: this.props.slides[prevIndex],
    });
  };

  reset = () => {
    const firstIndex = 0;
    this.setState({
      index: firstIndex,
      currentSlide: this.props.slides[firstIndex],
    });
  };

  render() {
    let buttonReset;
    let buttonPrev;
    let buttonNext;

    // buttonReset
    if (this.state.index === 0) {
      buttonReset = (
        <button
          data-testid="button-restart"
          onClick={this.reset}
          className="small outlined"
          disabled={true}
        >
          Restart
        </button>
      );
    } else {
      buttonReset = (
        <button
          data-testid="button-restart"
          onClick={this.reset}
          className="small outlined"
          disabled={false}
        >
          Restart
        </button>
      );
    }

    // buttonPrev
    if (this.state.index === 0) {
      buttonPrev = (
        <button
          data-testid="button-prev"
          onClick={this.prevSlide}
          className="small"
          disabled={true}
        >
          Prev
        </button>
      );
    } else {
      buttonPrev = (
        <button
          data-testid="button-prev"
          onClick={this.prevSlide}
          className="small"
          disabled={false}
        >
          Prev
        </button>
      );
    }

    // buttonNext
    if (this.state.index === this.props.slides.length - 1) {
      buttonNext = (
        <button
          data-testid="button-next"
          onClick={this.nextSlide}
          className="small"
          disabled={true}
        >
          Next
        </button>
      );
    } else {
      buttonNext = (
        <button
          data-testid="button-next"
          onClick={this.nextSlide}
          className="small"
          disabled={false}
        >
          Next
        </button>
      );
    }

    return (
      <div>
        <div id="navigation" className="text-center">
          {buttonReset}
          {buttonPrev}
          {buttonNext}
        </div>
        <div id="slide" className="card text-center">
          <h1 data-testid="title">{this.state.currentSlide.title}</h1>
          <p data-testid="text">{this.state.currentSlide.text}</p>
        </div>
      </div>
    );
  }
}

export default Slides;
