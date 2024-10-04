import { PureComponent } from "react";

const HocList = (OriginalComponent) => {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
    }
    renderData = (users) => {
      return users.map((user) => {
        return <li key={user.id}> {user.name} </li>;
      });
    };
    render() {
      return <OriginalComponent renderData={this.renderData} />;
    }
  }
  return NewComponent;
};

export default HocList;
