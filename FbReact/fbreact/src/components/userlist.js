import React, { PureComponent } from "react";
import HocList from "./HocList";
class Userlist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Rajat",
        },
        {
          id: 2,
          name: "Vedant",
        },
      ],
    };
  }
  render() {
    const { renderData } = this.props;
    return (
      <div>
        <h2>User list</h2>
        <ul>{renderData(this.state.users)}</ul>
      </div>
    );
  }
}

export default HocList(Userlist);
