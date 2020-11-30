import React, { FC, useState } from 'react';
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './index.scss';

interface ISelectedValue {
  value: string;
  isSelect: boolean;
}
type InputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

const SearchDrugInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResultList, setSearchResultList] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<ISelectedValue>({
    value: '',
    isSelect: false
  });

  const handleSelectValue = (item: string): void => {
    setSelectValue({ value: item, isSelect: true });
    setSearchResultList([]);
  };

  const handleInputChange: InputChange = e => {
    console.log(e.type);
    const val = e.target.value;

    setInputValue(val);
    setSearchResultList([
      'fsfds',
      '法第三方法法师发的发方式法第三方士大夫生的方式方式士大夫',
      '发斯蒂芬斯蒂芬是',
      '盛世嫡妃',
      '防守打法'
    ]);
  };

  return (
    <div className={styles.inputWrap}>
      {selectValue.isSelect ? (
        <div className={styles.selectedValue}>
          <div className={styles.tag}>
            {selectValue.value}
            <div className={styles.clearInput} onClick={() => setSelectValue({ value: '', isSelect: false })}>
              <CloseCircleOutlined style={{ fontSize: '20px', color: '#fff' }} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.innerWrap}>
          <input onChange={handleInputChange} placeholder="输入关键词选择药物" value={inputValue} />
          <div className={styles.searchIcon}>
            <SearchOutlined style={{ fontSize: '22px', color: '#666' }} />
          </div>
          {inputValue && (
            <div
              className={styles.closeIcon}
              onClick={() => {
                setInputValue('');
                setSearchResultList([]);
              }}
            >
              <CloseCircleOutlined style={{ fontSize: '22px', color: '#666' }} />
            </div>
          )}
        </div>
      )}
      {searchResultList.length > 0 && (
        <div className={styles.inputResult}>
          {searchResultList.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => handleSelectValue(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDrugInput;
