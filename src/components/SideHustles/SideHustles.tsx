import { useSideHustles } from "../../context/SideHustlesContext";
import { formatWithCommas } from "../../utils/formatNumber";
import useModal from "../../hooks/useModal";
import AddSideHustle from "../AddSideHustle/AddSideHustle";
import styles from "./SideHustles.module.css";

const SideHustles = () => {
  const { sideHustles } = useSideHustles();
  const { open, close, Modal } = useModal();

  return (
    <div className={styles.card}>
      <button className={styles.addButton} type="button" onClick={open}>
        add side hustle
      </button>
      {sideHustles.length > 0 && (
        <ul className={styles.list}>
          {sideHustles.map((hustle, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.name}>{hustle.name}</span>
              <span className={styles.income}>{formatWithCommas(hustle.income)}</span>
            </li>
          ))}
        </ul>
      )}
      <Modal>
        <AddSideHustle onAdd={close} />
      </Modal>
    </div>
  );
};

export default SideHustles;
