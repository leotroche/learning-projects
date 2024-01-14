import { i18n } from './i18n.js'

function switcherLang(langCode) {
  headerTitle.textContent = i18n[langCode].data.headerTitle
  mainText.textContent = i18n[langCode].data.mainText
  footerText.textContent = i18n[langCode].data.footerText
}

// get elements from DOM
const headerTitle = document.getElementById('header-title')
const mainText = document.getElementById('main-text')
const footerText = document.getElementById('footer-text')
const languageSelector = document.getElementById('language-selector')

const storedLang = window.localStorage.getItem('lang')
switcherLang(storedLang)

languageSelector.addEventListener('change', function () {
  const languageCode = languageSelector.value
  window.localStorage.setItem('lang', languageCode)
  switcherLang(languageCode)
})
