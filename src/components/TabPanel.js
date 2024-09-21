import { useState } from "react";
import styles from "./TabPanel.module.css";

export default function TabPanel({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0); // Keep track of the selected tab

  function handleClick(event, index) {
    setSelectedTab(index); // Update the selected tab index
  }

  const tabsPanel = tabs.map((tab, index) => (
    <a
      onClick={(event) => handleClick(event, index)}
      key={tab}
      className={selectedTab === index ? styles.selected : ""} // Apply selected class if index matches
    >
      {tab}
    </a>
  ));

  return <div className={styles.tabsContainer}>{tabsPanel}</div>;
}
