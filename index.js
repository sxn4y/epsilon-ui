// Core utilities and styles
const { applyParallax } = require('./components/epsilon.js');

// Components
const { NavBar, NavItem } = require('./components/navbar/navbar.js');
const Button = require('./components/button/button.js').default;
const Card = require('./components/card/card.js').default;
const TextBox = require('./components/textbox/textBox.js').default;
const SReveal = require('./components/scroll-reveal/sReveal.js').default;
const { ELayout, ESidebar, EContentbar } = require('./components/eLayout/eLayout.js');

module.exports = {
  // Core utilities
  applyParallax,
  
  // Components
  NavBar,
  NavItem,
  Button,
  Card,
  TextBox,
  SReveal,
  ELayout,
  ESidebar,
  EContentbar
};
