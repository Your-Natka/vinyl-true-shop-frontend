import styles from "@/components/ui/Contacts/Contacts.module.css";
import Instagram from "@/../public/icons/instagram.svg";
import Phone from "@/../public/icons/phone.svg";
import Message from "@/../public/icons/message.svg";
import Image from "next/image";

const Contacts = ({}) => {
  return (
    <div className={styles.icons}>
      <button>
        <Image src={Instagram} alt="Instagram icon" />
      </button>
      <button>
        <Image src={Phone} alt="Phone icon" />
      </button>
      <button>
        <Image src={Message} alt="Message icon" />
      </button>
    </div>
  );
};

export default Contacts;
