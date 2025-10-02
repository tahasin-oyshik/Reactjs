import { useState } from 'react';
import style from './faq.module.css';

const FAQ = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className={style.faqCard}>
      <div className={style['faq-header']}>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? '-' : '+'}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default FAQ;
