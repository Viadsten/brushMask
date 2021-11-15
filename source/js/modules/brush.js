class Brush {
  constructor(node, config) {
    this.node = node;
    this.path = this._getPath();
    this.pathLength = this.path.getTotalLength();
    this.time = config.time;
    this.ease = config.ease;
    this._hide();
  }

  _animate() {
    this.gsap = gsap.to(this.path, this.time, {
      strokeDashoffset: 0,
      ease: this.ease,
    });
  }

  _play() {
    this.gsap.play();
  }

  _pause() {
    this.gsap.pause();
  }

  _reverse() {
    this.gsap.reverse();
  }

  _hide() {
    this.path.style.strokeDasharray = this.pathLength;
    this.path.style.strokeDashoffset = this.pathLength;
  }

  _getPath() {
    return this.node.querySelector('#brush-mask path');
  }
}

const initBrush = () => {
  const brushImage = document.querySelector('.brush');

  const bootBrush = new Brush(brushImage, {
    time: 2.7,
    ease: 'slow',
  });

  window.bootBrush = bootBrush;
};

export {initBrush};
