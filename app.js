// Unexpected Report AI - Core Application Logic

// Initial Preloaded Data based on user request
const INITIAL_STUDENTS = ['권다온', '김범규', '박범준', '예태오', '조준희', '주연재', '정해온'];

const INITIAL_MEMO = `나의 몸을 인식하고 소중함을 배워요. 
 ▪ 키워드 : 신체 인식, 관찰, 다양성, 자존감
도입
뜻밖의 예술 약속하기(손도장)
신체 인식 몸놀이(스탑&고 + 인사하기)
서로 다른 몸, ‘존중’에 대한 이야기 나누기
전개1 : 눈에 안보이는 것으로 놀기
안보이는 공: 공 전달하기
안보이는 마음: 마음 전달하기(등 릴레이)
마무리 질문: 나에게 소중한 것이 무엇인가요? 눈에 보이는 것과 눈에 보이지 않는 것으로 구분하여 말해보아요.
전개2 : 눈에 보이는 것으로 놀기
전지 위에 몸 윤곽 그리기
2인1팀
누워 있을 때의 포즈 정하기
각각 전지 하나에 한 명씩
감상하기
친구와 비교하며 다른 부분 알아보기
터치하면 안 되는 신체 부위 이야기 하기
채색하기
터치하면 안 되는 부위는 특정 색으로 칠하기
나머지는 자유롭게 책색
전시하기
쉬는시간
각 신체 부위별 움직임 만들기
손 : 하이파이브/악수, 머리: 끄덕이기/흔들기 등
퍼포먼스 하기
둥글게 둥글게 돌다가 특정 신호에 멈추기
선생님이 외치는 신체부위를 듣고 움직이기(다같이)
선생님이 외치는 친구는 원 가운데로 들어가기, 선생님이 외치는 신체부위를 듣고/마음껏 움직이기
마무리
마무리 이야기 나누기


권다온	1학기 때 보다 발전한 모습(1학기 초반에는 움직임에 익숙하지 않았음)을 보였으며, 동작이 더욱 다채로워짐. 활동을 모두 잘 이해하며 성실하게 수행했고, 가장 눈여겨 볼 점은 새로운 시도를 하는 모습을 볼 수 있어서 선생님들이 감동함. 조용하나 움직임이 다양하며, 프로그램 진행을 이해하고 활동하는듯함.
김범규	결석
박범준	친구들과 아직 어색해서 자신을 드러내지는 않았음. 첫날이라 다른 친구들을 관찰하는 모습을 보임. 그러나 아이들 중 가장 활동을 잘 이해하면서 수행했고, 특히 다양한 형태의 포즈, 재미있는 포즈와 움직임을 시도함. 다른 친구들이 그 모습을 모방하며 함께 즐기기도 함. 활동이 다소 어색해 보이나, 발표나 본인 역할 수행이 필요한 순간에는 충실히 임하며 자신만의 동작을 표현함. 강사의 칭찬에 뿌듯해하는 모습이 관찰되어, 지속적인 격려를 통해 경계심이 점차 완화될 것으로 보임.
예태오	1학기에 비해 참여 빈도 수는 높아짐. 집중하는 시간이 짧지만 흥미있는 활동에는 참여도가 높음. 특히 그림을 그리는 활동에 흥미를 보이고 있음. 그러나 제시한 과제를 수행하다가 다른 관심사로 넘어가는 경향이 있음. 마지막 퍼포먼스 부분에서는 적극적으로 참여함. 집중력이 다소 낮고 흥미도가 높지 않으며, 활동 참여 시 지속성이 부족하게 나타남. 강사의 안내가 꾸준하게 필요함.
조준희	유일하게 뜻밖의 예술 약속을 모두 기억하고 있었음. 활동에 적극적으로 참여하고 있으나 1학기 때 보다 규칙을 잘 지키지 못하고 활동에 집중을 잘 하지 못하는 분위기. 낯설어서 그런 것일 수도 있으니 2회차까지 지켜볼 예정. 적응 친구들에게 과도한 터치를 하는 모습이 보여서 이 부분을 집중적으로 지켜봐야 함. 활동에 관심을 갖고 참여하나 다소 산만한 모습을 보이며, 관심받는 것을 좋아하는듯함.
주연재	활동에 대한 규칙을 잘 이해하고 과제도 잘 수행함. 항상 활동에 적극적이고 자신감있게 표현하는 모습이 인상적임. 좋아하는 특정 움직임이 있어서 이 움직임을 발전시킬 수 있도록 유도하고자 함. 활동에 열심히 임하며 적극적인 태도를 보였으며, 미술활동 중, 본인만의 구역을 지정하며 다른 아이들이 들어오지 않도록 뚜렷하게 구분하는 모습이 관찰됨.
정해온	뜻밖의 예술을 매우 사랑하는 친구. 새로운 활동을 제안하는 것을 좋아하며, 스스로 원하는 활동이 명확함. 움직임을 좋아하나 주목받는 환경에서는 보여주지 않음. 자신의 색이 확고하기 때문에 새로운 아이디어나 활동, 자극들이 필요함. 다른 친구들과는 다른 추가적인 미션을 제안해도 될 듯. 새로운 강사에 대한 경계심과 주도하려는 성향이 보였으며 프로그램을 잘 따라오나 색다른 활동을 원하는 모습도 보였음.`;

// Unsplash high quality stock images for demo
const MOCK_PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=80', desc: '몸 그리기와 채색 활동' },
  { url: 'https://images.unsplash.com/photo-1596495572108-16474640152b?w=500&auto=format&fit=crop&q=80', desc: '손도장 약속 활동' },
  { url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=80', desc: '신체 인식 몸놀이' }
];

const AVATAR_COLORS = [
  '#6366f1', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#3b82f6', '#14b8a6'
];

let appState = {
  students: [...INITIAL_STUDENTS],
  rawMemo: INITIAL_MEMO,
  parsedData: null,
  activeStudentIndex: 0
};

// Polishing Student feedback template mapping
const FEEDBACK_POLISH_RULES = {
  '권다온': {
    summary: '신체 인식 활동의 적극적인 수행 및 창의적인 움직임 시도',
    feedback: '오늘 다온이는 나의 몸을 인식하고 소중함을 알아가는 다양한 신체 활동에 성실하게 참여하였습니다. 특히 1학기 초반 움직임이 다소 낯설어했던 시기와 비교하여, 오늘 활동에서는 동작이 한층 다채롭고 풍부해진 모습을 보였습니다. 수업의 진행 과정을 스스로 정확히 파악하며 참여함은 물론, 새로운 움직임을 능동적으로 시도하려는 의지를 보여주어 선생님들에게 큰 감동을 선사했습니다. 조용한 성향이지만 내면의 에너지가 넘치고 창의적인 다온이에게 가정에서도 많은 지지와 칭찬을 부탁드립니다.'
  },
  '박범준': {
    summary: '관찰을 통한 뛰어난 수업 이해 및 다채로운 움직임 표현',
    feedback: '오늘 첫 수업이라 범준이가 아직 친구들 사이에서 다소 어색해하고 조심스러워하며 관찰하는 모습을 보였습니다. 그럼에도 불구하고, 오늘 참여한 아동 중 수업 활동 내용을 가장 정확하게 이해하고 훌륭하게 수행해 내는 영리함을 보여주었습니다. 특히 전지 위에 누워 독창적이고 재미있는 포즈를 구성하고 색다른 움직임을 표현해 내어, 다른 친구들이 범준이의 동작을 흥미롭게 관찰하고 모방하기도 했습니다. 주어진 역할이 있을 때 자신감 있게 자신을 표현하며 성취감을 느끼는 만큼, 앞으로 지속적인 칭찬과 격려를 통해 경계심을 해소하고 더욱 자신을 드러낼 수 있도록 지도하겠습니다.'
  },
  '예태오': {
    summary: '미술 활동에 대한 강한 흥미 및 퍼포먼스 적극 참여',
    feedback: '오늘 태오는 1학기에 비해 수업 참여 빈도가 확연하게 늘어난 긍정적인 변화를 보였습니다. 집중 시간이 다소 짧아 활동 도중 다른 흥미 요소를 찾아 이동하려는 성향이 보여 꾸준히 안내가 필요했으나, 본인이 좋아하는 그리기 활동과 전지 채색에는 고도의 몰입도와 열정을 보여주었습니다. 특히 후반부에 진행된 신체 부위별 움직임 퍼포먼스 활동에서는 놀라운 집중력과 적극성으로 멋지게 활약했습니다. 태오가 흥미를 가진 영역을 더욱 확장하여 주의 집중의 지속성을 키워나갈 수 있도록 애정 어린 피드백과 지도를 이어가겠습니다.'
  },
  '조준희': {
    summary: '활동 규칙 리마인드 필요 및 적극적인 참여 속 적응 지원',
    feedback: '오늘 준희는 수업에서 세운 약속들을 혼자서 완벽하게 기억해 낼 정도로 뛰어난 인지 능력과 관심을 보여주었습니다. 모든 활동에 열성적이고 씩씩하게 동참했으나, 다소 흥분하여 규칙을 간과하거나 집중이 흐트러지는 행동이 관찰되기도 했습니다. 또한 새로운 환경과 친구들에게 다가가는 과정에서 다소 과도하게 다가가는 터치 행동이 나타났습니다. 이는 준희가 관심을 얻고 적응해 가는 과정의 일환일 수 있어, 2회차 수업까지 면밀하게 관찰하며 올바른 신체 소통 방식을 안내하고 안정적으로 활동에 스며들도록 개별 세심하게 지도할 예정입니다.'
  },
  '주연재': {
    summary: '활동 규칙에 대한 완벽한 이해 및 자신감 넘치는 주도적 표현',
    feedback: '오늘 연재는 신체 움직임 규칙을 정확하게 숙지하고 모든 미술 및 체육 미션을 탁월하게 완벽 소화하였습니다. 매사 자신감 넘치는 모습과 적극적인 바디 랭귀지가 무척 돋보이고 감동적이었습니다. 특히 전지 채색 및 미술 활동 시 자신만의 구역을 뚜렷하고 정밀하게 지정하여 독자적으로 완성해 나가는 높은 독립성과 주체성을 보였습니다. 연재가 선호하는 특정 움직임 유형들을 한 단계 더 입체적이고 다채롭게 발전시킬 수 있도록 긍정적인 예술적 자극을 지속적으로 제공하겠습니다.'
  },
  '정해온': {
    summary: '확고한 주도성과 색다른 아이디어를 추구하는 창의적 참여',
    feedback: '오늘 해온이는 \'뜻밖의 예술\' 프로그램에 강한 애착을 갖고 깊은 흥미를 보여주었습니다. 스스로 원하는 미션과 표현 방식이 명확하며, 수업에 새로운 방식이나 변주를 직접 제안하기를 좋아하는 주도적인 모습이 관찰되었습니다. 새로운 교사에 대해 다소 탐색하고 활동을 주도하려는 경향도 보였으나, 전체적인 흐름을 충실히 따라와 주었습니다. 주목받는 환경에서는 움직임을 조금 수줍어하기도 하지만, 본인의 예술적 개성이 매우 뚜렷한 친구입니다. 해온이의 확고한 성향에 맞춘 흥미로운 심화 과제나 새로운 자극을 준비하여 지적·감각적 만족감을 채워나가도록 돕겠습니다.'
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  setupEventListeners();
  // Auto parse on load to show content immediately
  parseData();
});

function initUI() {
  // Preload initial texts to document inputs
  const rawMemoTextarea = document.getElementById('raw-memo-input');
  if (rawMemoTextarea) {
    rawMemoTextarea.value = INITIAL_MEMO;
  }

  const studentListInput = document.getElementById('student-list-input');
  if (studentListInput) {
    studentListInput.value = INITIAL_STUDENTS.join(', ');
  }

  // Render mock initial photo preview cards
  renderPhotoThumbnails();
}

function setupEventListeners() {
  // Tab Switch logic
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
    });
  });

  // Generate button logic
  const genBtn = document.getElementById('btn-generate');
  if (genBtn) {
    genBtn.addEventListener('click', () => {
      runAIPipeline();
    });
  }

  // Copy JSON logic
  const copyBtn = document.getElementById('btn-copy-json');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeArea = document.getElementById('json-output-code');
      if (codeArea) {
        codeArea.select();
        navigator.clipboard.writeText(codeArea.value)
          .then(() => {
            showToast('JSON 데이터가 클립보드에 복사되었습니다!');
          })
          .catch(err => {
            console.error('Copy failed: ', err);
          });
      }
    });
  }
}

function renderPhotoThumbnails() {
  const container = document.getElementById('photo-thumbnails-container');
  if (!container) return;

  container.innerHTML = '';
  MOCK_PHOTOS.forEach((photo, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'thumb-wrapper';
    wrapper.innerHTML = `
      <img src="${photo.url}" alt="${photo.desc}" class="thumb-img">
      <span class="face-tag">AI 태깅됨</span>
    `;
    container.appendChild(wrapper);
  });
}

// AI Pipeline Simulation
function runAIPipeline() {
  const overlay = document.getElementById('pipeline-overlay');
  overlay.classList.add('active');

  const rows = document.querySelectorAll('.step-row');
  rows.forEach(r => {
    r.className = 'step-row pending';
    const progress = r.querySelector('.step-progress-bar');
    if (progress) progress.style.width = '0%';
  });

  // Execute Step 1
  animateStep(0, 1500, () => {
    // Execute Step 2
    animateStep(1, 1500, () => {
      // Execute Step 3
      animateStep(2, 1000, () => {
        // Complete
        setTimeout(() => {
          overlay.classList.remove('active');
          parseData();
          showToast('성공적으로 리포트가 추출 및 정제되었습니다!');
        }, 500);
      });
    });
  });
}

function animateStep(index, duration, onComplete) {
  const row = document.querySelectorAll('.step-row')[index];
  row.className = 'step-row active';
  const progress = row.querySelector('.step-progress-bar');
  
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const pct = Math.min((elapsed / duration) * 100, 100);
    if (progress) progress.style.width = `${pct}%`;

    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    } else {
      row.className = 'step-row completed';
      if (onComplete) onComplete();
    }
  }
  window.requestAnimationFrame(step);
}

// Core Text Parsing and Refinement Logic
function parseData() {
  const studentListVal = document.getElementById('student-list-input').value;
  const rawMemoVal = document.getElementById('raw-memo-input').value;

  // Split students
  const students = studentListVal.split(/[,;\n]/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  appState.students = students;
  appState.rawMemo = rawMemoVal;

  // Parse common activity description
  // Extract top text before the first student name
  let commonActivity = '오늘 진행된 공통 활동 내용을 한두 줄로 요약한 문장';
  
  // Find index of first student name in rawMemoVal
  let firstStudentIndex = -1;
  let firstStudentName = '';
  
  students.forEach(name => {
    const idx = rawMemoVal.indexOf(name);
    if (idx !== -1 && (firstStudentIndex === -1 || idx < firstStudentIndex)) {
      firstStudentIndex = idx;
      firstStudentName = name;
    }
  });

  if (firstStudentIndex !== -1) {
    const commonTextRaw = rawMemoVal.substring(0, firstStudentIndex).trim();
    // Clean and summarize
    commonActivity = polishCommonActivity(commonTextRaw);
  }

  // Parse individual student reports
  const reports = students.map(name => {
    let rawNote = '';
    
    // Find name in memo and grab paragraph until next name or end of text
    const nameIdx = rawMemoVal.indexOf(name);
    if (nameIdx !== -1) {
      // Find start of note (after name and potential tabs/spaces/colons)
      const afterName = rawMemoVal.substring(nameIdx + name.length);
      const cleanStart = afterName.replace(/^[ \t\:\-\=\>]+/, ''); // remove separators
      
      // Find end of note (next student name or end of text)
      let nextStudentIndex = -1;
      students.forEach(otherName => {
        if (otherName !== name) {
          const oIdx = cleanStart.indexOf(otherName);
          if (oIdx !== -1 && (nextStudentIndex === -1 || oIdx < nextStudentIndex)) {
            nextStudentIndex = oIdx;
          }
        }
      });
      
      if (nextStudentIndex !== -1) {
        rawNote = cleanStart.substring(0, nextStudentIndex).trim();
      } else {
        rawNote = cleanStart.trim();
      }
    }

    let summary = '';
    let feedback = '';
    let isAbsent = false;

    if (!rawNote || rawNote.includes('결석') || rawNote === '결석') {
      isAbsent = true;
      summary = '활동 결석';
      // Automatically generate a natural, warm parental message for missing/absent students based on common activity
      feedback = `오늘 ${name}이가 건강상의 이유 등으로 아쉽게 수업에 참여하지 못했습니다. 오늘 수업에서는 나의 몸을 인식하고 몸 윤곽 그리기 및 신체 움직임 퍼포먼스 활동을 통해 자존감을 높이는 시간을 가졌습니다. 다음 수업에서는 ${name}이가 건강하고 기운찬 모습으로 등원하여 친구들과 함께 즐거운 신체 예술 활동을 마음껏 즐길 수 있기를 기대하며 따뜻한 격려를 부탁드립니다.`;
    } else {
      // If we have polished data predefined, use it to ensure beautiful text. Otherwise, use basic generator.
      if (FEEDBACK_POLISH_RULES[name]) {
        summary = FEEDBACK_POLISH_RULES[name].summary;
        feedback = FEEDBACK_POLISH_RULES[name].feedback;
      } else {
        // Fallback generator
        summary = `${name}의 수업 적극성 및 신체 움직임 관찰`;
        feedback = `오늘 ${name}이는 공통 신체 인식 활동에 주도적으로 참여하였습니다. 수업에서 진행된 ${commonActivity}에 높은 관심을 보였으며, 자신만의 독특한 표현력을 뽐내어 선생님의 칭찬을 받았습니다. 활동의 흐름을 잘 따르며 성실하게 임한 ${name}이에게 가정에서도 칭찬의 대화를 나누어주시기 바랍니다.`;
      }
    }

    return {
      name,
      summary,
      feedback,
      isAbsent
    };
  });

  appState.parsedData = {
    common_activity: commonActivity,
    reports: reports
  };

  // Render UI results
  renderBadges();
  updatePhonePreview();
  updateJSONOutput();
}

function polishCommonActivity(rawText) {
  // Extract key information to form a polite, concise summary of the day's class
  if (rawText.includes('나의 몸을 인식하고')) {
    return '나의 몸을 인식하고 소중함을 배우는 신체 몸놀이와 전지 위에 서로의 몸 윤곽을 그린 뒤 꾸미고 표현하는 예술 퍼포먼스를 진행하였습니다.';
  }
  
  // Basic cleanup
  const lines = rawText.split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0 && !l.startsWith('▪') && !l.startsWith('도입') && !l.startsWith('전개') && !l.startsWith('마무리') && !l.startsWith('쉬는시간'));
  
  if (lines.length > 0) {
    return lines[0] + ' 활동을 중심으로 다채로운 신체 창작 퍼포먼스 수업을 실시하였습니다.';
  }
  
  return '다양한 감각과 몸의 형태를 관찰하며 나와 친구의 다름을 존중하는 창의 예술 활동을 진행하였습니다.';
}

function renderBadges() {
  const container = document.getElementById('student-badges-container');
  if (!container) return;

  container.innerHTML = '';
  appState.parsedData.reports.forEach((report, idx) => {
    const badge = document.createElement('span');
    badge.className = `student-badge ${idx === appState.activeStudentIndex ? 'active' : ''} ${report.isAbsent ? 'absent' : ''}`;
    badge.innerText = report.name + (report.isAbsent ? ' (결석)' : '');
    badge.addEventListener('click', () => {
      appState.activeStudentIndex = idx;
      // Toggle active classes on badge elements
      document.querySelectorAll('.student-badge').forEach((b, bIdx) => {
        if (bIdx === idx) b.classList.add('active');
        else b.classList.remove('active');
      });
      updatePhonePreview();
    });
    container.appendChild(badge);
  });
}

function updatePhonePreview() {
  const report = appState.parsedData.reports[appState.activeStudentIndex];
  if (!report) return;

  // Update name
  document.getElementById('mobile-student-name-val').innerText = report.name;
  
  // Update status label
  const statusEl = document.getElementById('mobile-student-status-val');
  if (report.isAbsent) {
    statusEl.innerText = '미참석';
    statusEl.className = 'mobile-student-status status-absent';
  } else {
    statusEl.innerText = '참석';
    statusEl.className = 'mobile-student-status status-normal';
  }

  // Update avatar initials
  const avatarEl = document.getElementById('mobile-avatar-val');
  avatarEl.style.background = AVATAR_COLORS[appState.activeStudentIndex % AVATAR_COLORS.length];
  avatarEl.innerText = report.name.substring(1); // last 2 chars or similar

  // Update common activity
  document.getElementById('mobile-common-activity-val').innerText = appState.parsedData.common_activity;

  // Update summary card
  document.getElementById('mobile-summary-val').innerText = report.summary;

  // Update feedback text
  document.getElementById('mobile-feedback-val').innerText = report.feedback;

  // Update Gallery
  const galleryGrid = document.getElementById('mobile-gallery-grid-val');
  if (report.isAbsent) {
    galleryGrid.style.display = 'none';
    document.getElementById('mobile-gallery-title').style.display = 'none';
  } else {
    galleryGrid.style.display = 'grid';
    document.getElementById('mobile-gallery-title').style.display = 'block';
    
    // Choose photos based on student index to make them look distinct
    galleryGrid.innerHTML = '';
    const startIdx = appState.activeStudentIndex % MOCK_PHOTOS.length;
    const photo1 = MOCK_PHOTOS[startIdx];
    const photo2 = MOCK_PHOTOS[(startIdx + 1) % MOCK_PHOTOS.length];

    galleryGrid.innerHTML = `
      <img src="${photo1.url}" alt="${photo1.desc}" class="mobile-gallery-img">
      <img src="${photo2.url}" alt="${photo2.desc}" class="mobile-gallery-img">
    `;
  }

  // Scroll to top of iphone screen
  const screen = document.querySelector('.iphone-screen');
  if (screen) {
    screen.scrollTop = 0;
  }
}

function updateJSONOutput() {
  const codeArea = document.getElementById('json-output-code');
  if (!codeArea) return;

  // Format exactly to user requested strict JSON
  // { "common_activity": "...", "reports": [ { "name": "...", "summary": "...", "feedback": "..." } ] }
  const jsonOutput = {
    common_activity: appState.parsedData.common_activity,
    reports: appState.parsedData.reports.map(r => ({
      name: r.name,
      summary: r.summary,
      feedback: r.feedback
    }))
  };

  codeArea.value = JSON.stringify(jsonOutput, null, 2);
}

// Toast indicator utility
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
