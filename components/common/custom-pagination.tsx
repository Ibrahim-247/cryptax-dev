import { cn } from "@/lib/utils";
import { Pagination } from "antd";

interface CustomPaginationProps {
    handlePageClick: (page: number, pageSize: number) => void;
    perPage: number;
    totalItem: number;
    currentPage: number;
    className?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
    handlePageClick,
    perPage,
    totalItem,
    currentPage,
    className,
}) => {
    return (
        <div className={cn("mx-auto flex justify-center items-center my-5 w-full", className)}>
            <Pagination
                showSizeChanger={false}
                showLessItems
                onChange={handlePageClick}
                defaultCurrent={currentPage}
                pageSize={perPage}
                total={totalItem}
            />
        </div>
    );
};

export default CustomPagination;
