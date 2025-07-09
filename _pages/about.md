---
permalink: /
title: ""
excerpt: "Bio"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
## 👋 About Me
I am Ryan, a passionate student leader and aspiring researcher currently studying at Dulwich College Shanghai Pudong. With strong academic performance and diverse leadership experience, I am committed to making positive impacts in both academic and community settings.

<div id="motto" class="typed-motto"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  if (typeof Typed !== 'undefined') {
    new Typed('#motto', {
      strings: ["Exploring this world, pursuing research that's fun and meaningful."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      startDelay: 1000,
      showCursor: true,
      cursorChar: ''
    });
  } else {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.onload = function() {
      new Typed('#motto', {
        strings: ["Exploring this world, pursuing research that's fun and meaningful."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        startDelay: 1000,
        showCursor: true,
        cursorChar: ''
      });
    };
    document.head.appendChild(script);
  }
});
</script>

<style>
.typed-motto {
    font-style: italic;
    font-size: 24px;
    margin: 20px 0;
    min-height: 36px;
    background: -webkit-linear-gradient(left, #1772d0, #6c5ce7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Georgia', serif;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.typed-cursor {
    color: #1772d0;
    font-weight: bold;
}
</style>

## 🔬 Academic Interests & Activities
<div class="research-areas">
    My academic focus and leadership activities center on two key areas:

    <div class="research-item" data-tooltip="HOSA Biochemistry Regional & National Rounds, Biology & Psychology HL">
        <div class="research-icon">🧬</div>
        <div class="research-content">
            <h3>Life Sciences & Health</h3>
            <p>Passionate about biology, psychology, and biochemistry with hands-on experience through HOSA competitions and advanced coursework at IB level</p>
        </div>
    </div>

    <div class="research-item" data-tooltip="Student Council, Global Citizenship, Dulwich Talks Organization">
        <div class="research-icon">🌍</div>
        <div class="research-content">
            <h3>Leadership & Global Citizenship</h3>
            <p>Dedicated to addressing global challenges at local levels through student leadership, community engagement, and cross-cultural communication</p>
        </div>
    </div>
</div>


# 📰 Achievements & News
<!-- <div class="news-container"> -->
- [2024-Summer] Earned CPR, First-Aid, and AED Certification, enhancing my commitment to health and safety.
- [2024] Represented the Global Citizenship group, addressing global challenges at a local level through meaningful initiatives.
- [2023] Successfully hosted Dulwich Talks, a full-day event featuring 4 international speakers discussing "Space of Life" and career aspirations.
- [2022-Present] Serving as Prefect (School Leader), representing student body to Senior Leadership Team and implementing positive changes.
- [2022] Successfully advocated for reduced school prices and established weekly student feedback system with administration.
- [2022] Designed and implemented middle school student council, expanding democratic participation across grade levels.
- [Academic] Achieved excellent IGCSE results: English A*, Biology A*, Geography A, Chemistry A, Global Perspectives A, History A, Mathematics B, Chinese B.
- [Music] Completed ABRSM Grade 8 certification, demonstrating advanced musical proficiency.
- [SAT] Scored 1550 on SAT, reflecting strong academic preparation for university admissions.
- [Languages] Trilingual proficiency in English, Mandarin, and French, enabling global communication and cultural understanding.
- [Health Sciences] Advanced to both Regional and National Rounds in HOSA Biochemistry competition.

<!-- </div> -->

# 📖 Education & Experience

- Sep'2022-Present: Student Leader (Prefect), Dulwich College Shanghai Pudong, Shanghai.
  - Leading school improvement initiatives and student representation
  - Organizing major events including Dulwich Talks with international speakers
  - Managing communications and serving as campus guide for visiting speakers

- Sep'2019-Present: Student, Dulwich College Shanghai Pudong, Shanghai.
  - Expected Graduation: May 2026
  - SAT Score: 1550
  - Current IB Student (HL: English, Biology, Psychology; SL: Math AA, Chinese B, History)
  - IGCSE Graduate with strong performance across subjects

<!-- <div style="font-style: italic; font-family: 'Arial Black', Gadget, sans-serif; font-size: 24px;
    background: -webkit-linear-gradient(left, black, yellow, cyan, blue, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;">Adversity shaped me.</div> -->


<!-- <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=KKPhQ-LXT8mek63h4Oa8BltFlbFsTTwZkLrrWb3wFEs&cl=ffffff&w=a"></script> -->

<style>
/* Refined styling to match your existing design */
.research-areas {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    margin: 20px 0;
}

.research-item {
    background: white;
    padding: 20px;
    margin: 15px 0;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    display: flex;
    align-items: flex-start;
}

.research-icon {
    font-size: 24px;
    margin-right: 15px;
}

.research-content h3 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
    color: #333;
}

.research-content p {
    margin: 0;
    color: #666;
    line-height: 1.5;
}

/* 添加页面加载动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 为主要内容块添加动画 */
.research-areas,
.news-section,
.papers-section,
h1, h2, h3 {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
}

/* 为不同部分设置不同的动画延迟 */
h1 { animation-delay: 0.2s; }
.research-areas { animation-delay: 0.4s; }
.news-section { animation-delay: 0.6s; }
.papers-section { animation-delay: 0.8s; }

/* 增强研究领域卡片的动画效果 */
.research-item {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.research-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent 0%, transparent 50%, rgba(255,255,255,.8) 50%, transparent 51%, transparent 100%);
    transform: translateX(-100%);
    transition: all 0.6s;
}

.research-item:hover::before {
    transform: translateX(100%);
}

.research-item:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* 为图标添加旋转动画 */
.research-icon {
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.research-item:hover .research-icon {
    transform: rotate(360deg) scale(1.2);
}

/* 为标题添加渐变色效果 */
.research-content h3 {
    background: linear-gradient(120deg, #1772d0, #6c5ce7);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
}

/* 添加鼠标跟随效果 */
.research-item:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle at var(--x) var(--y), 
                               rgba(255,255,255,0.2) 0%,
                               transparent 50%);
    pointer-events: none;
}

/* 添加粒子背景的容器 */
#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(45deg, #f3f4f6 0%, #fff 100%);
}

/* 确保内容在粒子之上 */
.wrapper {
    position: relative;
    z-index: 1;
}

/* 为内容添加玻璃态效果 */
.research-areas,
.news-section,
.papers-section {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
}

/* 添加炫酷的渐变边框效果 */
.research-item {
    position: relative;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 20px;
    margin: 15px 0;
    overflow: hidden;
}

.research-item::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
    z-index: -1;
    border-radius: 12px;
    animation: borderGradient 4s ease infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.research-item:hover::before {
    opacity: 1;
}

@keyframes borderGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* 添加霓虹光效果 */
.research-icon {
    text-shadow: 0 0 10px rgba(23, 114, 208, 0.5);
    animation: glowing 2s ease-in-out infinite;
}

@keyframes glowing {
    0% { filter: drop-shadow(0 0 2px rgba(23, 114, 208, 0.5)); }
    50% { filter: drop-shadow(0 0 8px rgba(23, 114, 208, 0.8)); }
    100% { filter: drop-shadow(0 0 2px rgba(23, 114, 208, 0.5)); }
}

/* 优化标题动画效果 */
.research-content h3 {
    background: linear-gradient(120deg, #1772d0, #6c5ce7, #1772d0);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientText 3s linear infinite;
}

@keyframes gradientText {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
</style>

<!-- 添加粒子背景容器 -->
<div id="particles-js"></div>

<!-- 添加粒子效果的脚本 -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#1772d0'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#1772d0',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
});
</script>



