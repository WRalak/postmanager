interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="bg-gray-300 px-4 py-2 rounded-md disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">{page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="bg-gray-300 px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;