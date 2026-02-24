import { ref, watch } from 'vue';

const isDarkMode = ref<boolean>(true);

function applyDocumentClass() {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  document.documentElement.classList.toggle('light', !isDarkMode.value);

  // Force white background for light theme to ensure entire app is white
  if (!isDarkMode.value) {
    document.documentElement.style.backgroundColor = '#eae0cdde';
  } else {
    document.documentElement.style.backgroundColor = '';
  }
}

export function initTheme(): void {
  if (typeof window === 'undefined') return;

  const saved = localStorage.getItem('theme');
  if (saved) {
    isDarkMode.value = saved === 'dark';
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode.value = prefersDark;
  }

  applyDocumentClass();

  // Listen to system preference changes only if user didn't save explicit preference
  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const savedPref = localStorage.getItem('theme');
      if (!savedPref) {
        isDarkMode.value = e.matches;
      }
    };
    // Modern browsers support addEventListener on MediaQueryList
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
    } else if ((mq as any).addListener) {
      (mq as any).addListener(handler);
    }
  } catch (err) {
    // ignore
  }
}

export function toggleTheme(): void {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

watch(isDarkMode, () => {
  applyDocumentClass();
});

export function useTheme() {
  return {
    isDarkMode,
    toggleTheme,
  };
}
