import ReactPaginate from "react-paginate";
import ChevronLeft from "../Icons/chevronLeft";

interface PaginationProps {
  pageCount: number;
  changePage: (selected: any) => void;
}

const Pagination = ({ pageCount, changePage }: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={<ChevronLeft />}
      nextLabel={<ChevronLeft />}
      pageCount={pageCount}
      onPageChange={changePage}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
      containerClassName="mt-16 paginationBttns"
      activeClassName={"paginationActive"}
      nextLinkClassName={"nextBttn"}
      previousLinkClassName={"previousBttn"}
      disabledClassName={"paginationDisabled"}
      breakClassName="breakLabel"
    />
  );
};

export default Pagination;
