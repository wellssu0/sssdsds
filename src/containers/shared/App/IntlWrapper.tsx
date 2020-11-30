import React, { useState } from 'react';
import intl from 'react-intl-universal';
import { find } from 'lodash';
import { ConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';

// import styles from './index.scss';
// import { setCookie } from '@utils/index';
import { useOnMount } from '@utils/hooks';
import { COOKIE_KEYS } from '@constants/index';
import PageLoading from '@components/PageLoading';
import { SUPPOER_LOCALES, LOCALES_KEYS, getLocaleLoader } from '@locales/loader';

interface IProps {}

const IntlWrapper: React.FC<IProps> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState('');
  const [antdLocaleData, setAntdLocaleData] = useState<Locale>(null);

  // 加载语言
  function loadLocales() {
    let targetLocale = intl.determineLocale({ cookieLocaleKey: COOKIE_KEYS.LANG }) as LOCALES_KEYS;

    // 如果没有此语言,设置默认语言为en_us
    if (!find(SUPPOER_LOCALES, { value: targetLocale })) {
      targetLocale = LOCALES_KEYS.ZH_CN;
    }

    // 设置语言
    getLocaleLoader(targetLocale).then(res => {
      intl.init({ currentLocale: targetLocale, locales: { [targetLocale]: res.localeData } }).then(() => {
        setCurrentLocale(targetLocale);
        setAntdLocaleData(res.antdLocaleData);
      });
    });
  }

  useOnMount(loadLocales);

  if (!currentLocale) {
    return <PageLoading />;
  }

  // 切换语言
  // function onSelectLocale(val: string) {
  //   setCookie(COOKIE_KEYS.LANG, val);
  //   location.reload(); // 切换语言后页面重新加载
  // }

  // 切换语言的下拉菜单
  // const selectLanguage = (
  //   <Select className={styles.intlSelect} onChange={onSelectLocale} value={currentLocale}>
  //     {SUPPOER_LOCALES.map(l => (
  //       <Select.Option key={l.value} value={l.value}>
  //         {l.name}
  //       </Select.Option>
  //     ))}
  //   </Select>
  // );
  return (
    <ConfigProvider locale={antdLocaleData}>
      <React.Fragment>
        {/* {selectLanguage} */}
        {children}
      </React.Fragment>
    </ConfigProvider>
  );
};

export default IntlWrapper;
