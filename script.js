document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  // Send form data to Formspree
  fetch('https://formspree.io/f/mqkrnjea', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log('Form submission successful:', data);
      alert('Thank you for your message!');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while submitting the form. Please try again later 亲 *-*:');
  });

  // Clear the form inputs
  this.reset();
});
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(document.querySelectorAll('.slider-track img')); // 选择图片
  const leftBtn = document.querySelector('.slider-control.left');
  const rightBtn = document.querySelector('.slider-control.right');
  let currentIndex = 0;
  
  // 根据第一张图片宽度和 gap 来计算每个幻灯片的宽度
  function updateSlideWidth() {
    if (slides.length > 0) {
      return slides[0].clientWidth + 20; // 获取宽度
    }
    return 0;
  }
  
  let slideWidth = updateSlideWidth();
  
  // 更新滑动栏位置
  function updateSliderPosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // 通过 translateX 移动
  }
  
  // 左侧按钮事件
  leftBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
  
  // 右侧按钮事件
  rightBtn.addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });
  
  // 监听窗口变化，重新计算 slideWidth
  window.addEventListener('resize', function() {
    slideWidth = updateSlideWidth();
    updateSliderPosition();
  });
});






// 获取按钮和卡片
const toggleBtn = document.getElementById('toggle-btn');
const infoCard = document.getElementById('info-card');

// 点击按钮时，切换卡片的显示和隐藏
toggleBtn.addEventListener('click', () => {
  // 切换卡片的 open 类，实现展开和收起
  infoCard.classList.toggle('open');

  // 卡片收起时，按钮不变
  // 收起时，按钮的文字和卡片的状态会自动切换
});

