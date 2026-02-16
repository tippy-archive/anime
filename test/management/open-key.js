// 1. CSV 파일을 읽어오는 함수
async function loadCSV() {
    try {
        const response = await fetch('data.csv'); // CSV 파일 경로
        const data = await response.text();

        // 줄바꿈으로 나누고, 첫 번째 줄(헤더)은 제외
        const rows = data.split('\n').slice(1);
        const tableBody = document.getElementById('table-body');

        rows.forEach(row => {
            const columns = row.split(',');
            if (columns.length < 2) return; // 빈 줄 방지

            const name = columns[0].trim();
            const key = columns[1].trim();

            // 2. HTML 행(tr) 생성
            const tr = document.createElement('tr');
            tr.innerHTML = `
<td>${name}</td>
<td>
<span class="public-key" onclick="copyText('${key}')">${key}</span>
</td>
`;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('CSV를 불러오는데 실패했습니다:', error);
    }
}

// 3. 복사 기능 함수
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("복사되었습니다: " + text);
    });
}

// 페이지 로드 시 CSV 실행
loadCSV();