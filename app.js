// ===== Demo Data =====
const DEMO_PROFILES = [
    {
        email: 'lena.fischer@bzz.ch',
        profile: {
            name: 'Lena Fischer', class: 'INF22b', semester: '4',
            subjects: ['informatik', 'programmieren', 'webentwicklung'],
            times: ['nachmittags', 'abends'], preferences: ['kleingruppe', 'vor-ort'],
            interests: 'UI/UX Design, React, Figma',
            goals: 'Webentwicklung vertiefen, Portfolio-Projekt aufbauen',
            seeking: ['gleich', 'projekte'], bio: 'Frontend-Enthusiastin mit Leidenschaft für sauberes Design'
        }
    },
    {
        email: 'marco.weber@bzz.ch',
        profile: {
            name: 'Marco Weber', class: 'INF21a', semester: '6',
            subjects: ['mathematik', 'programmieren', 'datenbanken'],
            times: ['morgens', 'nachmittags'], preferences: ['einzeln', 'online'],
            interests: 'Algorithmen, Competitive Programming, Python',
            goals: 'LAP-Vorbereitung, Datenbank-Optimierung verstehen',
            seeking: ['erklaert', 'pruefung'], bio: 'Mathe-Nerd der gerne Dinge erklärt'
        }
    },
    {
        email: 'sara.mueller@bzz.ch',
        profile: {
            name: 'Sara Müller', class: 'INF23a', semester: '2',
            subjects: ['informatik', 'deutsch', 'englisch', 'mathematik'],
            times: ['mittags', 'nachmittags'], preferences: ['kleingruppe', 'vor-ort'],
            interests: 'Sprachen, Technical Writing, Dokumentation',
            goals: 'Grundlagen Informatik festigen, Programmieren lernen',
            seeking: ['erklaert', 'motiviert', 'gleich'], bio: 'Lerne gerade Java und bin für jede Hilfe dankbar!'
        }
    },
    {
        email: 'jan.keller@bzz.ch',
        profile: {
            name: 'Jan Keller', class: 'INF22a', semester: '4',
            subjects: ['netzwerktechnik', 'informatik', 'physik'],
            times: ['abends', 'wochenende'], preferences: ['gruppe', 'online'],
            interests: 'Cybersecurity, Linux, Raspberry Pi',
            goals: 'Netzwerktechnik-Prüfung bestehen, Linux-Skills verbessern',
            seeking: ['fortgeschritten', 'projekte'], bio: 'Homelabber und Netzwerk-Enthusiast'
        }
    },
    {
        email: 'nina.brunner@bzz.ch',
        profile: {
            name: 'Nina Brunner', class: 'INF22b', semester: '4',
            subjects: ['programmieren', 'datenbanken', 'webentwicklung', 'wirtschaft'],
            times: ['morgens', 'mittags'], preferences: ['kleingruppe', 'vor-ort'],
            interests: 'Full-Stack Development, Startup-Ideen, Agilität',
            goals: 'Full-Stack Projekt realisieren, Startup-Idee validieren',
            seeking: ['projekte', 'motiviert'], bio: 'Möchte nach dem Studium ein eigenes Startup gründen'
        }
    },
    {
        email: 'david.huber@bzz.ch',
        profile: {
            name: 'David Huber', class: 'INF21b', semester: '6',
            subjects: ['mathematik', 'physik', 'programmieren'],
            times: ['nachmittags', 'abends', 'wochenende'], preferences: ['einzeln', 'online'],
            interests: 'Machine Learning, Data Science, Statistik',
            goals: 'ML-Grundlagen lernen, Kaggle-Wettbewerbe mitmachen',
            seeking: ['fortgeschritten', 'gleich'], bio: 'Daten sind mein Ding - von SQL bis TensorFlow'
        }
    },
    {
        email: 'anna.steiner@bzz.ch',
        profile: {
            name: 'Anna Steiner', class: 'INF23b', semester: '2',
            subjects: ['informatik', 'mathematik', 'englisch', 'recht'],
            times: ['morgens', 'nachmittags'], preferences: ['gruppe', 'vor-ort'],
            interests: 'IT-Recht, Datenschutz, Project Management',
            goals: 'Informatik-Grundlagen verstehen, Recht vertiefen',
            seeking: ['erklaert', 'gleich', 'pruefung'], bio: 'Organisationstalent das gerne Lerngruppen leitet'
        }
    },
    {
        email: 'lukas.graf@bzz.ch',
        profile: {
            name: 'Lukas Graf', class: 'INF22a', semester: '4',
            subjects: ['programmieren', 'webentwicklung', 'datenbanken'],
            times: ['abends', 'wochenende'], preferences: ['kleingruppe', 'online'],
            interests: 'Game Dev, Unity, C#, Pixel Art',
            goals: 'Game-Projekt fertigstellen, C# vertiefen',
            seeking: ['projekte', 'gleich'], bio: 'Indie-Game-Entwickler in der Freizeit'
        }
    }
];

const DEMO_SESSIONS = [
    {
        id: 's1', subject: 'mathematik', topic: 'Lineare Algebra Repetition',
        date: getFutureDate(2), time: '14:00', creator: 'marco.weber@bzz.ch',
        description: 'Wir gehen Matrizen und Vektoren durch. Bringt eure Aufgaben mit! Treffpunkt: BZZ Raum 204.'
    },
    {
        id: 's2', subject: 'programmieren', topic: 'Java OOP Workshop',
        date: getFutureDate(3), time: '16:00', creator: 'lena.fischer@bzz.ch',
        description: 'Gemeinsam Vererbung, Interfaces und Polymorphie üben. Laptops mitbringen.'
    },
    {
        id: 's3', subject: 'webentwicklung', topic: 'React Basics',
        date: getFutureDate(5), time: '18:30', creator: 'nina.brunner@bzz.ch',
        description: 'Einführung in React für Anfänger. Wir bauen zusammen eine kleine App.'
    },
    {
        id: 's4', subject: 'datenbanken', topic: 'SQL Prüfungsvorbereitung',
        date: getFutureDate(1), time: '10:00', creator: 'david.huber@bzz.ch',
        description: 'Joins, Subqueries und Normalisierung. Alte Prüfungen durcharbeiten.'
    },
    {
        id: 's5', subject: 'netzwerktechnik', topic: 'Subnetting Übungen',
        date: getFutureDate(4), time: '15:00', creator: 'jan.keller@bzz.ch',
        description: 'Subnetting und VLSM gemeinsam üben. Online via Teams.'
    }
];

function getFutureDate(daysFromNow) {
    const d = new Date();
    d.setDate(d.getDate() + daysFromNow);
    return d.toISOString().split('T')[0];
}

// ===== Storage Layer =====
const Storage = {
    getUsers() { return JSON.parse(localStorage.getItem('sb_users') || '{}'); },
    saveUsers(users) { localStorage.setItem('sb_users', JSON.stringify(users)); },
    getCurrentUser() { return localStorage.getItem('sb_current_user'); },
    setCurrentUser(email) { localStorage.setItem('sb_current_user', email); },
    clearCurrentUser() { localStorage.removeItem('sb_current_user'); },
    getUserProfile(email) {
        const users = this.getUsers();
        return users[email]?.profile || null;
    },
    saveUserProfile(email, profile) {
        const users = this.getUsers();
        if (!users[email]) users[email] = {};
        users[email].profile = profile;
        this.saveUsers(users);
    },
    // Swipe tracking
    getSwipedProfiles() { return JSON.parse(localStorage.getItem('sb_swiped') || '{}'); },
    saveSwiped(email, direction) {
        const swiped = this.getSwipedProfiles();
        const currentUser = this.getCurrentUser();
        if (!swiped[currentUser]) swiped[currentUser] = {};
        swiped[currentUser][email] = direction;
        localStorage.setItem('sb_swiped', JSON.stringify(swiped));
    },
    hasBeenSwiped(email) {
        const swiped = this.getSwipedProfiles();
        const currentUser = this.getCurrentUser();
        return swiped[currentUser]?.[email] !== undefined;
    },
    // Match checking
    getMatches() {
        const swiped = this.getSwipedProfiles();
        const currentUser = this.getCurrentUser();
        const mySwipes = swiped[currentUser] || {};
        const matches = [];
        for (const [email, dir] of Object.entries(mySwipes)) {
            if (dir === 'right' && swiped[email]?.[currentUser] === 'right') {
                matches.push(email);
            }
        }
        return matches;
    },
    // Sessions
    getSessions() {
        let sessions = JSON.parse(localStorage.getItem('sb_sessions') || '[]');
        if (sessions.length === 0) {
            sessions = [...DEMO_SESSIONS];
            localStorage.setItem('sb_sessions', JSON.stringify(sessions));
        }
        return sessions;
    },
    saveSessions(sessions) { localStorage.setItem('sb_sessions', JSON.stringify(sessions)); },
    addSession(session) {
        const sessions = this.getSessions();
        sessions.push(session);
        this.saveSessions(sessions);
    },
    updateSession(id, data) {
        const sessions = this.getSessions();
        const idx = sessions.findIndex(s => s.id === id);
        if (idx >= 0) { Object.assign(sessions[idx], data); this.saveSessions(sessions); }
    },
    deleteSession(id) {
        let sessions = this.getSessions();
        sessions = sessions.filter(s => s.id !== id);
        this.saveSessions(sessions);
    }
};

// ===== Init Demo Users =====
function initDemoData() {
    const users = Storage.getUsers();
    let changed = false;
    for (const demo of DEMO_PROFILES) {
        if (!users[demo.email]) {
            users[demo.email] = { passwordHash: 'demo', profile: demo.profile };
            changed = true;
        }
    }
    // Seed some mutual likes for demo matches
    const swiped = JSON.parse(localStorage.getItem('sb_swiped') || '{}');
    for (const demo of DEMO_PROFILES) {
        if (!swiped[demo.email]) {
            swiped[demo.email] = {};
            for (const other of DEMO_PROFILES) {
                if (other.email !== demo.email && Math.random() > 0.4) {
                    swiped[demo.email][other.email] = 'right';
                }
            }
        }
    }
    localStorage.setItem('sb_swiped', JSON.stringify(swiped));
    if (changed) Storage.saveUsers(users);

    // Keep demo session dates fresh — update to future dates on each load
    const demoIds = new Set(DEMO_SESSIONS.map(s => s.id));
    const sessions = JSON.parse(localStorage.getItem('sb_sessions') || '[]');
    const today = new Date().toISOString().split('T')[0];
    const hasStaleDemoSessions = sessions.some(s => demoIds.has(s.id) && s.date < today);

    if (sessions.length === 0) {
        localStorage.setItem('sb_sessions', JSON.stringify([...DEMO_SESSIONS]));
    } else if (hasStaleDemoSessions) {
        const demoDateMap = Object.fromEntries(DEMO_SESSIONS.map(s => [s.id, s.date]));
        const refreshed = sessions.map(s => demoIds.has(s.id) ? { ...s, date: demoDateMap[s.id] } : s);
        localStorage.setItem('sb_sessions', JSON.stringify(refreshed));
    }
}
initDemoData();

// ===== Validation =====
const ALLOWED_DOMAINS = ['bzz.ch'];
function isValidSchoolEmail(email) {
    if (!email || !email.includes('@')) return false;
    return ALLOWED_DOMAINS.includes(email.split('@')[1]?.toLowerCase());
}
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = ((hash << 5) - hash) + password.charCodeAt(i);
        hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(36);
}

// ===== Toast =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== Screen Navigation =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ===== Login / Register =====
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const regError = document.getElementById('reg-error');

document.getElementById('show-register').addEventListener('click', (e) => {
    e.preventDefault(); loginForm.classList.add('hidden'); registerForm.classList.remove('hidden');
});
document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault(); registerForm.classList.add('hidden'); loginForm.classList.remove('hidden');
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-password-confirm').value;
    regError.classList.add('hidden');

    if (!isValidSchoolEmail(email)) { regError.textContent = 'Nur Schul-E-Mail-Adressen (@bzz.ch) sind erlaubt.'; regError.classList.remove('hidden'); return; }
    if (password.length < 6) { regError.textContent = 'Passwort muss mindestens 6 Zeichen lang sein.'; regError.classList.remove('hidden'); return; }
    if (password !== confirm) { regError.textContent = 'Passwörter stimmen nicht überein.'; regError.classList.remove('hidden'); return; }

    const users = Storage.getUsers();
    if (users[email]) { regError.textContent = 'Diese E-Mail ist bereits registriert.'; regError.classList.remove('hidden'); return; }

    users[email] = { passwordHash: hashPassword(password), profile: null };
    Storage.saveUsers(users);
    Storage.setCurrentUser(email);

    // Seed demo users to "like" new user for matches
    const swiped = JSON.parse(localStorage.getItem('sb_swiped') || '{}');
    for (const demo of DEMO_PROFILES) {
        if (!swiped[demo.email]) swiped[demo.email] = {};
        if (Math.random() > 0.5) swiped[demo.email][email] = 'right';
    }
    localStorage.setItem('sb_swiped', JSON.stringify(swiped));

    showToast('Konto erstellt! Bitte erstelle dein Profil.', 'success');
    enterApp(email);
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    loginError.classList.add('hidden');

    if (!isValidSchoolEmail(email)) { loginError.textContent = 'Nur Schul-E-Mail-Adressen (@bzz.ch) sind erlaubt.'; loginError.classList.remove('hidden'); return; }
    const users = Storage.getUsers();
    if (!users[email]) { loginError.textContent = 'Kein Konto mit dieser E-Mail gefunden.'; loginError.classList.remove('hidden'); return; }
    if (users[email].passwordHash !== hashPassword(password)) { loginError.textContent = 'Falsches Passwort.'; loginError.classList.remove('hidden'); return; }

    Storage.setCurrentUser(email);
    showToast('Willkommen zurück!', 'success');
    enterApp(email);
});

function enterApp(email) {
    const profile = Storage.getUserProfile(email);
    if (profile) { showDashboard(email, profile); } else { showProfileSetup(email); }
}

// ===== Logout =====
document.getElementById('logout-btn').addEventListener('click', logout);
document.getElementById('dash-logout-btn').addEventListener('click', logout);
function logout() { Storage.clearCurrentUser(); showScreen('login-screen'); showToast('Abgemeldet.', 'info'); }

// ===== Profile Setup =====
let currentStep = 1;
const selectedTimes = new Set();
const selectedPrefs = new Set();
const selectedSubjects = new Set();
const selectedSeeking = new Set();

function showProfileSetup(email) {
    showScreen('profile-screen');
    document.getElementById('user-email-display').textContent = email;
    currentStep = 1; updateStepUI();
}

document.querySelectorAll('.chip-group .chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
        const group = chip.closest('.chip-group');
        const value = chip.dataset.value;
        const set = group.id === 'time-chips' ? selectedTimes :
                    group.id === 'pref-chips' ? selectedPrefs :
                    group.id === 'subject-chips' ? selectedSubjects :
                    group.id === 'seeking-chips' ? selectedSeeking : null;
        if (set) { chip.classList.contains('selected') ? set.add(value) : set.delete(value); }
    });
});

document.getElementById('add-subject-btn').addEventListener('click', () => {
    const input = document.getElementById('custom-subject');
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    if (selectedSubjects.has(value)) { showToast('Fach bereits vorhanden.', 'error'); return; }
    selectedSubjects.add(value);
    const chip = document.createElement('button');
    chip.type = 'button'; chip.className = 'chip selected'; chip.dataset.value = value;
    chip.textContent = input.value.trim();
    chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
        chip.classList.contains('selected') ? selectedSubjects.add(value) : selectedSubjects.delete(value);
    });
    document.getElementById('subject-chips').appendChild(chip);
    input.value = '';
    showToast(`"${chip.textContent}" hinzugefügt.`, 'success');
});

document.getElementById('to-step-2').addEventListener('click', () => {
    const name = document.getElementById('profile-name').value.trim();
    const cls = document.getElementById('profile-class').value.trim();
    if (!name || !cls) { showToast('Bitte Name und Klasse ausfüllen.', 'error'); return; }
    goToStep(2);
});
document.getElementById('back-to-1').addEventListener('click', () => goToStep(1));
document.getElementById('to-step-3').addEventListener('click', () => {
    if (selectedSubjects.size === 0) { showToast('Bitte mindestens ein Fach auswählen.', 'error'); return; }
    goToStep(3);
});
document.getElementById('back-to-2').addEventListener('click', () => goToStep(2));
document.getElementById('save-profile').addEventListener('click', () => {
    const goals = document.getElementById('profile-goals').value.trim();
    if (!goals) { showToast('Bitte Lernziele eingeben.', 'error'); return; }
    saveProfile();
});

function goToStep(step) { currentStep = step; updateStepUI(); }
function updateStepUI() {
    document.querySelectorAll('.setup-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${currentStep}`).classList.add('active');
    document.querySelectorAll('.progress-step').forEach(ps => {
        const s = parseInt(ps.dataset.step);
        ps.classList.remove('active', 'completed');
        if (s === currentStep) ps.classList.add('active');
        else if (s < currentStep) ps.classList.add('completed');
    });
    document.querySelectorAll('.progress-line').forEach((line, i) => {
        line.classList.toggle('active', i < currentStep - 1);
    });
}

function saveProfile() {
    const email = Storage.getCurrentUser();
    const profile = {
        name: document.getElementById('profile-name').value.trim(),
        class: document.getElementById('profile-class').value.trim(),
        semester: document.getElementById('profile-semester').value,
        times: [...selectedTimes], preferences: [...selectedPrefs],
        subjects: [...selectedSubjects],
        interests: document.getElementById('profile-interests').value.trim(),
        goals: document.getElementById('profile-goals').value.trim(),
        seeking: [...selectedSeeking],
        bio: document.getElementById('profile-bio').value.trim(),
        createdAt: new Date().toISOString()
    };
    Storage.saveUserProfile(email, profile);
    showToast('Profil gespeichert!', 'success');
    showDashboard(email, profile);
}

// ===== Dashboard =====
function showDashboard(email, profile) {
    showScreen('dashboard-screen');
    document.getElementById('dash-user-email').textContent = email;

    // Stats
    document.getElementById('stat-subjects').textContent = profile.subjects.length;
    const goalCount = profile.goals ? profile.goals.split(',').map(g => g.trim()).filter(Boolean).length : 0;
    document.getElementById('stat-goals').textContent = goalCount || '-';
    document.getElementById('stat-matches').textContent = Storage.getMatches().length;

    const sessions = Storage.getSessions();
    const mySessions = sessions.filter(s => s.creator === email);
    document.getElementById('stat-sessions').textContent = mySessions.length;

    // Profile view
    document.getElementById('view-name').textContent = profile.name;
    document.getElementById('view-class').textContent = profile.class;
    document.getElementById('view-semester').textContent = profile.semester ? `${profile.semester}. Semester` : '';
    document.getElementById('view-bio').textContent = profile.bio || '';
    const initials = profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    document.getElementById('profile-avatar').textContent = initials;

    renderChipDisplay('view-subjects', profile.subjects);
    renderChipDisplay('view-seeking', profile.seeking);
    renderChipDisplay('view-times', profile.times);
    renderChipDisplay('view-prefs', profile.preferences);
    document.getElementById('view-interests').textContent = profile.interests || '-';
    document.getElementById('view-goals').textContent = profile.goals || '-';

    // Init features
    initSwipe();
    renderSessions();
}

function renderChipDisplay(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    if (!items || items.length === 0) {
        container.innerHTML = '<span style="color:var(--text-muted);font-size:14px">-</span>';
        return;
    }
    items.forEach(item => {
        const tag = document.createElement('span');
        tag.className = 'chip-tag';
        tag.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        container.appendChild(tag);
    });
}

// ===== Navigation Tabs =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
        window.scrollTo(0, 0);
    });
});

// Edit profile
document.getElementById('edit-profile-btn').addEventListener('click', () => {
    const email = Storage.getCurrentUser();
    const profile = Storage.getUserProfile(email);
    if (profile) {
        document.getElementById('profile-name').value = profile.name || '';
        document.getElementById('profile-class').value = profile.class || '';
        document.getElementById('profile-semester').value = profile.semester || '';
        document.getElementById('profile-interests').value = profile.interests || '';
        document.getElementById('profile-goals').value = profile.goals || '';
        document.getElementById('profile-bio').value = profile.bio || '';

        selectedTimes.clear(); selectedPrefs.clear(); selectedSubjects.clear(); selectedSeeking.clear();
        profile.times?.forEach(t => selectedTimes.add(t));
        profile.preferences?.forEach(p => selectedPrefs.add(p));
        profile.subjects?.forEach(s => selectedSubjects.add(s));
        profile.seeking?.forEach(s => selectedSeeking.add(s));

        document.querySelectorAll('.chip-group .chip').forEach(chip => {
            const group = chip.closest('.chip-group').id;
            const val = chip.dataset.value;
            const set = group === 'time-chips' ? selectedTimes :
                        group === 'pref-chips' ? selectedPrefs :
                        group === 'subject-chips' ? selectedSubjects :
                        group === 'seeking-chips' ? selectedSeeking : null;
            if (set && set.has(val)) chip.classList.add('selected');
            else chip.classList.remove('selected');
        });
    }
    showProfileSetup(email);
});

// ===== Swipe / Discover (US 4) =====
let swipeProfiles = [];
let currentSwipeIndex = 0;

function getFilteredSwipeProfiles() {
    const currentUser = Storage.getCurrentUser();
    const users = Storage.getUsers();
    const filterSubject = document.getElementById('filter-subject').value;
    const filterTime = document.getElementById('filter-time').value;

    let profiles = [];
    for (const [email, data] of Object.entries(users)) {
        if (email === currentUser || !data.profile) continue;
        if (Storage.hasBeenSwiped(email)) continue;
        const p = data.profile;
        if (filterSubject && !p.subjects.includes(filterSubject)) continue;
        if (filterTime && !p.times.includes(filterTime)) continue;
        profiles.push({ email, ...p });
    }
    return profiles;
}

function initSwipe() {
    swipeProfiles = getFilteredSwipeProfiles();
    currentSwipeIndex = 0;
    renderSwipeStack();
}

function renderSwipeStack() {
    const stack = document.getElementById('swipe-stack');
    const empty = document.getElementById('swipe-empty');
    const noResults = document.getElementById('swipe-no-results');

    stack.innerHTML = '';
    empty.classList.add('hidden');
    noResults.classList.add('hidden');

    if (swipeProfiles.length === 0) {
        const filterSubject = document.getElementById('filter-subject').value;
        const filterTime = document.getElementById('filter-time').value;
        if (filterSubject || filterTime) {
            noResults.classList.remove('hidden');
        } else {
            empty.classList.remove('hidden');
        }
        return;
    }

    // Show top 2 cards (top card is last in DOM for z-index)
    const end = Math.min(currentSwipeIndex + 2, swipeProfiles.length);
    for (let i = end - 1; i >= currentSwipeIndex; i--) {
        const profile = swipeProfiles[i];
        const card = createSwipeCard(profile, i === currentSwipeIndex);
        stack.appendChild(card);
    }
}

function createSwipeCard(profile, isTop) {
    const card = document.createElement('div');
    card.className = 'swipe-card';
    if (!isTop) {
        card.style.transform = 'scale(0.95) translateY(10px)';
        card.style.opacity = '0.7';
        card.style.pointerEvents = 'none';
    }

    const initials = profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const subjectsHTML = profile.subjects.slice(0, 5).map(s =>
        `<span class="chip-tag">${s.charAt(0).toUpperCase() + s.slice(1)}</span>`
    ).join('');

    card.innerHTML = `
        <div class="swipe-indicator like">LIKE</div>
        <div class="swipe-indicator nope">NOPE</div>
        <div class="card-gradient"></div>
        <div class="card-avatar">${initials}</div>
        <div class="card-body">
            <div class="card-name">${profile.name}</div>
            <div class="card-meta">${profile.class} &middot; ${profile.semester ? profile.semester + '. Semester' : ''}</div>
            <div class="card-subjects">${subjectsHTML}</div>
            <div class="card-goals">${profile.goals}</div>
        </div>
    `;

    if (isTop) setupSwipeGesture(card, profile);
    return card;
}

function setupSwipeGesture(card, profile) {
    let startX = 0, currentX = 0, isDragging = false;
    const threshold = 100;

    function onStart(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        card.style.transition = 'none';
    }

    function onMove(e) {
        if (!isDragging) return;
        currentX = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - startX;
        const rotation = currentX * 0.08;
        card.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;

        const likeIndicator = card.querySelector('.swipe-indicator.like');
        const nopeIndicator = card.querySelector('.swipe-indicator.nope');
        likeIndicator.style.opacity = Math.max(0, currentX / threshold);
        nopeIndicator.style.opacity = Math.max(0, -currentX / threshold);
    }

    function onEnd() {
        if (!isDragging) return;
        isDragging = false;
        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        if (Math.abs(currentX) > threshold) {
            const direction = currentX > 0 ? 'right' : 'left';
            const flyX = currentX > 0 ? window.innerWidth : -window.innerWidth;
            card.style.transform = `translateX(${flyX}px) rotate(${currentX * 0.1}deg)`;
            card.style.opacity = '0';
            setTimeout(() => handleSwipe(profile, direction), 300);
        } else {
            card.style.transform = '';
            card.querySelector('.swipe-indicator.like').style.opacity = 0;
            card.querySelector('.swipe-indicator.nope').style.opacity = 0;
        }
        currentX = 0;
    }

    card.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    card.addEventListener('touchstart', onStart, { passive: true });
    card.addEventListener('touchmove', onMove, { passive: true });
    card.addEventListener('touchend', onEnd);
}

function handleSwipe(profile, direction) {
    Storage.saveSwiped(profile.email, direction);

    if (direction === 'right') {
        // Check for mutual match
        const swiped = JSON.parse(localStorage.getItem('sb_swiped') || '{}');
        const currentUser = Storage.getCurrentUser();
        if (swiped[profile.email]?.[currentUser] === 'right') {
            showMatchModal(profile.name, profile.email);
        }
    }

    currentSwipeIndex++;
    if (currentSwipeIndex >= swipeProfiles.length) {
        renderSwipeStack(); // Shows empty state
    } else {
        renderSwipeStack();
    }
    // Update match count
    document.getElementById('stat-matches').textContent = Storage.getMatches().length;
}

// Swipe buttons
document.getElementById('btn-reject').addEventListener('click', () => {
    if (currentSwipeIndex < swipeProfiles.length) {
        const card = document.querySelector('.swipe-card:last-child');
        if (card) {
            card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
            card.style.transform = 'translateX(-120%) rotate(-20deg)';
            card.style.opacity = '0';
            setTimeout(() => handleSwipe(swipeProfiles[currentSwipeIndex], 'left'), 400);
        }
    }
});
document.getElementById('btn-accept').addEventListener('click', () => {
    if (currentSwipeIndex < swipeProfiles.length) {
        const card = document.querySelector('.swipe-card:last-child');
        if (card) {
            card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
            card.style.transform = 'translateX(120%) rotate(20deg)';
            card.style.opacity = '0';
            setTimeout(() => handleSwipe(swipeProfiles[currentSwipeIndex], 'right'), 400);
        }
    }
});

// Match Modal
function showMatchModal(name, email) {
    lastMatchEmail = email || null;
    const modal = document.getElementById('match-modal');
    modal.querySelector('#match-text strong').textContent = name;
    modal.classList.remove('hidden');
}
document.getElementById('match-close').addEventListener('click', () => {
    document.getElementById('match-modal').classList.add('hidden');
});

// ===== Discover Filters (US 5) =====
document.getElementById('filter-subject').addEventListener('change', () => initSwipe());
document.getElementById('filter-time').addEventListener('change', () => initSwipe());
document.getElementById('reset-discover-filters').addEventListener('click', () => {
    document.getElementById('filter-subject').value = '';
    document.getElementById('filter-time').value = '';
    initSwipe();
    showToast('Filter zurückgesetzt.', 'info');
});

// ===== Sessions (US 6 & US 7) =====
function renderSessions() {
    const sessions = Storage.getSessions();
    const filterSubject = document.getElementById('session-filter-subject').value;
    const filterDate = document.getElementById('session-filter-date').value;
    const today = new Date().toISOString().split('T')[0];
    const currentUser = Storage.getCurrentUser();

    // Filter: future sessions only, + subject/date filters
    let filtered = sessions.filter(s => s.date >= today);
    if (filterSubject) filtered = filtered.filter(s => s.subject === filterSubject);
    if (filterDate) filtered = filtered.filter(s => s.date === filterDate);

    // Sort by date
    filtered.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

    const list = document.getElementById('sessions-list');
    const empty = document.getElementById('sessions-empty');

    list.innerHTML = '';

    if (filtered.length === 0) {
        empty.classList.remove('hidden');
        return;
    }
    empty.classList.add('hidden');

    const users = Storage.getUsers();
    const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

    filtered.forEach(session => {
        const d = new Date(session.date);
        const creatorProfile = users[session.creator]?.profile;
        const creatorName = creatorProfile?.name || session.creator;

        const card = document.createElement('div');
        card.className = 'session-card';
        card.innerHTML = `
            <div class="session-date-badge">
                <div class="session-day">${d.getDate()}</div>
                <div class="session-month">${months[d.getMonth()]}</div>
            </div>
            <div class="session-info">
                <div class="session-title">${capitalize(session.subject)}${session.topic ? ': ' + session.topic : ''}</div>
                <div class="session-meta">
                    <span>${session.time} Uhr</span>
                    <span>${creatorName}</span>
                    ${session.creator === currentUser ? '<span style="color:var(--primary);font-weight:600">Deine Session</span>' : ''}
                </div>
            </div>
        `;
        card.addEventListener('click', () => openSessionDetail(session));
        list.appendChild(card);
    });
}

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

function openSessionDetail(session) {
    const users = Storage.getUsers();
    const creatorProfile = users[session.creator]?.profile;
    const currentUser = Storage.getCurrentUser();
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const d = new Date(session.date);

    document.getElementById('detail-subject').textContent = capitalize(session.subject);
    document.getElementById('detail-topic').textContent = session.topic || '-';
    document.getElementById('detail-date').textContent = `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
    document.getElementById('detail-time').textContent = session.time + ' Uhr';
    document.getElementById('detail-creator').textContent = creatorProfile?.name || session.creator;
    document.getElementById('detail-desc').textContent = session.description || 'Keine Beschreibung vorhanden.';

    const actions = document.getElementById('detail-actions');
    actions.innerHTML = '';

    if (session.creator === currentUser) {
        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-outline btn-sm';
        editBtn.textContent = 'Bearbeiten';
        editBtn.addEventListener('click', () => {
            document.getElementById('session-detail-modal').classList.add('hidden');
            openEditSession(session);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Löschen';
        deleteBtn.addEventListener('click', () => {
            Storage.deleteSession(session.id);
            document.getElementById('session-detail-modal').classList.add('hidden');
            renderSessions();
            updateSessionStat();
            showToast('Session gelöscht.', 'info');
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
    }

    document.getElementById('session-detail-modal').classList.remove('hidden');
}

document.getElementById('detail-close').addEventListener('click', () => {
    document.getElementById('session-detail-modal').classList.add('hidden');
});

// Session Create / Edit Modal
document.getElementById('create-session-btn').addEventListener('click', () => {
    document.getElementById('session-form').reset();
    document.getElementById('session-edit-id').value = '';
    document.getElementById('session-modal-title').textContent = 'Neue Lernsession';
    document.getElementById('session-submit-btn').textContent = 'Session erstellen';
    // Set min date to today
    document.getElementById('session-date').min = new Date().toISOString().split('T')[0];
    document.getElementById('session-modal').classList.remove('hidden');
});

function openEditSession(session) {
    document.getElementById('session-subject').value = session.subject;
    document.getElementById('session-topic').value = session.topic || '';
    document.getElementById('session-date').value = session.date;
    document.getElementById('session-time').value = session.time;
    document.getElementById('session-desc').value = session.description || '';
    document.getElementById('session-edit-id').value = session.id;
    document.getElementById('session-modal-title').textContent = 'Session bearbeiten';
    document.getElementById('session-submit-btn').textContent = 'Änderungen speichern';
    document.getElementById('session-date').min = new Date().toISOString().split('T')[0];
    document.getElementById('session-modal').classList.remove('hidden');
}

document.getElementById('session-modal-close').addEventListener('click', closeSessionModal);
document.getElementById('session-cancel').addEventListener('click', closeSessionModal);
function closeSessionModal() { document.getElementById('session-modal').classList.add('hidden'); }

document.getElementById('session-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('session-edit-id').value;
    const data = {
        subject: document.getElementById('session-subject').value,
        topic: document.getElementById('session-topic').value.trim(),
        date: document.getElementById('session-date').value,
        time: document.getElementById('session-time').value,
        description: document.getElementById('session-desc').value.trim()
    };

    if (editId) {
        // Update existing
        Storage.updateSession(editId, data);
        showToast('Session aktualisiert!', 'success');
    } else {
        // Create new
        data.id = 's_' + Date.now();
        data.creator = Storage.getCurrentUser();
        Storage.addSession(data);
        showToast('Lernsession erstellt!', 'success');
    }

    closeSessionModal();
    renderSessions();
    updateSessionStat();
});

function updateSessionStat() {
    const sessions = Storage.getSessions();
    const currentUser = Storage.getCurrentUser();
    document.getElementById('stat-sessions').textContent = sessions.filter(s => s.creator === currentUser).length;
}

// Session Filters (US 5)
document.getElementById('session-filter-subject').addEventListener('change', renderSessions);
document.getElementById('session-filter-date').addEventListener('change', renderSessions);
document.getElementById('reset-session-filters').addEventListener('click', () => {
    document.getElementById('session-filter-subject').value = '';
    document.getElementById('session-filter-date').value = '';
    renderSessions();
    showToast('Filter zurückgesetzt.', 'info');
});

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.add('hidden');
    });
});

// ===== Auto-login on page load =====
(function init() {
    const email = Storage.getCurrentUser();
    if (email) {
        const users = Storage.getUsers();
        if (users[email]) {
            const profile = Storage.getUserProfile(email);
            if (profile) { showDashboard(email, profile); } else { showProfileSetup(email); }
            return;
        }
    }
    showScreen('login-screen');
})();

// ============================================================
// CHAT — US8 (Chat), US9 (Textvorschläge), US10 (Sprachnachricht)
// Chatpartner = gegenseitige Matches (Storage.getMatches()).
// Speicherung in localStorage (sb_chats), passend zur Storage-Schicht.
// ============================================================

// ----- Chat-Datenspeicher -----
const ChatStore = {
    convId(a, b) { return [a, b].sort().join('|'); },
    getAll() { return JSON.parse(localStorage.getItem('sb_chats') || '{}'); },
    saveAll(chats) {
        try { localStorage.setItem('sb_chats', JSON.stringify(chats)); }
        catch (e) { showToast('Speicher voll – Sprachnachricht evtl. zu lang.', 'error'); }
    },
    get(otherEmail) {
        const id = this.convId(Storage.getCurrentUser(), otherEmail);
        return this.getAll()[id] || { participants: [Storage.getCurrentUser(), otherEmail], messages: [] };
    },
    addMessage(otherEmail, msg) {
        const me = Storage.getCurrentUser();
        const all = this.getAll();
        const id = this.convId(me, otherEmail);
        if (!all[id]) all[id] = { participants: [me, otherEmail], messages: [] };
        all[id].messages.push(msg);
        this.saveAll(all);
    },
    lastMessage(otherEmail) {
        const msgs = this.get(otherEmail).messages;
        return msgs[msgs.length - 1] || null;
    }
};

// ----- Helfer -----
let activeChatEmail = null;
let lastMatchEmail = null;

function initialsOf(name) { return (name || '?').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2); }
function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function formatTime(ts) { return new Date(ts).toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' }); }
function formatDuration(sec) { return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); }
function formatDay(ts) {
    const startOf = x => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
    const diff = (startOf(new Date()) - startOf(new Date(ts))) / 86400000;
    if (diff === 0) return 'Heute';
    if (diff === 1) return 'Gestern';
    return new Date(ts).toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
function getSharedSubject(profile) {
    const me = Storage.getUserProfile(Storage.getCurrentUser());
    if (!me || !profile) return null;
    const mine = new Set(me.subjects || []);
    return (profile.subjects || []).find(s => mine.has(s)) || null;
}

// ----- Ansicht wechseln -----
function showChatListView() {
    document.getElementById('chat-list-view').classList.remove('hidden');
    document.getElementById('chat-conversation-view').classList.add('hidden');
}
function showChatConversationView() {
    document.getElementById('chat-list-view').classList.add('hidden');
    document.getElementById('chat-conversation-view').classList.remove('hidden');
}

// ----- US8: Konversationsliste -----
function renderChatList() {
    showChatListView();
    const matches = Storage.getMatches();
    const users = Storage.getUsers();
    const container = document.getElementById('chat-conversations');
    const empty = document.getElementById('chat-empty');
    container.innerHTML = '';

    if (matches.length === 0) { empty.classList.remove('hidden'); return; }
    empty.classList.add('hidden');

    matches
        .map(email => ({ email, profile: users[email]?.profile, last: ChatStore.lastMessage(email) }))
        .sort((a, b) => (b.last?.ts || 0) - (a.last?.ts || 0))
        .forEach(({ email, profile, last }) => {
            const name = profile?.name || email;
            const preview = last
                ? (last.type === 'voice' ? '🎤 Sprachnachricht' : last.text)
                : 'Sag Hallo 👋';
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'chat-conv-item';
            item.innerHTML =
                `<div class="conv-avatar">${initialsOf(name)}</div>` +
                `<div class="conv-main">` +
                    `<div class="conv-name">${escapeHtml(name)}</div>` +
                    `<div class="conv-last">${escapeHtml(preview)}</div>` +
                `</div>` +
                (last ? `<div class="conv-time">${formatTime(last.ts)}</div>` : '');
            item.addEventListener('click', () => openConversation(email));
            container.appendChild(item);
        });
}

// ----- US8: Konversation öffnen -----
function openConversation(email) {
    activeChatEmail = email;
    const profile = Storage.getUserProfile(email);
    const name = profile?.name || email;
    document.getElementById('chat-conv-avatar').textContent = initialsOf(name);
    document.getElementById('chat-conv-name').textContent = name;
    document.getElementById('chat-conv-sub').textContent = profile
        ? [profile.class, profile.semester ? profile.semester + '. Semester' : ''].filter(Boolean).join(' · ')
        : '';

    seedOpeningMessage(email, profile);
    renderMessages(email);
    renderSuggestions(email, profile);
    document.getElementById('chat-input').value = '';
    showChatConversationView();
    setTimeout(() => document.getElementById('chat-input').focus(), 60);
}

// Erste Nachricht des Gegenübers, damit der Chat nicht leer startet (Demo)
function seedOpeningMessage(email, profile) {
    if (ChatStore.get(email).messages.length > 0) return;
    const shared = getSharedSubject(profile);
    const openers = [
        'Hey! Cool, dass es gematcht hat 😊',
        shared ? `Hi! Du lernst auch ${capitalize(shared)}? Wollen wir uns zusammentun?` : 'Hi! Schön, dich kennenzulernen.',
        'Hallo! Suchst du gerade eine Lerngruppe?'
    ];
    ChatStore.addMessage(email, {
        id: 'm_' + Date.now(), sender: email, type: 'text',
        text: openers[Math.floor(Math.random() * openers.length)], ts: Date.now() - 60000
    });
}

function renderMessages(email) {
    const me = Storage.getCurrentUser();
    const box = document.getElementById('chat-messages');
    box.innerHTML = '';
    let lastDay = '';
    ChatStore.get(email).messages.forEach(msg => {
        const day = formatDay(msg.ts);
        if (day !== lastDay) {
            lastDay = day;
            const d = document.createElement('div');
            d.className = 'chat-day'; d.textContent = day;
            box.appendChild(d);
        }
        const el = document.createElement('div');
        el.className = 'msg ' + (msg.sender === me ? 'me' : 'them');
        if (msg.type === 'voice') {
            el.innerHTML = voiceBubbleHTML(msg);
            box.appendChild(el);
            wireVoicePlayback(el, msg);
        } else {
            el.innerHTML = `${escapeHtml(msg.text)}<span class="msg-time">${formatTime(msg.ts)}</span>`;
            box.appendChild(el);
        }
    });
    box.scrollTop = box.scrollHeight;
}

// ----- US9: Textvorschläge -----
function renderSuggestions(email, profile) {
    const box = document.getElementById('chat-suggestions');
    box.innerHTML = '';
    const shared = getSharedSubject(profile);
    const suggestions = [
        'Hey! 👋',
        'Wann hast du Zeit zum Lernen?',
        'Sollen wir uns in der BZZ treffen?',
        'Lieber online oder vor Ort?'
    ];
    if (shared) suggestions.unshift(`Wollen wir zusammen ${capitalize(shared)} lernen?`);

    suggestions.slice(0, 5).forEach(text => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'suggestion-chip';
        chip.textContent = text;
        chip.addEventListener('click', () => {
            const input = document.getElementById('chat-input');
            input.value = text;
            input.focus();
        });
        box.appendChild(chip);
    });
}

// ----- Text senden -----
function sendChatText(text) {
    text = (text || '').trim();
    if (!text || !activeChatEmail) return;
    ChatStore.addMessage(activeChatEmail, {
        id: 'm_' + Date.now(), sender: Storage.getCurrentUser(), type: 'text', text, ts: Date.now()
    });
    document.getElementById('chat-input').value = '';
    renderMessages(activeChatEmail);
    scheduleAutoReply(activeChatEmail);
}

// Demo: Gegenüber antwortet automatisch (echtes 2-Wege-Chat bräuchte ein Backend)
function scheduleAutoReply(email) {
    const replies = [
        'Klingt gut! 👍', 'Ja gerne, wann passt es dir?', 'Top, machen wir!',
        'Cool, ich freu mich!', 'Sollen wir eine Lernsession erstellen?', 'Welches Thema möchtest du angehen?'
    ];
    setTimeout(() => {
        ChatStore.addMessage(email, {
            id: 'm_' + Date.now(), sender: email, type: 'text',
            text: replies[Math.floor(Math.random() * replies.length)], ts: Date.now()
        });
        if (activeChatEmail === email) renderMessages(email);
    }, 1200 + Math.random() * 800);
}

// ----- US10: Sprachnachricht (Aufnahme) -----
function voiceBubbleHTML(msg) {
    return `<div class="msg-voice">` +
        `<button class="voice-play" type="button" aria-label="Abspielen">&#x25B6;</button>` +
        `<div class="voice-wave">${waveBars(msg.id || 'v')}</div>` +
        `<span class="voice-dur">${formatDuration(msg.duration || 0)}</span>` +
        `</div><span class="msg-time">${formatTime(msg.ts)}</span>`;
}
function waveBars(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    let bars = '';
    for (let i = 0; i < 20; i++) { h = (h * 1103515245 + 12345) >>> 0; bars += `<span style="height:${4 + (h % 16)}px"></span>`; }
    return bars;
}
function wireVoicePlayback(el, msg) {
    const btn = el.querySelector('.voice-play');
    let audio = null;
    btn.addEventListener('click', () => {
        if (!audio) {
            audio = new Audio(msg.audio);
            audio.addEventListener('ended', () => { btn.innerHTML = '&#x25B6;'; });
        }
        if (audio.paused) { audio.play().catch(() => {}); btn.innerHTML = '&#x23F8;'; }
        else { audio.pause(); btn.innerHTML = '&#x25B6;'; }
    });
}

let mediaRecorder = null, recChunks = [], recStream = null, recStartTs = 0, recTimerInt = null;
const REC_MAX_SEC = 60;

function showRecordingUI(on) {
    document.getElementById('chat-recording').classList.toggle('hidden', !on);
    document.getElementById('chat-inputbar').classList.toggle('hidden', on);
    document.getElementById('chat-suggestions').classList.toggle('hidden', on);
}
function updateRecTimer() {
    const s = Math.floor((Date.now() - recStartTs) / 1000);
    document.getElementById('rec-timer').textContent = formatDuration(s);
    if (s >= REC_MAX_SEC) stopRecording(true);
}
async function startRecording() {
    if (!activeChatEmail) return;
    if (!navigator.mediaDevices || !window.MediaRecorder) {
        showToast('Sprachaufnahme wird von diesem Browser nicht unterstützt.', 'error'); return;
    }
    try { recStream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { showToast('Kein Mikrofonzugriff.', 'error'); return; }

    recChunks = [];
    mediaRecorder = new MediaRecorder(recStream);
    mediaRecorder.addEventListener('dataavailable', e => { if (e.data.size > 0) recChunks.push(e.data); });
    mediaRecorder.start();
    recStartTs = Date.now();
    showRecordingUI(true);
    document.getElementById('rec-timer').textContent = '0:00';
    recTimerInt = setInterval(updateRecTimer, 200);
}
function cleanupStream() {
    if (recStream) { recStream.getTracks().forEach(t => t.stop()); recStream = null; }
}
function stopRecording(send) {
    if (recTimerInt) { clearInterval(recTimerInt); recTimerInt = null; }
    const duration = Math.round((Date.now() - recStartTs) / 1000);
    showRecordingUI(false);
    const targetEmail = activeChatEmail;

    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.addEventListener('stop', () => {
            cleanupStream();
            if (!send) { recChunks = []; return; }
            const blob = new Blob(recChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
            if (blob.size === 0 || duration < 1) { showToast('Aufnahme zu kurz.', 'info'); return; }
            const reader = new FileReader();
            reader.onload = () => {
                ChatStore.addMessage(targetEmail, {
                    id: 'm_' + Date.now(), sender: Storage.getCurrentUser(),
                    type: 'voice', audio: reader.result, duration, ts: Date.now()
                });
                if (activeChatEmail === targetEmail) renderMessages(targetEmail);
                scheduleAutoReply(targetEmail);
            };
            reader.readAsDataURL(blob);
        }, { once: true });
        mediaRecorder.stop();
    } else {
        cleanupStream();
    }
}

// ----- Verdrahtung -----
function activateTab(tab) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tab));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.toggle('active', t.id === `tab-${tab}`));
    window.scrollTo(0, 0);
    if (tab === 'chat') renderChatList();
}

document.querySelector('.nav-link[data-tab="chat"]').addEventListener('click', () => renderChatList());
document.getElementById('open-chat-shortcut').addEventListener('click', () => activateTab('chat'));
document.getElementById('chat-back-btn').addEventListener('click', renderChatList);
document.getElementById('chat-send-btn').addEventListener('click', () => sendChatText(document.getElementById('chat-input').value));
document.getElementById('chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); sendChatText(e.target.value); }
});
document.getElementById('chat-mic-btn').addEventListener('click', startRecording);
document.getElementById('rec-cancel').addEventListener('click', () => stopRecording(false));
document.getElementById('rec-send').addEventListener('click', () => stopRecording(true));
document.getElementById('match-chat-btn').addEventListener('click', () => {
    document.getElementById('match-modal').classList.add('hidden');
    if (lastMatchEmail) { activateTab('chat'); openConversation(lastMatchEmail); }
});
