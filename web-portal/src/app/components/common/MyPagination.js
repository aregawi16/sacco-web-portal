import { Pagination } from 'react-bootstrap-pagination';

const MyPagination = ({ totalRecords, currentPage, onPageChange }) => {
  return (
    <Pagination
      totalRecords={totalRecords}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
};

export default MyPagination;
