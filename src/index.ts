const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true' ||
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

// Toggle dark mode
darkModeToggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark').toString());
});


// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Form submission
const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    form.reset();
});

// Project modal functionality
const modal = document.getElementById('projectModal');
const projectContent = document.getElementById('projectContent');

function openProject(projectId: string) {
    const template = document.getElementById(projectId);
    if (template && projectContent && modal) {
        projectContent.innerHTML = template.innerHTML;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeProject() {
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

if (modal) {
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProject();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProject();
    }
});

// Form submission handler
function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.assign({}, ...Array.from(formData.entries()));

    // For demo purposes, just show an alert
    alert('Message sent! \n\nName: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message);
    (event.target as HTMLFormElement).reset();
}
