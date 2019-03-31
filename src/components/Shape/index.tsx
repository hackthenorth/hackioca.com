import React from "react";
import styled from "styled-components";
import { BobaContext } from "src/utils/context/boba";
import media from "src/utils/media";

export interface ShapeProps {
  top?: number;
  left?: number;
  scale: number;
  angle: number;
}

interface ImageProps {
  size: number;
}

interface WrapperProps {
  top?: number;
  left?: number;
  angle?: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  z-index: 0;

  ${media.tablet`
    display: none;
  `}
`;

const Image = styled.img<ImageProps>`
  width: ${props => props.size}px;
`;

class Shape extends React.PureComponent<ShapeProps> {
  public move: (scrollTop: number) => void;
  public ref: any;
  public top: number;
  public containerTop: number;
  public moveScale: number;
  public recalculate: (scrollTop: number) => void;
  public attachRef: (e: any) => void;
  public static windowHeight: number;
  public static shapeList: Shape[];
  public static getScrollTop: () => number;
  public randomNum: number;
  public size: number;

  public constructor(props: ShapeProps) {
    super(props);
    this.randomNum = Math.floor(Math.random() * 6) + 1;
    this.size = this.props.scale * 70;

    this.move = (scrollTop: number) => {
      if (
        this.ref &&
        this.top < scrollTop + Shape.windowHeight + 150 &&
        this.top > scrollTop - 150 &&
        this.ref.offsetParent !== null
      ) {
        const realTop = scrollTop - this.containerTop;
        this.ref.style.transform = `translateY(${(realTop / 10) *
          this.moveScale}px) rotate(${this.props.angle +
          (realTop * this.moveScale) / 20}deg)`;
      }
    };
    this.recalculate = scrollTop => {
      if (this.ref) {
        this.top = this.ref.getBoundingClientRect().top + scrollTop;
        this.containerTop =
          this.ref.parentElement.getBoundingClientRect().top + scrollTop;
        this.move(scrollTop);
        this.moveScale = (this.props.scale - 1) * 1.5 + 1.5;
      }
    };
    this.attachRef = e => {
      this.ref = e;
    };
  }

  public componentDidMount() {
    if (!Shape.shapeList) {
      Shape.shapeList = [];
      Shape.getScrollTop = () =>
        window.pageYOffset || document.documentElement.scrollTop;
      const animate = () => {
        const scrollTop = Shape.getScrollTop();
        Shape.shapeList.forEach((shape: Shape) => {
          shape.move(scrollTop);
        });
      };
      const onResize = () => {
        const scrollTop = Shape.getScrollTop();
        Shape.windowHeight = window.innerHeight;
        Shape.shapeList.forEach(
          (shape: { recalculate: (arg: number) => void }) => {
            shape.recalculate(scrollTop);
          }
        );
      };
      window.addEventListener("scroll", () => {
        requestAnimationFrame(animate);
      });
      window.addEventListener("load", () => {
        onResize();
      });
    }
    Shape.shapeList.push(this);
    this.recalculate(Shape.getScrollTop());
  }

  public componentWillUnmount() {
    Shape.shapeList.splice(Shape.shapeList.indexOf(this), 1);
  }

  public render() {
    const { top, left, angle } = this.props;
    return (
      <BobaContext.Consumer>
        {({ topping }) => (
          <Wrapper
            ref={this.attachRef}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(${angle}deg)`
            }}
          >
            <Image
              size={this.size}
              src={`/images/bg/${topping}/${topping}_${this.randomNum}.svg`}
            />
          </Wrapper>
        )}
      </BobaContext.Consumer>
    );
  }
}

export default Shape;
