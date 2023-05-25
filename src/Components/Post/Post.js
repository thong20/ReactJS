import React, {useState} from 'react'
import '../../Pages/About/about.scss'

import {customers} from '../../constant/data'
const theme = {
  colorBgPrimary: '#ED4430',
  colorBgGray2: '#272727',
  colorBgGray1: '#1E1E1E',
  colorBgDark: '#0A0A0A',
  colorFontLight: '#dfdfdf',
  colorFontGray: '#afafaf',
}
// 1 - 0 => 3
// 2 - 4 => 7
// 3 - 8 => 11
export default function Post (){
  const postPerPage = 4;
  const pageTotal = Math.ceil(customers.length / postPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + postPerPage)
  const posts = customers.slice(start, end)

  const btnPagination = document.querySelectorAll('.pagination button')

  const btnPrevStyle = {
    color: `${currentPage <= 1 ? theme.colorBgGray2 : theme.colorFontGray}`,
    cursor: `${currentPage <= 1 ? 'default' : 'pointer'}`,
  }
  const btnNextStyle = {
    color: `${currentPage >= pageTotal ? theme.colorBgGray2 : theme.colorFontGray}`,
    cursor: `${currentPage >= pageTotal ? 'default' : 'pointer'}`,
  }

  function handlePrevBtn(){
    setCurrentPage(currentPage - 1)
    setStart(start - 4)
    setEnd(end - 4)
  }
  function handleNextBtn(){
    setCurrentPage(currentPage + 1)
    setStart(start + 4)
    setEnd(end + 4)
  }
  return (
    <>
    {
      posts.map(post => {
        const avatar = './images/head1.jpg';
        return (
        <div key={`key-${post.id}`} className="post ">
          <div className="profile">
            <div className="avatar">
              <img src={require('../../images/' +post.img).default} alt="avatar"/>
            </div>
            <p>{post.name}</p>
            <p>{post.position}</p>
          </div>
          <div className="text">{post.id} - {post.post}</div>
        </div>
      )})
    }
    <div className="pagination">
      <button
        style={btnPrevStyle}
        disabled={currentPage <= 1 ? true : false}
        onClick={() => handlePrevBtn()}
      >
          <i class="fas fa-chevron-left"></i>
      </button>
      <p>{currentPage} of {pageTotal}</p>
      <button
        style={btnNextStyle}
        disabled={currentPage >= pageTotal ? true : false}
        onClick={() => handleNextBtn()}
      >
          <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    </>
  )
}


/*
  function Component(){
    ...
    const data = useCallback()
    return <RenderChart data={data} />
  }

*/