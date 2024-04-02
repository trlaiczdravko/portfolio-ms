import style from "./ContactInfo.module.scss";

const ContactInfo = () => {
  return (
    <div className={style.container}>
      <a target="_blank" href="https://github.com/trlaiczdravko">
        <img className={style.image} src="./icons8-github-64.png" alt="git" />
      </a>
    </div>
  );
};

export default ContactInfo;
