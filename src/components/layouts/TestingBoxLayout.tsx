import { ReactNode } from "react";
import "../.././App.css";

type Props = {
  children: ReactNode;
};

const TestingBoxLayout = (props: Props) => {
  return (
    <>
      <div className="App-testing">
        <div className="Content-testing">
          <div className="card">
            <div className="image"></div>
            <div className="content">
              <a href="http://google.com">
                <span className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </a>

              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium
              </p>

              <a className="action" href="http://google.com">
                Find out more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {props.children}x{" "}
      </div>
    </>
  );
};

export default TestingBoxLayout;
