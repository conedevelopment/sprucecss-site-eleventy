(() => {
  const ide = document.querySelector('[data-ide]');

  if (!ide) return;

  const files = [...ide.querySelectorAll('[data-ide-file]')];
  const panels = [...ide.querySelectorAll('[data-ide-panel]')];
  const title = ide.querySelector('[data-ide-title]');
  const description = ide.querySelector('[data-ide-description]');
  const link = ide.querySelector('[data-ide-link]');
  const linkText = ide.querySelector('[data-ide-link-text]');
  const toggle = ide.querySelector('[data-ide-toggle]');
  const sidebar = ide.querySelector('[data-ide-sidebar]');
  const copy = ide.querySelector('[data-ide-copy]');
  const copyLabel = ide.querySelector('[data-ide-copy-label]');
  let activePanel = panels[0];

  const setSidebar = (open) => {
    sidebar.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Hide the project files' : 'Show the project files');
  };

  const show = (path) => {
    files.forEach((file) => {
      if (file.dataset.ideFile === path) {
        file.setAttribute('aria-current', 'true');
      } else {
        file.removeAttribute('aria-current');
      }
    });
    panels.forEach((panel) => { panel.hidden = panel.dataset.idePanel !== path; });
    activePanel = panels.find((panel) => panel.dataset.idePanel === path);

    title.textContent = path;
    description.textContent = activePanel.dataset.description;
    link.href = activePanel.dataset.link;
    linkText.textContent = activePanel.dataset.linkText;
  };

  files.forEach((file) => {
    file.addEventListener('click', () => {
      show(file.dataset.ideFile);

      // On small screens, close the file list and continue in the editor.
      if (sidebar.classList.contains('is-open')) {
        setSidebar(false);
        toggle.focus();
      }
    });
  });

  // Arrow keys move between the files, like in an editor's file tree.
  ide.querySelector('.ide__sidebar-helper').addEventListener('keydown', (event) => {
    const index = files.indexOf(document.activeElement);

    if (index === -1) return;

    const next = { ArrowDown: index + 1, ArrowUp: index - 1, Home: 0, End: files.length - 1 }[event.key];

    if (next === undefined) return;

    event.preventDefault();
    files[(next + files.length) % files.length].focus();
  });

  toggle.addEventListener('click', () => setSidebar(!sidebar.classList.contains('is-open')));

  ide.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
      setSidebar(false);
      toggle.focus();
    }
  });

  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(activePanel.querySelector('code').textContent.trim());
      copyLabel.textContent = 'Copied';
    } catch {
      copyLabel.textContent = 'Copy failed';
    }

    setTimeout(() => { copyLabel.textContent = 'Copy'; }, 2000);
  });
})();
