import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    render() {
        const { page, fetchPage, current } = this.props;

        return(
            <div className="pagination">
                <p className="page-button" onClick={() => fetchPage(page-5, 'decrease')}>&#60;&#60;</p>
                <p className="page-button" onClick={() => fetchPage(current-1)}>&#60;</p>
                <p className="page-button" onClick={() => fetchPage(page)}>{page}</p>
                <p className="page-button" onClick={() => fetchPage(page+1)}>{page+1}</p>
                <p className="page-button" onClick={() => fetchPage(page+2)}>{page+2}</p>
                <p className="page-button" onClick={() => fetchPage(page+3)}>{page+3}</p>
                <p className="page-button" onClick={() => fetchPage(page+4)}>{page+4}</p>
                <p className="page-button" onClick={() => fetchPage(current+1)}>&#62;</p>
                <p className="page-button" onClick={() => fetchPage(page+5, 'increase')}>&#62;&#62;</p>
            </div>
        )
    }
}

export default Pagination;