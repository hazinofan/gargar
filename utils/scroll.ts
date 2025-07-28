// utils/scroll.ts
export const scrollToSection = (id: string) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};