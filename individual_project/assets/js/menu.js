(function () {
  const nav = document.getElementById('primary-nav');
  if (!nav) return;

  // grab the mobile toggle so we can open/close the whole menu on small screens
  const menuButton = document.getElementById('menu-button'); 

  // explicit reference to the top UL for focus + behavior decisions
  const topList = document.getElementById('primary-nav-list'); 

  const submenuParents = nav.querySelectorAll('li:has(> ul)');

  // small helper so we can consistently find the toggle control inside a submenu parent
  function getToggleForLi(li) { 
    return li.querySelector(':scope > button.submenu-toggle');
  }

  // keeps ARIA state in sync whenever we open/close a submenu
  function setExpanded(li, isExpanded) { 
    const toggle = getToggleForLi(li);
    if (toggle) toggle.setAttribute('aria-expanded', String(isExpanded));
  }

  // Changed: renamed for clarity because we now also have a separate "mobile menu open/close" state
  function closeAllSubmenus() { 
    submenuParents.forEach((li) => {
      li.classList.remove('is-open');
      setExpanded(li, false); // when we close a submenu, also set aria-expanded="false" so assistive tech is accurate
    });
  }

  function closeSiblings(currentLi) {
    const parentUl = currentLi.parentElement;

    Array.from(parentUl.children).forEach((sibling) => {
      if (sibling !== currentLi) {
        sibling.classList.remove('is-open');
        setExpanded(sibling, false); // sibling submenus must also update aria-expanded when they get closed
      }
    });
  }

  // explicit function keeps the "whole menu" state separate from submenu open/close state
  function openMobileMenu() { 
    nav.classList.add('is-menu-open');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'true'); // keep ARIA for the hamburger button in sync
  }

  // explicit close makes it easy to call from Escape/outside click/focus leave
  function closeMobileMenu() { 
    nav.classList.remove('is-menu-open');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false'); // keep ARIA for the hamburger button in sync
    closeAllSubmenus(); // when closing the whole menu, also collapse any open submenus
  }

  // tells us whether the toggle button is currently visible (simple, teachable mobile detection)
  function isMobileMenuMode() { 
    return menuButton && window.getComputedStyle(menuButton).display !== 'none';
  }

  // wire up the hamburger toggle only if it exists
  if (menuButton) { 
    menuButton.addEventListener('click', function () {
      const isOpen = nav.classList.contains('is-menu-open');
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });
  }

  submenuParents.forEach((li) => {
    const toggle = getToggleForLi(li); // Changed: submenu parents now use a button, so we target that button (not an <a>)

    // defensive guard in case markup changes and a submenu parent does not have the expected button
    if (!toggle) return; 

    toggle.addEventListener('click', function () {
      const isOpen = li.classList.contains('is-open');

      closeSiblings(li);

      li.classList.toggle('is-open', !isOpen);
      setExpanded(li, !isOpen); // whenever JS toggles the submenu, update aria-expanded to match
    });
  });

  // close menus when keyboard focus leaves the nav, so menus do not remain open while tabbing away
  nav.addEventListener('focusout', function (e) { 
    const next = e.relatedTarget;
    if (!next || !nav.contains(next)) { // only close if focus truly moved outside the nav (not just between items inside it)
      closeAllSubmenus();
      if (isMobileMenuMode()) closeMobileMenu(); // on small screens, leaving the nav should collapse the entire menu too
    }
  });

  // used by arrow-key navigation to jump into a submenu in a predictable way
  function getFirstFocusable(ul) { 
    return ul.querySelector('a, button');
  }

  // helps map any focused element back to the <li> that contains it
  function getParentLi(el) { 
    return el.closest('li');
  }

  // used to limit arrow-key moves to the current menu level (top-level UL or a submenu UL)
  function getContainingUl(el) { 
    return el.closest('ul');
  }

  // returns the focusable controls at one menu level, in DOM order
  function getFocusableItemsInUl(ul) { 
    return Array.from(ul.querySelectorAll(':scope > li > a, :scope > li > button'));
  }

  // moves focus up/down within the current menu level (submenu or top-level)
  function focusNextInUl(currentEl, direction) { 
    const ul = getContainingUl(currentEl);
    if (!ul) return;

    const items = getFocusableItemsInUl(ul);
    const index = items.indexOf(currentEl);
    if (index === -1) return;

    const nextIndex = index + direction;
    if (nextIndex >= 0 && nextIndex < items.length) {
      items[nextIndex].focus();
    }
  }

  // moves left/right across top-level items
  function focusSiblingTopLevel(currentEl, direction) { 
    const topUl = topList;
    if (!topUl) return;

    const currentLi = getParentLi(currentEl);
    if (!currentLi) return;

    const topLis = Array.from(topUl.children);
    const idx = topLis.indexOf(currentLi);
    if (idx === -1) return;

    const nextIdx = idx + direction;
    if (nextIdx < 0 || nextIdx >= topLis.length) return;

    const nextFocusable = topLis[nextIdx].querySelector(':scope > a, :scope > button');
    if (nextFocusable) nextFocusable.focus();
  }

  // arrow-key navigation so the menu behaves like users expect in desktop UI
  nav.addEventListener('keydown', function (e) { 
    const active = document.activeElement;
    if (!active || !nav.contains(active)) return;

    if (e.key === 'Escape') { // Changed: handle Escape here too so it works even when focus is inside a submenu
      e.preventDefault();
      closeAllSubmenus();
      if (isMobileMenuMode()) closeMobileMenu();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      const li = getParentLi(active);
      const directSubmenu = li ? li.querySelector(':scope > ul') : null;

      if (active.matches('button.submenu-toggle') && directSubmenu) { // ArrowDown on a toggle opens submenu and moves into it
        li.classList.add('is-open');
        setExpanded(li, true);
        const first = getFirstFocusable(directSubmenu);
        if (first) first.focus();
        return;
      }

      focusNextInUl(active, 1); // otherwise ArrowDown moves to the next item at the current level
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusNextInUl(active, -1); // ArrowUp moves to the previous item at the current level
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (getContainingUl(active) === topList) { // right arrow on the top row moves to the next top-level item
        focusSiblingTopLevel(active, 1);
      } else if (active.matches('button.submenu-toggle')) { // right arrow on a submenu toggle opens it and enters its submenu
        const li = getParentLi(active);
        const sub = li ? li.querySelector(':scope > ul') : null;
        if (li && sub) {
          li.classList.add('is-open');
          setExpanded(li, true);
          const first = getFirstFocusable(sub);
          if (first) first.focus();
        }
      }
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();

      const ul = getContainingUl(active);
      if (!ul) return;

      if (ul === topList) { // left arrow on the top row moves to the previous top-level item
        focusSiblingTopLevel(active, -1);
        return;
      }

      const parentLi = ul.closest('li'); // if we are in a submenu, ArrowLeft returns focus to the toggle that owns it
      const parentToggle = parentLi ? getToggleForLi(parentLi) : null;
      if (parentToggle) parentToggle.focus();
      return;
    }

    // Home jumps to the first item in the current menu level
    if (e.key === 'Home') { 
      const ul = getContainingUl(active);
      if (!ul) return;
      const items = getFocusableItemsInUl(ul);
      if (items[0]) {
        e.preventDefault();
        items[0].focus();
      }
      return;
    }

    // End jumps to the last item in the current menu level
    if (e.key === 'End') { 
      const ul = getContainingUl(active);
      if (!ul) return;
      const items = getFocusableItemsInUl(ul);
      const last = items[items.length - 1];
      if (last) {
        e.preventDefault();
        last.focus();
      }
      return;
    }
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      closeAllSubmenus();
      if (isMobileMenuMode()) closeMobileMenu(); // on small screens, clicking outside should also collapse the entire menu
    }
  });

  // when switching between mobile and desktop widths, reset state so the menu does not get stuck half-open
  window.addEventListener('resize', function () { 
    if (!isMobileMenuMode()) {
      nav.classList.remove('is-menu-open'); // if we are back to desktop layout, the hamburger-open state should not apply
      if (menuButton) menuButton.setAttribute('aria-expanded', 'false'); // keep ARIA state consistent after a resize
    }
  });
})();
