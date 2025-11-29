import './Pagination.css'

const Pagination = ({page, setPage, totalPages = 500}) => {
  const pageNumbers = []

  let startPage = Math.max(1, page - 2)
  let endPage = Math.min(totalPages, page + 2)

  if (page <= 2) {
    endPage = Math.min(totalPages, 5)
  }

  if (page >= totalPages - 1) {
    startPage = Math.max(1, totalPages - 4)
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination-container">
      <button
        type="button"
        onClick={() => page > 1 && setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      {pageNumbers.map(num => (
        <button
          key={num}
          type="button"
          onClick={() => setPage(num)}
          className={num === page ? 'active' : ''}
        >
          {num}
        </button>
      ))}

      <button
        type="button"
        onClick={() => page < totalPages && setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
