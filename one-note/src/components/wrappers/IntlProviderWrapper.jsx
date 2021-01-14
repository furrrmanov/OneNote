import React from 'react'

import { IntlProvider } from 'react-intl'

import { englishDictionary } from '@/i18n/en'

export default function IntlProviderWrapper({ children }) {
  const dictionary = {
    en: englishDictionary,
  }

  return (
    <IntlProvider locale={'en'} messages={dictionary.en.messages}>
      {children}
    </IntlProvider>
  )
}
