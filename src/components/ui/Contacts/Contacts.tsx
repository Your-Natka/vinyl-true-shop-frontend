import styles from "@/components/ui/Contacts/Contacts.module.css";
import Instagram from "@/../public/icons/instagram.svg";
import Phone from "@/../public/icons/phone.svg";
import Message from "@/../public/icons/message.svg";
import Image from "next/image";

const Contacts = ({}) => {
  return (
    <div className={styles.icons}>
      <a
            href="https://www.instagram.com/vinyl_true?igsh=Nnl2NDJuN2FkYmts"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className={styles.icon}
            />
      </a>
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
