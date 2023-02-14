import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/pagenation.css";
import PageButton from "./PageButton";

export default function Pagination(prop) {
  const { pageNum, setPageNum } = prop;
  const urlNum = useParams();
  const [lastPage, setLastPage] = useState();

  console.log(pageNum);

  useEffect(() => {
    setPageNum(urlNum.id ? Number(urlNum.id) : 1);
    axios
      .get("http://localhost:2000/products/lastPage")
      .then((res) => setLastPage(res.data));
  }, []);
  console.log("lastPage", lastPage);
  function pageBtn() {
    if (pageNum <= 1 || pageNum === 2) {
      return (
        <div className="num_btn">
          <Link
            to={`/products/page/${pageNum}`}
            onClick={() =>
              setCurrentPage(pageNum === 2 ? pageNum - 1 : pageNum)
            }
          >
            <PageButton
              name={pageNum === 2 ? pageNum - 1 : pageNum}
              className={pageNum === 1 && "active_btn"}
            />
          </Link>
          <Link
            to={`/products/page/${pageNum + 1}`}
            onClick={() =>
              setCurrentPage(pageNum === 2 ? pageNum : pageNum + 1)
            }
          >
            <PageButton
              name={pageNum === 2 ? pageNum : pageNum + 1}
              className={pageNum === 2 && "active_btn"}
            />
          </Link>
          <Link
            to={`/products/page/${pageNum + 2}`}
            onClick={() => setCurrentPage(pageNum + 2)}
          >
            <PageButton name={pageNum === 2 ? pageNum + 1 : pageNum + 2} />
          </Link>
          <Link
            to={`/products/page/${pageNum + 3}`}
            onClick={() => setCurrentPage(pageNum + 3)}
          >
            <PageButton name={pageNum === 2 ? pageNum + 2 : pageNum + 3} />
          </Link>
          <Link
            to={`/products/page/${pageNum + 4}`}
            onClick={() => setCurrentPage(pageNum + 4)}
          >
            <PageButton name={pageNum === 2 ? pageNum + 3 : pageNum + 4} />
          </Link>
        </div>
      );
    } else if (pageNum >= lastPage || pageNum === lastPage - 1) {
      return (
        <div className="num_btn">
          <Link
            to={`/products/page/${pageNum - 4}`}
            onClick={() =>
              setCurrentPage(
                pageNum === lastPage - 1 ? pageNum - 3 : pageNum - 4
              )
            }
          >
            <PageButton
              name={pageNum === lastPage - 1 ? pageNum - 3 : pageNum - 4}
            />
          </Link>
          <Link
            to={`/products/page/${pageNum - 3}`}
            onClick={() =>
              setCurrentPage(
                pageNum === lastPage - 1 ? pageNum - 2 : pageNum - 3
              )
            }
          >
            <PageButton
              name={pageNum === lastPage - 1 ? pageNum - 2 : pageNum - 3}
            />
          </Link>
          <Link
            to={`/products/page/${pageNum - 2}`}
            onClick={() =>
              setCurrentPage(
                pageNum === lastPage - 1 ? pageNum - 1 : pageNum - 2
              )
            }
          >
            <PageButton
              name={pageNum === lastPage - 1 ? pageNum - 1 : pageNum - 2}
            />
          </Link>
          <Link
            to={`/products/page/${pageNum - 1}`}
            onClick={() =>
              setCurrentPage(pageNum === lastPage - 1 ? pageNum : pageNum - 1)
            }
          >
            <PageButton
              name={pageNum === lastPage - 1 ? pageNum : pageNum - 1}
              className={pageNum === lastPage - 1 && "active_btn"}
            />
          </Link>
          <Link
            to={`/products/page/${pageNum}`}
            onClick={() =>
              setCurrentPage(pageNum === lastPage - 1 ? pageNum + 1 : pageNum)
            }
          >
            <PageButton
              name={pageNum === lastPage - 1 ? pageNum + 1 : pageNum}
              className={pageNum === lastPage && "active_btn"}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="num_btn">
          <Link
            to={`/products/page/${pageNum - 2}`}
            onClick={() => setCurrentPage(pageNum - 2)}
          >
            <PageButton name={pageNum - 2} />
          </Link>
          <Link
            to={`/products/page/${pageNum - 1}`}
            onClick={() => setCurrentPage(pageNum - 1)}
          >
            <PageButton name={pageNum - 1} />
          </Link>
          <Link
            to={`/products/page/${pageNum}`}
            onClick={() => setCurrentPage(pageNum)}
          >
            <PageButton name={pageNum} className={"active_btn"} />
          </Link>
          <Link
            to={`/products/page/${pageNum + 1}`}
            onClick={() => setCurrentPage(pageNum + 1)}
          >
            <PageButton name={pageNum + 1} />
          </Link>
          <Link
            to={`/products/page/${pageNum + 2}`}
            onClick={() => setCurrentPage(pageNum + 2)}
          >
            <PageButton name={pageNum + 2} />
          </Link>
        </div>
      );
    }
  }

  return (
    <div className="buttons dis_flex">
      <Link
        to={
          pageNum === 1
            ? `/products/page/${pageNum}`
            : `/products/page/${pageNum - 1}`
        }
        onClick={() => pageNum !== 1 && setCurrentPage(pageNum - 1)}
      >
        <PageButton name={"prev"} />
      </Link>
      {/* {pageBtn()} */}
      {pageBtn()}
      <Link
        to={
          pageNum === lastPage
            ? `/products/page/${pageNum}`
            : `/products/page/${pageNum + 1}`
        }
        onClick={() => pageNum !== lastPage && setCurrentPage(pageNum + 1)}
      >
        <PageButton name={"next"} />
      </Link>
    </div>
  );
}
