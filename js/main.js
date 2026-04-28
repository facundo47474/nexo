import { initNavbar } from './modules/navbar.js';
import { initScrollReveals } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (window.lucide) {
        window.lucide.createIcons();
    } else {
        console.warn('Lucide icons library not loaded properly.');
    }

    // 2. Initialize UI Modules
    initNavbar();
    initScrollReveals();
});
