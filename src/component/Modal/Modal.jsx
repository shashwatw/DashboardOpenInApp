// components/Modal.js
import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onUserSignUp }) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [basicInputs, setBasicInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [socialInputs, setSocialInputs] = useState({
    twitter: "",
    facebook: "",
    linkedin: "",
  });
  const [userInfo, setUserInfo] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleBasicInputChange = (e) => {
    const { name, value } = e.target;
    setBasicInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSocialInputChange = (e) => {
    const { name, value } = e.target;
    setSocialInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserSignUp = () => {
    if (activeTab === "basic") {
      setActiveTab("social");
    } else {
      // Store user information in userInfo state
      onUserSignUp({
        name: basicInputs.name,
        email: basicInputs.email,
        password: basicInputs.password,
        twitter: socialInputs.twitter,
        facebook: socialInputs.facebook,
        linkedin: socialInputs.linkedin,
      });
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={onClose}>
              &times;
            </span>
            <h2>Create new user</h2>
            <br />

            <div className={styles.tabButtons}>
              <button
                className={activeTab === "basic" ? styles.activeTab : ""}
                onClick={() => handleTabChange("basic")}
              >
                Basic
              </button>
              <button
                className={activeTab === "social" ? styles.activeTab : ""}
                onClick={() => handleTabChange("social")}
              >
                Social
              </button>
            </div>

            {activeTab === "basic" && (
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={basicInputs.name}
                    onChange={handleBasicInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={basicInputs.email}
                    onChange={handleBasicInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={basicInputs.password}
                    onChange={handleBasicInputChange}
                    required
                  />
                </div>
              </form>
            )}

            {activeTab === "social" && (
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="twitter">Twitter:</label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    value={socialInputs.twitter}
                    onChange={handleSocialInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="facebook">Facebook:</label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    value={socialInputs.facebook}
                    onChange={handleSocialInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="linkedin">LinkedIn:</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    value={socialInputs.linkedin}
                    onChange={handleSocialInputChange}
                    required
                  />
                </div>
              </form>
            )}

            <button onClick={handleUserSignUp} className={styles.submit}>
              {activeTab === "basic" ? "Next" : "Done"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
