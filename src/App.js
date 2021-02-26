import React, {useEffect} from 'react'
import './App.css';

const images = [
  'https://images.unsplash.com/photo-1591761798617-ff03c1c2e82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80',
  'https://images.unsplash.com/photo-1613999286484-f808d9630453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1613664161831-35ca95a4b953?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1572216026870-aa136802e931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1613550181063-21d8038f4807?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
]

// link: https://youtu.be/huVJW23JHKQ
function App() {

  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in')
    const sliders = document.querySelectorAll('.slide-in')
  
    const appearOptions = {
      // threshold là đường biên kích hoạt trên đối tượng fade-in khớp với rootMargin
      // threshold có giá trị từ 0 đến 1
      // tương ứng với 0% đến 100% vị trí đường biên trên
      // đối tượng fade-in
      threshold: 1,
      rootMargin: '0px 0px -200px 0px'
      // rootMargin là đường biên kích hoạt trên Trình duyệt có vị trí
      // là cách bottom là -200px
      // => như vậy khi 2 đường biên chạm nhau, sẽ xảy ra hiệu ứng fade-in

    }
    
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      // ta gọi .fade-in là đối tượng đang theo dõi
      // entries là danh sách các đối tượng cần theo dõi
      entries.forEach(entry => {
        if(!entry.isIntersecting){ // entry có nằm trong vùng viewport không?
          return
        } else {
          entry.target.classList.add('appear')
          appearOnScroll.unobserve(entry.target) // ngừng quan sát mục tiêu là entry
        }
      })
    }, appearOptions)
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader) // bắt đầu theo dõi các fader
    })
    sliders.forEach(slider => {
      appearOnScroll.observe(slider)
    })
  })

  return (
    <div className="App">
      <div className="banner"></div>
      <div className="rootMargin">
        <p>rootMargin height: 200px</p>
      </div>
      {/* <div className="gap"></div> */}
      <div className="columns">
        <div className="col fade-in">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="col fade-in">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="col fade-in">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="col fade-in">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </div>

      <div className="section">
        <div className="article">
          <img className='from-left slide-in' src={images[1]} alt=""/>
          <div className="text from-right slide-in">
            <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="article">
          <img className='from-left slide-in' src={images[2]} alt=""/>
          <div className="text from-right slide-in">
            <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="article">
          <img className='from-left slide-in' src={images[3]} alt=""/>
          <div className="text from-right slide-in">
            <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="article">
          <img className='from-left slide-in' src={images[4]} alt=""/>
          <div className="text from-right slide-in">
            <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="article">
          <img className='from-left slide-in' src={images[5]} alt=""/>
          <div className="text from-right slide-in">
            <p>
            Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy sjflkdjs pajlsdjf la text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
