'use client';

import { Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="flex-none py-6 border-t border-white/5 bg-transparent z-30">
            <div className="flex items-center justify-center gap-6 text-zinc-400">
                <span className="text-sm font-light">Made with <span className="text-red-500">♥</span> for GitHub</span>
                <div className="w-px h-4 bg-zinc-800" />
                <div className="flex gap-4">
                    <a href="https://github.com/anthonybenier/readme-icons" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
