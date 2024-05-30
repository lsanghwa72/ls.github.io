function navigate(page) {
    const content = document.getElementById('content');
    content.style.opacity = 0; // 시작 시 페이드 아웃 효과 적용
    setTimeout(() => {
        switch (page) {
            case 'home':
                content.innerHTML = 
                    '<h1 class="right-align">history of 5 years</h1>' +
                    '<div class="profile-container">' +
                    '<img src="images/2019.jpg" alt="Profile Picture" class="profile-image">' +
                    '<div class="profile-text">2019</div>' +
                    '<img src="images/2020.jpg" alt="Profile Picture" class="profile-imaged">' +
                    '<div class="profile-texta">2020</div>' +
                    '<img src="images/2021.png" alt="Profile Picture" class="profile-imagee">' +
                    '<div class="profile-textb">2021</div>' +
                    '<img src="images/2022.jpg" alt="Profile Picture" class="profile-images">' +
                    '<div class="profile-textc">2022</div>' +
                    '<img src="images/2023.jpg" alt="Profile Picture" class="profile-imager">' +
                    '<div class="profile-textd">2023</div>' +
                    
                    '</div>';
                break;
            case 'about':
                content.innerHTML = 
                    '<h1>About me</h1><p>Hello, I am Lee Sang Hwa.</p><img src="images/2000.jpg" alt="Profile Picture" class="profile-image">' +
                    '<ul>' +
                    '<li>Personal Info: Lee Sang Hwa, Programmer</li>' +
                    '<li>Location: Seoul, South Korea</li>' +
                    '<li>Interests: Coding, exercise, tour</li>' +
                    '</ul>' +
                    '<div class="intro">' +
                    '<p>Previously</p>' +
                    '<p>I worked at an interior design company, which was a rewarding experience in its own right.</p>' +
                    '<p>However, a growing fascination with technology prompted me to make a bold decision to return to academia.</p>' +
                    '<p>This decision led me to pursue further studies,</p>' +
                    '<p>and I am currently a student at Kangwon National University, majoring in Computer Engineering.</p>' +
                    '<p>My academic and professional interests lie deeply rooted in the fields of medical imaging processing, medical data analysis,</p>' +
                    '<p>and medical IT development.</p>' +
                    '<p>These areas, I believe, are pivotal in transforming healthcare through technology. </p>' +
                    '<p>The potential to improve patient outcomes and streamline medical processes using computational methods is both inspiring and motivating.</p>' +
                    '<p>At Kangwon National University</p>' +
                    '<p> I am committed to expanding my knowledge and honing my skills pertinent to my interests.</p>' +
                    '<p>I am actively engaging with coursework and projects that allow me to explore innovative solutions in healthcare technology.</p>' +
                    '<p>My goal is to contribute significantly to this field by developing software and algorithms that enhance the accuracy and efficiency of medical diagnostics and treatment.</p>' +
                    '<p>As I continue my educational journey</p>' +
                    '<p> I am eager to collaborate with peers and professionals who share my passion for healthcare innovation.</p>' +
                    '<p> I am determined to push the boundaries of what is possible in medical technology, aiming to make a meaningful impact on the world.</p>' +
                    '</div>';
                break;
            case 'contact':
                content.innerHTML =
                    '<h1>Contact page</h1>' +
                    '<div class="contact-info">' +
                    '<img src="images/2000.jpg" alt="Profile Picture" class="profile-image">' +
                    '<div class="info-text">' +
                    '<p>If you have any suggestions or questions, please contact via email or phone.</p>' +
                    '<p>Email: 333434@naver.com</p>' +
                    '<p>Phone: 010-3737-8495</p>' +
                    '</div>' +
                    '</div>';
                break;
            default:
                content.innerHTML = '<h1>404 Not Found</h1><p>페이지를 찾을 수 없습니다.</p>';
        }
        content.style.opacity = 1; // 완료 후 페이드 인 효과
    }, 300); // 300ms 후에 내용을 변경하고 페이드 인을 적용
}

// 초기 페이지 설정 (예: home)
//document.addEventListener("DOMContentLoaded", () => navigate('home'));


