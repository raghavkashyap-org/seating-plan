// ====== Rooms dataset (subset; extend as needed) ======
const roomsData = {
  "A-11": { rows: 9, breakup: "2*4*2" },
  "A-12": { rows: 9, breakup: "2*4*2" },
  "A-13": { rows: 9, breakup: "2*4*2" },
  "A-21": { rows: 9, breakup: "2*4*2" },
  "A-22": { rows: 9, breakup: "2*4*2" },
  "A-23": { rows: 9, breakup: "2*4*2" },
  "A-31": { rows: 9, breakup: "3*4*3" },
  "A-32": { rows: 9, breakup: "3*4*3" },
  "A-33": { rows: 7, breakup: "3*3*3" },
  "AA-11": { rows: 9, breakup: "5*5" },
  "AA-12": { rows: 9, breakup: "5*5" },
  "AA-13": { rows: 9, breakup: "5*5" },
  "AA-21": { rows: 8, breakup: "3*3*3" },
  "AA-24": { rows: 11, breakup: "5*8*5" },
  "AA-31": { rows: 11, breakup: "4*4" },
  "AA-37": { rows: 11, breakup: "5*8*5" },
  "B-21": { rows: 8, breakup: "2*4*2" },
  "B-22": { rows: 8, breakup: "2*4*2" },
  "B-23": { rows: 8, breakup: "3*5*3" },
  "B-24": { rows: 8, breakup: "2*3*3" },
  "B-25": { rows: 7, breakup: "3*3*3" },
  "B-32": { rows: 8, breakup: "4*2*3" },
  "C-12": { rows: 8, breakup: "3*3*3" },
  "C-13": { rows: 9, breakup: "2*4*2" },
  "C-14": { rows: 8, breakup: "3*3*3" },
  "D-11": { rows: 8, breakup: "2*4*2" },
  "D-12": { rows: 8, breakup: "2*4*2" },
  "D-13": { rows: 8, breakup: "3*3*3" },
  "F-12": { rows: 9, breakup: "3*5*3" },
  "F-13": { rows: 9, breakup: "3*5*3" },
  "F-14": { rows: 9, breakup: "3*6*3" },
  "F-21": { rows: 9, breakup: "2*5*2" },
  "F-22": { rows: 9, breakup: "2*5*2" },
  "F-23": { rows: 9, breakup: "2*5*2" },
  "F-24": { rows: 9, breakup: "2*5*2" },
  "F-32": { rows: 8, breakup: "5*4" },
  "F-34": { rows: 9, breakup: "3*6*3" },
  "H402": { rows: 8, breakup: "2*4*2" },
  "H403": { rows: 8, breakup: "4*4" },
  "H404": { rows: 8, breakup: "4*4" },
  "H405": { rows: 8, breakup: "2*4*2" },
  "H408": { rows: 7, breakup: "4*4*4" },
  "H502": { rows: 8, breakup: "4*4" },
  "H503": { rows: 8, breakup: "4*4" },
  "H504": { rows: 8, breakup: "4*4" },
  "H505": { rows: 8, breakup: "4*4" },
  "H508": { rows: 6, breakup: "6*7" },
  "J-11": { rows: 8, breakup: "5*5" },
  "J-12": { rows: 8, breakup: "5*5" },
  "J-13": { rows: 8, breakup: "5*5" },
  "J-14": { rows: 8, breakup: "5*5" },
  "J-15": { rows: 8, breakup: "5*5" },
  "J-21": { rows: 8, breakup: "5*5" },
  "J-22": { rows: 8, breakup: "5*5" },
  "J-23": { rows: 8, breakup: "5*5" },
  "J-37": { rows: 8, breakup: "4*4*4" },
  "K-12": { rows: 9, breakup: "2*5*2" },
  "K-13": { rows: 8, breakup: "2*4*2" },
  "K-14": { rows: 10, breakup: "3*6*3" },
  "K-22": { rows: 8, breakup: "2*4*2" },
  "K-23": { rows: 8, breakup: "2*4*2" },
  "K-24": { rows: 10, breakup: "3*6*3" },
  "L-11": { rows: 8, breakup: "2*4*2" },
  "L-12": { rows: 8, breakup: "2*4*2" },
  "L-13": { rows: 8, breakup: "2*4*2" },
  "L-14": { rows: 11, breakup: "2*7*2" },
  "L-22": { rows: 10, breakup: "2*4*2" },
  "L-23": { rows: 8, breakup: "4*4" },
  "L-24": { rows: 10, breakup: "3*6*3" },
  "M-11": { rows: 10, breakup: "3*6*3" },
  "M-12": { rows: 8, breakup: "2*4*2" },
  "M-13": { rows: 9, breakup: "2*4*2" },
  "M-21": { rows: 8, breakup: "2*4*2" },
  "M-22": { rows: 7, breakup: "3*4*3" },
  "M-23": { rows: 8, breakup: "2*4*2" },
  "N-11": { rows: 8, breakup: "2*4*2" },
  "N-12": { rows: 9, breakup: "2*4*2" },
  "N-13": { rows: 9, breakup: "2*4*2" },
  "N-14": { rows: 10, breakup: "3*6*3" },
  "N-22": { rows: 9, breakup: "2*4*2" },
  "N-23": { rows: 8, breakup: "3*3*3" },
  "N-24": { rows: 10, breakup: "3*6*3" },
  "P-11": { rows: 9, breakup: "3*4*3" },
  "P-12": { rows: 9, breakup: "3*4*3" },
  "P-13": { rows: 9, breakup: "3*4*3" },
  "Q-11": { rows: 8, breakup: "2*4*2" },
  "Q-12": { rows: 8, breakup: "2*4*2" },
  "Q-13": { rows: 9, breakup: "2*4*2" },
  "Q-14": { rows: 8, breakup: "2*5*2" },
  "Q-22": { rows: 9, breakup: "4*4" },
  "Q-23": { rows: 8, breakup: "4*4" },
  "Q-24": { rows: 12, breakup: "3*4*3" },
  "R-14": { rows: 8, breakup: "5*5" },
  "R-15": { rows: 8, breakup: "5*5" },
  "R-16": { rows: 8, breakup: "5*5" },
  "R-26": { rows: 8, breakup: "5*5" },
  "R-27": { rows: 8, breakup: "5*5" },
  "R-28": { rows: 8, breakup: "5*5" },
  "R-34": { rows: 8, breakup: "5*5" }
};

// ====== Theme ======
function restoreTheme(){
  const pref = localStorage.getItem('sp.theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = pref;
}
function bindThemeToggle(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const now = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = now;
    localStorage.setItem('sp.theme', now);
  });
}

// ====== Landing helpers ======
function populateRoomSelect(selectEl){
  const rooms = Object.keys(roomsData).sort((a,b)=> a.localeCompare(b, undefined, {numeric:true}));
  selectEl.innerHTML = `<option value="" disabled selected>— Select Room —</option>` + rooms.map(r => `<option value="${r}">${r}</option>`).join('');
}

// ====== Room page logic ======
let assignments = {}; // { seatId: { name, row, col } }
let currentRoom = null;
let currentSelectedSeat = null; // This variable will now track the active seat for navigation

function setupRoom(roomName){
  currentRoom = roomName;
  assignments = {};
  renderGrid(roomName);
  renderTable();
  applyRole(localStorage.getItem('sp.role') || 'admin');

  // Set initial active seat to the first one, if any
  const firstSeatBtn = document.querySelector('.seat-btn');
  if (firstSeatBtn) {
    highlightSeat(firstSeatBtn.dataset.seat);
  }
}

function seatId(room, r, g, s){ return `${room}_R${r}S${g}-${s}`; }

function parseSeatId(seatIdStr) {
  const parts = seatIdStr.split('_');
  const room = parts[0];
  const rowParts = parts[1].match(/R(\d+)S(\d+)-(\d+)/);
  const row = parseInt(rowParts[1], 10);
  const group = parseInt(rowParts[2], 10);
  const seatInGroup = parseInt(rowParts[3], 10);
  return { room, row, group, seatInGroup };
}

function renderGrid(roomName){
  const cfg = roomsData[roomName];
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  const groups = cfg.breakup.split('*').map(n => parseInt(n,10));

  for(let r=1; r<=cfg.rows; r++){
    const row = document.createElement('div');
    row.className = 'row';

    groups.forEach((count, gi) => {
      for(let s=1; s<=count; s++){
        const id = seatId(roomName, r, gi+1, s);
        const btn = document.createElement('button');
        btn.className = 'seat-btn';
        btn.dataset.seat = id;
        btn.dataset.row = r;
        btn.dataset.col = `${gi+1}-${s}`;
        btn.title = id;

        btn.addEventListener('click', () => onSeatClick(btn));
        row.appendChild(btn);
      }
      // aisle
      if(gi !== groups.length-1){
        const aisle = document.createElement('div');
        aisle.className = 'aisle';
        row.appendChild(aisle);
      }
    });

    grid.appendChild(row);
  }

  // Set blackboard width to match the first row (after rendering)
  const firstRow = grid.querySelector('.row');
  if (firstRow) {
    const blackboardElement = document.querySelector('.blackboard-display'); // Changed selector
    if (blackboardElement) {
      blackboardElement.style.width = `${firstRow.offsetWidth + 48}px`; // Add padding for board
      // No need for margin: '0 auto' here as it's centered by parent flexbox
    }
  }
}

function onSeatClick(btn){
  const id = btn.dataset.seat;
  // If seat already assigned, open profile
  if(assignments[id]){
    openProfile(assignments[id]);
    highlightSeat(id);
    return;
  }
  // else open assign bar
  openAssignBar({
    seat: id,
    row: btn.dataset.row,
    col: btn.dataset.col
  });
  highlightSeat(id);
}

function highlightSeat(id){
  document.querySelectorAll('.seat-btn').forEach(b => b.classList.remove('selected'));
  const el = document.querySelector(`.seat-btn[data-seat="${id}"]`);
  if(el) el.classList.add('selected');
  currentSelectedSeat = id; // Update the globally tracked active seat
}

function openAssignBar(meta){
  const bar = document.getElementById('assignBar');
  document.getElementById('assignSeatId').textContent = meta.seat;
  const nameInput = document.getElementById('assignInputName');
  const rollNoInput = document.getElementById('assignInputRollNo');
  nameInput.value = '';
  rollNoInput.value = '';
  bar.classList.add('open');
  nameInput.focus();

  const save = document.getElementById('assignSave');
  const cancel = document.getElementById('assignCancel');

  const onSave = () => {
    const name = nameInput.value.trim();
    const rollNo = rollNoInput.value.trim();
    if (!name || !rollNo) {
      if (!name) nameInput.classList.add('shake');
      if (!rollNo) rollNoInput.classList.add('shake');
      setTimeout(() => {
        nameInput.classList.remove('shake');
        rollNoInput.classList.remove('shake');
      }, 500);
      return;
    }
    // lock assignment
    assignments[meta.seat] = { seat: meta.seat, name, rollNo };
    const btn = document.querySelector(`.seat-btn[data-seat="${meta.seat}"]`);
    if (btn) {
      btn.classList.add('assigned');
      btn.textContent = name[0].toUpperCase();
    }
    renderTable();
    closeAssignBar();
  };
  const onCancel = () => closeAssignBar();

  save.onclick = onSave;
  cancel.onclick = onCancel;

  // Add event listener for Enter key on the input fields
  nameInput.onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      rollNoInput.focus(); // Move focus to roll number input on Enter
    }
  };

  rollNoInput.onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSave();
    }
  };
}

function closeAssignBar(){
  document.getElementById('assignBar').classList.remove('open');
}

function renderTable(filterText=''){
  const container = document.getElementById('tableContainer');
  const rows = Object.values(assignments).filter(x => x && (x.name.toLowerCase().includes(filterText.toLowerCase()) || x.rollNo.toLowerCase().includes(filterText.toLowerCase())));
  const html = [`<table id="assignTable"><thead><tr><th>Seat ID</th><th>Student Name</th><th>Roll No</th></tr></thead><tbody>`,
    ...rows.map((r, idx) => `<tr data-seat="${r.seat}"><td>${r.seat}</td><td class="name-cell">${escapeHtml(r.name)}</td><td>${escapeHtml(r.rollNo)}</td></tr>`),
    `</tbody></table>`].join('');
  container.innerHTML = html;

  // Row click -> highlight seat
  container.querySelectorAll('tbody tr').forEach(tr => {
    tr.addEventListener('click', () => {
      const id = tr.getAttribute('data-seat');
      highlightSeat(id);
      const el = document.querySelector(`.seat-btn[data-seat="${id}"]`);
      el?.scrollIntoView({behavior:'smooth', block:'center', inline:'center'});
      el?.classList.add('profile');
      setTimeout(()=> el?.classList.remove('profile'), 1500);
    });
  });

  // Name click -> profile modal
  container.querySelectorAll('.name-cell').forEach(td => {
    td.addEventListener('click', (e) => {
      e.stopPropagation();
      const seat = td.parentElement.getAttribute('data-seat');
      openProfile(assignments[seat]);
    });
  });
}

function filterTable(q){ renderTable(q); }

function openProfile(data){
  if(!data) return;
  // toggle seat color to profile hue briefly
  const seat = document.querySelector(`.seat-btn[data-seat="${data.seat}"]`);
  seat?.classList.add('profile');
  setTimeout(()=> seat?.classList.remove('profile'), 1500);

  document.getElementById('pName').textContent = data.name;
  document.getElementById('pRollNo').textContent = data.rollNo;
  document.getElementById('pSeat').textContent = data.seat;

  document.getElementById('overlay').style.display = 'block';
  const modal = document.getElementById('profileModal');
  modal.style.display = 'block';

  document.getElementById('jumpToSeat').onclick = () => {
    highlightSeat(data.seat);
    document.getElementById('overlay').style.display = 'none';
    modal.style.display = 'none';
    document.querySelector(`.seat-btn[data-seat="${data.seat}"]`)?.scrollIntoView({behavior:'smooth', block:'center'});
  };
  const close = () => {
    document.getElementById('overlay').style.display = 'none';
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleProfileModalKeydown); // Remove listener on close
  };
  document.getElementById('modalClose').onclick = close;
  document.getElementById('modalOk').onclick = close;
  document.getElementById('overlay').onclick = close;

  // Add keydown listener for Enter key to close modal
  const handleProfileModalKeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default Enter key behavior
      close();
    }
  };
  document.addEventListener('keydown', handleProfileModalKeydown);
}

// Admin reset (clears all assignments)
function adminReset(){
  if((localStorage.getItem('sp.role') || 'admin') !== 'admin'){
    alert('Only Admin can reset.');
    return;
  }
  if(confirm('Reset all assignments for this room?')){
    setupRoom(currentRoom);
  }
}

// Role specific UI (toggle export/reset)
function applyRole(role){
  const canAdmin = role === 'admin';
  document.getElementById('btnExportXlsx').disabled = !canAdmin;
  document.getElementById('btnExportPdf').disabled = !canAdmin;
  document.getElementById('btnReset').disabled = !canAdmin;
}

// ====== Export (strip emoji-like chars) ======
function exportXlsx(){
  console.log("exportXlsx function called"); // Added for debugging
  const table = document.getElementById('assignTable').cloneNode(true);
  // Create a new table header for XLSX export that includes Roll No
  const originalHeader = table.querySelector('thead tr');
  const newHeader = document.createElement('tr');
  newHeader.innerHTML = '<th>Seat ID</th><th>Student Name</th><th>Roll No</th>';
  originalHeader.replaceWith(newHeader);
  
  table.querySelectorAll('td').forEach(td => { td.textContent = td.textContent.replace(/[\u{1F300}-\u{1FAFF}]/gu,'').trim(); });
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.table_to_sheet(table);
  XLSX.utils.book_append_sheet(wb, ws, 'Seating Plan');
  XLSX.writeFile(wb, `${currentRoom}_seating.xlsx`);
}

async function exportPdf(){ // Made async to use await html2canvas
  console.log("exportPdf function called"); // Keep for debugging
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'a4' });

  // Add room title
  doc.setFontSize(14);
  doc.text(`${currentRoom} • Seating Plan`, 40, 40);

  // Capture seating grid as image
  const gridElement = document.getElementById('grid');
  let tableStartY = 60; // Default start Y for table if no grid image

  if (gridElement) {
    try {
      const canvas = await html2canvas(gridElement, { scale: 2 }); // Scale for better resolution
      const imgData = canvas.toDataURL('image/png');

      const imgWidth = 550; // Max width for image on A4 (approx 595 - 40*2 for margins)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      doc.addImage(imgData, 'PNG', 20, 70, imgWidth, imgHeight); // Position below title
      tableStartY = 70 + imgHeight + 20; // Position table after image, add some margin
    } catch (error) {
      console.error("Error capturing grid for PDF:", error);
      alert("Could not capture seating grid for PDF export. Please try again or check console for errors.");
    }
  }

  // Add assigned seats table
  const cleanTable = document.getElementById('assignTable').cloneNode(true);
  cleanTable.querySelectorAll('td').forEach(td => { td.textContent = td.textContent.replace(/[\u{1F300}-\u{1FAFF}]/gu,'').trim(); });

  doc.autoTable({
    html: cleanTable,
    startY: tableStartY, // Position after image, add some margin
    head: [['Seat ID', 'Student Name', 'Roll No']],
    theme: 'grid',
    styles: { halign: 'center', valign: 'middle', fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [52,73,94], textColor: 255, fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [249,251,255] }
  });
  doc.save(`${currentRoom}_seating.pdf`);
}

// ====== Utils ======
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// Global keydown listener for seat navigation
document.addEventListener('keydown', (e) => {
  // Only navigate if assignBar is not open
  if (document.getElementById('assignBar').classList.contains('open')) {
    return;
  }

  let nextSeatId = null;
  const currentSeatData = currentSelectedSeat ? parseSeatId(currentSelectedSeat) : null;

  if (!currentSeatData && document.querySelector('.seat-btn')) {
    // If no seat is selected, select the first one
    const firstSeat = document.querySelector('.seat-btn');
    onSeatClick(firstSeat);
    return;
  }

  if (!currentSeatData) return; // No seats to navigate if none exist

  const roomCfg = roomsData[currentSeatData.room];
  const groups = roomCfg.breakup.split('*').map(n => parseInt(n, 10));
  const totalSeatsInRow = groups.reduce((sum, count) => sum + count, 0) + (groups.length - 1); // + aisles

  let targetRow = currentSeatData.row;
  let targetGroup = currentSeatData.group;
  let targetSeatInGroup = currentSeatData.seatInGroup;

  switch (e.key) {
    case 'ArrowRight':
      e.preventDefault();
      targetSeatInGroup++;
      if (targetSeatInGroup > groups[targetGroup - 1]) { // If beyond current group, try next group
        targetGroup++;
        targetSeatInGroup = 1;
      }
      break;
    case 'ArrowLeft':
      e.preventDefault();
      targetSeatInGroup--;
      if (targetSeatInGroup < 1) { // If before current group, try previous group
        targetGroup--;
        if (targetGroup >= 1) {
          targetSeatInGroup = groups[targetGroup - 1];
        }
      }
      break;
    case 'ArrowDown':
      e.preventDefault();
      targetRow++;
      break;
    case 'ArrowUp':
      e.preventDefault();
      targetRow--;
      break;
    case 'Enter':
      e.preventDefault();
      const currentBtn = document.querySelector(`.seat-btn[data-seat="${currentSelectedSeat}"]`);
      if (currentBtn) {
        onSeatClick(currentBtn);
      }
      return; // Stop further processing for Enter key
    default:
      return; // Don't handle other keys
  }

  // Validate new position and get next seat ID
  if (targetRow >= 1 && targetRow <= roomCfg.rows &&
      targetGroup >= 1 && targetGroup <= groups.length &&
      targetSeatInGroup >= 1 && targetSeatInGroup <= groups[targetGroup - 1]) {
    nextSeatId = seatId(currentSeatData.room, targetRow, targetGroup, targetSeatInGroup);
  }

  if (nextSeatId) {
    const nextBtn = document.querySelector(`.seat-btn[data-seat="${nextSeatId}"]`);
    if (nextBtn) {
      onSeatClick(nextBtn);
      nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }
});
