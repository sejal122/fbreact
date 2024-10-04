import React, { PureComponent } from "react";
import HocList from "./HocList";
class Productslist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Samsung galexy 10",
        },
        {
          id: 2,
          name: "iphone 15",
        },
      ],
    };
  }
  render() {
    const { renderData } = this.props;
    return (
      <div>
        <h2>Product list</h2>
        <ul>{renderData(this.state.products)}</ul>
      </div>
    );
  }
}
export default HocList(Productslist);
