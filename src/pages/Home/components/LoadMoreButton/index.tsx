import { LoadMoreStyled } from "./LoadMoreButton.styled";

interface LoadMoreButtonProps {
    onLoadMore: (event: React.MouseEvent) => void;
}

export const LoadMoreButton = ({onLoadMore}: LoadMoreButtonProps) => {
    return (
        <LoadMoreStyled onClick={onLoadMore}>Load more</LoadMoreStyled>
    );
}