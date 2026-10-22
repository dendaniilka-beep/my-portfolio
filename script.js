// Находим кнопку переключения темы и корневой элемент страницы
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Проверяем, была ли сохранена тема ранее в браузере пользователя
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
    // Если тема сохранена, применяем её
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonIcon(savedTheme);
} else {
    // Если темы нет, проверяем системные настройки пользователя (темная/светлая тема ОС)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', defaultTheme);
    updateButtonIcon(defaultTheme);
}

// Вешаем событие клика на кнопку
themeToggleBtn.addEventListener('click', () => {
    // Получаем текущую активную тему
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // Определяем новую тему
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Переключаем атрибут темы на теге <html>
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Сохраняем выбор пользователя в LocalStorage, чтобы он не сбрасывался при перезагрузке
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Обновляем иконку кнопки
    updateButtonIcon(newTheme);
});

// Функция для динамического изменения иконки на кнопке
function updateButtonIcon(theme) {
    const iconSpan = themeToggleBtn.querySelector('.theme-icon');
    if (theme === 'dark') {
        iconSpan.textContent = '☀️'; // Если тема темная, показываем солнце для переключения на светлую
    } else {
        iconSpan.textContent = '🌙'; // Если тема светлая, показываем луну
    }
}
