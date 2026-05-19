// ===== Storage Layer =====
const Storage = {
    getUsers() {
        return JSON.parse(localStorage.getItem('sb_users') || '{}');
    },
    saveUsers(users) {
        localStorage.setItem('sb_users', JSON.stringify(users));
    },
    getCurrentUser() {
        return localStorage.getItem('sb_current_user');
    },
    setCurrentUser(email) {
        localStorage.setItem('sb_current_user', email);
    },
    clearCurrentUser() {
        localStorage.removeItem('sb_current_user');
    },
    getUserProfile(email) {
        const users = this.getUsers();
        return users[email]?.profile || null;
    },
    saveUserProfile(email, profile) {
        const users = this.getUsers();
        if (!users[email]) users[email] = {};
        users[email].profile = profile;
        this.saveUsers(users);
    }
};

// ===== Validation =====
const ALLOWED_DOMAINS = ['bzz.ch'];

function isValidSchoolEmail(email) {
    if (!email || !email.includes('@')) return false;
    const domain = email.split('@')[1]?.toLowerCase();
    return ALLOWED_DOMAINS.includes(domain);
}

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
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
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-password-confirm').value;

    regError.classList.add('hidden');

    if (!isValidSchoolEmail(email)) {
        regError.textContent = 'Nur Schul-E-Mail-Adressen (@bzz.ch) sind erlaubt.';
        regError.classList.remove('hidden');
        return;
    }

    if (password.length < 6) {
        regError.textContent = 'Passwort muss mindestens 6 Zeichen lang sein.';
        regError.classList.remove('hidden');
        return;
    }

    if (password !== confirm) {
        regError.textContent = 'Passwörter stimmen nicht überein.';
        regError.classList.remove('hidden');
        return;
    }

    const users = Storage.getUsers();
    if (users[email]) {
        regError.textContent = 'Diese E-Mail ist bereits registriert.';
        regError.classList.remove('hidden');
        return;
    }

    users[email] = { passwordHash: hashPassword(password), profile: null };
    Storage.saveUsers(users);
    Storage.setCurrentUser(email);

    showToast('Konto erstellt! Bitte erstelle dein Profil.', 'success');
    enterApp(email);
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    loginError.classList.add('hidden');

    if (!isValidSchoolEmail(email)) {
        loginError.textContent = 'Nur Schul-E-Mail-Adressen (@bzz.ch) sind erlaubt.';
        loginError.classList.remove('hidden');
        return;
    }

    const users = Storage.getUsers();
    if (!users[email]) {
        loginError.textContent = 'Kein Konto mit dieser E-Mail gefunden.';
        loginError.classList.remove('hidden');
        return;
    }

    if (users[email].passwordHash !== hashPassword(password)) {
        loginError.textContent = 'Falsches Passwort.';
        loginError.classList.remove('hidden');
        return;
    }

    Storage.setCurrentUser(email);
    showToast('Willkommen zurück!', 'success');
    enterApp(email);
});

function enterApp(email) {
    const profile = Storage.getUserProfile(email);
    if (profile) {
        showDashboard(email, profile);
    } else {
        showProfileSetup(email);
    }
}

// ===== Logout =====
document.getElementById('logout-btn').addEventListener('click', logout);
document.getElementById('dash-logout-btn').addEventListener('click', logout);

function logout() {
    Storage.clearCurrentUser();
    showScreen('login-screen');
    showToast('Abgemeldet.', 'info');
}

// ===== Profile Setup =====
let currentStep = 1;
const selectedTimes = new Set();
const selectedPrefs = new Set();
const selectedSubjects = new Set();
const selectedSeeking = new Set();

function showProfileSetup(email) {
    showScreen('profile-screen');
    document.getElementById('user-email-display').textContent = email;
    currentStep = 1;
    updateStepUI();
}

document.querySelectorAll('.chip-group .chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
        const group = chip.closest('.chip-group');
        const value = chip.dataset.value;

        if (group.id === 'time-chips') {
            chip.classList.contains('selected') ? selectedTimes.add(value) : selectedTimes.delete(value);
        } else if (group.id === 'pref-chips') {
            chip.classList.contains('selected') ? selectedPrefs.add(value) : selectedPrefs.delete(value);
        } else if (group.id === 'subject-chips') {
            chip.classList.contains('selected') ? selectedSubjects.add(value) : selectedSubjects.delete(value);
        } else if (group.id === 'seeking-chips') {
            chip.classList.contains('selected') ? selectedSeeking.add(value) : selectedSeeking.delete(value);
        }
    });
});

document.getElementById('add-subject-btn').addEventListener('click', () => {
    const input = document.getElementById('custom-subject');
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    if (selectedSubjects.has(value)) {
        showToast('Fach bereits vorhanden.', 'error');
        return;
    }
    selectedSubjects.add(value);
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip selected';
    chip.dataset.value = value;
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
    if (!name || !cls) {
        showToast('Bitte Name und Klasse ausfüllen.', 'error');
        return;
    }
    goToStep(2);
});

document.getElementById('back-to-1').addEventListener('click', () => goToStep(1));
document.getElementById('to-step-3').addEventListener('click', () => {
    if (selectedSubjects.size === 0) {
        showToast('Bitte mindestens ein Fach auswählen.', 'error');
        return;
    }
    goToStep(3);
});
document.getElementById('back-to-2').addEventListener('click', () => goToStep(2));

document.getElementById('save-profile').addEventListener('click', () => {
    const goals = document.getElementById('profile-goals').value.trim();
    if (!goals) {
        showToast('Bitte Lernziele eingeben.', 'error');
        return;
    }
    saveProfile();
});

function goToStep(step) {
    currentStep = step;
    updateStepUI();
}

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
        times: [...selectedTimes],
        preferences: [...selectedPrefs],
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

    document.getElementById('stat-subjects').textContent = profile.subjects.length;
    document.getElementById('stat-goals').textContent = profile.goals ? 'Gesetzt' : '-';

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

// Nav tabs
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
    });
});

// Edit profile button
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

        selectedTimes.clear();
        selectedPrefs.clear();
        selectedSubjects.clear();
        selectedSeeking.clear();

        profile.times?.forEach(t => selectedTimes.add(t));
        profile.preferences?.forEach(p => selectedPrefs.add(p));
        profile.subjects?.forEach(s => selectedSubjects.add(s));
        profile.seeking?.forEach(s => selectedSeeking.add(s));

        document.querySelectorAll('.chip-group .chip').forEach(chip => {
            const group = chip.closest('.chip-group').id;
            const val = chip.dataset.value;
            let set;
            if (group === 'time-chips') set = selectedTimes;
            else if (group === 'pref-chips') set = selectedPrefs;
            else if (group === 'subject-chips') set = selectedSubjects;
            else if (group === 'seeking-chips') set = selectedSeeking;
            if (set && set.has(val)) chip.classList.add('selected');
            else chip.classList.remove('selected');
        });
    }
    showProfileSetup(email);
});

// ===== Auto-login on page load =====
(function init() {
    const email = Storage.getCurrentUser();
    if (email) {
        const users = Storage.getUsers();
        if (users[email]) {
            const profile = Storage.getUserProfile(email);
            if (profile) {
                showDashboard(email, profile);
            } else {
                showProfileSetup(email);
            }
            return;
        }
    }
    showScreen('login-screen');
})();
