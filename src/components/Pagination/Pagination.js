import './Pagination.css'

const Pagination = ({page, setPage}) => (
  <div className="pagination-container">
    <button
      type="button"
      onClick={() => page > 1 && setPage(page - 1)}
      disabled={page === 1}
    >
      Prev
    </button>
    <span>Page {page}</span>
    <button type="button" onClick={() => setPage(page + 1)}>
      Next
    </button>
  </div>
)

export default Pagination
