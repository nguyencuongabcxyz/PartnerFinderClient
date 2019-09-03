import React from "react";

class Pagination extends React.Component {
  state = {
    currentPage: 1
  };

  calculatePage = (itemCount, sizePage) => {
    if (itemCount % sizePage === 0) {
      return itemCount / sizePage;
    }
    return Math.floor(itemCount / sizePage) + 1;
  };

  fetchDataForPagination = (currentPage) => {
      this.props.callBack(currentPage-1);
      this.setState({
          currentPage : currentPage
      });
  }

  renderPagination = (currentPage, pageNumber) => {
    if (pageNumber === 1 || pageNumber === 0) {
      return null;
    } else if (pageNumber === 2) {
      if (currentPage === 1) {
        return (
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a href="#" className="page-link" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link" >
                1
              </a>
              <span className="sr-only">(current)</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(2)}}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage+1)}}>
                Next
              </a>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="pagination justify-content-center">
            <li className="page-item ">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage-1)}}>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(1)}}>
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2
              </a>
              <span className="sr-only">(current)</span>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Next
              </a>
            </li>
          </ul>
        );
      }
    } else {
      if (currentPage === 1) {
        return (
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
              <span className="sr-only">(current)</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(2)}}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(3)}}>
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage+1)}}>
                Next
              </a>
            </li>
          </ul>
        );
      }
      else if(currentPage === pageNumber){
        return (
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage-1)}}>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage-2)}}>
                  {currentPage-2}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage-1)}}>
                  {currentPage-1}
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage)}}>
                  {currentPage}
                </a>
                <span className="sr-only">(current)</span>
              </li>
              <li className="page-item disabled">
                <a href="#" className="page-link" tabIndex="-1">
                  Next
                </a>
              </li>
            </ul>
          );
      }else{
        return (
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage-1)}}>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage-1)}}>
                  {currentPage-1}
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  {currentPage}
                </a>
                <span className="sr-only">(current)</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage+1)}}>
                  {currentPage+1}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {this.fetchDataForPagination(currentPage+1)}}>
                  Next
                </a>
              </li>
            </ul>
          );
      }
    }
  };

  render() {
    return (
      <div className="paging">
        <nav aria-label="Page navigation example">
            {this.renderPagination(this.state.currentPage, this.calculatePage(this.props.itemCount, this.props.sizePage))}
        </nav>
      </div>
    );
  }
}

export default Pagination;
