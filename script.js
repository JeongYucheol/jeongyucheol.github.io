const projectData = {
    project1: {
        title: "커뮤니티 웹 서비스",
        image: "https://via.placeholder.com/800x400",
        description: "이 프로젝트는 사용자들이 실시간으로 소통할 수 있는 플랫폼입니다.",
        features: ["구글 로그인 지원", "실시간 채팅 기능", "게시글 CRUD"],
        link: "https://github.com/..."
    }
    // 추가 프로젝트 데이터...
};

function openModal(projectId) {
    const data = projectData[projectId];
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <img src="${data.image}" class="modal-detail-img">
        <h2 class="modal-title">${data.title}</h2>
        <p class="modal-desc">${data.description}</p>
        <div class="modal-features">
            <h4>Key Features</h4>
            <ul>${data.features.map(f => `<li>• ${f}</li>`).join('')}</ul>
        </div>
        <a href="${data.link}" class="btn" target="_blank" style="display:inline-block; margin-top:20px;">GitHub 바로가기</a>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 스크롤 방지
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// 모달 바깥 영역 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) closeModal();
}
