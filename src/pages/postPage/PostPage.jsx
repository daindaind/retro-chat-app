import { useEffect, useState } from "react";
import Window from "../../uis/window/Window";
import * as S from "./PostPage.style";
import axios from "axios";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalContents, setTotalContents] = useState();
  const pageList = [];
  const postPerPage = 5;

  // Math.ceil : 소수점 올림 (floor: 내림, round: 반올림)
  const totalPage = Math.ceil(totalContents / postPerPage);
  const pageGroup = Math.ceil(currentPage / postPerPage);
  const firstPageNum = (pageGroup - 1) * postPerPage + 1;
  const lastPageNum =
    pageGroup * postPerPage > totalPage ? totalPage : pageGroup * postPerPage;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3000/posts?page=${currentPage}&order__createdAt=ASC&take=${postPerPage}`
      );
      if (res) {
        setPosts(res.data.data);
        setTotalContents(res.data.total);
      }
    };

    fetchData();
  }, [currentPage]);

  for (let i = firstPageNum; i <= lastPageNum; i++) {
    pageList.push(i);
  }

  const goToNextJumpPage = () => {
    const nextPage = currentPage + postPerPage;
    if (nextPage <= totalPage) {
      setCurrentPage(nextPage);
    }
  };

  const goToPrevJumpPage = () => {
    const prevPage = currentPage - postPerPage;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
    }
  };

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      setCurrentPage(nextPage);
    }
  };

  const goToPrevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
    }
  };

  const clickPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <S.Container>
      <Window>
        {posts.length > 0 &&
          posts.map(({ id, createdAt, title, content, author }) => (
            <div key={id}>
              <br />
              <div>{title}</div>
              <div>{content}</div>
              <div>{createdAt}</div>
              <div>{author.nickname}</div>
            </div>
          ))}

        <S.SelectContainer>
          <button onClick={goToPrevJumpPage}>{"<<"}</button>
          <button onClick={goToPrevPage}>{"<"}</button>
          {pageList.map((number) => (
            <S.PageButton
              onClick={() => clickPage(number)}
              $color={currentPage === number}
              key={number}
            >
              {number}
            </S.PageButton>
          ))}
          <button onClick={goToNextPage}>{">"}</button>
          <button onClick={goToNextJumpPage}>{">>"}</button>
        </S.SelectContainer>
      </Window>
    </S.Container>
  );
};

export default PostPage;
