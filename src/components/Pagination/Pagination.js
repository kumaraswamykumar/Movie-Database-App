import './Pagination.css'

const Pagination = ({page, setPage}) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <div className="pagination-container">
      <button
        type="button"
        className="pagination-btn"
        onClick={handlePrev}
        disabled={page === 1}
      >
        Prev
      </button>

      <span className="pagination-page">Page {page}</span>

      <button type="button" className="pagination-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination
